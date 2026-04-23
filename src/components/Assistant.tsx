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

    // Mock hasta que el backend del asistente exista
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
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[color:var(--color-ink)] text-white grid place-items-center shadow-lg hover:bg-black z-40"
      >
        <Chat width={22} height={22} />
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-label="Virtual assistant"
      className="fixed bottom-6 right-6 w-[340px] max-w-[calc(100vw-2rem)] bg-white border border-[color:var(--color-line)] rounded-md shadow-2xl z-40 flex flex-col overflow-hidden"
    >
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[color:var(--color-line)] bg-[color:var(--color-paper)]">
        <div className="w-8 h-8 rounded-full bg-[color:var(--color-ink)] text-white grid place-items-center font-bold text-sm">
          G
        </div>
        <div className="flex-1">
          <div className="text-[13px] font-semibold">Guide</div>
          <div className="text-[11px] text-[color:var(--color-muted)] flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full" /> Always on · 24/7
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="w-8 h-8 grid place-items-center text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
        >
          <Close width={16} height={16} />
        </button>
      </div>

      <div ref={bodyRef} className="flex-1 p-3 max-h-[360px] overflow-y-auto flex flex-col gap-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-[13px] px-3 py-2 rounded-md max-w-[85%] ${
              m.who === "user"
                ? "self-end bg-[color:var(--color-ink)] text-white"
                : "self-start bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
            }`}
          >
            {m.text}
          </div>
        ))}
        {busy && (
          <div className="self-start text-[13px] px-3 py-2 rounded-md bg-[color:var(--color-paper)] opacity-70">
            …thinking
          </div>
        )}
        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {QUICK_CHIPS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => send(c)}
                className="text-[11.5px] px-2.5 py-1.5 rounded-full border border-[color:var(--color-line)] hover:bg-[color:var(--color-paper)]"
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        className="flex gap-2 p-3 border-t border-[color:var(--color-line)]"
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
          className="flex-1 px-3 py-2 text-[13px] border border-[color:var(--color-line)] rounded-md focus:outline-none focus:border-[color:var(--color-orange)]"
        />
        <button
          type="submit"
          className="px-3 py-2 text-[13px] bg-[color:var(--color-orange)] text-white rounded-md hover:bg-[color:var(--color-orange-ink)]"
        >
          Send
        </button>
      </form>
    </div>
  );
}
