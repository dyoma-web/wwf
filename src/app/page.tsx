import { locales } from "@/i18n/config";

// Export estático → no hay middleware/proxy que redirija `/` al locale.
// Esta página se pre-renderiza como HTML plano con un redirect por JS
// y botones de idioma como fallback para navegadores sin JavaScript.
export default function RootPage() {
  const script = `(function(){
    var list = ${JSON.stringify(locales)};
    var lang = (navigator.language || "en").slice(0, 2).toLowerCase();
    var target = list.indexOf(lang) !== -1 ? lang : "en";
    window.location.replace("./" + target + "/");
  })();`;

  return (
    <div className="min-h-[60vh] grid place-items-center p-10">
      <div className="max-w-sm w-full text-center">
        <h1 className="h-display text-2xl mb-2">
          Sustainable Finance for Conservation
        </h1>
        <p className="text-[color:var(--color-muted)] mb-6 text-sm">
          Choose a language · Elige un idioma · Choisissez une langue
        </p>
        <div className="flex gap-2 justify-center">
          {locales.map((l) => (
            <a
              key={l}
              href={`./${l}/`}
              className="px-5 py-3 bg-[color:var(--color-ink)] text-white text-[13px] font-semibold tracking-[0.08em] rounded-[4px] no-underline hover:bg-[color:var(--color-orange)]"
            >
              {l.toUpperCase()}
            </a>
          ))}
        </div>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </div>
    </div>
  );
}
