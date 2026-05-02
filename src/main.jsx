import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Home, Leaf, Plug, Video, Waves, Car, Mail, Phone, MapPin, Menu, X, Maximize2 } from 'lucide-react'
import './styles.css'
import logo from './assets/belterra-logo-approved.png'
import img10 from './assets/renders/10.jpg'
import img03 from './assets/renders/03.jpg'
import img05 from './assets/renders/05.jpg'
import img60 from './assets/renders/60.jpg'
import img50 from './assets/renders/50.jpg'
import img13 from './assets/renders/13.jpg'
import img422 from './assets/renders/42-2.jpg'
import img45 from './assets/renders/45.jpg'
import img14 from './assets/renders/14.jpg'
import img16 from './assets/renders/16.jpg'
import img08 from './assets/renders/08.jpg'
import marbella8 from './assets/renders/marbella8.jpg'
import marbella7 from './assets/renders/marbella7.jpg'
import marbella6 from './assets/renders/marbella6.jpg'
import marbella5 from './assets/renders/marbella5.jpg'
import marbella4 from './assets/renders/marbella4.jpg'
import marbella3 from './assets/renders/marbella3.jpg'
import marbella2 from './assets/renders/marbella2.jpg'
import marbella1 from './assets/renders/marbella1.jpg'
import masterplan from './assets/layouts/masterplan.png'
import commonzone from './assets/layouts/common-zone.png'
import type6 from './assets/layouts/type-6.png'
import type5 from './assets/layouts/type-5.png'
import type34 from './assets/layouts/type-3-4.png'
import type34b from './assets/layouts/type-3-4b.png'
import type12 from './assets/layouts/type-1-2.png'
import { contact, facts, amenities, homeTypes } from './data/content'

const renders = [
  { src: img10, title: 'Evening arrival street' },
  { src: img03, title: 'Family community street' },
  { src: img05, title: 'Classic arrival frontage' },
  { src: img60, title: 'Real urbanization masterplan render' },
  { src: img50, title: 'Community pool lifestyle' },
  { src: img13, title: 'Palm-lined residences' },
  { src: img422, title: 'Private garden pool' },
  { src: img45, title: 'Sunset private pool' },
  { src: img14, title: 'Spa-inspired bathroom' },
  { src: img16, title: 'Bedroom suite' },
  { src: img08, title: 'Living room with private pool view' },
  { src: marbella1, title: 'Kitchen finish' },
  { src: marbella2, title: 'Dining detail' },
  { src: marbella8, title: 'Stair material detail' }
]

