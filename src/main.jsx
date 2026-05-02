import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Home, Leaf, Plug, Video, Waves, Car, Mail, Phone, MapPin, Menu, X, CheckCircle2 } from 'lucide-react'
import './styles.css'
import logo from './assets/belterra-logo-approved.png'

import hero from './assets/10.jpg'
import streetFamily from './assets/03.jpg'
import twilightFront from './assets/05.jpg'
import aerial from './assets/60.jpg'
import poolClub from './assets/50.jpg'
import streetWide from './assets/13.jpg'
import privatePool from './assets/42-2.jpg'
import sunsetPool from './assets/45.jpg'
import bathroom from './assets/14.jpg'
import bedroom from './assets/16.jpg'
import living from './assets/08.jpg'
import kitchen from './assets/marbella1.jpg'
import dining from './assets/marbella2.jpg'
import stair from './assets/marbella8.jpg'
import { contact, features, stats } from './data/content'

const gallery = [
  { src: hero, title: 'Private residential street' },
  { src: streetFamily, title: 'Family-focused community' },
  { src: twilightFront, title: 'Secure arrival experience' },
  { src: aerial, title: 'Masterplan overview' },
  { src: poolClub, title: 'Community pool setting' },
  { src: privatePool, title: 'Private garden pool' },
  { src: sunsetPool, title: 'Evening lifestyle' },
  { src: bedroom, title: 'Calm bedroom suite' },
  { src: bathroom, title: 'Spa-inspired bathroom' },
  { src: living, title: 'Warm living spaces' },
  { src: kitchen, title: 'Premium kitchen finish' },
  { src: stair, title: 'Material details' }
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = ['Concept', 'Residences', 'Lifestyle', 'Gallery', 'Investment', 'Contact']
  return (
    <header className="nav">
      <a href="#top"><img src={logo} alt="Belterra Residences by Aventus" /></a>
      <nav>
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
      </nav>
      <a className="navCta" href={`mailto:${contact.email}?subject=Belterra%20Residences%20Price%20List`}>Enquire Now</a>
      <button className="hamb" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && <div className="mobileMenu">{links.map(l => <a key={l} onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`}>{l}</a>)}</div>}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <img src={hero} alt="Belterra homes" />
      <div className="heroOverlay" />
      <motion.div className="heroText" initial="hidden" animate="visible" variants={fadeUp} transition={{duration:.8}}>
        <p className="eyebrow">Belterra Residences by Aventus</p>
        <h1>Future-Ready Family Homes in La Cala de Mijas</h1>
        <p>Secure community living. Intelligent comfort. Long-term value.</p>
        <div className="actions">
          <a className="btn primary" href={`mailto:${contact.email}?subject=Private%20Price%20List%20Request`}>Request Price List <ArrowRight size={18}/></a>
          <a className="btn secondary" href={`https://wa.me/${contact.whatsapp}`} target="_blank">WhatsApp Sales Team</a>
        </div>
      </motion.div>
      <div className="statBar">
        {stats.map(([big, small]) => <div key={big}><strong>{big}</strong><span>{small}</span></div>)}
      </div>
    </section>
  )
}

function Concept() {
  return (
    <section id="concept" className="section split">
      <div>
        <p className="kicker">The smarter Costa del Sol residential play</p>
        <h2>Not just luxury. A safer, smarter, more practical family community.</h2>
      </div>
      <div className="copy">
        <p>Belterra is positioned for families, second-home buyers and long-term owners who want modern design without losing practicality.</p>
        <p>The message is simple: private homes, intelligent comfort, security-led planning and a lifestyle that feels calm, useful and valuable.</p>
      </div>
    </section>
  )
}

function Residences() {
  const cards = [
    [ShieldCheck, 'Secure Community Living', 'A private setting designed for peace of mind and family confidence.'],
    [Home, 'Family-Ready Homes', 'Modern layouts, private outdoor spaces and daily comfort.'],
    [Leaf, 'Long-Term Value', 'A residential concept built around durable demand and resale confidence.']
  ]
  return (
    <section id="residences" className="section">
      <div className="sectionHead">
        <p className="kicker">Residences</p>
        <h2>Designed around real buyer priorities.</h2>
      </div>
      <div className="cards">
        {cards.map(([Icon, title, text]) => (
          <article key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Lifestyle() {
  const icons = [ShieldCheck, Waves, Home, Car, Plug, Home, Video, Leaf]
  return (
    <section id="lifestyle" className="dark">
      <div className="sectionHead centered">
        <p className="kicker">Lifestyle & Technology</p>
        <h2>Every feature has a sales reason.</h2>
      </div>
      <div className="featureGrid">
        {features.map((f, i) => {
          const Icon = icons[i]
          return <div className="feature" key={f}><Icon size={20}/><span>{f}</span></div>
        })}
      </div>
    </section>
  )
}

function VisualStory() {
  return (
    <section className="visualStory">
      <div className="visualText">
        <p className="kicker">Visual Story</p>
        <h2>From secure arrival to private family living.</h2>
        <p>Use the strongest renders as the trust engine: street, masterplan, pool lifestyle and interiors.</p>
      </div>
      <div className="visualGrid">
        <img src={streetFamily} />
        <img src={privatePool} />
        <img src={living} />
        <img src={kitchen} />
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="section gallerySection">
      <div className="sectionHead">
        <p className="kicker">Gallery</p>
        <h2>Approved Belterra visual library.</h2>
      </div>
      <div className="gallery">
        {gallery.map((g, i) => (
          <figure key={i} className={i === 0 || i === 3 ? 'wide' : ''}>
            <img src={g.src} alt={g.title} />
            <figcaption>{g.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Investment() {
  return (
    <section id="investment" className="section split investment">
      <div>
        <p className="kicker">Sales Strategy</p>
        <h2>Built to convert enquiries into reservations.</h2>
        <p className="copy">The website pushes one main action: request the private price list. From there, sales can qualify the buyer, recommend units and create release-phase urgency.</p>
      </div>
      <div className="table">
        <div><span>Positioning</span><strong>Safe · Smart · Family life</strong></div>
        <div><span>Main CTA</span><strong>Private price list request</strong></div>
        <div><span>Buyer logic</span><strong>Long-term value</strong></div>
        <div><span>Location</span><strong>La Cala de Mijas</strong></div>
        <div><span>Developer</span><strong>Aventus</strong></div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <img src={logo} />
      <h2>Request the private price list</h2>
      <p>Availability, layouts and pre-sales details are shared directly by the Belterra sales team.</p>
      <div className="contactLinks">
        <a href={`tel:${contact.phone.replace(/\s/g,'')}`}><Phone size={18}/>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}><Mail size={18}/>{contact.email}</a>
        <a href={`https://wa.me/${contact.whatsapp}`} target="_blank"><ArrowRight size={18}/>WhatsApp Enquiry</a>
      </div>
      <div className="loc"><MapPin size={18}/>{contact.location}</div>
    </section>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Concept />
      <Residences />
      <Lifestyle />
      <VisualStory />
      <Gallery />
      <Investment />
      <Contact />
      <footer>© Belterra Residences by Aventus · Secure Community Living | Intelligent Comfort | Long-Term Value</footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
