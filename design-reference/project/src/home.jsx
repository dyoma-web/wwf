// Home page
function Home({setRoute}) {
  const {t} = useI18n();
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero wrap">
        <div className="hero-frame">
          <div className="phx soil">
            <svg width="100%" height="100%" viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" style={{position:'absolute',inset:0,opacity:.35}}>
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f2a85a"/><stop offset=".6" stopColor="#d2712a"/><stop offset="1" stopColor="#3c2510"/>
                </linearGradient>
              </defs>
              <rect width="1200" height="350" fill="url(#sky)"/>
              <circle cx="860" cy="180" r="70" fill="#ffcf8a" opacity=".9"/>
              {/* rows of crops */}
              {Array.from({length:14}).map((_,i)=>(
                <path key={i} d={`M0 ${360+i*16} Q600 ${340+i*16} 1200 ${360+i*16}`} stroke="#1a0d05" strokeWidth="3" fill="none" opacity={.4+i*.03}/>
              ))}
              {/* silhouette */}
              <path d="M540 330 q10 -30 30 -30 q5 -20 20 -18 q15 -2 22 18 q18 2 22 30 l6 60 l-18 50 l-10 -4 l-6 -30 l-4 40 l-16 2 l-8 -48 l-10 40 l-14 -4 l-2 -50 z" fill="#1a0d05"/>
            </svg>
            <div className="cap">LANDSCAPE PHOTO · FARMER AT SUNRISE [ placeholder ]</div>
          </div>
          <div className="hero-overlay-card">
            <div className="kicker" style={{color:'var(--orange)',fontSize:13,fontWeight:600,marginBottom:6}}>{t('hero_eyebrow')}</div>
            <h1>{t('hero_title')}</h1>
            <p>{t('hero_sub')}</p>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <button className="btn orange" onClick={()=>setRoute('learn')}>{t('hero_cta1')} {Ic.arrow()}</button>
              <button className="btn ghost-light" onClick={()=>setRoute('finance')}>{t('hero_cta2')}</button>
            </div>
          </div>
          <div className="hero-dots"><span className="on"/><span/><span/></div>
          <div className="hero-arrows">
            <button aria-label="Prev">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
            </button>
            <button aria-label="Next">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* BY OBJECTIVE / two-col */}
      <section className="wrap sec-sm">
        <div className="two-col">
          <div className="phx canopy" style={{aspectRatio:'5/4'}}>
            <svg width="100%" height="100%" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice" style={{position:'absolute',inset:0,opacity:.4}}>
              <defs>
                <radialGradient id="hands" cx="50%" cy="50%" r="60%">
                  <stop offset="0" stopColor="#5a8a3a"/><stop offset="1" stopColor="#12321a"/>
                </radialGradient>
              </defs>
              <rect width="500" height="400" fill="url(#hands)"/>
              {/* cupped hands holding globe */}
              <circle cx="250" cy="180" r="70" fill="#3a5a9a" opacity=".8"/>
              <circle cx="250" cy="180" r="70" fill="url(#hands)" opacity=".25"/>
              <path d="M250 120 q-20 20 -30 50 q20 10 60 0 q-10 -30 -30 -50" fill="#2f5a34" opacity=".8"/>
              <path d="M90 260 q30 -40 80 -40 q40 0 80 30 q40 -30 80 -30 q50 0 80 40 q-50 60 -160 60 q-110 0 -160 -60z" fill="#1a0d05"/>
            </svg>
            <div className="cap">HANDS HOLDING A SEEDLING EARTH [ placeholder ]</div>
          </div>
          <div>
            <div className="eyebrow">{t('about_eyebrow')}</div>
            <h2 className="h-display">{t('about_title')}</h2>
            <p>{t('about_body')}</p>
            <button className="btn orange">{t('about_cta')} {Ic.arrow()}</button>
          </div>
        </div>
      </section>

      {/* 3 TILES — Start learning / Finance options / Apply */}
      <section className="wrap sec-sm" style={{paddingTop:0}}>
        <div className="tiles">
          <div className="tile" onClick={()=>setRoute('learn')}>
            <div className="ic">{Ic.book()}</div>
            <div className="t">{t('tile1')}</div>
          </div>
          <div className="tile" onClick={()=>setRoute('finance')}>
            <div className="ic">{Ic.coin()}</div>
            <div className="t">{t('tile2')}</div>
          </div>
          <div className="tile" onClick={()=>setRoute('toolkit')}>
            <div className="ic">{Ic.leaf()}</div>
            <div className="t">{t('tile3')}</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="wrap sec-sm">
        <div className="sec-hd">
          <div>
            <div className="eyebrow">BY THE NUMBERS</div>
            <h2 className="h-display" style={{fontSize:'clamp(26px,3vw,40px)'}}>{t('stats_t')}</h2>
            <p className="lede">{t('stats_sub')}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stat"><div className="n">68%</div><div className="t">Of conservation financing needs in surveyed landscapes remain unmet.</div></div>
          <div className="stat"><div className="n green">3</div><div className="t">Landscapes with live case studies: Madagascar, the Cerrado, KAZA.</div></div>
          <div className="stat"><div className="n teal">12</div><div className="t">Learning units across Greening Finance, Financing Green, and Food & Agriculture.</div></div>
          <div className="stat"><div className="n ink">EN·ES·FR</div><div className="t">Fully translated. Continuously updated. Screen-reader friendly.</div></div>
        </div>
      </section>

      {/* RESOURCE LIBRARY block */}
      <section className="wrap sec-sm">
        <div className="lib-block">
          <div className="bg phx canopy">
            <div className="cap">CANOPY / CROP FIELDS — TOP DOWN [ placeholder ]</div>
          </div>
          <div className="left">
            <div>
              <div className="eyebrow" style={{color:'var(--orange)'}}>RESOURCES</div>
              <h2>Resource<br/>library</h2>
            </div>
            <p style={{color:'#d8d5ca',fontSize:14,maxWidth:'36ch',margin:0}}>
              The Playbook, the LFA framework, ready-to-use templates and a plain-language glossary — versioned, dated, open.
            </p>
          </div>
          <div className="right">
            <button className="lib-pill" onClick={()=>setRoute('toolkit')}>
              <span className="dot"/>
              <span className="t">Landscape Finance Approach</span>
              <span className="arr">{Ic.arrow()}</span>
            </button>
            <button className="lib-pill" onClick={()=>setRoute('toolkit')}>
              <span className="dot"/>
              <span className="t">Sustainable Finance Playbook<br/>for Conservation</span>
              <span className="arr">{Ic.arrow()}</span>
            </button>
            <button className="lib-pill" onClick={()=>setRoute('toolkit')}>
              <span className="dot"/>
              <span className="t">Templates & self-assessment</span>
              <span className="arr">{Ic.arrow()}</span>
            </button>
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="wrap sec-sm">
        <div className="sec-hd">
          <div>
            <div className="eyebrow">MEET THE GUIDES</div>
            <h2 className="h-display" style={{fontSize:'clamp(26px,3vw,40px)'}}>{t('people_t')}</h2>
            <p className="lede">{t('people_s')}</p>
          </div>
        </div>
        <div className="personas">
          {[
            {n:'Jane',     r:'Generalist — LFA concepts',       hue:'var(--forest-2)'},
            {n:'Jessica',  r:'Specialist — Financing Green',    hue:'var(--teal)'},
            {n:'Jaciele',  r:'Narrator — the Cerrado',          hue:'var(--orange)'},
            {n:'Ylva',     r:'Specialist — Food & Agriculture', hue:'var(--forest-2)'},
            {n:'Divyaa',   r:'Specialist — Greening Finance',   hue:'var(--teal)'},
            {n:'Santatra', r:'Narrator — Madagascar',           hue:'var(--orange)'},
          ].map((p,i) => (
            <div className="persona" key={p.n}>
              <div className="avatar"><AvatarPH seed={i} hue={p.hue}/></div>
              <div>
                <div className="n">{p.n}</div>
                <div className="r">{p.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="wrap sec-sm">
        <div className="contact-block">
          <div>
            <div className="eyebrow">CONTACT & INFO</div>
            <h3>Contact Us</h3>
            <p>Have a question, a landscape to contribute, or a partner to connect? We read every message.</p>
            <div className="info">
              <div className="info-row"><span className="ic">{Ic.pin()}</span> Gland, Switzerland · remote contributors</div>
              <div className="info-row"><span className="ic">{Ic.phone()}</span> +41 00 000 00 00</div>
              <div className="info-row"><span className="ic">{Ic.mail()}</span> hello@example.org</div>
            </div>
          </div>
          <form className="contact-form" onSubmit={e=>e.preventDefault()}>
            <div><label>Name</label><input placeholder="Your name"/></div>
            <div><label>Email</label><input type="email" placeholder="you@org.com"/></div>
            <div><label>Message</label><textarea placeholder="How can we help?"/></div>
            <button type="submit" className="btn orange submit">Send message {Ic.arrow()}</button>
          </form>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Home });
