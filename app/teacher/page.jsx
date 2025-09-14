'use client';
import { useEffect, useState } from 'react';

export default function Teacher() {
  const [items, setItems] = useState([]);
  const [key, setKey] = useState('');
  const [err, setErr] = useState('');

  async function load() {
    setErr('');
    const res = await fetch('/api/list?key='+encodeURIComponent(key));
    const data = await res.json();
    if (!res.ok) return setErr(data.error||'错误');
    setItems(data.results||[]);
  }

  return (
    <main style={{minHeight:'100vh'}}>
      <header style={{padding:'12px 16px', borderBottom:'1px solid rgba(255,255,255,.15)', background:'#0f1430'}}>老师总览</header>
      <div style={{maxWidth:900, margin:'20px auto'}}>
        <div style={{display:'flex', gap:8}}>
          <input placeholder="管理员密钥 ADMIN_KEY" value={key} onChange={e=>setKey(e.target.value)} style={inp} />
          <button onClick={load} style={btn}>拉取列表</button>
        </div>
        {err && <div style={{marginTop:12, padding:12, background:'#361414', borderRadius:12}}>{err}</div>}
        <div style={{marginTop:16, display:'grid', gap:12}}>
          {items.map(it => (
            <div key={it.id} style={{padding:16, borderRadius:12, background:'#11173b', border:'1px solid rgba(255,255,255,.1)'}}>
              <div style={{fontWeight:700}}>{it.name}</div>
              <div style={{opacity:.8}}>Email: {it.email || '—'} · Role: {it.role || '—'}</div>
              <div style={{marginTop:6, whiteSpace:'pre-wrap'}}>{it.notes || '无备注'}</div>
              {it.file && <div style={{marginTop:6}}><a href={it.file} target="_blank" rel="noreferrer">查看文件</a></div>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const inp = { padding:'10px 12px', borderRadius:10, border:'1px solid rgba(255,255,255,.15)', background:'#0f1430', color:'#eef1ff', flex:1 };
const btn = { ...inp, cursor:'pointer', background:'#4158ff', border:'none', fontWeight:700, flex:'none' };
