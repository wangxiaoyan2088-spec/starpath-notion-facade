export const metadata = { title: "StarPath · Portal", description: "Students & Teachers Portal" };
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body style={{margin:0, fontFamily:'system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,"Microsoft YaHei",sans-serif', background:'#0c1026', color:'#eef1ff'}}>
        {children}
      </body>
    </html>
  );
}
