import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Home, Leaf, Car, Waves, Video, Plug, Mail, Phone, MapPin, CheckCircle2, Menu, X } from 'lucide-react'
import './styles.css'
import logo from './assets/belterra-logo-approved.png'
import hero from './assets/belterra-hero-preview.png'
import { contact, pillars, features, nav } from './data/content'

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <a href="#top" className="nav-logo"><img src={logo} alt="Belterra Residences by Aventus" /></a>
      <nav className="desktop-nav">
        {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
      </nav>
      <a className="nav-cta" href={`mailto:${contact.email}?subject=Belterra%20Residences%20enquiry`}>Enquire Now</a>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X/> : <Menu/>}</button>
      {open && (
        <div className="mobile-menu">
          {nav.map(item => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`}>{item}</a>)}
          <a href={`https://wa.me/${contact.whatsapp}`} target="_blank">WhatsApp Enquiry</a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg"><img src={hero} alt="Belterra luxury homepage visual" /></div>
      <div className="hero-shade" />
      <motion.div className="hero-content" initial="hidden" animate="visible" variants={fade} transition={{ duration: .85 }}>
        <p className="eyebrow">La Cala de Mijas · Costa del Sol</p>
        <h1>Future-Ready Family Homes</h1>
        <p className="lead">Secure community living. Intelligent comfort. Long-term value.</p>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${contact.email}?subject=Belterra%20Residences%20price%20list%20request`}>Request Price List <ArrowRight size={18}/></a>
          <a className="button glass" href={`https://wa.me/${contact.whatsapp}`} target="_blank">WhatsApp Sales Team</a>
        </div>
      </motion.div>
      <div className="floating-panel">
        {pillars.map((p, i) => (
          <div key={p.title}>
            <strong>{p.metric}</strong>
            <span>{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Concept() {
  return (
    <section id="concept" className="section split">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <p className="kicker">Brand Position</p>
        <h2>The smarter Costa del Sol residential play.</h2>
      </motion.div>
      <div className="copy large">
        <p>Belterra avoids generic luxury clichés. The offer is easier to understand and easier to sell: a safe, smart and family-oriented residential concept in La Cala de Mijas.</p>
        <p>It is positioned for owner-occupiers, second-home families and investors who want a clear long-term value story rather than vague “premium living” language.</p>
      </div>
    </section>
  )
}

function Residences() {
  const icons = [ShieldCheck, Home, Leaf]
  return (
    <section id="residences" className="section">
      <div className="section-heading">
        <p className="kicker">Residences</p>
        <h2>Designed around real buyer priorities.</h2>
      </div>
      <div className="pillar-grid">
        {pillars.map((p, i) => {
          const Icon = icons[i]
          return (
            <motion.article className="pillar-card" key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * .08 }}>
              <Icon size={34}/>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function Lifestyle() {
  const iconMap = [Waves, Home, Car, Plug, Home, Video, ShieldCheck, Leaf]
  return (
    <section id="lifestyle" className="lifestyle">
      <div className="section-heading centered">
        <p className="kicker">Lifestyle & Technology</p>
        <h2>Every feature has a sales reason.</h2>
      </div>
      <div className="feature-grid">
        {features.map((feature, i) => {
          const Icon = iconMap[i]
          return <div className="feature-pill" key={feature}><Icon size={20}/><span>{feature}</span></div>
        })}
      </div>
    </section>
  )
}

function Investment() {
  return (
    <section id="investment" className="section investment">
      <div>
        <p className="kicker">Investment Logic</p>
        <h2>A clean release story for pre-sales.</h2>
        <p className="copy">Use the website as the front-end of the sales machine: generate enquiries, qualify buyers, send the private price list, then convert with a clear scarcity-based release structure.</p>
      </div>
      <div className="investment-card">
        <div className="row"><span>Brand</span><strong>Belterra Residences by Aventus</strong></div>
        <div className="row"><span>Location</span><strong>La Cala de Mijas</strong></div>
        <div className="row"><span>Positioning</span><strong>Safe · Smart · Family life</strong></div>
        <div className="row"><span>Lead CTA</span><strong>Private Price List Request</strong></div>
        <div className="row"><span>Buyer Story</span><strong>Long-term value</strong></div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <img src={logo} alt="Belterra logo" />
      <h2>Request the private price list</h2>
      <p>Availability, layouts and pre-sales details are shared directly by the Belterra sales team.</p>
      <div className="contact-actions">
        <a href={`tel:${contact.phone.replace(/\s/g,'')}`}><Phone size={18}/>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}><Mail size={18}/>{contact.email}</a>
        <a href={`https://wa.me/${contact.whatsapp}`} target="_blank"><ArrowRight size={18}/>WhatsApp Enquiry</a>
      </div>
      <div className="location"><MapPin size={18}/>{contact.location}</div>
    </section>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Concept />
      <Residences />
      <Lifestyle />
      <Investment />
      <section className="section final-proof">
        <div><CheckCircle2/><span>Secure community living</span></div>
        <div><CheckCircle2/><span>Intelligent comfort</span></div>
        <div><CheckCircle2/><span>Long-term value</span></div>
      </section>
      <Contact />
      <footer>© Belterra Residences by Aventus · Future-Ready Family Homes in La Cala de Mijas</footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
