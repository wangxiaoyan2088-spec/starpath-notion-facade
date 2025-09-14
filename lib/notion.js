import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getStudents() {
  const resp = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  return resp.results.map(p => ({
    id: p.id,
    name: p.properties.Name?.title?.[0]?.plain_text || "",
    email: p.properties.Email?.email || "",
    role: p.properties.Role?.select?.name || "",
    notes: (p.properties.Notes?.rich_text || []).map(t=>t.plain_text).join(""),
    files: (p.properties.File?.files || []).map(f => f.type==="file" ? f.file.url : f.external?.url),
  }));
}
