import { Client } from "@notionhq/client";
import { DB_MAP } from "@/lib/dbs";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DB_ID = DB_MAP.xingtu;

export default async function XingtuPage() {
  // 1) 读取数据
  const resp = await notion.databases.query({ database_id: DB_ID, page_size: 50 });
  const rows = resp.results || [];

  // 2) 简单取几列（按你库的字段名改）
  const safeText = (prop) =>
    prop?.rich_text?.map((t) => t.plain_text).join("") ||
    prop?.title?.map((t) => t.plain_text).join("") ||
    "";

  return (
    <main style={{ maxWidth: 1000, margin: "40px auto", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>星途英才 · 数据表</h1>
      <table width="100%" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>任务</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>状态</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>责任人</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>截止日期</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={4} style={{ padding: 12 }}>暂无数据</td></tr>
          ) : rows.map((r) => {
              const p = r.properties;
              const task = safeText(p["任务"]);
              const status = p["状态"]?.status?.name || "";
              const owners = (p["责任人"]?.people || []).map(u => u.name || u.person?.email).join("、");
              const due = p["截止日期"]?.date?.start || "";
              return (
                <tr key={r.id}>
                  <td style={{ border: "1px solid #eee", padding: 8 }}>{task}</td>
                  <td style={{ border: "1px solid #eee", padding: 8 }}>{status}</td>
                  <td style={{ border: "1px solid #eee", padding: 8 }}>{owners}</td>
                  <td style={{ border: "1px solid #eee", padding: 8 }}>{due}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </main>
  );
}
