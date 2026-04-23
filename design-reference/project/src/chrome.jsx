// Site chrome: header, footer
function Header({route, setRoute}) {
  const {t, lang, setLang} = useI18n();
  const items = [
    {id:'home', label: t('nav_home')},
    {id:'learn', label: t('nav_learn')},
    {id:'finance', label: t('nav_finance')},
    {id:'toolkit', label: t('nav_toolkit')},
  ];
  return (
    <header className="site-hd">
      <div className="wrap site-hd-inner">
        <a className="brand" href="#" onClick={e=>{e.preventDefault();setRoute('home')}}>
          <div className="brand-mark">SFC</div>
          <div>
            <div className="brand-name">SUSTAINABLE FINANCE</div>
            <div className="brand-sub">FOR CONSERVATION</div>
          </div>
        </a>
        <nav className="nav">
          {items.map(it => (
            <a key={it.id} href="#" className={route===it.id?'active':''}
              onClick={e=>{e.preventDefault();setRoute(it.id)}}>{it.label}</a>
          ))}
        </nav>
        <div className="hd-end">
          <div className="lang" role="tablist" aria-label="Language">
            {['en','es','fr'].map(l => (
              <button key={l} className={lang===l?'on':''} onClick={()=>setLang(l)}>
                {t('lang_'+l)}
              </button>
            ))}
          </div>
          <button className="btn orange sm">Contact Us</button>
          <button className="menu-btn" aria-label="Menu">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const {t} = useI18n();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="brand">
            <div className="brand-mark">SFC</div>
            <div>
              <div className="brand-name">SUSTAINABLE FINANCE</div>
              <div className="brand-sub">FOR CONSERVATION</div>
            </div>
          </div>
          <div className="foot-links">
            <div>
              <a href="#">Lorem ipsum dolor</a>
              <a href="#">Lorem ipsum dolor</a>
              <a href="#">Lorem ipsum dolor</a>
            </div>
            <div>
              <a href="#">Lorem ipsum dolor</a>
              <a href="#">Lorem ipsum dolor</a>
              <a href="#">Lorem ipsum dolor</a>
            </div>
            <div>
              <a href="#">Lorem ipsum dolor</a>
              <a href="#">Lorem ipsum dolor</a>
              <a href="#">Lorem ipsum dolor</a>
            </div>
          </div>
          <div className="foot-social">
            <a href="#" aria-label="Facebook">{Ic.fb()}</a>
            <a href="#" aria-label="Twitter">{Ic.tw()}</a>
            <a href="#" aria-label="Instagram">{Ic.ig()}</a>
            <a href="#" aria-label="YouTube">{Ic.yt()}</a>
            <a href="#" aria-label="LinkedIn">{Ic.li()}</a>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 · Open resource · CC BY-NC-SA</div>
          <div>EN · ES · FR · WCAG AA · mobile-first</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
