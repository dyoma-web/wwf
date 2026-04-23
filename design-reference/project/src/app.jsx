// Main app — routes + tweaks
const ACCENTS = {
  orange: {accent:'#f07d00', ink:'#c96600', name:'Orange'},
  teal:   {accent:'#009191', ink:'#054d4d', name:'Teal'},
  green:  {accent:'#8cc63f', ink:'#5a8a28', name:'Green'},
};

function Root(){
  return (
    <I18nProvider>
      <AppShell/>
    </I18nProvider>
  );
}

function AppShell() {
  const [route, setRoute] = React.useState('home');
  const [tweaksOpen, setTweaksOpen] = React.useState(false);
  const [tweaks, setTweaks] = useTweaks(window.__TWEAKS__ || {accent:'orange',density:'comfortable'});

  React.useEffect(() => { window.__setTweaksOpen = setTweaksOpen; }, []);

  React.useEffect(() => {
    const a = ACCENTS[tweaks.accent] || ACCENTS.orange;
    const r = document.documentElement.style;
    r.setProperty('--orange', a.accent);
    r.setProperty('--orange-ink', a.ink);
    r.setProperty('--accent', a.accent);
    r.setProperty('--accent-ink', a.ink);
  }, [tweaks]);

  React.useEffect(() => { window.scrollTo({top:0, behavior:'instant'}); }, [route]);

  return (
    <div>
      <Header route={route} setRoute={setRoute}/>
      {route === 'home' && <Home setRoute={setRoute}/>}
      {route === 'learn' && <Learning/>}
      {route === 'finance' && <Navigator/>}
      {route === 'toolkit' && <Toolkit/>}
      <Footer/>
      <Assistant/>

      {tweaksOpen && (
        <TweaksPanel title="Tweaks" onClose={()=>setTweaksOpen(false)}>
          <TweakSection title="Accent color">
            <TweakRadio value={tweaks.accent} onChange={v=>setTweaks({accent:v})}
              options={Object.entries(ACCENTS).map(([k,v]) => ({value:k, label:v.name}))}/>
          </TweakSection>
        </TweaksPanel>
      )}
    </div>
  );
}

window.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === '__activate_edit_mode')   window.__setTweaksOpen?.(true);
  if (d.type === '__deactivate_edit_mode') window.__setTweaksOpen?.(false);
});

ReactDOM.createRoot(document.getElementById('root')).render(<Root/>);
