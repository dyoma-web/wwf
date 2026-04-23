// Financing Navigator — same flow, restyled
function Navigator() {
  const QUESTIONS = [
    { id:'role', label:'Your role', q:'What is your role?', hint:'This tunes the language of the recommendations.',
      options:[
        {id:'conservation', t:'Conservation professional', s:'NGO, field team, protected area manager', ic:Ic.leaf()},
        {id:'finance',      t:'Finance',                    s:'Bank, investor, DFI, foundation',        ic:Ic.coin()},
        {id:'policy',       t:'Policy maker',               s:'Government, regulator, agency',          ic:Ic.globe()},
        {id:'research',     t:'Researcher',                 s:'Academic, think tank, analyst',          ic:Ic.book()},
      ]},
    { id:'landscape', label:'Landscape type', q:'What type of landscape do you work in?', hint:'Where your work happens on the ground.',
      options:[
        {id:'terrestrial', t:'Terrestrial', s:'Forests, savannahs, drylands, mountains', ic:Ic.leaf()},
        {id:'marine',      t:'Marine',      s:'Coastal, nearshore, open ocean',          ic:Ic.wave()},
        {id:'mixed',       t:'Mixed',       s:'Land-sea interface, deltas, wetlands',    ic:Ic.globe()},
      ]},
    { id:'challenge', label:'Main challenge', q:'What is your main challenge?', hint:'The one that most blocks progress today.',
      options:[
        {id:'gap',        t:'Financing gap',              s:'Insufficient capital reaching the landscape', ic:Ic.coin()},
        {id:'subsidies',  t:'Harmful subsidies',          s:'Public money working against conservation',   ic:Ic.warning()},
        {id:'private',    t:'Lack of private investment', s:'Risk, returns, or readiness barriers',        ic:Ic.bars()},
      ]},
    { id:'solution', label:'Solution', q:'What conservation solution are you pursuing?', hint:'Roughly — you can refine later.',
      options:[
        {id:'restoration', t:'Restoration',             s:'Reforestation, rewilding, regeneration', ic:Ic.leaf()},
        {id:'protected',   t:'Protected areas',         s:'New, expanded, or better managed',       ic:Ic.globe()},
        {id:'sus-ag',      t:'Sustainable agriculture', s:'Agroforestry, regenerative, certified',  ic:Ic.leaf()},
        {id:'other',       t:'Something else',          s:'We still suggest a starting point',      ic:Ic.compass()},
      ]},
  ];

  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [done, setDone] = React.useState(false);
  const cur = QUESTIONS[step];
  const pick = id => setAnswers(a => ({...a, [cur.id]: id}));
  const labelFor = qid => {
    const q = QUESTIONS.find(q=>q.id===qid);
    return q?.options.find(o=>o.id===answers[qid])?.t || '—';
  };
  const next = () => step < QUESTIONS.length-1 ? setStep(s=>s+1) : setDone(true);
  const prev = () => done ? setDone(false) : setStep(s=>Math.max(0,s-1));
  const restart = () => { setAnswers({}); setStep(0); setDone(false); };
  const progress = done ? 100 : (step / QUESTIONS.length) * 100;

  return (
    <div className="page wrap sec-sm">
      <div className="sec-hd">
        <div>
          <div className="eyebrow">FINANCING NAVIGATOR</div>
          <h2 className="h-display" style={{fontSize:'clamp(30px,4vw,50px)',margin:'8px 0 0'}}>Four questions. A clear starting point.</h2>
          <p className="lede" style={{marginTop:10}}>We won't give you a dashboard. We'll point you to the right pathways, templates and cases — then step out of your way.</p>
        </div>
      </div>

      <div className="nav-wrap">
        <aside className="nav-side">
          <div className="eyebrow muted">YOUR INPUTS</div>
          <div className="nav-steps">
            {QUESTIONS.map((qq, i) => {
              const cls = done ? 'done' : (i < step ? 'done' : (i === step ? 'on' : ''));
              return (
                <div className={`step ${cls}`} key={qq.id}>
                  <div className="i">{i < step || done ? Ic.check() : String(i+1).padStart(2,'0')}</div>
                  <div>
                    <div className="lbl">{qq.label}</div>
                    <div className="val" style={{color: answers[qq.id]?'var(--ink)':'var(--muted)'}}>
                      {answers[qq.id] ? labelFor(qq.id) : 'Not set'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bar"><span style={{width:`${progress}%`}}/></div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:8,fontSize:11,color:'var(--muted)'}}>
            <span>{done ? 'Complete' : `Step ${step+1} of ${QUESTIONS.length}`}</span>
            <button onClick={restart} style={{border:0,background:'transparent',color:'var(--muted)',fontSize:11,cursor:'pointer',textDecoration:'underline'}}>Start over</button>
          </div>
        </aside>

        {!done ? (
          <div className="qcard">
            <div className="q-meta">QUESTION {step+1} / {QUESTIONS.length} · {cur.label.toUpperCase()}</div>
            <h2>{cur.q}</h2>
            <p style={{color:'var(--muted)',margin:'8px 0 0',fontSize:14}}>{cur.hint}</p>
            <div className="opts">
              {cur.options.map(o => (
                <button key={o.id} className={`opt ${answers[cur.id]===o.id?'sel':''}`} onClick={()=>pick(o.id)}>
                  <div className="ic">{o.ic}</div>
                  <div>
                    <div className="t">{o.t}</div>
                    <div className="s">{o.s}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="qnav">
              <button className="btn ghost" onClick={prev} disabled={step===0} style={{opacity:step===0?.4:1}}>← Back</button>
              <button className="btn orange" onClick={next} disabled={!answers[cur.id]} style={{opacity:!answers[cur.id]?.5:1}}>
                {step === QUESTIONS.length-1 ? 'See my pathways' : 'Next'} {Ic.arrow()}
              </button>
            </div>
          </div>
        ) : (
          <Results answers={answers} onRestart={restart} labelFor={labelFor}/>
        )}
      </div>
    </div>
  );
}

function Results({answers, onRestart, labelFor}) {
  const PATHS_POOL = [
    {mk:'01', color:'var(--forest-2)', t:'Blended finance for restoration', s:'Concessional + commercial capital stacked into a restoration fund.', fit:'Strong fit'},
    {mk:'02', color:'var(--teal)',     t:'Payments for ecosystem services', s:'Buyers pay land stewards for measurable outcomes.', fit:'Good fit'},
    {mk:'03', color:'var(--orange)',   t:'Subsidy redirection',             s:'Shift harmful agricultural subsidies towards regenerative practice.', fit:'Explore'},
    {mk:'04', color:'var(--forest-2)', t:'Outcome-based MPA financing',     s:'Pay-for-performance tied to verified fish-stock or habitat metrics.', fit:'Strong fit'},
    {mk:'05', color:'var(--teal)',     t:'Green / biodiversity bonds',      s:'Use-of-proceeds bonds issued by a public or sovereign entity.', fit:'Good fit'},
  ];
  const picks = (() => {
    const p = PATHS_POOL;
    if (answers.landscape === 'marine') return [p[3], p[1], p[4]];
    if (answers.solution === 'restoration') return [p[0], p[1], p[4]];
    if (answers.challenge === 'subsidies') return [p[2], p[1], p[0]];
    return [p[0], p[1], p[2]];
  })();
  const cases = [
    {loc:'Cerrado, Brazil',  tag:'Financing Green',   narrator:'Jaciele'},
    {loc:'Madagascar (MTB)', tag:'Greening Finance',  narrator:'Santatra'},
    {loc:'KAZA, Africa',     tag:'Food & Agriculture',narrator:'Jane'},
  ];
  const templates = [
    {t:'Readiness self-assessment', s:'DOCX · 12 questions'},
    {t:'Theory of change canvas',   s:'PDF · blank + example'},
    {t:'MRV starter sheet',         s:'XLSX · measurement'},
  ];

  return (
    <div>
      <div className="res-card" style={{marginBottom:16}}>
        <div className="eyebrow">YOUR STARTING POINT</div>
        <h2 className="h-display" style={{fontSize:'clamp(22px,2.4vw,32px)',margin:'8px 0 0',lineHeight:1.2,letterSpacing:'-.01em'}}>
          A <strong style={{color:'var(--orange)',fontWeight:700}}>{labelFor('role').toLowerCase()}</strong> in <strong style={{color:'var(--orange)',fontWeight:700}}>{labelFor('landscape').toLowerCase()}</strong> landscapes, facing <strong style={{color:'var(--orange)',fontWeight:700}}>{labelFor('challenge').toLowerCase()}</strong>, pursuing <strong style={{color:'var(--orange)',fontWeight:700}}>{labelFor('solution').toLowerCase()}</strong>.
        </h2>
      </div>

      <div className="results">
        <div className="res-card dark">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:4}}>
            <div className="eyebrow" style={{color:'var(--orange)'}}>RECOMMENDED PATHWAYS</div>
            <span className="chip dark">3 of 12</span>
          </div>
          <h3 style={{fontSize:24,margin:'6px 0 10px',color:'#fff'}}>Start here</h3>
          <div>
            {picks.map(p => (
              <div className="path" key={p.mk} style={{borderBottomColor:'#3a3a36'}}>
                <div className="mk" style={{background:p.color}}>{p.mk}</div>
                <div>
                  <div className="t" style={{color:'#fff'}}>{p.t}</div>
                  <div className="s" style={{color:'#c7c4b8'}}>{p.s}</div>
                </div>
                <div className="fit">{p.fit}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          <div className="res-card">
            <div className="eyebrow">SIMILAR CASES</div>
            <h3 style={{fontSize:18,margin:'6px 0 8px'}}>Seen it work here</h3>
            {cases.map(c => (
              <div key={c.loc} style={{display:'flex',gap:12,alignItems:'flex-start',padding:'10px 0',borderBottom:'1px solid var(--line-2)'}}>
                <div className="phx canopy" style={{width:56,height:56,borderRadius:3,flex:'0 0 56px'}}/>
                <div style={{flex:1}}>
                  <div style={{fontWeight:600,fontSize:14}}>{c.loc}</div>
                  <div style={{fontSize:12,color:'var(--muted)',marginTop:3}}>{c.tag} · narrator: {c.narrator}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="res-card">
            <div className="eyebrow">RELEVANT TOOLS</div>
            <h3 style={{fontSize:18,margin:'6px 0 8px'}}>Templates for this path</h3>
            {templates.map((tp,i) => (
              <div key={i} style={{display:'flex',gap:12,alignItems:'center',padding:'10px 0',borderBottom:i<templates.length-1?'1px solid var(--line-2)':'none'}}>
                <div style={{width:36,height:36,borderRadius:3,background:'var(--paper)',display:'grid',placeItems:'center',color:'var(--ink-2)'}}>{Ic.doc()}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:600,fontSize:14}}>{tp.t}</div>
                  <div style={{fontSize:11.5,color:'var(--muted)',marginTop:2}}>{tp.s}</div>
                </div>
                <button className="btn sm ghost" style={{padding:'.4rem .7rem'}}>{Ic.download()} Get</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{marginTop:20,display:'flex',gap:10,flexWrap:'wrap'}}>
        <button className="btn orange">Open matching LMS unit {Ic.arrow()}</button>
        <button className="btn ghost" onClick={onRestart}>↺ Try different answers</button>
      </div>
    </div>
  );
}

Object.assign(window, { Navigator });
