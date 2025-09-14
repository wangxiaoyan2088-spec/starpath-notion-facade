// app/layout.jsx
export const metadata = {
  title: "优英 · 动态申请平台",
  description: "StarPath Dynamic Application Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
