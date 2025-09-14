import Link from 'next/link';

const Card = ({ href, title, desc }) => (
  <Link href={href} style={{textDecoration:'none'}}>
    <div style={{padding:'20px', borderRadius:16, background:'#11173b', border:'1px solid rgba(255,255,255,.1)'}}>
      <div style={{fontSize:20, fontWeight:700, color:'#fff'}}>{title}</div>
      <div style={{opacity:.9, marginTop:6, color:'#cfd3ff'}}>{desc}</div>
    </div>
  </Link>
);

export default function Home() {
  return (
    <main style={{minHeight:'100vh'}}>
      <header style={{padding:'16px 20px', borderBottom:'1px solid rgba(255,255,255,.15)', background:'#0f1430'}}>
        星途英才 · 一体化门户
      </header>
      <section style={{maxWidth:920, margin:'40px auto', display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
        <Card href="/student" title="学生 Student" desc="上传资料 / 查看提交记录" />
        <Card href="/teacher" title="老师 Teacher" desc="查看学生提交（需密钥）" />
        <Card href="/counselor" title="导员 Counselor" desc="查看名下学生（示例页）" />
        <Card href="/boss" title="Boss" desc="系统配置（占位）" />
      </section>
    </main>
  );
}
