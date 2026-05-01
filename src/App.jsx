
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Wifi, Leaf, Users, MapPin, Phone, Mail, Calendar, ArrowRight, Waves, Car, Sun, Menu, X } from "lucide-react";

const exteriorImages = [
  "/images/belterra-family-street.jpg",
  "/images/belterra-night-front.jpg",
  "/images/belterra-sunset-street.jpg",
  "/images/belterra-pool.jpg",
  "/images/belterra-private-pool.jpg",
  "/images/belterra-siteplan.jpg",
];

const interiorImages = [
  "/images/belterra-kitchen.jpg",
  "/images/belterra-living-terrace.jpg",
  "/images/belterra-dining.jpg",
  "/images/belterra-living-room.jpg",
  "/images/belterra-bedroom.jpg",
  "/images/belterra-bathroom.jpg",
  "/images/belterra-stairs.jpg",
];

function Logo({ dark = true, compact = false }) {
  return (
    <div className={`logo ${dark ? "logo-dark" : "logo-light"}`}>
      <img src="/images/belterra-logo.png" alt="Belterra Residences by Aventus" />
      {!compact && <div className="logo-fallback">BELTERRA</div>}
    </div>
  );
}

function Button({ children, variant = "dark" }) {
  return (
    <a href="#contact" className={`button ${variant === "dark" ? "button-dark" : "button-light"}`}>
      {children} <ArrowRight size={15} />
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Residences", "Smart Living", "Community", "Location", "Gallery", "Availability"];
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-logo"><Logo compact /></a>
        <nav className="nav-links">
          {links.map((l) => <a key={l} href={`#${l.toLowerCase().replaceAll(" ", "-")}`}>{l}</a>)}
          <a className="nav-cta" href="#contact">Register Interest</a>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="mobile-menu">
          {links.map((l) => <a key={l} onClick={() => setOpen(false)} href={`#${l.toLowerCase().replaceAll(" ", "-")}`}>{l}</a>)}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:.8}} className="hero-copy">
          <Logo />
          <p className="eyebrow">La Cala de Mijas</p>
          <h1>Future-Ready Family Homes</h1>
          <p className="lead">Secure community living, intelligent comfort and long-term value in a modern Costa del Sol residential collection.</p>
          <div className="button-row"><Button>Register Interest</Button><Button variant="light">Request Brochure</Button></div>
          <div className="feature-grid">
            {[[Shield,"Secure Community"],[Wifi,"Smart Living"],[Leaf,"Sustainable Design"],[Users,"Built for Families"]].map(([Icon, t]) => (
              <div key={t} className="feature"><Icon size={24}/><p>{t}</p></div>
            ))}
          </div>
        </motion.div>
        <div className="hero-image">
          <img src="/images/belterra-family-street.jpg" alt="Belterra family street" />
          <div className="price-badge"><span>From</span><strong>€595,000</strong></div>
        </div>
      </div>
    </section>
  );
}

