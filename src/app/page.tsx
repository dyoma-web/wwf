import { locales } from "@/i18n/config";

// Export estático → no hay proxy que redirija `/` al locale.
// Esta página se pre-renderiza como HTML plano con redirect por JS
// y botones de idioma como fallback para navegadores sin JavaScript.
export default function RootPage() {
  const script = `(function(){
    var list = ${JSON.stringify(locales)};
    var lang = (navigator.language || "en").slice(0, 2).toLowerCase();
    var target = list.indexOf(lang) !== -1 ? lang : "en";
    window.location.replace("./" + target + "/");
  })();`;

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        padding: 40,
      }}
    >
      <div style={{ maxWidth: 360, width: "100%", textAlign: "center" }}>
        <h1 className="h-display" style={{ fontSize: 22, marginBottom: 8 }}>
          Sustainable Finance for Conservation
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 24, fontSize: 14 }}>
          Choose a language · Elige un idioma · Choisissez une langue
        </p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {locales.map((l) => (
            <a key={l} href={`./${l}/`} className="btn">
              {l.toUpperCase()}
            </a>
          ))}
        </div>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </div>
    </div>
  );
}
