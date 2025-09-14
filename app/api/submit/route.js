import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { notion } from '../../../lib/notion';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const form = await req.formData();
    const name = (form.get('name')||'').toString().trim();
    const email = (form.get('email')||'').toString().trim();
    const role = (form.get('role')||'Student').toString().trim();
    const notes = (form.get('notes')||'').toString();

    if (!name || !email) {
      return NextResponse.json({ error: '缺少姓名或邮箱' }, { status: 400 });
    }

    let fileUrl = null;
    const file = form.get('file');
    if (file && typeof file === 'object' && file.name) {
      const arrayBuffer = await file.arrayBuffer();
      const blob = await put(`uploads/${Date.now()}-${file.name}`, new Blob([arrayBuffer]), {
        access: 'public',
        token: process.env.BLOB_READ_WRITE_TOKEN
      });
      fileUrl = blob.url;
    }

    // Create Notion page
    const page = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: { title: [{ type: 'text', text: { content: name } }] },
        Email: { email },
        Role: { select: { name: role } },
        Notes: { rich_text: notes ? [{ type: 'text', text: { content: notes } }] : [] },
        File: fileUrl ? { files: [{ name: 'upload', external: { url: fileUrl } }] } : { files: [] }
      }
    });

    return NextResponse.json({ ok: true, pageId: page.id, fileUrl });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message || '服务器错误' }, { status: 500 });
  }
}
