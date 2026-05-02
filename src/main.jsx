import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Home, Leaf, Plug, Video, Waves, Car, Mail, Phone, MapPin, Menu, X, DoorOpen, Trees, LockKeyhole, Maximize2 } from 'lucide-react'
import './styles.css'
import approvedLogo from './assets/belterra-logo-approved.png'
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
import sourcemasterplan from './assets/layouts/source-masterplan.png'
import sourcecommonzone from './assets/layouts/source-common-zone.png'
import sourcetype6 from './assets/layouts/source-type-6.png'
import sourcetype5 from './assets/layouts/source-type-5.png'
import sourcetype34 from './assets/layouts/source-type-3-4.png'
import sourcetype34b from './assets/layouts/source-type-3-4b.png'
import sourcetype12 from './assets/layouts/source-type-1-2.png'
import { contact, facts, homeTypes, amenities, blocks } from './data/content'

const renders = [
  { src: img10, title: 'Evening arrival street' },
  { src: img03, title: 'Family community street' },
  { src: img05, title: 'Classic arrival frontage' },
  { src: img60, title: 'Aerial urbanization render' },
  { src: img50, title: 'Community pool lifestyle' },
  { src: img13, title: 'Palm-lined residences' },
  { src: img422, title: 'Private garden pool' },
  { src: img45, title: 'Sunset private pool' },
  { src: img14, title: 'Spa-inspired bathroom' },
  { src: img16, title: 'Bedroom suite' },
  { src: img08, title: 'Living room with pool view' },
  { src: marbella1, title: 'Kitchen finish' },
  { src: marbella2, title: 'Dining detail' },
  { src: marbella8, title: 'Stair material detail' }
]

const sourcePlans = [
  { src: sourcemasterplan, title: 'Original source masterplan' },
  { src: sourcetype12, title: 'Original source plans: Type 1 / 2' },
  { src: sourcetype34b, title: 'Original source plans: Type 3A / 4A' },
  { src: sourcetype34, title: 'Original source plans: Type 3B / 4B' },
  { src: sourcetype5, title: 'Original source plans: Type 5' },
  { src: sourcetype6, title: 'Original source plan: Type 6' },
  { src: sourcecommonzone, title: 'Original source common zone' }
]

const fade = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } }

