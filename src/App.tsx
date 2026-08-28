import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Code2,
  Database,
  Facebook,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Play,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  X,
  Zap,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/6803554/pexels-photo-6803554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const retailImage = 'https://images.pexels.com/photos/13068364/pexels-photo-13068364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const clientImage = 'https://images.pexels.com/photos/10041240/pexels-photo-10041240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

type IconComponent = typeof Code2;

type Service = {
  icon: IconComponent;
  number: string;
  title: string;
  description: string;
  accent: string;
};

const services: Service[] = [
  { icon: Code2, number: '01', title: 'Custom Software', description: 'Purpose-built platforms that fit the way your business actually works.', accent: 'lime' },
  { icon: MonitorSmartphone, number: '02', title: 'Web Applications', description: 'Fast, responsive digital experiences that turn attention into action.', accent: 'coral' },
  { icon: BarChart3, number: '03', title: 'Business Systems', description: 'Clearer operations with connected data, automation, and smart reporting.', accent: 'blue' },
  { icon: Store, number: '04', title: 'POS & Retail Tech', description: 'Modern tools for smoother stores, happier teams, and loyal customers.', accent: 'gold' },
  { icon: Layers3, number: '05', title: 'CRM & ERP Solutions', description: 'One source of truth for your relationships, resources, and growth.', accent: 'sky' },
  { icon: Palette, number: '06', title: 'UI/UX Design', description: 'Thoughtful interfaces that make complex products feel simple.', accent: 'pink' },
];

const projects = [
  { title: 'Nava Retail OS', category: 'Retail', image: retailImage, tag: 'Web app', year: '2024' },
  { title: 'Ledgerly', category: 'Finance', image: heroImage, tag: 'Dashboard', year: '2024' },
  { title: 'Heritage CRM', category: 'Services', image: clientImage, tag: 'CRM platform', year: '2023' },
];

