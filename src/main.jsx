import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Waves, Plug, Video, Car, Trees, Home, LockKeyhole, Download } from 'lucide-react'
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
import { contact, facts, amenities, typologies } from './data/project'

const gallery = [
  [img10, 'Evening arrival'],
  [img03, 'Family community street'],
  [img50, 'Community pool'],
  [img422, 'Private garden pool'],
  [img45, 'Sunset private pool'],
  [img08, 'Living room'],
  [marbella1, 'Kitchen'],
  [img16, 'Bedroom'],
  [img14, 'Bathroom']
]

const amenityIcons = [ShieldCheck, Video, Trees, Waves, Waves, Home, Car, Plug, Home, Car]

function Header(){
  return (
    <header className="header">
      <a href="#top" className="logoWrap"><img src={logo} alt="Belterra Residences by Aventus"/></a>
      <nav>
        <a href="#project">Project</a>
        <a href="#masterplan">Masterplan</a>
        <a href="#homes">Homes</a>
        <a href="#lifestyle">Lifestyle</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="headerCta" href={`mailto:${contact.email}?subject=Belterra%20Residences%20Price%20List`}>Request Price List</a>
    </header>
  )
}

function Hero(){
  return (
    <section id="top" className="hero">
      <img className="heroImage" src={img03} alt="Belterra Residences street"/>
      <div className="heroOverlay"/>
      <motion.div className="heroContent" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.75}}>
        <img className="heroLogo" src={logo} alt="Belterra Residences by Aventus"/>
        <p className="eyebrow">La Cala de Mijas · Costa del Sol</p>
        <h1>Future-Ready Family Homes</h1>
        <p className="lead">70 contemporary townhouses built around secure community living, intelligent comfort and long-term value.</p>
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
        <p>Belterra is presented as a real residential community, not a generic luxury concept. The site uses your approved renders, the actual 70-unit urbanization logic and clean brand-aligned buyer diagrams.</p>
        <p>The final production pack is built for lead capture: one clear objective — get the buyer to request the private price list or contact the sales team by WhatsApp.</p>
      </div>
    </section>
  )
}

function MasterplanDiagram(){
  const top = ['42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70']
  const bottom = ['33','34','35','36','37','38','39','40','41','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','09','08','07','06','05','04','03','02','01']
  return (
    <div className="masterCard">
      <div className="planHeader">
        <div><p className="kicker">Masterplan</p><h3>70 townhouses · B1–B8</h3></div>
        <div className="north">N</div>
      </div>
      <div className="planRoad">Upper residential edge</div>
      <div className="plotRow topRow">
        {top.map(n => <span className={`plot ${['51','52','61','62'].includes(n) ? 'premium' : ''}`} key={n}>{n}</span>)}
      </div>
      <div className="middleRoad"><LockKeyhole size={18}/> Secure internal circulation · private parking access</div>
      <div className="plotRow bottomRow">
        {bottom.map(n => <span className={`plot ${['01','10','11','20','21','27','32','33','41'].includes(n) ? 'corner' : ''}`} key={n}>{n}</span>)}
      </div>
      <div className="planLabels">
        <span>B6 / B7 / B8 upper row</span>
        <span>B4 / B3 / B2 / B1 lower row</span>
      </div>
      <div className="poolZone"><Waves size={18}/> Community pool zone</div>
    </div>
  )
}

function Masterplan(){
  return (
    <section id="masterplan" className="section">
      <div className="sectionTitle">
        <p className="kicker">Brand-aligned masterplan</p>
        <h2>Clear buyer view of the real 70-unit urbanization.</h2>
      </div>
      <MasterplanDiagram/>
    </section>
  )
}

function PlanShape({type}){
  return (
    <div className="planShape" style={{'--accent': type.accent}}>
      <div className="miniTop">
        <div className="parking">parking</div>
        <div className="entrance">entry</div>
      </div>
      <div className="floor ground">
        <div className="room living">living / dining</div>
        <div className="room kitchen">kitchen</div>
        <div className="room bath">bath</div>
        <div className="room garden">private garden</div>
        {type.name !== 'Type 6' && <div className="room pool">pool option</div>}
      </div>
      <div className="floor first">
        <div className="room bed">bedroom</div>
        <div className="room bed">bedroom</div>
        <div className="room master">master suite</div>
        <div className="room bath">bath</div>
      </div>
      <div className="roof">roof / terrace / technical</div>
    </div>
  )
}

function Homes(){
  return (
    <section id="homes" className="section">
      <div className="sectionTitle">
        <p className="kicker">Home typologies</p>
        <h2>Clean sales diagrams based on the real architectural package.</h2>
      </div>
      <div className="typesGrid">
        {typologies.map(t => (
          <article className="typeCard" key={t.name}>
            <div className="typeHead"><h3>{t.name}</h3><span style={{background:t.accent}}>{t.count}</span></div>
            <PlanShape type={t}/>
            <div className="typeText"><strong>{t.label}</strong><p>{t.bedrooms}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Lifestyle(){
  return (
    <section id="lifestyle" className="section dark">
      <div className="sectionTitle">
        <p className="kicker">Features</p>
        <h2>Safety, comfort and everyday family value.</h2>
      </div>
      <div className="amenities">
        {amenities.map((label, i) => {
          const Icon = amenityIcons[i]
          return <div className="amenity" key={label}><Icon size={20}/><span>{label}</span></div>
        })}
      </div>
    </section>
  )
}

function VisualBreak(){
  return (
    <section className="visualBreak">
      <div className="visualText">
        <p className="kicker">Approved visual system</p>
        <h2>Premium renders carry emotion. Clear diagrams carry trust.</h2>
        <p>The site uses approved Belterra visuals and avoids invented floorplans, fake pricing or generic villa claims.</p>
      </div>
      <div className="visualGrid">
        <img src={img422} alt="Private pool"/>
        <img src={img08} alt="Living room"/>
        <img src={marbella1} alt="Kitchen"/>
        <img src={img50} alt="Community pool"/>
      </div>
    </section>
  )
}

function Gallery(){
  return (
    <section id="gallery" className="section">
      <div className="sectionTitle">
        <p className="kicker">Approved renders</p>
        <h2>The visual language stays premium and consistent.</h2>
      </div>
      <div className="gallery">
        {gallery.map(([src,title],i) => (
          <figure className={i < 2 ? 'wide' : ''} key={title}>
            <img src={src} alt={title}/>
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
      <VisualBreak/>
      <Gallery/>
      <Contact/>
      <footer>© Belterra Residences by Aventus · Secure Community Living | Intelligent Comfort | Long-Term Value</footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App/>)
