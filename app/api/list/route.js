import { NextResponse } from 'next/server';
import { notion } from '../../../lib/notion';

export const runtime = 'nodejs';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get('key')||'';
    if (key !== process.env.ADMIN_KEY) {
      return NextResponse.json({ error: '无权访问' }, { status: 401 });
    }
    const res = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [{ timestamp: 'last_edited_time', direction: 'descending' }],
      page_size: 25
    });
    const results = res.results.map(p => {
      const props = p.properties;
      const get = (k) => props[k];
      const name = get('Name')?.title?.[0]?.plain_text || '—';
      const email = get('Email')?.email || '—';
      const role = get('Role')?.select?.name || '—';
      const notes = get('Notes')?.rich_text?.[0]?.plain_text || '';
      const file = (get('File')?.files?.[0]?.external?.url) || (get('File')?.files?.[0]?.file?.url) || null;
      return { id: p.id, name, email, role, notes, file };
    });
    return NextResponse.json({ results });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message || '服务器错误' }, { status: 500 });
  }
}
