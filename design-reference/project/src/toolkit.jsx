// Toolkit — dark map, cases, library
function Toolkit() {
  const PINS = [
    {id:'madagascar', name:'Madagascar', coord:[600, 310], tag:'Marine & terrestrial', brief:'Sovereign debt conversion supports MPA management and coastal livelihoods.', narrator:'Santatra', color:'var(--teal)'},
    {id:'cerrado',    name:'Cerrado, Brazil', coord:[340, 330], tag:'Food & agriculture', brief:'Blended finance shifts the soy-and-cattle frontier to regenerative practice.', narrator:'Jaciele', color:'var(--orange)'},
    {id:'kaza',       name:'KAZA', coord:[555, 350], tag:'Transboundary', brief:'Five-country conservation area piloting pooled financing and community dividends.', narrator:'Jane', color:'var(--forest-2)'},
  ];
  const [active, setActive] = React.useState('cerrado');
  const pin = PINS.find(p=>p.id===active);
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  const LIB = [
    {t:'Sustainable Finance Playbook for Conservation', s:'PDF · 164 pp · v2026.1', cat:'playbook', ic:Ic.pdf()},
    {t:'Landscape Finance Approach (LFA) framework',    s:'PDF · 52 pp · v2026.1', cat:'framework', ic:Ic.pdf()},
    {t:'Readiness self-assessment (editable)',           s:'DOCX · 12 questions', cat:'template', ic:Ic.doc()},
    {t:'Theory of change canvas — blank',                s:'PDF · 1 pp', cat:'template', ic:Ic.pdf()},
    {t:'Theory of change — Cerrado worked example',      s:'PDF · 4 pp', cat:'template', ic:Ic.pdf()},
    {t:'Financial modelling starter',                    s:'XLSX · blended-finance template', cat:'template', ic:Ic.xlsx()},
    {t:'MRV reference sheet',                            s:'XLSX · measurement', cat:'template', ic:Ic.xlsx()},
    {t:'Plain-language glossary',                        s:'PDF · 112 terms · EN/ES/FR', cat:'glossary', ic:Ic.pdf()},
  ];
  const FILTERS = [
    {id:'all', label:'All'},
    {id:'playbook', label:'Playbook'},
    {id:'framework', label:'Framework'},
    {id:'template', label:'Templates'},
    {id:'glossary', label:'Glossary'},
  ];
  const visible = LIB.filter(x =>
    (filter==='all' || x.cat===filter) &&
    (query==='' || (x.t+' '+x.s).toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="page wrap sec-sm">
      <div className="sec-hd">
        <div>
          <div className="eyebrow">TOOLKIT · RESOURCES & LIBRARY</div>
          <h2 className="h-display" style={{fontSize:'clamp(30px,4vw,50px)',margin:'8px 0 0'}}>Everything, ready to take.</h2>
          <p className="lede" style={{marginTop:10}}>The Playbook, the LFA framework, ready-to-use templates, a plain-language glossary, and a map of landscapes where the approach is being applied.</p>
        </div>
      </div>

      {/* MAP + case */}
      <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr',gap:18,alignItems:'stretch'}}>
        <div className="map-wrap">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:10}}>
            <div className="eyebrow" style={{color:'var(--orange)'}}>INTERACTIVE MAP</div>
            <div style={{fontSize:11.5,color:'#9b988b'}}>{PINS.length} landscapes</div>
          </div>
          <WorldMap pins={PINS} active={active} onPick={setActive}/>
          <div style={{display:'flex',gap:6,marginTop:12,flexWrap:'wrap'}}>
            {PINS.map(p => (
              <button key={p.id} className="chip"
                onClick={()=>setActive(p.id)}
                style={active===p.id
                  ? {background:p.color,borderColor:p.color,color:'#fff'}
                  : {background:'transparent',borderColor:'#3a3a36',color:'#c7c4b8'}}>
                <span className="swatch" style={{background:p.color}}/>
                {p.name}
              </button>
            ))}
          </div>
        </div>
        <div className="res-card" style={{padding:0,overflow:'hidden'}}>
          <div className="phx canopy" style={{aspectRatio:'16/10',position:'relative',borderRadius:0}}>
            <div className="cap">{pin.name.toUpperCase()} [ PHOTO ]</div>
          </div>
          <div style={{padding:'22px 24px'}}>
            <div className="eyebrow" style={{color:pin.color}}>{pin.tag.toUpperCase()}</div>
            <h3 style={{fontSize:24,fontWeight:700,margin:'6px 0 6px',letterSpacing:'-.01em'}}>{pin.name}</h3>
            <p style={{color:'var(--ink-2)',fontSize:13.5,margin:0,lineHeight:1.5}}>{pin.brief}</p>
            <div style={{display:'flex',gap:8,marginTop:16,flexWrap:'wrap'}}>
              <button className="btn sm orange">Read case {Ic.arrow()}</button>
              <button className="btn sm ghost">1-pager</button>
            </div>
          </div>
        </div>
      </div>

      {/* CASE CARDS */}
      <div className="sec-hd" style={{marginTop:72}}>
        <div>
          <div className="eyebrow">CASE STUDIES</div>
          <h3 className="h-display" style={{fontSize:'clamp(24px,2.6vw,34px)',margin:'8px 0 0'}}>Where the approach is being applied</h3>
        </div>
      </div>
      <div className="cases">
        {PINS.map(p => (
          <div className="case-card" key={p.id}>
            <div className="cover phx canopy" style={{borderRadius:0}}>
              <div className="cap">{p.name.toUpperCase()}</div>
            </div>
            <div className="body">
              <div className="eyebrow" style={{color:p.color,fontSize:11.5,letterSpacing:'.04em'}}>{p.tag.toUpperCase()}</div>
              <h4>{p.name}</h4>
              <p>{p.brief}</p>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:14}}>
                <div style={{fontSize:11.5,color:'var(--muted)'}}>Narrator · {p.narrator}</div>
                <button className="btn sm ghost" style={{padding:'.4rem .7rem'}}>Open {Ic.arrow()}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIBRARY */}
      <div className="sec-hd" style={{marginTop:72}}>
        <div>
          <div className="eyebrow">LIBRARY</div>
          <h3 className="h-display" style={{fontSize:'clamp(24px,2.6vw,34px)',margin:'8px 0 0'}}>Downloadable documents</h3>
          <p className="lede" style={{marginTop:8}}>All practical tools, versioned and dated. Everything here is made to be edited and used with partners.</p>
        </div>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <div style={{position:'relative'}}>
            <span style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--muted)'}}>{Ic.search()}</span>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search"
              style={{padding:'9px 14px 9px 34px',border:'1px solid var(--line)',borderRadius:3,background:'#fff',font:'inherit',fontSize:13.5,width:220}}/>
          </div>
        </div>
      </div>
      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:14}}>
        {FILTERS.map(f => (
          <button key={f.id} className={`chip ${filter===f.id?'dark':''}`} onClick={()=>setFilter(f.id)}>{f.label}</button>
        ))}
      </div>
      <div className="lib">
        {visible.map((x,i) => (
          <div className="lib-item" key={i}>
            <div className="ic">{x.ic}</div>
            <div>
              <div className="t">{x.t}</div>
              <div className="s">{x.s}</div>
            </div>
            <button className="btn sm orange" style={{padding:'.45rem .8rem'}}>{Ic.download()} Download</button>
          </div>
        ))}
        {visible.length===0 && <div style={{padding:28,textAlign:'center',color:'var(--muted)',gridColumn:'1/-1'}}>No documents match.</div>}
      </div>
    </div>
  );
}

