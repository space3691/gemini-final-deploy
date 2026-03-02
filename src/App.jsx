import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronDown, Menu, X, MessageSquare, Zap, Layout, Building2, Wind, Plus, Send, Award, Globe, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = {
  development: { title: "DEVELOPMENT", subtitle: "Visionary Urban Planning", image: "https://modulate.com.au/wp-content/uploads/2026/02/AdobeStock_246767744-Large-1.jpeg", desc: "Transforming visionary urban concepts into landmark physical infrastructure.", stats: [{ label: "Completed", value: "45+" }, { label: "Pipeline", value: "$2.4B" }, { label: "States", value: "3" }], details: "Peregrine's development methodology is rooted in identifying untapped potential." },
  otr: { title: "OTR", subtitle: "Premium Retail Innovation", image: "https://modulate.com.au/wp-content/uploads/2026/02/OTR-Greenacres-Website-Landing-Page-1600x2200px-2024.jpg", desc: "Australia's benchmark for premium retail and architectural convenience integration.", stats: [{ label: "Locations", value: "180+" }, { label: "Annual Visits", value: "50M+" }, { label: "Network", value: "SA/VIC" }], details: "By blending sophisticated architectural templates with operational excellence..." },
  motorsport: { title: "MOTORSPORT PARK", subtitle: "Global Sporting Destination", image: "https://modulate.com.au/wp-content/uploads/2026/02/495551705.jpg", desc: "The Bend Motorsport Park is a world-class multi-discipline motorsport destination.", stats: [{ label: "Track Length", value: "7.7km" }, { label: "Investment", value: "$110M" }, { label: "Hotel Rooms", value: "100" }], details: "Built on a scale rarely seen in private infrastructure..." }
};

const expertiseData = {
  "property-development": { title: "PROPERTY DEVELOPMENT", subtitle: "End-to-End Delivery", image: "https://modulate.com.au/wp-content/uploads/2026/02/AdobeStock_306231622-scaled.jpeg", desc: "Peregrine Infrastructure leads the market in complex, large-scale property development.", stats: [{ label: "Sector Lead", value: "Tier 1" }, { label: "Average ROI", value: "22%" }, { label: "Safety Rating", value: "ISO" }], details: "Our expertise spans the entire development lifecycle." },
  "asset-management": { title: "ASSET MANAGEMENT", subtitle: "Yield & Optimization", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070", desc: "Maximizing the long-term value of diverse portfolios through operational efficiency.", stats: [{ label: "AUM", value: "$3.5B+" }, { label: "Occupancy", value: "98%" }, { label: "Growth", value: "12% YoY" }], details: "Our asset management division treats every property as a high-performance business unit." }
};

const Navbar = ({ setPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setPage('home')} className="h-10 outline-none">
          <img src={isScrolled || currentPage !== 'home' ? "https://modulate.com.au/wp-content/uploads/2026/02/Peregrine_Colour.png" : "https://modulate.com.au/wp-content/uploads/2026/02/Peregrine_white.png"} className="h-full w-auto" alt="Logo" />
        </button>
        <div className={`hidden md:flex gap-10 text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-white'}`}>
          {['About', 'Showcase', 'Expertise', 'Sustainability', 'Contact'].map(item => <button key={item} className="hover:text-[#EF426F] transition-colors uppercase">{item}</button>)}
        </div>
      </div>
    </nav>
  );
};

const HomeView = ({ setPage }) => (
  <div className="bg-white">
    <section className="relative h-screen flex items-center justify-center bg-slate-900">
      <div className="absolute inset-0 opacity-40">
        <img src="https://modulate.com.au/wp-content/uploads/2026/02/AdobeStock_306231622-scaled.jpeg" className="w-full h-full object-cover" alt="Hero" />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-4">PEREGRINE</h1>
        <p className="tracking-[0.5em] text-sm uppercase opacity-70">Infrastructure & Development</p>
      </div>
    </section>
    <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
       {Object.entries(projectData).map(([key, item]) => (
         <div key={key} className="group cursor-pointer" onClick={() => setPage(`project-${key}`)}>
            <div className="aspect-square overflow-hidden mb-6 bg-slate-100">
              <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
            </div>
            <h3 className="font-bold tracking-widest uppercase text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-500 mt-2">{item.subtitle}</p>
         </div>
       ))}
    </section>
  </div>
);

const DetailView = ({ contentId, setPage }) => {
  const content = contentId.startsWith('project-') ? projectData[contentId.replace('project-', '')] : expertiseData[contentId.replace('expertise-', '')];
  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => setPage('home')} className="mb-12 flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-slate-400 hover:text-[#EF426F]">
          <ArrowLeft size={16} /> Back
        </button>
        <h1 className="text-6xl font-bold uppercase mb-8">{content.title}</h1>
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-8">
            <img src={content.image} className="w-full aspect-video object-cover mb-12 shadow-2xl" alt="Header" />
            <p className="text-3xl font-light leading-relaxed text-slate-700">{content.desc}</p>
          </div>
          <div className="md:col-span-4 space-y-12 bg-slate-50 p-12 border-t-4 border-[#EF426F]">
            {content.stats.map((s, i) => (
              <div key={i}>
                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">{s.label}</div>
                <div className="text-4xl font-bold text-slate-900">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState('home');
  useEffect(() => { window.scrollTo(0,0); }, [page]);
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EF426F]/10">
      <Navbar setPage={setPage} currentPage={page} />
      {page === 'home' ? <HomeView setPage={setPage} /> : <DetailView contentId={page} setPage={setPage} />}
      <footer className="py-20 px-6 bg-slate-950 text-white text-center">
        <img src="https://modulate.com.au/wp-content/uploads/2026/02/Peregrine_white.png" className="h-8 mx-auto mb-8 opacity-50" alt="Footer Logo" />
        <p className="text-[10px] tracking-[0.5em] uppercase opacity-30">© 2026 Peregrine Infrastructure</p>
      </footer>
    </div>
  );
}