const processSteps = [
  ['01', 'Listen & map', 'We start with your people, goals, and the small friction points worth fixing.'],
  ['02', 'Shape the idea', 'Strategy, user journeys, and a clear plan before a single line of code.'],
  ['03', 'Build with care', 'Design and development move together, with regular touchpoints throughout.'],
  ['04', 'Launch & grow', 'We stay close after launch to keep your product useful and moving forward.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All work');
  const [submitted, setSubmitted] = useState(false);

  const visibleProjects = activeFilter === 'All work'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        Building the digital future, rooted in what matters
        <ArrowUpRight size={14} />
      </div>

      <header className="header">
        <a className="logo" href="#top" onClick={closeMenu} aria-label="Tech Riwaayat home">
          <span className="logo-mark"><span /></span>
          <span>Tech <b>Riwaayat</b></span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="button button-dark header-cta" href="#contact">Start a project <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> Digital craft, made human</div>
            <h1>Technology that feels <em>like you.</em></h1>
            <p className="hero-text">We design and build digital products that help ambitious businesses grow — with clarity, character, and a little more soul.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Get a quote <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#work"><span className="play-icon"><Play size={12} fill="currentColor" /></span> See our work</a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <span className="avatar avatar-one">AK</span><span className="avatar avatar-two">SM</span><span className="avatar avatar-three">ZA</span>
              </div>
              <div><strong>50+ businesses</strong><small>have grown with us</small></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="hero-card hero-photo-card"><img src={heroImage} alt="Team collaborating around a screen" /><div className="photo-label"><span>01 / 04</span><strong>Ideas, made tangible.</strong></div></div>
            <div className="hero-card stat-card"><span className="mini-label">Our sweet spot</span><strong>Human<br /><i>×</i> digital</strong><div className="stat-line"><span>Strategy</span><b>84%</b></div><div className="progress"><span /></div></div>
            <div className="floating-pill"><span className="pulse" /> Available for new projects</div>
          </div>
        </section>

        <section className="marquee-band" aria-label="Our capabilities">
          <div className="marquee-track"><span>Web development <i>✦</i></span><span>Product design <i>✦</i></span><span>Business systems <i>✦</i></span><span>Digital strategy <i>✦</i></span><span>Web development <i>✦</i></span><span>Product design <i>✦</i></span></div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-kicker">( About us )</div>
          <div className="about-grid">
            <h2>Good tech starts<br />with a <span>good question.</span></h2>
            <div className="about-copy"><p>Tech Riwaayat is a software and design studio for businesses ready to do things a little differently. We bring strategy, design, and engineering into one thoughtful team.</p><p>Our name means <strong>the tradition of tech</strong> — a belief that great work is built on trust, craft, and relationships that last.</p><a className="arrow-link" href="#services">More about our approach <ArrowUpRight size={17} /></a></div>
          </div>
          <div className="values-row"><div><ShieldCheck size={21} /><strong>Built to last</strong><span>Thoughtful foundations, not quick fixes.</span></div><div><Users size={21} /><strong>People first</strong><span>Technology that serves your people.</span></div><div><Zap size={21} /><strong>Wonderfully clear</strong><span>Complexity, made beautifully simple.</span></div></div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap"><div className="section-heading"><div><div className="section-kicker">( What we do )</div><h2>From first thought<br />to <span>full flight.</span></h2></div><p>Whether you're starting from a sketch or untangling something that already exists, we help turn good ideas into useful, beautiful software.</p></div>
            <div className="services-grid">{services.map(({ icon: Icon, number, title, description, accent }) => <article className={`service-card ${accent}`} key={number}><div className="service-top"><span className="service-number">{number}</span><Icon size={25} strokeWidth={1.6} /></div><h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></a></article>)}</div>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading work-heading"><div><div className="section-kicker">( Selected work )</div><h2>Made with intent.<br /><span>Built for impact.</span></h2></div><div className="filter-tabs">{['All work', 'Retail', 'Finance', 'Services'].map((filter) => <button className={activeFilter === filter ? 'active' : ''} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div>
          <div className="projects-grid">{visibleProjects.map((project, index) => <article className={`project-card project-${index}`} key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span>{project.tag}</span><a href="#contact" aria-label={`View ${project.title}`}><ArrowUpRight size={19} /></a></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.category} · {project.year}</p></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div></article>)}</div>
          <div className="center-link"><a className="arrow-link" href="#contact">View all projects <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="process-section" id="process"><div className="section-wrap"><div className="section-heading"><div><div className="section-kicker">( How we work )</div><h2>A process with<br /><span>purpose.</span></h2></div><p>No mystery, no disappearing acts. Just a clear, collaborative path from a promising idea to something you're proud to put in the world.</p></div><div className="process-grid">{processSteps.map(([number, title, description], index) => <div className={`process-step ${index === 0 ? 'current' : ''}`} key={number}><span className="process-number">{number}</span>{index < processSteps.length - 1 && <span className="process-line" />}<h3>{title}</h3><p>{description}</p></div>)}</div></div></section>

        <section className="testimonial section-wrap"><div className="quote-mark"><Quote size={30} /></div><blockquote>“They didn't just build us a platform. They helped us see our business in a completely new way.”</blockquote><div className="testimonial-person"><img src={clientImage} alt="A Tech Riwaayat client" /><div><strong>Sarah Malik</strong><span>Founder, Naya Home</span></div><div className="testimonial-dots"><span className="active" /><span /><span /></div></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div className="contact-copy"><div className="section-kicker">( Have a project in mind? )</div><h2>Let's make<br /><span>something good.</span></h2><p>Tell us a little about what you're building. We usually reply within two working days.</p><div className="contact-details"><a href="mailto:hello@techriwaayat.com"><Mail size={18} /> hello@techriwaayat.com</a><a href="https://wa.me/923001234567"><MessageCircle size={18} /> +92 300 123 4567</a><span><Globe2 size={18} /> Lahore · Karachi · Everywhere</span></div></div><div className="contact-form-wrap">{submitted ? <div className="success-message"><div className="success-icon"><Check size={28} /></div><h3>Thanks for reaching out.</h3><p>Your note is on its way. We'll be in touch within two working days.</p><button className="button button-outline" onClick={() => setSubmitted(false)}>Send another message</button></div> : <form onSubmit={handleSubmit}><div className="form-row"><label>Name<input name="name" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label></div><label>What can we help with?<select defaultValue=""><option value="" disabled>Select an option</option><option>Custom software</option><option>Web application</option><option>Business systems</option><option>Something else</option></select></label><label>Tell us a little more<textarea name="message" placeholder="A few words about your project..." rows={4} required /></label><button className="button button-primary form-submit" type="submit">Send enquiry <Send size={16} /></button></form>}</div></div></section>
      </main>

      <footer className="footer"><div className="footer-top"><a className="logo" href="#top"><span className="logo-mark"><span /></span><span>Tech <b>Riwaayat</b></span></a><p>Digital products with a human touch.</p><div className="socials"><a href="#top" aria-label="Instagram"><Instagram size={17} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="#top" aria-label="Facebook"><Facebook size={17} /></a></div></div><div className="footer-bottom"><span>© 2024 Tech Riwaayat. All rights reserved.</span><div><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Back to top ↑</a></div></div></footer>
    </div>
  );
}

export default App;
