import ContactForm from './components/ContactForm';

const projects = [
  {
    href: 'https://netoglasi.rs',
    img: '/images/netoglasi.png',
    name: 'netOGLASI.rs',
    category: 'Oglasi',
    desc: 'Oglasnik za kupoprodaju — pretraga po kategorijama, lokaciji i ceni, uz objavu oglasa u par klikova.',
  },
  {
    href: 'https://paminjami.rs',
    img: '/images/paminjami.png',
    name: 'PamiNjami.rs',
    category: 'Ketering',
    desc: 'Online meni za ketering servis iz Dimitrovgrada — ponuda, cene i poručivanje slanih i slatkih zalogaja za proslave.',
  },
  {
    href: 'https://odklikadoslika.rs',
    img: '/images/odklikadoslika.png',
    name: 'OdKlikaDoSlika.rs',
    category: 'Fotografija',
    desc: 'Digitalna galerija za venčanja i proslave — gosti dele fotografije skeniranjem jednog QR koda, bez instalacije aplikacije.',
  },
  {
    href: 'https://supstrat.com',
    img: '/images/supstrat.png',
    name: 'Supstrat.com',
    category: 'Biljke',
    desc: 'Prodavnica prirodnih supstrata za orhideje i aroide — ručno sortirano i prosušeno, dostava širom Srbije.',
  },
  {
    href: 'https://netoglasi.rs/starlight/claude/v2-minimal.html',
    img: '/images/starlight.png',
    name: 'StarLight',
    category: 'Rasveta',
    badge: 'U izradi',
    desc: 'Onlajn prodavnica rasvete — lusteri, LED trake i sijalice po kategorijama. Sajt je trenutno u izradi.',
  },
  {
    href: 'https://galerija.vip',
    img: '/images/galerija-vip.png',
    name: 'Galerija.vip',
    category: 'SaaS',
    desc: 'Platforma za profesionalne fotografe — skladištenje, deljenje i isporuka fotografija klijentima na jednom mestu.',
  },
];

const services = [
  { num: '01', title: 'Izrada sajtova', desc: 'Dizajn i razvoj od nule, građen oko konverzije i brzine.' },
  { num: '02', title: 'Redizajn', desc: 'Stari sajt, novi udarac. Bez gubljenja SEO pozicija.' },
  { num: '03', title: 'Održavanje', desc: 'Sajt koji radi 24/7, bez tebe da brineš o tome.' },
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
          <p className="projects-sub">Šest sajtova, šest industrija, isti fokus: rezultat.</p>
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

      <section id="o-meni" className="about-section">
        <div className="about-photo">
          <span className="about-photo-text">portret fotografija</span>
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
          <a href="https://www.linkedin.com/in/danilo-dimitrov-b2454415a/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