const layouts = [
  { src: masterplan, title: 'Urbanization masterplan & 70-unit parcel map' },
  { src: type12, title: 'House Types 1 & 2' },
  { src: type34b, title: 'House Types 3A / 4A' },
  { src: type34, title: 'House Types 3B / 4B' },
  { src: type5, title: 'House Type 5' },
  { src: type6, title: 'House Type 6 / security control' },
  { src: commonzone, title: 'Community zone: pool & shared areas' }
]

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = ['Project', 'Masterplan', 'Homes', 'Lifestyle', 'Gallery', 'Contact']
  return (
    <header className="nav">
      <a href="#top" className="logoLink"><img src={logo} alt="Belterra Residences by Aventus" /></a>
      <nav>{links.map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}</nav>
      <a className="navCta" href={`mailto:${contact.email}?subject=Belterra%20Residences%20Price%20List`}>Request Price List</a>
      <button className="hamb" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && <div className="mobileMenu">{links.map(l => <a key={l} onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`}>{l}</a>)}</div>}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <img src={img10} alt="Belterra Residences main hero" />
      <div className="heroShade" />
      <motion.div className="heroText" initial="hidden" animate="visible" variants={fade} transition={{ duration: .75 }}>
        <p className="eyebrow">Belterra Residences by Aventus</p>
        <h1>Future-Ready Family Homes in La Cala de Mijas</h1>
        <p>70 contemporary townhouses designed around secure community living, intelligent comfort and long-term value.</p>
        <div className="actions">
          <a className="btn primary" href={`mailto:${contact.email}?subject=Belterra%20Residences%20Price%20List`}>Request Price List <ArrowRight size={18}/></a>
          <a className="btn secondary" href={`https://wa.me/${contact.whatsapp}`} target="_blank">WhatsApp Sales Team</a>
        </div>
      </motion.div>
      <div className="factBar">
        {facts.map(([big, small]) => <div key={big}><strong>{big}</strong><span>{small}</span></div>)}
      </div>
    </section>
  )
}

function Project() {
  return (
    <section id="project" className="section split">
      <div>
        <p className="kicker">The real Belterra proposition</p>
        <h2>A secure, smart and family-focused residential community.</h2>
      </div>
      <div className="copy">
        <p>Belterra is not a generic luxury villa story. It is a real 70-townhouse urbanization organized across blocks B1–B8, with private gardens, parking, community areas and differentiated house typologies.</p>
        <p>The sales message is practical and strong: family-ready homes, calm streets, intelligent comfort features and a clear long-term value story in La Cala de Mijas.</p>
      </div>
    </section>
  )
}

function Masterplan() {
  return (
    <section id="masterplan" className="masterplan section">
      <div className="sectionHead">
        <p className="kicker">Source of truth</p>
        <h2>Real urbanization layout: 70 townhouses.</h2>
      </div>
      <div className="planWrap"><img src={masterplan} alt="Belterra real masterplan" /></div>
      <div className="planNotes">
        <div><strong>B1–B8</strong><span>Block structure</span></div>
        <div><strong>01–70</strong><span>Numbered plots</span></div>
        <div><strong>Community pool</strong><span>Separate license object</span></div>
        <div><strong>Private gardens</strong><span>Per home typology</span></div>
      </div>
    </section>
  )
}

function Homes() {
  return (
    <section id="homes" className="section">
      <div className="sectionHead">
        <p className="kicker">House typologies</p>
        <h2>Real home types from the architectural package.</h2>
      </div>
      <div className="typeGrid">
        {homeTypes.map(h => (
          <div className="typeCard" key={h.type}>
            <strong>{h.type}</strong><span>{h.count}</span><p>{h.label}</p>
          </div>
        ))}
      </div>
      <div className="layoutGrid">
        {layouts.slice(1, 6).map((l) => (
          <figure key={l.title}>
            <img src={l.src} alt={l.title} />
            <figcaption><Maximize2 size={14}/>{l.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Lifestyle() {
  const icons = [ShieldCheck, Video, Leaf, Waves, Waves, Home, Car, Plug, Home, Car]
  return (
    <section id="lifestyle" className="dark">
      <div className="sectionHead centered">
        <p className="kicker">Amenities & buyer triggers</p>
        <h2>Features that support the family-living sales story.</h2>
      </div>
      <div className="amenityGrid">
        {amenities.map((item, i) => {
          const Icon = icons[i]
          return <div className="amenity" key={item}><Icon size={20}/><span>{item}</span></div>
        })}
      </div>
    </section>
  )
}

function VisualStory() {
  return (
    <section className="visualStory">
      <div className="visualCopy">
        <p className="kicker">Buyer emotion</p>
        <h2>From arrival security to private outdoor living.</h2>
        <p>The visual system uses only the approved Belterra renders: real architectural language, real streetscape, real interiors and the real community lifestyle.</p>
      </div>
      <div className="visualGrid">
        <img src={img03} alt="Family street" />
        <img src={img422} alt="Private pool" />
        <img src={img08} alt="Living room" />
        <img src={marbella1} alt="Kitchen" />
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="sectionHead">
        <p className="kicker">Approved visual library</p>
        <h2>Project renders and architectural layouts.</h2>
      </div>
      <div className="gallery">
        {renders.map((r, i) => (
          <figure className={i === 0 || i === 3 ? 'wide' : ''} key={r.title}>
            <img src={r.src} alt={r.title} />
            <figcaption>{r.title}</figcaption>
          </figure>
        ))}
      </div>
      <div className="sectionHead smallTop">
        <p className="kicker">Plans</p>
        <h2>Real layouts, not placeholders.</h2>
      </div>
      <div className="gallery plans">
        {layouts.map((r, i) => (
          <figure className={i === 0 ? 'wide' : ''} key={r.title}>
            <img src={r.src} alt={r.title} />
            <figcaption>{r.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <img src={logo} alt="Belterra logo" />
      <h2>Request the private price list</h2>
      <p>Availability, unit recommendations and phase release information are shared directly by the Belterra sales team.</p>
      <div className="contactLinks">
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
      <Nav />
      <Hero />
      <Project />
      <Masterplan />
      <Homes />
      <Lifestyle />
      <VisualStory />
      <Gallery />
      <Contact />
      <footer>© Belterra Residences by Aventus · Secure Community Living | Intelligent Comfort | Long-Term Value</footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
