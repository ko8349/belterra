import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, ShieldCheck, Zap, Leaf, Users, MapPin, Home, Car, Waves, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";
import "./styles.css";

const exteriorImages = ["/images/10.jpg","/images/08.jpg","/images/16.jpg","/images/14.jpg","/images/45.jpg","/images/42_2.jpg"];
const interiorImages = ["/images/Marbella1.jpg","/images/Marbella2.jpg","/images/Marbella3.jpg","/images/Marbella4.jpg"];

const features = [
  { icon: ShieldCheck, title: "Secure Community", text: "Controlled access, private surroundings and peace of mind for families." },
  { icon: Zap, title: "Smart Living", text: "Future-ready systems, EV charging readiness and intelligent comfort." },
  { icon: Leaf, title: "Sustainable Design", text: "A+ energy efficiency, natural materials and lower running costs." },
  { icon: Users, title: "Family Focused", text: "Layouts, outdoor spaces and amenities created for everyday life." },
];

const amenities = [
  { icon: Waves, title: "Private Pools", text: "Selected homes include private plunge pools and landscaped terraces." },
  { icon: Dumbbell, title: "Clubhouse & Gym", text: "Community wellness space designed for year-round use." },
  { icon: Car, title: "Private Parking", text: "Carports, easy access and EV charger readiness." },
  { icon: Home, title: "70 Townhomes", text: "A limited collection of modern residences in La Cala de Mijas." },
];

function App() {
  return (
    <main>
      <header className="header">
        <div className="nav">
          <div>
            <div className="brand">BELTERRA</div>
            <div className="brand-sub">Residences by Aventus</div>
          </div>
          <nav className="nav-links">
            <a href="#homes">Homes</a>
            <a href="#features">Features</a>
            <a href="#location">Location</a>
            <a href="#investment">Investment</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-light">Enquire Now</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg"><img src="/images/10.jpg" alt="Belterra residences" /></div>
        <div className="container hero-content">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow">La Cala de Mijas · Costa del Sol</p>
            <h1>Safe. Smart. Designed for Family Life.</h1>
            <p className="lead">Belterra is a limited collection of future-ready family townhomes combining secure community living, intelligent comfort and modern Mediterranean design.</p>
            <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
              <a href="#contact" className="btn btn-light">Request Brochure</a>
              <a href="#homes" className="btn btn-outline">View Homes</a>
            </div>
            <div className="stats">
              <div><strong>70</strong>Townhomes</div>
              <div><strong>From €595k</strong>Launch price</div>
              <div><strong>A+</strong>Efficiency target</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <div style={{maxWidth:760,marginBottom:46}}>
            <p className="eyebrow">The Belterra proposition</p>
            <h2>The smarter Costa del Sol residential play.</h2>
          </div>
          <div className="grid-4">
            {features.map((item) => <div className="card" key={item.title}><item.icon className="icon" /><h3>{item.title}</h3><p>{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="homes" className="section section-white">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">The homes</p>
            <h2>Warm interiors. Private outdoor living.</h2>
            <p className="text-muted" style={{fontSize:18,marginTop:24}}>Open-plan living, natural materials, private terraces, selected plunge pools, parking and practical family layouts across a carefully phased 70-home community.</p>
            <ul className="text-muted" style={{marginTop:26,lineHeight:2}}>
              <li>3–4 bedroom configurations</li>
              <li>Private plots and terraces</li>
              <li>Designer kitchens and spa-like bathrooms</li>
              <li>Selected homes with private pools</li>
            </ul>
          </div>
          <div className="image-grid">
            {interiorImages.map((src,i) => <img key={src} src={src} alt={`Belterra interior ${i+1}`} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h2 style={{maxWidth:850,marginBottom:36}}>A private enclave for modern family life.</h2>
          <div className="grid-3 gallery">
            {exteriorImages.map((src,i) => <img key={src} src={src} alt={`Belterra exterior ${i+1}`} />)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <p className="eyebrow">Amenities</p>
          <h2 style={{maxWidth:850,marginBottom:44}}>Designed for comfort, wellness and secure ownership.</h2>
          <div className="grid-4">
            {amenities.map((item) => <div className="card" key={item.title}><item.icon className="icon" /><h3>{item.title}</h3><p>{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="location" className="section section-white">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Location</p>
            <h2>La Cala de Mijas. Connected to everything.</h2>
            <p className="text-muted" style={{fontSize:18,marginTop:24}}>A family-friendly Costa del Sol base close to beaches, golf, restaurants, Marbella, Fuengirola and Málaga Airport.</p>
          </div>
          <div className="location-list">
            {["5 min to La Cala","5 min to beaches","5–10 min to golf","20 min to Marbella","25 min to Málaga Airport"].map((x) => <div className="location-row" key={x}><MapPin size={20}/><span>{x}</span></div>)}
          </div>
        </div>
      </section>

      <section id="investment" className="section">
        <div className="container grid-2">
          <div className="dark" style={{borderRadius:28,padding:46}}>
            <p className="eyebrow">Investment logic</p>
            <h2>Family-led demand. Modern product. Strong positioning.</h2>
            <p style={{color:"rgba(255,255,255,.72)",lineHeight:1.75,fontSize:18,marginTop:24}}>Belterra is positioned in a liquid price band for international buyers seeking new-build privacy, secure ownership and better value than prime Marbella alternatives.</p>
          </div>
          <div className="card">
            <h3>Key facts</h3>
            <div className="fact-row"><span>Homes</span><strong>70</strong></div>
            <div className="fact-row"><span>Launch price</span><strong>From €595,000</strong></div>
            <div className="fact-row"><span>Product</span><strong>Townhomes</strong></div>
            <div className="fact-row"><span>Positioning</span><strong>Family Premium</strong></div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-white">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Private sales</p>
            <h2>Your new life on the Costa del Sol starts here.</h2>
            <p className="text-muted" style={{fontSize:18,marginTop:24}}>Request pricing, plans, current availability or a private consultation.</p>
          </div>
          <form className="form">
            {["Name","Email","Phone","Country"].map((field) => <input key={field} placeholder={field} />)}
            <textarea placeholder="Message" rows="4" />
            <button type="button" className="btn btn-dark" style={{width:"100%"}}>Request Information <ArrowRight size={16}/></button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand">BELTERRA</div>
            <div className="brand-sub">Residences by Aventus</div>
          </div>
          <div className="footer-meta">
            <span>barter.es</span>
            <span>La Cala de Mijas, Málaga</span>
            <span>From €595,000</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
