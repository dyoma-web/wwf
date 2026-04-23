// Floating virtual assistant (chat widget)
function Assistant() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {who:'bot', text:"Hi — I'm your guide. I can help you find the right starting point on this site. What brings you here?"},
  ]);
  const [input, setInput] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  const quickChips = [
    "I'm new to sustainable finance",
    "Take me to the Navigator",
    "Show me the Cerrado case",
    "I need a template",
  ];

  const send = async (raw) => {
    const text = (raw ?? input).trim();
    if (!text || busy) return;
    setMessages(m => [...m, {who:'user', text}]);
    setInput('');
    setBusy(true);
    try {
      const reply = await window.claude.complete({
        messages: [
          {role:'user', content:
            `You are a concise onboarding assistant for a 'Sustainable Finance for Conservation' website. 
The site has three sections: (1) Start Learning — LMS modules, (2) Financing Navigator — a 4-question guided Q&A that points to pathways, (3) Toolkit — a Playbook, LFA framework, templates, glossary, and a map with cases in Madagascar, the Cerrado, and KAZA.
Answer the user in 2–3 short sentences. Be friendly, plain-language, no jargon. If helpful, end with a single suggestion like "Open the Navigator" or "See the Cerrado case". The user says: "${text}"`}
        ]
      });
      setMessages(m => [...m, {who:'bot', text: reply.trim()}]);
    } catch (e) {
      setMessages(m => [...m, {who:'bot', text: "I'm having trouble reaching my brain right now. Try the Financing Navigator in the menu — it asks four short questions and points you to a starting place."}]);
    } finally {
      setBusy(false);
    }
  };

  if (!open) {
    return (
      <button className="asst-bubble" onClick={()=>setOpen(true)} aria-label="Open assistant">
        {Ic.chat()}
      </button>
    );
  }
  return (
    <div className="asst-panel" role="dialog" aria-label="Virtual assistant">
      <div className="asst-hd">
        <div className="av">G</div>
        <div>
          <div className="t">Guide</div>
          <div className="s"><span className="dot-live"/> Always on · 24/7</div>
        </div>
        <button className="asst-x" onClick={()=>setOpen(false)} aria-label="Close">{Ic.close()}</button>
      </div>
      <div className="asst-body" ref={bodyRef}>
        {messages.map((m,i) => (
          <div key={i} className={`asst-msg ${m.who}`}>{m.text}</div>
        ))}
        {busy && <div className="asst-msg bot" style={{opacity:.7}}>…thinking</div>}
        {messages.length <= 1 && (
          <div className="asst-chip-row">
            {quickChips.map(c => (
              <button key={c} className="asst-chip" onClick={()=>send(c)}>{c}</button>
            ))}
          </div>
        )}
      </div>
      <form className="asst-in" onSubmit={e=>{e.preventDefault();send()}}>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask anything…" aria-label="Message"/>
        <button type="submit" aria-label="Send">{Ic.send()}</button>
      </form>
    </div>
  );
}

Object.assign(window, { Assistant });
