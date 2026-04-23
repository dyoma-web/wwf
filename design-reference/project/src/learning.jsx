// Start Learning — matches dark/orange visual language
function Learning() {
  const {t} = useI18n();
  const units = [
    {
      id:'u1', pill:'Greening finance', pillColor:'var(--teal)',
      num:'01', title:'Foundations of the Landscape Finance Approach',
      narrator:'Jane — generalist',
      summary:'What a landscape is, why finance needs to adapt to it, and how capital flows through a place.',
      meta:[{k:'Duration',v:'55 min'},{k:'Format',v:'Video + reading'},{k:'Level',v:'Intro'}],
      lessons:[
        {t:'What is a landscape?', s:'Terrestrial, marine, and mixed', d:'8 min', done:true},
        {t:'Why finance alone does not conserve', s:'Externalities, subsidies, misaligned incentives', d:'12 min', done:true},
        {t:'The three lenses: Greening · Financing · Food', s:'How the programme is organised', d:'10 min', done:false},
        {t:'Self-check: which lens fits your work?', s:'Five guiding questions', d:'6 min', done:false},
      ]
    },
    {
      id:'u2', pill:'Financing Green', pillColor:'var(--forest-2)',
      num:'02', title:'Financing Green: Instruments & Applications',
      narrator:'Jessica — specialist',
      summary:'A plain-language walk through blended finance, PES, green bonds and outcome-based instruments.',
      meta:[{k:'Duration',v:'1 h 40 min'},{k:'Format',v:'Video + templates'},{k:'Level',v:'Intermediate'}],
      lessons:[
        {t:'Blended finance, explained', s:'Who puts in what, and why', d:'18 min', done:false},
        {t:'Payments for ecosystem services', s:'When they work, when they fail', d:'16 min', done:false},
        {t:'Outcome-based financing', s:'Structures, contracts, verification', d:'22 min', done:false},
      ]
    },
    {
      id:'u3', pill:'Food & Agriculture', pillColor:'var(--orange)',
      num:'03', title:'Landscape Socioeconomic Context',
      narrator:'Ylva — specialist',
      summary:'How food systems, tenure and livelihoods shape what can be financed on the ground.',
      meta:[{k:'Duration',v:'1 h 15 min'},{k:'Format',v:'Video + case'},{k:'Level',v:'Intermediate'}],
      lessons:[
        {t:'Reading a landscape as a social system', s:'Actors, rights, flows', d:'14 min', done:false},
        {t:'Harmful subsidies & how to redirect them', s:'Practical levers', d:'18 min', done:false},
      ]
    },
  ];
  const [active, setActive] = React.useState('u1');
  const unit = units.find(u=>u.id===active);
  return (
    <div className="page wrap sec-sm">
      <div className="sec-hd">
        <div>
          <div className="eyebrow">START LEARNING</div>
          <h2 className="h-display" style={{fontSize:'clamp(30px,4vw,50px)',margin:'8px 0 0'}}>The curriculum</h2>
          <p className="lede" style={{marginTop:10}}>Twelve units across three lenses. Preview here — then continue in the LMS for progress tracking and certificates.</p>
        </div>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <span className="chip"><span className="swatch" style={{background:'var(--teal)'}}/>Greening finance</span>
          <span className="chip"><span className="swatch" style={{background:'var(--forest-2)'}}/>Financing green</span>
          <span className="chip"><span className="swatch" style={{background:'var(--orange)'}}/>Food & agriculture</span>
        </div>
      </div>

      <div className="curriculum">
        <aside className="curr-list">
          {units.map(u => (
            <button key={u.id} className={u.id===active?'on':''} onClick={()=>setActive(u.id)}>
              <div className="num">{u.num}</div>
              <div>
                <div className="t">{u.title}</div>
                <div className="s"><span className="swatch" style={{background:u.pillColor,display:'inline-block',marginRight:5,verticalAlign:'middle'}}/>{u.pill} · {u.narrator}</div>
              </div>
            </button>
          ))}
        </aside>

        <div className="unit">
          <div className="unit-hd">
            <div style={{flex:1,minWidth:260}}>
              <span className="chip" style={{background:unit.pillColor,color:'#fff',borderColor:unit.pillColor}}>
                {unit.pill}
              </span>
              <h3>{unit.title}</h3>
              <p>{unit.summary}</p>
              <div className="meta">
                {unit.meta.map(m => <div key={m.k}><span style={{color:'var(--muted)'}}>{m.k} </span><strong>{m.v}</strong></div>)}
                <div><span style={{color:'var(--muted)'}}>Narrator </span><strong>{unit.narrator}</strong></div>
              </div>
            </div>
            <div className="phx canopy" style={{width:220,aspectRatio:'4/3',flex:'0 0 220px',position:'relative'}}>
              <div className="cap">UNIT COVER</div>
            </div>
          </div>
          <div className="unit-lessons">
            {unit.lessons.map((l,i) => (
              <div className="row" key={i}>
                <div className={`dot ${l.done?'done':''}`}>{l.done ? Ic.check() : String(i+1).padStart(2,'0')}</div>
                <div>
                  <div className="t">{l.t}</div>
                  <div className="s">{l.s}</div>
                </div>
                <div className="dur">{l.d}</div>
                <button className="btn sm ghost" style={{padding:'.45rem .7rem'}}>{Ic.play()} Preview</button>
              </div>
            ))}
          </div>
          <div className="unit-cta">
            <div className="note"><strong>Continue in the LMS</strong> to track progress, take assessments and earn a certificate.</div>
            <a href="#" className="btn orange">Open in LMS {Ic.arrow()}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Learning });
