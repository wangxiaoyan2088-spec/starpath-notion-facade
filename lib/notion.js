// lib/notion.js
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// 读取一个数据库（从 NOTION_DATABASE_ID），并做成前端好用的结构
export async function getStudents() {
  const databaseId = process.env.NOTION_DATABASE_ID; // 你之前在 Vercel 填的
  if (!databaseId) throw new Error("Missing NOTION_DATABASE_ID");
  if (!process.env.NOTION_TOKEN) throw new Error("Missing NOTION_TOKEN");

  const resp = await notion.databases.query({
    database_id: databaseId,
    // 如需筛选/排序，在这里加 filter / sorts
  });

  // 按你表格列：Name(Title) / Email(Email) / Role(Select) / Notes(Rich text) / File(Files & media)
  return resp.results.map((page) => {
    const p = page.properties || {};
    const files = (p.File?.files || []).map((f) =>
      f.type === "file" ? f.file.url : f.external?.url
    );

    return {
      id: page.id,
      name: p.Name?.title?.[0]?.plain_text || "",
      email: p.Email?.email || "",
      role: p.Role?.select?.name || "",
      notes: p.Notes?.rich_text?.map((t) => t.plain_text).join("") || "",
      files,
    };
  });
}
