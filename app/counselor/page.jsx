export default function Counselor() {
  return (
    <main style={{minHeight:'100vh'}}>
      <header style={{padding:'12px 16px', borderBottom:'1px solid rgba(255,255,255,.15)', background:'#0f1430'}}>导员视图（示例）</header>
      <div style={{maxWidth:780, margin:'20px auto', opacity:.9}}>
        后续可基于 Notion 过滤视图或在本系统增加导员字段，实现“只看自己名下学生”。
      </div>
    </main>
  );
}
