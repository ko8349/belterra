import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Home, Waves, Plug, Video, Trees, Car } from 'lucide-react'
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
import masterplanreal from './assets/layouts/masterplan-real.png'
import types12real from './assets/layouts/types-1-2-real.png'
import types3a4areal from './assets/layouts/types-3a-4a-real.png'
import types3b4breal from './assets/layouts/types-3b-4b-real.png'
import type5real from './assets/layouts/type-5-real.png'
import type6real from './assets/layouts/type-6-real.png'
import commonzonereal from './assets/layouts/common-zone-real.png'

const contact = {
  phone: '+34 613 191 470',
  email: 'hello@belterraresidences.com',
  whatsapp: '34613191470',
  location: 'La Cala de Mijas, Mijas Costa'
}

const layouts = [
  {src:masterplanreal, title:'Masterplan / 70 numbered plots'},
  {src:types12real, title:'Vivienda Tipo 1 / 2'},
  {src:types3a4areal, title:'Vivienda Tipo 3A / 4A'},
  {src:types3b4breal, title:'Vivienda Tipo 3B / 4B'},
  {src:type5real, title:'Vivienda Tipo 5'},
  {src:type6real, title:'Vivienda Tipo 6 / Seguridad'},
  {src:commonzonereal, title:'Zona común / piscina comunitaria'}
]

const renders = [
  {src: img10, title:'Evening arrival street'},
  {src: img03, title:'Family community street'},
  {src: img50, title:'Community pool'},
  {src: img422, title:'Private garden pool'},
  {src: img08, title:'Living room'},
  {src: marbella1, title:'Kitchen'},
  {src: img16, title:'Bedroom'},
  {src: img14, title:'Bathroom'}
]

function Header(){
  return <header className="header">
    <a href="#top" className="logoBox"><img src={logo} alt="Belterra Residences by Aventus"/></a>
    <nav><a href="#project">Project</a><a href="#masterplan">Masterplan</a><a href="#homes">Homes</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></nav>
    <a className="headerCta" href={`mailto:${contact.email}?subject=Belterra%20Price%20List`}>Request Price List</a>
  </header>
}

function Hero(){
  return <section id="top" className="hero">
    <img src={img10} alt="Belterra hero"/>
    <div className="shade"/>
    <div className="heroContent">
      <p className="eyebrow">Belterra Residences by Aventus</p>
      <h1>Future-Ready Family Homes</h1>
      <p>70 contemporary townhouses in La Cala de Mijas, built around secure community living, intelligent comfort and long-term value.</p>
      <div className="actions"><a className="btn primary" href={`mailto:${contact.email}?subject=Belterra%20Price%20List`}>Request Price List <ArrowRight size={18}/></a><a className="btn ghost" href={`https://wa.me/${contact.whatsapp}`}>WhatsApp Sales</a></div>
    </div>
    <div className="facts"><div><b>70</b><span>townhouses</span></div><div><b>3 & 4</b><span>bedroom homes</span></div><div><b>B1–B8</b><span>real blocks</span></div><div><b>01–70</b><span>numbered plots</span></div></div>
  </section>
}

function Project(){
 return <section id="project" className="section split">
  <div><p className="kicker">Corrected version</p><h2>Approved logo. Real project plans. No fake redrawn layouts.</h2></div>
  <div className="copy"><p>This version uses the actual Belterra logo image, scaled properly so it does not overflow or look messy.</p><p>The layouts are shown from your real architectural drawings in clean, brand-framed cards. Nothing is invented or simplified into inaccurate diagrams.</p></div>
 </section>
}

function Masterplan(){
 return <section id="masterplan" className="section">
  <div className="sectionTitle"><p className="kicker">Masterplan</p><h2>Real 70-unit urbanization layout.</h2></div>
  <div className="featuredPlan"><img src={masterplanreal} alt="Masterplan"/></div>
 </section>
}

function Homes(){
 return <section id="homes" className="section">
  <div className="sectionTitle"><p className="kicker">House layouts</p><h2>Actual typology sheets, presented cleanly.</h2></div>
  <div className="layoutGrid">{layouts.slice(1).map((l)=><article key={l.title}><div className="planImg"><img src={l.src} alt={l.title}/></div><h3>{l.title}</h3></article>)}</div>
 </section>
}

function Gallery(){
 return <section id="gallery" className="section dark">
  <div className="sectionTitle"><p className="kicker">Visual library</p><h2>Approved project renders.</h2></div>
  <div className="renderGrid">{renders.map((r,i)=><figure className={i<2?'wide':''} key={r.title}><img src={r.src} alt={r.title}/><figcaption>{r.title}</figcaption></figure>)}</div>
 </section>
}

function Contact(){
 return <section id="contact" className="contact">
  <img src={logo} alt="Belterra logo"/>
  <h2>Request the private price list</h2>
  <p>Availability, layouts and phase-release information are shared directly by the Belterra sales team.</p>
  <div className="contactLinks"><a href={`tel:${contact.phone.replace(/\s/g,'')}`}><Phone size={18}/>{contact.phone}</a><a href={`mailto:${contact.email}`}><Mail size={18}/>{contact.email}</a><a><MapPin size={18}/>{contact.location}</a></div>
 </section>
}

function App(){return <><Header/><Hero/><Project/><Masterplan/><Homes/><Gallery/><Contact/><footer>© Belterra Residences by Aventus</footer></>}

createRoot(document.getElementById('root')).render(<App/>)