function BrandMark({ light = false }) {
  return (
    <div className={`brandMark ${light ? 'light' : ''}`}>
      <div className="brandIcon" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div>
        <strong>BELTERRA</strong>
        <small>Residences by Aventus</small>
      </div>
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = ['Project', 'Masterplan', 'Homes', 'Lifestyle', 'Gallery', 'Contact']
  return (
    <header className="nav">
      <a href="#top" className="navBrand"><BrandMark /></a>
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
      <img src={img10} alt="Belterra Residences hero" />
      <div className="heroShade" />
      <motion.div className="heroText" initial="hidden" animate="visible" variants={fade} transition={{ duration: .75 }}>
        <p className="eyebrow">La Cala de Mijas · Costa del Sol</p>
        <h1>Future-Ready Family Homes</h1>
        <p>70 contemporary townhouses built around secure community living, intelligent comfort and long-term value.</p>
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
        <p className="kicker">Real project. Clean presentation.</p>
        <h2>Belterra is presented as a calm, secure and smart family community.</h2>
      </div>
      <div className="copy">
        <p>The website now avoids tiny low-resolution logo lockups and replaces the technical plan screenshots with clean brand-aligned schematic redraws.</p>
        <p>The original architectural drawings remain included as source references, but the public-facing layout is cleaner, calmer and easier for buyers to understand.</p>
      </div>
    </section>
  )
}

function MiniMasterplan() {
  const allUnits = blocks.flatMap(b => b.units)
  return (
    <div className="redrawnPlan">
      <div className="north">N</div>
      <div className="road top">Internal residential street</div>
      <div className="planRows">
        <div className="upper">
          {blocks.slice(4).map(block => (
            <div className="block" key={block.name}>
              <label>{block.name}</label>
              <div className="plots">{block.units.map(u => <span key={u}>{u}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="centralRoad">Secure internal circulation · private parking access</div>
        <div className="lower">
          {blocks.slice(0,4).reverse().map(block => (
            <div className="block" key={block.name}>
              <label>{block.name}</label>
              <div className="plots">{block.units.map(u => <span key={u}>{u}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="poolBadge"><Waves size={18}/> Community pool / social zone</div>
      <div className="securityBadge"><LockKeyhole size={18}/> Controlled access</div>
    </div>
  )
}

function Masterplan() {
  return (
    <section id="masterplan" className="section">
      <div className="sectionHead">
        <p className="kicker">Brand-redrawn masterplan</p>
        <h2>70 numbered townhouses arranged across blocks B1–B8.</h2>
      </div>
      <MiniMasterplan />
      <div className="planNotes">
        <div><strong>B1–B8</strong><span>Urbanization blocks</span></div>
        <div><strong>01–70</strong><span>Numbered plots</span></div>
        <div><strong>Pool</strong><span>Community zone</span></div>
        <div><strong>Access</strong><span>Security control</span></div>
      </div>
    </section>
  )
}

function HouseDiagram({ type }) {
  return (
    <div className={`houseDiagram ${type.tone}`}>
      <div className="plotLabel">{type.count} unit{type.count === 1 ? '' : 's'}</div>
      <div className="floor ground">
        <span className="parking">Parking</span>
        <span className="living">Living</span>
        <span className="garden">Garden</span>
        {type.type !== 'Type 6' && <span className="pool">Pool option</span>}
      </div>
      <div className="floor first">
        <span className="bed">Bedroom</span>
        <span className="bath">Bath</span>
        <span className="bed">Bedroom</span>
      </div>
      <div className="roof">
        <span>Roof terrace / technical zone</span>
      </div>
    </div>
  )
}

function Homes() {
  return (
    <section id="homes" className="section">
      <div className="sectionHead">
        <p className="kicker">Brand-redrawn house typologies</p>
        <h2>Buyer-friendly diagrams based on the real architectural package.</h2>
      </div>
      <div className="typeGrid">
        {homeTypes.map(h => (
          <article className="typeCard" key={h.type}>
            <div className="typeTop">
              <strong>{h.type}</strong>
              <span>{h.count} unit{h.count === 1 ? '' : 's'}</span>
            </div>
            <HouseDiagram type={h} />
            <div className="typeMeta">
              <p>{h.label}</p>
              <small>{h.bedrooms} bedrooms · {h.key}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Lifestyle() {
  const icons = [ShieldCheck, Video, Trees, Waves, Waves, Home, Car, Plug, Home, Car]
  return (
    <section id="lifestyle" className="dark">
      <div className="sectionHead centered">
        <p className="kicker">Amenities & buyer triggers</p>
        <h2>Clear features, no overstatement.</h2>
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
        <p className="kicker">Approved visual system</p>
        <h2>Premium renders carry the emotion. Redrawn plans carry the trust.</h2>
        <p>This version keeps your best project visuals and makes the plan information look like a developer brand, not raw permit documentation.</p>
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
        <p className="kicker">Approved renders</p>
        <h2>Project imagery used as the main sales layer.</h2>
      </div>
      <div className="gallery">
        {renders.map((r, i) => (
          <figure className={i === 0 || i === 3 ? 'wide' : ''} key={r.title}>
            <img src={r.src} alt={r.title} />
            <figcaption>{r.title}</figcaption>
          </figure>
        ))}
      </div>
      <details className="sourceDetails">
        <summary><Maximize2 size={16}/> View original architectural source screenshots</summary>
        <div className="gallery plans">
          {sourcePlans.map((r, i) => (
            <figure className={i === 0 ? 'wide' : ''} key={r.title}>
              <img src={r.src} alt={r.title} />
              <figcaption>{r.title}</figcaption>
            </figure>
          ))}
        </div>
      </details>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <BrandMark />
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
