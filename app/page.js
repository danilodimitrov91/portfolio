import ContactForm from './components/ContactForm';

const projects = [
  {
    href: 'https://rasveta.sajtovi.dev',
    img: '/images/starlight.webp',
    name: 'StarLight',
    category: 'Rasveta',
    badge: 'U izradi',
    desc: 'Onlajn prodavnica rasvete — preko 5000 proizvoda od različitih dobavljača: lusteri, LED trake i sijalice po kategorijama. Sajt je trenutno u izradi.',
  },
  {
    href: 'https://supstrat.com',
    img: '/images/supstrat.webp',
    name: 'Supstrat.com',
    category: 'Biljke',
    desc: 'Prodavnica prirodnih supstrata za orhideje i aroide — ručno sortirano i prosušeno, dostava širom Srbije.',
  },
  {
    href: 'https://netoglasi.rs',
    img: '/images/netoglasi.webp',
    name: 'netOGLASI.rs',
    category: 'Oglasi',
    desc: 'Oglasnik za kupoprodaju — pretraga po kategorijama, lokaciji i ceni, uz objavu oglasa u par klikova.',
  },
  {
    href: 'https://paminjami.rs',
    img: '/images/paminjami.webp',
    name: 'PamiNjami.rs',
    category: 'Ketering',
    desc: 'Online meni za ketering servis iz Dimitrovgrada — ponuda, cene i poručivanje slanih i slatkih zalogaja za proslave.',
  },
  {
    href: 'https://odklikadoslika.rs',
    img: '/images/odklikadoslika.webp',
    name: 'OdKlikaDoSlika.rs',
    category: 'Fotografija',
    desc: 'Digitalna galerija za venčanja i proslave — gosti dele fotografije skeniranjem jednog QR koda, bez instalacije aplikacije.',
  },
  {
    href: 'https://galerija.vip',
    img: '/images/galerija-vip.webp',
    name: 'Galerija.vip',
    category: 'SaaS',
    desc: 'Platforma za profesionalne fotografe — skladištenje, deljenje i isporuka fotografija klijentima na jednom mestu.',
  },
  {
    href: 'https://uni-print.rs',
    img: '/images/uni-print.webp',
    name: 'Uni-print.rs',
    category: 'Štampa',
    desc: 'Sajt štamparije iz Niša — ponuda reklamnih materijala, kožne galanterije i štamparskih mašina, sa katalogom po kategorijama.',
  },
  {
    href: 'https://digitec.rs',
    img: '/images/digitec.webp',
    name: 'Digitec.rs',
    category: 'Štampa',
    desc: 'Onlajn prodavnica reklamnih materijala iz Beograda — poklon programi, tekstil, obuća i štampa na jednom mestu.',
  },
  {
    href: 'https://focuspromo.rs',
    img: '/images/focuspromo.webp',
    name: 'FocusPromo.rs',
    category: 'Štampa',
    desc: 'Sajt proizvođača radnih uniformi iz Niša — ponuda reklamnih materijala, tekstila i sportske opreme po kategorijama.',
  },
];

const services = [
  { num: '01', title: 'Izrada sajtova', desc: 'Dizajn i razvoj od nule, građen oko konverzije i brzine.' },
  { num: '02', title: 'Redizajn', desc: 'Stari sajt, novi udarac. Bez gubljenja SEO pozicija.' },
  { num: '03', title: 'Održavanje', desc: 'Sajt koji radi 24/7, bez tebe da brineš o tome.' },
  { num: '04', title: 'Domen', desc: 'Pomoć oko izbora i kupovine domena koji pristaje tvom brendu.' },
  { num: '05', title: 'Hosting', desc: 'Hostovanje sajta na pouzdanoj infrastrukturi, bez glavobolje oko servera.' },
  { num: '06', title: 'SEO saveti', desc: 'Osnovna SEO podešavanja i preporuke da te ljudi lakše pronađu.' },
];

const pricingFactors = [
  { num: '01', title: 'Broj stranica', desc: 'One-page sajt ili sajt sa više posebnih stranica — obim posla direktno utiče na cenu.' },
  { num: '02', title: 'Prodavnica', desc: 'Obična prezentacija ili onlajn prodavnica sa katalogom i pretragom proizvoda.' },
  { num: '03', title: 'Naručivanje', desc: 'Da li sajt ima opciju za onlajn poručivanje i plaćanje, ili je samo za prikaz ponude.' },
  { num: '04', title: 'Napredne opcije', desc: 'Automatsko ažuriranje i preuzimanje proizvoda direktno od dobavljača.' },
  { num: '05', title: 'Dodatne funkcionalnosti', desc: 'Svaka posebna funkcionalnost koju klijent zahteva, van standardnog obima projekta.' },
  { num: '06', title: 'Integracije', desc: 'Povezivanje sa spoljnim servisima — plaćanje karticom, CRM, email marketing i slično.' },
];

