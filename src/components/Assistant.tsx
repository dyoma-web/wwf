"use client";

import { useEffect, useRef, useState } from "react";
import { Chat, Close } from "./Icons";

type Message = { who: "bot" | "user"; text: string };

const QUICK_CHIPS = [
  "I'm new to sustainable finance",
  "Take me to the Navigator",
  "Show me the Cerrado case",
  "I need a template",
];

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      who: "bot",
      text:
        "Hi — I'm your guide. I can help you find the right starting point on this site. What brings you here?",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  async function send(raw?: string) {
    const text = (raw ?? input).trim();
    if (!text || busy) return;
    setMessages((m) => [...m, { who: "user", text }]);
    setInput("");
    setBusy(true);

    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          who: "bot",
          text:
            "The chat backend is not wired up yet. Try the Navigator in the top menu — it asks four short questions and points you to a starting place.",
        },
      ]);
      setBusy(false);
    }, 500);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open assistant"
        className="asst-bubble"
      >
        <Chat width={22} height={22} />
      </button>
    );
  }

  return (
    <div role="dialog" aria-label="Virtual assistant" className="asst-panel">
      <div className="asst-hd">
        <div className="av">G</div>
        <div>
          <div className="t">Guide</div>
          <div className="s">
            <span className="dot-live" /> Always on · 24/7
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="asst-x"
        >
          <Close width={16} height={16} />
        </button>
      </div>

      <div ref={bodyRef} className="asst-body">
        {messages.map((m, i) => (
          <div key={i} className={`asst-msg ${m.who}`}>
            {m.text}
          </div>
        ))}
        {busy && (
          <div className="asst-msg bot" style={{ opacity: 0.7 }}>
            …thinking
          </div>
        )}
        {messages.length <= 1 && (
          <div className="asst-chip-row">
            {QUICK_CHIPS.map((c) => (
              <button key={c} type="button" onClick={() => send(c)} className="asst-chip">
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        className="asst-in"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything…"
          aria-label="Message"
        />
        <button type="submit" aria-label="Send">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 11l18-8-8 18-2-8-8-2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
