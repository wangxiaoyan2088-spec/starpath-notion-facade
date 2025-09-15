import { Client } from "@notionhq/client";
import { DB_MAP } from "./dbs";

// 初始化 Notion 客户端
const notion = new Client({ auth: process.env.NOTION_TOKEN });

// 封装：根据 key 读取数据库数据
export async function getData(key) {
  const databaseId = DB_MAP[key];
  if (!databaseId) throw new Error(`数据库映射中不存在 key: ${key}`);

  const resp = await notion.databases.query({
    database_id: databaseId,
    page_size: 50, // 这里可以调整分页大小
  });

  return resp.results || [];
}

export default notion;