const marqueeItems = ['DIZAJN', 'RAZVOJ', 'BREND', 'KONVERZIJA', 'BRZINA'];

export default function Home() {
  return (
    <div className="wrap">
      <header className="header">
        <a href="#" className="logo">
          sajtovi<span className="accent">.</span>dev
        </a>
        <nav className="nav">
          <a href="#projekti" className="nav-link">Projekti</a>
          <a href="#usluge" className="nav-link">Usluge</a>
          <a href="#cena" className="nav-link">Cena</a>
          <a href="#o-meni" className="nav-link">O meni</a>
        </nav>
        <a href="#kontakt" className="btn-cta">Započni projekat →</a>
      </header>

      <section className="hero">
        <h1 className="hero-title">
          Izrada sajtova<br />koji se <span className="accent">pamte.</span>
        </h1>
        <div className="hero-row">
          <p className="hero-desc">
            Ne pravim još jedan generički sajt. Pravim digitalna iskustva koja klijenti pamte. Dokazani projekti ispod.
          </p>
          <div className="hero-actions">
            <a href="#projekti" className="btn-outline">Vidi radove</a>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {marqueeItems.map((item) => (
            <span className="marquee-item" key={item}>{item} ✦</span>
          ))}
        </div>
      </div>

      <section id="usluge" className="section">
        <h2 className="section-title">Šta radim<span className="accent">.</span></h2>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.num}>
              <div className="service-num">{s.num}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projekti" className="projects-section">
        <div className="projects-header">
          <h2 className="projects-title">Radovi<span className="accent">.</span></h2>
          <p className="projects-sub">Devet sajtova, različite industrije, isti fokus: rezultat.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="proj-card" key={p.name}>
              <div className="proj-thumb">
                <img className="proj-img" src={p.img} alt={p.name} />
                <div className="proj-overlay">
                  <p className="proj-desc">{p.desc}</p>
                </div>
              </div>
              <div className="proj-info">
                <div>
                  <div className="proj-cat-row">
                    <span className="proj-category">{p.category}</span>
                    {p.badge && <span className="proj-badge">{p.badge}</span>}
                  </div>
                  <h3 className="proj-name">{p.name}</h3>
                </div>
                <span className="proj-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="cena" className="section">
        <div className="pricing-header">
          <h2 className="section-title">Kako se formira cena<span className="accent">.</span></h2>
          <p className="pricing-intro">Cena zavisi od par ključnih stvari:</p>
        </div>
        <div className="pricing-grid">
          {pricingFactors.map((f) => (
            <div className="pricing-card" key={f.num}>
              <div className="pricing-num">{f.num}</div>
              <h3 className="pricing-title">{f.title}</h3>
              <p className="pricing-desc">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Pošalji mi par detalja o projektu i javljam se sa konkretnom ponudom — <a href="#kontakt">bez obaveza</a>.
        </p>
      </section>

      <section id="o-meni" className="about-section">
        <div className="about-photo">
          <img className="about-photo-img" src="/images/portret.webp" alt="Danilo Dimitrov" />
        </div>
        <div>
          <h2 className="about-title">
            O meni<span className="accent">.</span>
          </h2>
          <p className="about-text">
            Zovem se Danilo Dimitrov, po struci inženjer telekomunikacija i računarstva. Programiranjem se bavim
            dugi niz godina — od pre nego što je AI bio deo svakodnevnog posla, pa sve do danas.
          </p>
          <p className="about-text">
            To iskustvo ugrađujem u svaki sajt koji napravim, uz nove alate koji mi pomažu da radim brže i
            preciznije. Cilj mi je jednostavan — zadovoljan klijent na kraju svakog projekta.
          </p>
        </div>
      </section>

      <section id="kontakt" className="contact-section">
        <div className="contact-box">
          <h2 className="contact-title">Hajde da pravimo<br />nešto veliko.</h2>
          <p className="contact-desc">Bez obaveza. Samo razgovor o vašem sledećem projektu.</p>
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <span className="footer-copy">© 2026 sajtovi.dev — Sva prava zadržana.</span>
        <div className="footer-social">
          <a href="https://www.facebook.com/danilo.dimitrov" target="_blank" rel="noopener noreferrer" className="footer-link">
            <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12.06C22 6.48 17.52 2 11.94 2S1.88 6.48 1.88 12.06c0 5.02 3.68 9.18 8.48 9.94v-7.03H7.9v-2.91h2.46V9.91c0-2.43 1.44-3.77 3.65-3.77 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.58.75-1.58 1.52v1.82h2.69l-.43 2.91h-2.26V22c4.8-.76 8.48-4.92 8.48-9.94Z" />
            </svg>
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/danilo-dimitrov-b2454415a/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