function SplitIntro() {
  return (
    <section className="split section-white">
      <img src="/images/belterra-living-terrace.jpg" alt="Belterra living room opening to terrace" />
      <div className="split-copy">
        <p className="eyebrow">About Belterra</p>
        <h2>Designed for modern family living.</h2>
        <p>Belterra combines warm Mediterranean architecture with Scandinavian clarity: private outdoor space, calm interiors, smart-ready homes and a secure community setting.</p>
        <div className="stats">
          {[["70","Modern homes"],["3 & 4","Bedroom layouts"],["Private","Pools & gardens"],["A/A+","Efficiency ambition"]].map(([a,b])=><div key={b}><strong>{a}</strong><span>{b}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function Residences() {
  return (
    <section id="residences" className="section center">
      <p className="eyebrow">The Residences</p>
      <h2>Contemporary homes built for life.</h2>
      <p className="section-lead">Spacious 3 & 4 bedroom family homes with private gardens, pools, parking and layouts designed for everyday comfort.</p>
      <div className="cards">
        {[
          ["/images/belterra-kitchen.jpg","Open-plan living","Bright kitchens and living spaces designed for family flow."],
          ["/images/belterra-bedroom.jpg","Comfort & privacy","Warm, calm bedroom suites for secure everyday living."],
          ["/images/belterra-pool.jpg","Private outdoor life","Private pools, terraces and gardens for Costa del Sol life."]
        ].map(([img,title,txt])=>(
          <article className="card" key={title}>
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{txt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SmartLiving() {
  const items = [[Wifi,"Smart-home readiness"],[Car,"EV charging preparation"],[Sun,"Efficient comfort systems"],[Leaf,"Sustainable design approach"]];
  return (
    <section id="smart-living" className="split split-reverse section-white">
      <div className="split-copy">
        <p className="eyebrow">Smart Living</p>
        <h2>Intelligent comfort, built in.</h2>
        <p>The Belterra proposition is not empty luxury. It is practical, future-ready residential value: comfort, efficiency, connectivity and lower-stress ownership.</p>
        <div className="icon-boxes">
          {items.map(([Icon, t])=><div key={t}><Icon/><span>{t}</span></div>)}
        </div>
      </div>
      <img src="/images/belterra-kitchen.jpg" alt="Belterra kitchen" />
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="dark-section">
      <div className="dark-grid">
        <div>
          <p className="eyebrow">Secure Community</p>
          <h2>Peace of mind, every day.</h2>
          <p>A calm, well-planned residential environment with privacy, controlled access logic, light, landscaping and family-friendly internal circulation.</p>
          <div className="check-list">
            {["Gated community positioning", "Privacy by design", "Lock-up-and-leave ownership", "Family-focused internal streets"].map(t=><div key={t}><Shield size={20}/><span>{t}</span></div>)}
          </div>
        </div>
        <img src="/images/belterra-night-front.jpg" alt="Belterra secure community evening" />
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="location">
      <div className="location-copy">
        <p className="eyebrow">Prime Location</p>
        <h2>La Cala de Mijas</h2>
        <p>Close to beach life, golf, international schools, services and Málaga Airport.</p>
        <div className="location-list">
          {[[Waves,"La Cala Beach", "5 min"],[MapPin,"Golf courses", "5–10 min"],[Car,"Marbella", "20 min"],[Car,"Málaga Airport", "25 min"]].map(([Icon,a,b])=><div key={a}><span><Icon size={17}/>{a}</span><strong>{b}</strong></div>)}
        </div>
      </div>
      <img src="/images/belterra-sunset-street.jpg" alt="Belterra La Cala de Mijas location" />
    </section>
  );
}

function Gallery() {
  const all = [...exteriorImages.slice(0,4), ...interiorImages.slice(0,5)];
  return (
    <section id="gallery" className="section-white center">
      <p className="eyebrow">Gallery</p>
      <h2>A visual story of Belterra.</h2>
      <div className="gallery">
        {all.map((img, i)=><img key={img+i} src={img} alt={`Belterra gallery ${i+1}`} />)}
      </div>
    </section>
  );
}

function Availability() {
  return (
    <section id="availability" className="availability">
      <div className="availability-copy">
        <p className="eyebrow">Availability</p>
        <h2>Pre-launch pricing from €595,000.</h2>
        <p>Availability is released by phase to protect value and create a disciplined launch. Register interest to receive the latest unit release, plans and reservation process.</p>
        <div className="pill-row"><span>Phase 1</span><span>Limited Release</span><span>Private Viewings</span></div>
      </div>
      <ContactForm />
    </section>
  );
}

function ContactForm() {
  return (
    <form className="contact-form">
      <h3>Request current availability</h3>
      {['Name','Email','Phone / WhatsApp','Country'].map(p=><input key={p} placeholder={p} />)}
      <select><option>Purpose: family home / second home / investment</option></select>
      <button type="button">Send request</button>
    </form>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-grid">
        <div><Logo dark={false}/><p>Future-ready family homes in La Cala de Mijas. Secure community living, intelligent comfort and long-term value.</p></div>
        <div><h4>Contact</h4><p><Phone size={16}/> +34 000 000 000</p><p><Mail size={16}/> info@barter.es</p></div>
        <div><h4>Next Step</h4><a className="footer-button" href="#availability"><Calendar size={15}/> Book Viewing</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <SplitIntro />
      <Residences />
      <SmartLiving />
      <Community />
      <Location />
      <Gallery />
      <Availability />
      <Footer />
    </main>
  );
}
