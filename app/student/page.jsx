"use client";
import { useEffect, useState } from "react";

export default function StudentPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("/api/students")
      .then((r) => r.json())
      .then((res) => {
        if (res.ok) setRows(res.data);
        else setErr(res.error || "加载失败");
      })
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 12 }}>学生列表（来自 Notion）</h1>
      {loading && <p>加载中…</p>}
      {err && <p style={{ color: "tomato" }}>错误：{err}</p>}

      {!loading && !err && (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #334",
            }}
          >
            <thead>
              <tr>
                <Th>姓名</Th>
                <Th>Email</Th>
                <Th>角色</Th>
                <Th>备注</Th>
                <Th>文件</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <Td>{r.name}</Td>
                  <Td>{r.email}</Td>
                  <Td>{r.role}</Td>
                  <Td>{r.notes}</Td>
                  <Td>
                    {r.files && r.files.length > 0 ? (
                      r.files.map((u, i) => (
                        <a key={i} href={u} target="_blank" rel="noreferrer">
                          文件{i + 1}
                        </a>
                      ))
                    ) : (
                      <span style={{ opacity: 0.6 }}>无</span>
                    )}
                  </Td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <Td colSpan={5} style={{ textAlign: "center", opacity: 0.7 }}>
                    暂无数据
                  </Td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

// 简易表格样式组件
function Th({ children }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "10px 8px",
        borderBottom: "1px solid #334",
        background: "rgba(255,255,255,.04)",
      }}
    >
      {children}
    </th>
  );
}
function Td({ children, ...rest }) {
  return (
    <td
      {...rest}
      style={{
        padding: "10px 8px",
        borderBottom: "1px solid #2a2f45",
        verticalAlign: "top",
      }}
    >
      {children}
    </td>
  );
}
