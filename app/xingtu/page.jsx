// app/xingtu/page.jsx
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import { getData } from "@/lib/notion";

const getText = (prop) =>
  prop?.title?.map(t => t.plain_text).join("") ||
  prop?.rich_text?.map(t => t.plain_text).join("") || "";

export default async function XingtuPage() {
  const rows = await getData("xingtu");

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
          ) : rows.map(r => {
              const p = r.properties;
              const task   = getText(p["任务"]);
              const status = p["状态"]?.status?.name || "";
              const owners = (p["责任人"]?.people || []).map(u => u.name || u.person?.email).join("、");
              const due    = p["截止日期"]?.date?.start || "";
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
