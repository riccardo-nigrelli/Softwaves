import Image from "next/image";
import logo from "@/public/sw-logo.svg";
import * as motion from "motion/react-client";
import Method from "@/components/Method";
import TechStack from "@/components/TechStack";
import { reveal } from "@/lib/motion";
import { SITE, SITE_URL } from "@/lib/site";

// Tecnologie section is hidden for now; flip to true to bring it (and its nav link) back.
const SHOW_TECH = false;

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

const Check = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0056A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const icon = (stroke: string, d: React.ReactNode, size = 20, width = 1.8) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);

const SOURCES = [
  { name: "Email", sub: "ordini, richieste", d: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 8 7.2 4.8a1.6 1.6 0 0 0 1.6 0L20 8" /></> },
  { name: "Excel", sub: "listini, anagrafiche", d: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M4 9h16M4 15h16M10 3v18" /></> },
  { name: "Macchine", sub: "sensori, dispositivi", d: <><rect x="3" y="7" width="18" height="10" rx="2" /><path d="M7 17v3M17 17v3M7 11h4M15 11h2" /></> },
];

const OUTPUTS = [
  { name: "Gestionale aggiornato", sub: "ERP, CRM, magazzino", d: <><ellipse cx="12" cy="6" rx="7" ry="2.6" /><path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" /></> },
  { name: "Report in tempo reale", sub: "per chi decide", d: <><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M7 16v-3M11 16V9M15 16v-5" /></> },
];

const SERVICES = [
  { title: "Dati e dashboard", desc: "Trasformiamo i dati sparsi in numeri chiari, sempre aggiornati.", items: ["KPI in tempo reale", "Storico e tracciabilità completi"], d: <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /> },
  { title: "Applicazioni su misura", desc: "Web, desktop e mobile, disegnate intorno a come lavori davvero.", items: ["Per ufficio, magazzino e produzione", "Interfacce chiare, pronte da usare"], d: <><rect x="3" y="4" width="18" height="13" rx="2.5" /><path d="M8 21h8M12 17v4" /></> },
  { title: "Integrazioni e API", desc: "Colleghiamo i tuoi sistemi, vecchi e nuovi, in un unico ecosistema.", items: ["API sicure e documentate", "Migrazioni senza fermare il lavoro"], d: <path d="M8 7 3 12l5 5M16 7l5 5-5 5" /> },
];

function SectionHead({ eyebrow, title, id, lead, eyebrowClass = "" }: { eyebrow: string; title: string; id: string; lead: string; eyebrowClass?: string }) {
  return (
    <motion.div className="sec-head" {...reveal()}>
      <div>
        <p className={`eyebrow ${eyebrowClass}`}>{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      <p className="sec-lead">{lead}</p>
    </motion.div>
  );
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      slogan: SITE.slogan,
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      vatID: SITE.vatID,
      areaServed: { "@type": "Country", name: "Italia" },
      contactPoint: { "@type": "ContactPoint", contactType: "sales", email: SITE.email, telephone: SITE.phone, availableLanguage: ["Italian", "English"] },
      knowsAbout: ["Automazione dei processi", "Software su misura", "Integrazioni e API", "Dati e dashboard", "ERP", "CRM"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servizi",
        itemListElement: ["Automazione dei processi", ...SERVICES.map((s) => s.title)].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      inLanguage: "it-IT",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }} />
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#top" aria-label="Softwaves — home" className="brand">
            <Image src={logo} alt="Softwaves" width={172} height={30} priority />
          </a>
          <nav aria-label="Sezioni" className="nav">
            <a href="#servizi">Servizi</a>
            <a href="#metodo">Metodo</a>
            {SHOW_TECH && <a href="#tecnologie">Tecnologie</a>}
            <a href="#contatti" className="nav-cta">Parliamone</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-h">
          <div aria-hidden="true" className="hero-panel">
            <div className="bg-grid" />
          </div>
          <div aria-hidden="true" className="hero-stripe" />
          <div className="wrap hero-inner">
            <motion.div className="hero-copy" {...rise()}>
              <h1 id="hero-h">Take your business <span className="grad-text">up to date</span>.</h1>
              <p className="lead">Automatizziamo i processi che oggi ti rubano tempo: dati ricopiati a mano, file che girano per email, sistemi che non si parlano. Software su misura, dall&apos;idea alla messa in opera.</p>
              <div className="btn-row">
                <a href="#contatti" className="btn btn-primary">Prenota una call <span aria-hidden="true">→</span></a>
                <a href="#servizi" className="btn btn-ghost">Cosa facciamo</a>
              </div>
            </motion.div>

            <motion.figure className="flow" {...rise(0.15)}>
              <figcaption className="flow-cap">
                <span className="flow-title">Il tuo flusso, automatizzato</span>
                <span className="live"><span className="live-dot" />Live</span>
              </figcaption>
              <div className="flow-sources">
                {SOURCES.map((s) => (
                  <div key={s.name} className="src">
                    <span className="ico ico-blue">{icon("#0056A4", s.d)}</span>
                    <span className="lbl"><b>{s.name}</b><small>{s.sub}</small></span>
                  </div>
                ))}
              </div>
              <svg aria-hidden="true" viewBox="0 0 300 56" className="flow-wires">
                <g fill="none" stroke="#DDE7F1" strokeWidth="2" strokeLinecap="round">
                  <path d="M50 0 C 50 30, 150 26, 150 56" />
                  <path d="M150 0 L 150 56" />
                  <path d="M250 0 C 250 30, 150 26, 150 56" />
                </g>
                <circle r="4" fill="#0056A4"><animateMotion dur="2.4s" repeatCount="indefinite" path="M50 0 C 50 30, 150 26, 150 56" /></circle>
                <circle r="4" fill="#F59C00"><animateMotion dur="2.4s" begin="-.8s" repeatCount="indefinite" path="M150 0 L 150 56" /></circle>
                <circle r="4" fill="#55B0E4"><animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite" path="M250 0 C 250 30, 150 26, 150 56" /></circle>
              </svg>
              <div className="flow-core">
                <span className="flow-core-head">
                  <span className="flow-core-title">Un unico flusso</span>
                  <span className="flow-core-sub">zero copia-incolla</span>
                </span>
                <span className="chips">
                  {["Acquisisce", "Verifica", "Unifica", "Smista"].map((c) => (
                    <span key={c} className="chip"><Check color="#55B0E4" />{c}</span>
                  ))}
                </span>
              </div>
              <svg aria-hidden="true" viewBox="0 0 300 44" className="flow-wires">
                <g fill="none" stroke="#DDE7F1" strokeWidth="2" strokeLinecap="round">
                  <path d="M150 0 C 150 24, 75 20, 75 44" />
                  <path d="M150 0 C 150 24, 225 20, 225 44" />
                </g>
                <circle r="4" fill="#0056A4"><animateMotion dur="1.8s" begin="-1s" repeatCount="indefinite" path="M150 0 C 150 24, 75 20, 75 44" /></circle>
                <circle r="4" fill="#0056A4"><animateMotion dur="1.8s" begin="-1.9s" repeatCount="indefinite" path="M150 0 C 150 24, 225 20, 225 44" /></circle>
              </svg>
              <div className="flow-outputs">
                {OUTPUTS.map((o) => (
                  <div key={o.name} className="out">
                    <span className="ico ico-blue">{icon("#0056A4", o.d)}</span>
                    <span className="lbl"><b>{o.name}</b><small>{o.sub}</small></span>
                  </div>
                ))}
              </div>
            </motion.figure>
          </div>
        </section>

        <section id="servizi" className="wrap section" aria-labelledby="servizi-h">
          <SectionHead eyebrow="Servizi" id="servizi-h" title="Software che lavora al posto tuo." lead="Un unico team dall'analisi al rilascio: interfacce, backend, dati e integrazioni con gli strumenti che già usi." />
          <div className="svc-grid">
            <motion.article className="svc-focus" {...reveal()}>
              <div className="svc-focus-copy">
                <span aria-hidden="true" className="ico-lg">
                  {icon("#55B0E4", <><path d="M4 12a8 8 0 0 1 13.7-5.6L20 9" /><path d="M20 4v5h-5" /><path d="M20 12a8 8 0 0 1-13.7 5.6L4 15" /><path d="M4 20v-5h5" /></>, 24)}
                </span>
                <p className="eyebrow eyebrow-orange">Il nostro focus</p>
                <h3>Automazione dei processi</h3>
                <p>Individuiamo le attività ripetitive e le trasformiamo in flussi automatici. Meno errori, meno attese, più tempo per il lavoro che conta.</p>
              </div>
              <ul className="checks checks-dark">
                <li>Flussi approvativi e documentali digitali</li>
                <li>ERP, CRM e gestionali sempre sincronizzati</li>
                <li>Dati acquisiti in automatico, anche dalle macchine</li>
                <li>Notifiche e report che partono da soli</li>
              </ul>
            </motion.article>
            {SERVICES.map((s, i) => (
              <motion.article key={s.title} className="svc" {...reveal(i * 0.08)}>
                <div className="svc-head">
                  <span aria-hidden="true" className="ico-md">{icon("#0056A4", s.d, 24)}</span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.desc}</p>
                <ul className="checks">
                  {s.items.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="metodo" className="metodo" aria-labelledby="metodo-h">
          <div aria-hidden="true" className="bg-grid" />
          <div className="wrap section">
            <SectionHead eyebrow="Metodo" eyebrowClass="eyebrow-light" id="metodo-h" title="Dall'idea al rilascio, senza sorprese." lead="Tre fasi chiare, un referente dedicato e un risultato concreto a ogni passo." />
            <Method />
          </div>
        </section>

        {SHOW_TECH && (
          <section id="tecnologie" className="band tech-band" aria-labelledby="tec-h">
            <div className="wrap section section-tight">
              <SectionHead eyebrow="Tecnologie" id="tec-h" title="Uno stack moderno e affidabile." lead="Scegliamo tecnologie solide e diffuse: il tuo software resta veloce, sicuro e facile da far evolvere." />
              <TechStack />
            </div>
          </section>
        )}

        <section id="contatti" className="contact-band" aria-labelledby="contatti-h">
          <div className="wrap section contact">
            <motion.div className="contact-copy" {...reveal()}>
              <p className="eyebrow">Contatti</p>
              <h2 id="contatti-h">Hai un processo da semplificare?</h2>
              <p className="sec-lead">Raccontaci come lavori oggi: entro un giorno lavorativo ti rispondiamo con una prima idea concreta.</p>
              <div className="contact-links">
                <a href="mailto:info@softwaves.it" className="contact-link">
                  <span aria-hidden="true" className="ico-solid">{icon("#FFFFFF", <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 8 7.2 4.8a1.6 1.6 0 0 0 1.6 0L20 8" /></>, 21, 1.9)}</span>
                  <span className="lbl"><small>Scrivici</small><b>info@softwaves.it</b></span>
                  <Arrow />
                </a>
                <a href="tel:+393483034041" className="contact-link">
                  <span aria-hidden="true" className="ico-solid">{icon("#FFFFFF", <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.1 5.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />, 21, 1.9)}</span>
                  <span className="lbl"><small>Chiamaci</small><b>+39 348 303 4041</b></span>
                  <Arrow />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>© 2026 Softwaves · P. IVA {SITE.vatID.slice(2)}</p>
        </div>
      </footer>
    </>
  );
}
