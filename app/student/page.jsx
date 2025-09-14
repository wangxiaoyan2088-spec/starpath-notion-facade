'use client';
import { useState } from 'react';

export default function Student() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setMsg('');
    setLoading(true);
    const form = new FormData(e.currentTarget);
    if (file) form.set('file', file);
    const res = await fetch('/api/submit', { method:'POST', body: form });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setMsg('提交失败：' + (data.error || res.status));
    setMsg('提交成功！参考ID：' + data.pageId);
    e.currentTarget.reset(); setFile(null);
  }

  return (
    <main style={{minHeight:'100vh'}}>
      <header style={{padding:'12px 16px', borderBottom:'1px solid rgba(255,255,255,.15)', background:'#0f1430'}}>学生提交</header>
      <form onSubmit={onSubmit} style={{maxWidth:720, margin:'24px auto', display:'grid', gap:12}}>
        <input name="name" required placeholder="姓名 Name" style={inp}/>
        <input type="email" name="email" required placeholder="邮箱 Email" style={inp}/>
        <select name="role" defaultValue="Student" style={inp}>
          <option>Student</option>
        </select>
        <textarea name="notes" placeholder="备注 / 说明 Notes" rows={6} style={area}/>
        <input type="file" name="file" onChange={e=>setFile(e.target.files?.[0]||null)} style={inp}/>
        <button disabled={loading} style={btn}>{loading?'提交中…':'提交'}</button>
        {msg && <div style={{padding:12, background:'#13214f', borderRadius:12}}>{msg}</div>}
      </form>
    </main>
  );
}

const inp = { padding:'12px 14px', borderRadius:12, border:'1px solid rgba(255,255,255,.15)', background:'#0f1430', color:'#eef1ff' };
const area = { ...inp };
const btn = { ...inp, cursor:'pointer', background:'#4158ff', border:'none', fontWeight:700 };