function WorldMap({pins, active, onPick}) {
  return (
    <svg viewBox="0 0 1000 500" className="world" aria-label="World map of case studies">
      <rect width="1000" height="500" fill="#2a2a27"/>
      <g stroke="#3a3a36" strokeWidth=".5" opacity=".7">
        {Array.from({length:10}).map((_,i)=>(<line key={'h'+i} x1="0" y1={50*(i+1)} x2="1000" y2={50*(i+1)}/>))}
        {Array.from({length:20}).map((_,i)=>(<line key={'v'+i} x1={50*(i+1)} y1="0" x2={50*(i+1)} y2="500"/>))}
      </g>
      <g fill="#1d1d1b" stroke="#4a4a44" strokeWidth="1">
        <path d="M110,110 Q90,70 170,70 Q260,60 280,130 Q290,180 230,200 Q200,230 180,210 Q140,220 130,190 Q100,170 110,110 Z"/>
        <path d="M280,250 Q310,230 340,260 Q360,310 350,380 Q330,450 300,440 Q270,410 275,350 Q270,290 280,250 Z"/>
        <path d="M460,110 Q490,90 540,100 Q560,130 540,160 Q500,170 470,150 Q455,130 460,110 Z"/>
        <path d="M490,190 Q540,180 570,220 Q590,280 570,340 Q540,390 510,380 Q480,340 475,280 Q475,220 490,190 Z"/>
        <path d="M560,100 Q640,70 760,90 Q810,130 820,190 Q790,230 720,220 Q660,210 600,200 Q560,170 560,100 Z"/>
        <path d="M760,250 Q810,230 870,260 Q880,290 840,310 Q800,300 770,290 Z"/>
        <path d="M820,370 Q870,360 890,390 Q870,420 840,410 Q810,400 820,370 Z"/>
      </g>
      {pins.map(p => {
        const on = p.id === active;
        return (
          <g key={p.id} className="pin" onClick={()=>onPick(p.id)} style={{cursor:'pointer'}}>
            <circle cx={p.coord[0]} cy={p.coord[1]} r={on?22:16} fill={p.color} opacity={on?.25:.18}>
              {on && <animate attributeName="r" values="16;28;16" dur="2.2s" repeatCount="indefinite"/>}
            </circle>
            <circle cx={p.coord[0]} cy={p.coord[1]} r={on?9:7} fill={p.color} stroke="#fff" strokeWidth="2"/>
            <text x={p.coord[0]+16} y={p.coord[1]+4} fontSize="12" fontFamily="Noto Sans" fontWeight="600" fill="#fff" style={{pointerEvents:'none'}}>
              {p.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

Object.assign(window, { Toolkit });
