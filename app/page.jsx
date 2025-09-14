// app/page.jsx
export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <style>{`
        :root{--ink:#eef1ff; --muted:#aeb6da; --bg-top:#0f1430; --bg-bot:#0c1026; --stroke:rgba(255,255,255,.18)}
        *{box-sizing:border-box} html,body{height:100%}
        body{margin:0;color:var(--ink);font:16px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,"Microsoft YaHei",sans-serif;background:
          radial-gradient(1100px 520px at 12% -8%, rgba(160,140,255,.16), transparent 40%),
          radial-gradient(980px 480px at 88% 0%,   rgba(120,160,255,.14), transparent 45%),
          linear-gradient(180deg, var(--bg-top), var(--bg-bot)); overflow-x:hidden;}
        .fx,.fx::before,.fx::after{position:fixed;inset:0;pointer-events:none;content:"";z-index:0}
        .fx{mix-blend-mode:overlay;opacity:.24;background:
          repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 2px,rgba(0,0,0,.04) 2px 4px),
          repeating-linear-gradient(90deg,rgba(200,160,255,.04) 0 3px,rgba(0,0,0,.035) 3px 6px);
          animation:grain 10s steps(12) infinite}
        @keyframes grain{0%{transform:translate(0,0)}25%{transform:translate(-14px,9px)}50%{transform:translate(12px,-16px)}75%{transform:translate(-8px,12px)}100%{transform:translate(0,0)}}
        .fx::before{opacity:.85;background:
          radial-gradient(circle at 12% 18%, rgba(225,235,255,.95) 0 1.5px, transparent 2.5px),
          radial-gradient(circle at 22% 36%, rgba(195,215,255,.9)  0 1.8px, transparent 2.8px),
          radial-gradient(circle at 38% 12%, rgba(235,215,255,.95) 0 1.6px, transparent 2.6px),
          radial-gradient(circle at 55% 22%, rgba(190,220,255,.95) 0 1.5px, transparent 2.5px),
          radial-gradient(circle at 66% 8%,  rgba(225,195,255,.9)  0 1.8px, transparent 2.8px),
          radial-gradient(circle at 72% 35%, rgba(200,235,255,.95) 0 1.5px, transparent 2.5px),
          radial-gradient(circle at 82% 16%, rgba(235,210,255,.95) 0 1.6px, transparent 2.6px),
          radial-gradient(circle at 88% 44%, rgba(190,215,255,.95) 0 1.4px, transparent 2.4px),
          radial-gradient(circle at 10% 70%, rgba(215,225,255,.9)  0 1.5px, transparent 2.5px),
          radial-gradient(circle at 28% 78%, rgba(235,205,255,.95) 0 1.6px, transparent 2.6px),
          radial-gradient(circle at 60% 72%, rgba(195,215,255,.95) 0 1.5px, transparent 2.5px),
          radial-gradient(circle at 78% 82%, rgba(225,205,255,.95) 0 1.8px, transparent 2.8px);
          animation:twinkleA 14s ease-in-out infinite alternate}
        @keyframes twinkleA{0%{opacity:.35}50%{opacity:.75}100%{opacity:1;filter:blur(.25px)}}
        .fx::after{opacity:.7;background:
          radial-gradient(circle at 18% 26%, rgba(220,230,255,.9) 0 1.4px, transparent 2.4px),
          radial-gradient(circle at 34% 8%,  rgba(235,210,255,.95) 0 1.6px, transparent 2.6px),
          radial-gradient(circle at 48% 30%, rgba(190,215,255,.9) 0 1.4px, transparent 2.4px),
          radial-gradient(circle at 66% 18%, rgba(225,200,255,.95) 0 1.6px, transparent 2.6px),
          radial-gradient(circle at 82% 28%, rgba(200,235,255,.9) 0 1.4px, transparent 2.4px),
          radial-gradient(circle at 74% 74%, rgba(215,225,255,.95) 0 1.6px, transparent 2.6px),
          radial-gradient(circle at 14% 82%, rgba(235,205,255,.9) 0 1.4px, transparent 2.4px);
          animation:twinkleB 18s ease-in-out infinite alternate}
        @keyframes twinkleB{0%{opacity:.25}40%{opacity:.8}100%{opacity:.95}}
        .nebula{position:fixed;inset:0;pointer-events:none;z-index:0}
        .nebula::before,.nebula::after{content:"";position:absolute;inset:0;pointer-events:none}
        .nebula::before{background:
          radial-gradient(700px 340px at 18% 12%, rgba(120,160,255,.10), transparent 65%),
          radial-gradient(820px 360px at 82% 16%, rgba(170,140,255,.10), transparent 70%);
          animation:drift1 36s ease-in-out infinite alternate}
        .nebula::after{background:
          radial-gradient(540px 280px at 12% 68%, rgba(140,120,255,.07), transparent 70%),
          radial-gradient(620px 300px at 88% 72%, rgba(120,160,255,.06), transparent 75%);
          animation:drift2 48s ease-in-out infinite alternate}
        @keyframes drift1{from{transform:translateY(0)}to{transform:translateY(-18px)}}
        @keyframes drift2{from{transform:translateY(8px)}to{transform:translateY(-10px)}}
        .wrap{position:relative;z-index:1;max-width:1100px;margin:auto;padding:32px 20px 64px}
        header{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:22px}
        h1{margin:0;font-weight:750;font-size:clamp(22px,3vw,30px)}
        .nav{display:flex;gap:10px}
        .btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 14px;border-radius:14px;color:var(--ink);text-decoration:none;font-weight:600;background:
          linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04));
          border:1px solid var(--stroke);backdrop-filter:blur(10px);box-shadow:0 8px 22px rgba(0,0,0,.28), inset 0 -8px 18px rgba(0,0,0,.25);transition:transform .18s ease, box-shadow .18s ease}
        .btn:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(0,0,0,.36), 0 0 0 8px rgba(140,160,255,.10)}
        .muted{color:var(--muted);font-size:14px;margin:6px 2px 16px}
        .grid{display:grid;gap:18px;grid-template-columns:repeat(2,minmax(0,1fr))}
        @media (min-width:760px){.grid{grid-template-columns:repeat(3,1fr)}}
        @media (min-width:1100px){.grid{grid-template-columns:repeat(6,1fr)}}
        .bubble{position:relative;overflow:hidden;text-decoration:none;color:var(--ink);border-radius:24px;padding:18px 16px 16px;height:130px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:
          radial-gradient(120% 160% at 50% -30%, rgba(255,255,255,.16), transparent 55%),
          linear-gradient(180deg, #333f73, #242e58 58%, #1a2146);
          border:1px solid transparent;box-shadow:0 14px 36px rgba(0,0,0,.35), inset 0 -12px 22px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.10);
          transition:transform .18s ease, box-shadow .18s ease, background .18s ease}
        .bubble::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;padding:1px;background:
          linear-gradient(180deg, rgba(255,255,255,.22), rgba(255,255,255,.06)) border-box,
          linear-gradient(135deg, rgba(160,200,255,.55), rgba(180,150,255,.38) 40%, rgba(80,120,255,.35)) padding-box;
          -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
        .bubble::after{content:"";position:absolute;inset:1px 1px auto 1px;height:38%;border-radius:22px 22px 14px 14px / 22px 22px 14px 14px;background:linear-gradient(180deg, rgba(255,255,255,.22), rgba(255,255,255,0));filter:blur(.2px);opacity:.9;pointer-events:none}
        .bubble:hover{transform:translateY(-4px);box-shadow:0 22px 48px rgba(0,0,0,.42), 0 0 0 10px rgba(140,160,255,.10), inset 0 -14px 26px rgba(0,0,0,.42);background:
          radial-gradient(120% 160% at 50% -30%, rgba(255,255,255,.18), transparent 55%),
          linear-gradient(180deg, #3a477f, #2a3465 58%, #1f274f)}
        .cap{width:72px;height:72px;border-radius:999px;position:relative;display:grid;place-items:center;background:
          radial-gradient(120% 160% at 30% 10%, rgba(255,255,255,.22), transparent 60%),
          linear-gradient(180deg, rgba(255,255,255,.28), rgba(255,255,255,.08)),
          linear-gradient(180deg, #3d4980, #2b3463 60%, #202852);
          border:1px solid rgba(255,255,255,.22);box-shadow:0 10px 28px rgba(0,0,0,.36), inset 0 0 0 1px rgba(255,255,255,.12), inset 0 -12px 20px rgba(0,0,0,.38);transition:transform .45s cubic-bezier(.2,.7,.2,1.1)}
        .bubble:hover .cap{transform:scale(1.08) rotate(10deg)}
        .b-title{font-weight:800;font-size:15px;letter-spacing:.5px;text-align:center}
        svg{width:32px;height:32px;display:block}
        .cols{display:grid;gap:18px;margin-top:18px}
        @media (min-width:860px){.cols{grid-template-columns:1fr 1fr}}
        .card{position:relative;border-radius:22px;padding:18px;background:linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04));border:1px solid var(--stroke);backdrop-filter:blur(10px);box-shadow:0 12px 34px rgba(0,0,0,.32), inset 0 -1px 0 rgba(255,255,255,.12)}
        .chip{display:inline-block;padding:4px 10px;border-radius:999px;font-size:12px;color:var(--ink);background:linear-gradient(180deg, rgba(122,167,255,.18), rgba(166,136,255,.14));border:1px solid var(--stroke);margin-bottom:8px}
        .col-title{font-size:18px;font-weight:800;margin:0 0 8px}
        .field{display:flex;gap:10px;align-items:center}
        .input{flex:1 1 auto;padding:12px;border-radius:12px;border:1px solid var(--stroke);background:rgba(255,255,255,.06);color:var(--ink);outline:none;transition:border-color .15s ease, box-shadow .15s ease}
        .input:focus{border-color:rgba(130,160,255,.7);box-shadow:0 0 0 6px rgba(130,160,255,.15)}
        .btn.btn-2l{flex-direction:column;line-height:1.1;text-align:center;white-space:normal}
        .btn.btn-2l span{display:block}
        .btn.btn-2l span:first-child{font-weight:700;letter-spacing:.5px}
        .btn.btn-2l span:last-child{opacity:.95}
        footer{margin-top:28px;text-align:center;color:var(--muted);font-size:13px}
      `}</style>

      {/* 装饰层 */}
      <div className="fx" />
      <div className="nebula" />

      <div className="wrap">
        <header>
          <h1>优英 · 动态申请平台</h1>
          <nav className="nav">
            <a className="btn" href="/student">学生入口</a>
            <a className="btn" href="/teacher">老师入口</a>
          </nav>
        </header>

        <p className="muted">请选择你的服务板块：</p>

        {/* 六个功能按钮 */}
        <section className="grid" aria-label="功能板块">
          {[
            { title: "星途英才", href: "/student", grad: "g1",
              path: "M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm4.7 7.3-2 5.4a2 2 0 0 1-1.2 1.2l-5.4 2 2-5.4a2 2 0 0 1 1.2-1.2l5.4-2zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" },
            { title: "本科申请", href: "/student", grad: "g2",
              path: "M4 5a2 2 0 0 1 2-2h10.5A1.5 1.5 0 0 1 18 4.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm3 .5V18h7.5a.5.5 0 0 0 .5-.5V4.5H7z" },
            { title: "硕士申请", href: "/student", grad: "g3",
              path: "M12 3 2 8l10 5 8-4.1V16h2V8L12 3zm0 14-6-3v3l6 3 6-3v-3l-6 3z" },
            { title: "博士申请", href: "/student", grad: "g4",
              path: "M6 3h9a3 3 0 0 1 3 3v11a4 4 0 1 1-8 0H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm7 14a2 2 0 1 0 4 0V6a1 1 0 0 0-1-1h-3v12zM5 7v8a1 1 0 0 0 1 1h6V6H6a1 1 0 0 0-1 1z" },
            { title: "课程中心", href: "/student", grad: "g5",
              path: "M3 5a2 2 0 0 1 2-2h6v16H5a2 2 0 0 1-2-2V5zm16-2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6V3h6z" },
            { title: "导师中心", href: "/teacher", grad: "g6",
              path: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 8a7 7 0 0 1 14 0H5zm14-11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM5 9a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" },
          ].map((b,i)=>(
            <a key={i} className="bubble" href={b.href}>
              <div className="cap" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id={b.grad} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor={["#9ad0ff","#a6baff","#b7a8ff","#87e3ff","#9ed3ff","#b0a2ff"][i]} />
                      <stop offset="1" stopColor={["#b798ff","#7fe1ff","#80b7ff","#d3a6ff","#9fb0ff","#79d7ff"][i]} />
                    </linearGradient>
                  </defs>
                  <path fill={`url(#${b.grad})`} d={b.path}/>
                </svg>
              </div>
              <div className="b-title">{b.title}</div>
            </a>
          ))}
        </section>

        {/* 登录区（按钮两行）—— 先作为装饰，表单跳转到 student/teacher */}
        <section className="cols">
          <div className="card">
            <div className="chip">Portal</div>
            <h2 className="col-title">学生登录</h2>
            <form action="/student" method="get">
              <div className="field">
                <input className="input" required placeholder="姓名 / Name" />
                <input className="input" required type="password" placeholder="登录密码 / Password" />
                <button className="btn btn-2l" type="submit"><span>进入</span><span>工作台</span></button>
              </div>
            </form>
          </div>

          <div className="card">
            <div className="chip">Console</div>
            <h2 className="col-title">老师登录</h2>
            <form action="/teacher" method="get">
              <div className="field">
                <input className="input" required placeholder="姓名 / Name" />
                <input className="input" required type="password" placeholder="登录密码 / Password" />
                <button className="btn btn-2l" type="submit"><span>进入</span><span>总览</span></button>
              </div>
            </form>
          </div>
        </section>

        <footer>© 优英教育 · StarPath</footer>
      </div>
    </main>
  );
}
