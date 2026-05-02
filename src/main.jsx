import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Waves, Leaf, Home, LockKeyhole, Sprout, Users, Building2, Trees, Ruler, Maximize2, MessageCircle, CarFront, Plane } from 'lucide-react'
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
import urbanizationplan from './assets/layouts/urbanization-plan.png'
import typologymap from './assets/layouts/typology-map.png'
import type12 from './assets/layouts/type-1-2.png'
import type3a4a from './assets/layouts/type-3a-4a.png'
import type3b4b from './assets/layouts/type-3b-4b.png'
import type5 from './assets/layouts/type-5.png'
import type6 from './assets/layouts/type-6.png'
import { contact, typologies, featureIcons, locationBenefits } from './data/project'

const planImages = {
  type12: type12,
  type34a: type3a4a,
  type34b: type3b4b,
  type5: type5,
  type6: type6
}

const renders = [img13, img422, img03, img10, img50, img45, img08, marbella1]

const iconMap = {
  shield: ShieldCheck,
  waves: Waves,
  leaf: Leaf,
  home: Home,
  lock: LockKeyhole,
  sprout: Sprout
}

function FeatureStrip(){
  return (
    <div className="featureStrip">
      {featureIcons.map(([label, icon]) => {
        const Icon = iconMap[icon]
        return (
          <div className="featureItem" key={label}>
            <Icon size={28}/>
            <span>{label}</span>
          </div>
        )
      })}
    </div>
  )
}

function LocationPanel(){
  const icons = [Home, Waves, Trees, Building2, Plane]
  return (
    <aside className="locationPanel">
      <h3>Location Benefits</h3>
      {locationBenefits.map(([time, label], i) => {
        const Icon = icons[i]
        return (
          <div className="benefit" key={label}>
            <Icon size={22}/>
            <div><strong>{time}</strong><span>{label}</span></div>
          </div>
        )
      })}
    </aside>
  )
}

function MasterPlan(){
  return (
    <section id="masterplan" className="masterSection">
      <div className="topBrandRow">
        <div className="brandLockup">
          <img src={logo} alt="Belterra Residences by Aventus"/>
        </div>
        <div className="masterTitle">
          <h1>Master Plan</h1>
          <p className="goldLine">70 contemporary townhomes in La Cala de Mijas</p>
          <p>A secure, gated community designed for family living, surrounded by nature and just minutes from the beach, golf, schools and all amenities.</p>
        </div>
        <FeatureStrip/>
      </div>

      <div className="mapZone">
        <div className="mapWrapper">
          <img src={typologymap} alt="Belterra numbered typology map"/>
        </div>

        <aside className="legendBox">
          <h3>Unit Typologies Legend</h3>
          {typologies.map(t => (
            <div className="legendLine" key={t.type}>
              <span style={{background:t.color}}></span>
              <b>{t.type}</b>
              <em>{t.count.replace('Residences','Units').replace('Residence','Unit')}</em>
            </div>
          ))}
          <div className="legendLine social">
            <span></span><b>Social / Community</b><em></em>
          </div>
        </aside>

        <LocationPanel/>

        <div className="compass">N</div>
      </div>
    </section>
  )
}

function PlanThumb({type}){
  const img = planImages[type.plan]
  return (
    <div className="planThumb">
      <div>
        <span>Ground Floor</span>
        <img src={img} alt={`${type.type} ground floor`} />
      </div>
      <div>
        <span>First Floor</span>
        <img src={img} alt={`${type.type} first floor`} />
      </div>
    </div>
  )
}

function Spec({icon:Icon, label, value}){
  return (
    <div className="spec">
      <Icon size={14}/>
      <div><span>{label}</span><strong>{value}</strong></div>
    </div>
  )
}

function TypeCard({type, index}){
  return (
    <article className="typeCard">
      <div className="cardHead">
        <div>
          <span className="typeDot" style={{background:type.color}}></span>
          <h2>{type.type}</h2>
          <p>{type.label}</p>
          <small>{type.sub}</small>
        </div>
        <strong style={{background:type.color}}>{type.count}</strong>
      </div>

      <div className="cardBody">
        <PlanThumb type={type}/>
        <img className="renderThumb" src={renders[index % renders.length]} alt={`${type.type} render`} />
      </div>

      <div className="specGrid">
        <Spec icon={Building2} label="Built Area" value={type.area}/>
        <Spec icon={Trees} label="Garden" value={type.garden}/>
        <Spec icon={Maximize2} label="Total Area" value={type.outdoor}/>
      </div>

      <div className="badge" style={{background:type.color}}>{type.badge}</div>
    </article>
  )
}

function Typologies(){
  return (
    <section id="homes" className="typologySection">
      <div className="sectionDivider"><span></span><h2>Choose Your Home Collection</h2><span></span></div>
      <div className="typeGrid">
        {typologies.map((t, i) => <TypeCard key={t.type} type={t} index={i}/>)}
      </div>
    </section>
  )
}

function CTA(){
  return (
    <section id="contact" className="ctaSection">
      <div className="advisor">
        <Users size={42}/>
        <div>
          <h3>Not sure which home suits you best?</h3>
          <p>Get a personalised unit shortlist based on your budget and family needs.</p>
        </div>
      </div>

      <a className="requestBtn" href={`mailto:${contact.email}?subject=Belterra%20Availability%20Request`}>
        Request Availability <ArrowRight size={30}/>
      </a>

      <a className="whatsappBtn" href={`https://wa.me/${contact.whatsapp}`} target="_blank">
        <MessageCircle size={30}/> WhatsApp Advisor
      </a>
    </section>
  )
}

function FullPage(){
  return (
    <main className="pageShell">
      <MasterPlan/>
      <Typologies/>
      <CTA/>
    </main>
  )
}

function Website(){
  return (
    <>
      <header className="siteHeader">
        <a href="#masterplan"><img src={logo} alt="Belterra"/></a>
        <nav>
          <a href="#masterplan">Master Plan</a>
          <a href="#homes">Homes</a>
          <a href="#contact">Availability</a>
          <a href={`mailto:${contact.email}`}>Contact</a>
        </nav>
      </header>
      <FullPage/>
      <footer>
        <span>© Belterra Residences by Aventus</span>
        <span>{contact.phone} · {contact.email}</span>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Website/>)
