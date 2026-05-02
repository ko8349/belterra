import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Waves, Plug, Video, Car, Trees, Home, LockKeyhole, Map, Menu, X, Leaf, Sprout, Users, Building2, Plane, MessageCircle } from 'lucide-react'
import './styles.css'
import logo from './assets/logo-approved.png'
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
import realmasterplanarchitecture from './assets/layouts/real-masterplan-architecture.png'
import realmasterplantypologymap from './assets/layouts/real-masterplan-typology-map.png'
import type12real from './assets/layouts/type-1-2-real.png'
import type3a4areal from './assets/layouts/type-3a-4a-real.png'
import type3b4breal from './assets/layouts/type-3b-4b-real.png'
import type5real from './assets/layouts/type-5-real.png'
import type6real from './assets/layouts/type-6-real.png'
import commonzonereal from './assets/layouts/common-zone-real.png'
import { contact, facts, typologies, amenities } from './data/project'

const planImages = {
  type12: type12real,
  type34a: type3a4areal,
  type34b: type3b4breal,
  type5: type5real,
  type6: type6real
}

const gallery = [
  [img03, 'Family community street'],
  [img10, 'Evening arrival'],
  [img05, 'Classic arrival frontage'],
  [img50, 'Community pool'],
  [img422, 'Private garden pool'],
  [img45, 'Sunset private pool'],
  [img08, 'Living room'],
  [marbella1, 'Kitchen'],
  [img16, 'Bedroom'],
  [img14, 'Bathroom']
]


const premiumFeatureIcons = [
  ['Gated Community\\n24/7 Security', ShieldCheck],
  ['Private Pools\\nin Select Homes', Waves],
  ['Landscaped\\nGardens', Leaf],
  ['Smart Home\\nReady', Home],
  ['EV Charging\\nPoints', Plug],
  ['Sustainable\\nDesign', Sprout]
]

const locationBenefits = [
  ['3 min', 'La Cala de Mijas', Home],
  ['5 min', 'Beach & Boardwalk', Waves],
  ['5 min', 'Golf Courses', Trees],
  ['20 min', 'Marbella', Building2],
  ['25 min', 'Málaga Airport', Plane]
]

function Header(){
  const [open, setOpen] = React.useState(false)
  const links = ['Project', 'Masterplan', 'Homes', 'Lifestyle', 'Gallery', 'Contact']
  return (
    <header className="header">
      <a className="logoWrap" href="#top"><img src={logo} alt="Belterra Residences by Aventus" /></a>

      <nav>
        {links.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
      </nav>

      <a className="headerCta" href={`mailto:${contact.email}?subject=Belterra%20Residences%20Price%20List`}>Request Price List</a>

      <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Open menu">
        {open ? <X size={24}/> : <Menu size={24}/>}
      </button>

      {open && (
        <div className="mobileMenu">
          {links.map(link => <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`}>{link}</a>)}
          <a onClick={() => setOpen(false)} href={`mailto:${contact.email}?subject=Belterra%20Residences%20Price%20List`}>Request Price List</a>
        </div>
      )}
    </header>
  )
}

function Hero(){
  return (
    <section id="top" className="hero">
      <img src={img03} alt="Belterra Residences" />
      <div className="heroOverlay" />
      <motion.div className="heroContent" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <img className="heroLogo" src={logo} alt="Belterra Residences by Aventus" />
        <p className="eyebrow">La Cala de Mijas · Costa del Sol</p>
        <h1>Future-Ready Family Homes</h1>
        <p>70 contemporary townhouses built around secure community living, intelligent comfort and long-term value.</p>
        <div className="actions">
          <a className="btn primary" href={`mailto:${contact.email}?subject=Belterra%20Residences%20Price%20List`}>Request Price List <ArrowRight size={18}/></a>
          <a className="btn outline" href={`https://wa.me/${contact.whatsapp}`} target="_blank">WhatsApp Sales</a>
        </div>
      </motion.div>

      <div className="factBar">
        {facts.map(([big, small]) => <div key={big}><strong>{big}</strong><span>{small}</span></div>)}
      </div>
    </section>
  )
}

function Project(){
  return (
    <section id="project" className="section split">
      <div>
        <p className="kicker">Belterra Residences by Aventus</p>
        <h2>Smart, secure, family-focused townhouses in La Cala de Mijas.</h2>
      </div>
      <div className="copy">
        <p>Belterra is presented as a real residential community, not a generic luxury concept. The website combines the strongest approved renders with the actual urbanization logic and a clear buyer-facing typology system.</p>
        <p>The core sales goal is simple: help buyers understand the project quickly, then move them to request the private price list or contact the sales team by WhatsApp.</p>
      </div>
    </section>
  )
}

function Masterplan(){
  return (
    <section id="masterplan" className="section masterSection premiumMasterplan">
      <div className="premiumMasterTop">
        <div className="premiumMasterTitle">
          <p className="kicker">Belterra Residences by Aventus</p>
          <h2>Master Plan</h2>
          <p className="goldLine">70 contemporary townhomes in La Cala de Mijas</p>
          <p>A secure, gated community designed for family living, surrounded by nature and just minutes from the beach, golf, schools and all amenities.</p>
        </div>

        <div className="premiumFeatureStrip">
          {premiumFeatureIcons.map(([label, Icon]) => (
            <div className="premiumFeature" key={label}>
              <Icon size={28}/>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="premiumMapGrid">
        <div className="premiumMapCard">
          <img src={realmasterplantypologymap} alt="Belterra numbered typology masterplan" />
        </div>

        <aside className="premiumLegend">
          <h3>Unit Typologies Legend</h3>
          {typologies.map(t => (
            <div className="premiumLegendLine" key={t.type}>
              <span style={{background:t.color}}></span>
              <b>{t.type}</b>
              <em>{t.count}</em>
            </div>
          ))}
        </aside>

        <aside className="premiumLocation">
          <h3>Location Benefits</h3>
          {locationBenefits.map(([time, label, Icon]) => (
            <div className="premiumBenefit" key={label}>
              <Icon size={22}/>
              <div><strong>{time}</strong><span>{label}</span></div>
            </div>
          ))}
        </aside>
      </div>

      <div className="premiumUrbanizationCard">
        <div className="mapCardHead">
          <div>
            <p className="kicker">Urbanization Plan</p>
            <h3>Full site implantation</h3>
          </div>
          <span>Real project source</span>
        </div>
        <img src={realmasterplanarchitecture} alt="Belterra actual urbanization plan" />
      </div>
    </section>
  )
}
function TypologyCard({t, index}){
  const plan = planImages[t.plan]
  const render = [img422, img45, img13, img03, img10, img50, img08, marbella1][index % 8]

  return (
    <article className="typologyCard">
      <div className="typologyHead">
        <div>
          <span className="dot" style={{background:t.color}}></span>
          <h3>{t.type}</h3>
          <p>{t.bedrooms} · {t.label}</p>
        </div>
        <strong style={{background:t.color}}>{t.count}</strong>
      </div>

      <div className="typologyBody">
        <div className="planPreview">
          <img src={plan} alt={`${t.type} architectural layout`} />
        </div>
        <div className="renderPreview">
          <img src={render} alt={`${t.type} lifestyle render`} />
        </div>
      </div>

      <div className="typologyFoot">
        <span>{t.badge}</span>
        <a href={`mailto:${contact.email}?subject=Belterra%20${encodeURIComponent(t.type)}%20Availability`}>Request Availability</a>
      </div>
    </article>
  )
}

function Homes(){
  return (
    <section id="homes" className="section homesSection">
      <div className="sectionTitle centered">
        <p className="kicker">Choose Your Home Collection</p>
        <h2>Actual home typologies presented in a premium sales format.</h2>
      </div>

      <div className="typologyGrid">
        {typologies.map((t, index) => <TypologyCard key={t.type} t={t} index={index}/>)}
      </div>

      <div className="advisorStrip">
        <div>
          <strong>Not sure which home suits you best?</strong>
          <p>Get a personalised unit shortlist based on your budget and family needs.</p>
        </div>
        <a className="btn darkBtn" href={`mailto:${contact.email}?subject=Belterra%20Personalised%20Unit%20Shortlist`}>Request Availability <ArrowRight size={18}/></a>
        <a className="btn lightBtn" href={`https://wa.me/${contact.whatsapp}`} target="_blank">WhatsApp Advisor</a>
      </div>
    </section>
  )
}

function Lifestyle(){
  const icons = [ShieldCheck, Video, Trees, Waves, Waves, Home, Plug, Car, Home, Car]
  return (
    <section id="lifestyle" className="section dark">
      <div className="sectionTitle">
        <p className="kicker">Features</p>
        <h2>Safety, comfort and everyday family value.</h2>
      </div>
      <div className="amenities">
        {amenities.map((a,i) => {
          const Icon = icons[i]
          return <div className="amenity" key={a}><Icon size={20}/><span>{a}</span></div>
        })}
      </div>
    </section>
  )
}

function Gallery(){
  return (
    <section id="gallery" className="section">
      <div className="sectionTitle">
        <p className="kicker">Approved visuals</p>
        <h2>Project renders for lifestyle and buyer emotion.</h2>
      </div>
      <div className="gallery">
        {gallery.map(([src,title],i) => (
          <figure className={i < 2 ? 'wide' : ''} key={title}>
            <img src={src} alt={title} />
            <figcaption>{title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="contact">
      <img src={logo} alt="Belterra logo"/>
      <h2>Request the private price list</h2>
      <p>Availability, unit recommendations and release-phase information are shared directly by the Belterra sales team.</p>
      <div className="contactLinks">
        <a href={`tel:${contact.phone.replace(/\s/g,'')}`}><Phone size={18}/>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}><Mail size={18}/>{contact.email}</a>
        <a><MapPin size={18}/>{contact.location}</a>
      </div>
    </section>
  )
}

function App(){
  return (
    <>
      <Header/>
      <Hero/>
      <Project/>
      <Masterplan/>
      <Homes/>
      <Lifestyle/>
      <Gallery/>
      <Contact/>
      <footer>© Belterra Residences by Aventus · Secure Community Living | Intelligent Comfort | Long-Term Value</footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App/>)
