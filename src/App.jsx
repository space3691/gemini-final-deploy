import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X, 
  MessageSquare, 
  Zap, 
  Layout, 
  Building2, 
  Wind,
  Plus,
  Send,
  Award,
  Globe,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * PEREGRINE INFRASTRUCTURE - MAIN APPLICATION
 * * Architecture:
 * - Single Page Application (SPA) using state-based routing.
 * - Tailwind CSS for responsive architectural styling.
 * - Framer Motion for cinematic transitions.
 * - Lucide React for minimalist iconography.
 */

// --- Data Structures: Projects ---

const projectData = {
  development: {
    title: "DEVELOPMENT",
    subtitle: "Visionary Urban Planning",
    image: "https://modulate.com.au/wp-content/uploads/2026/02/AdobeStock_246767744-Large-1.jpeg", 
    desc: "Transforming visionary urban concepts into landmark physical infrastructure. Our development arm focuses on high-density commercial hubs and mixed-use precincts that define modern cityscapes.",
    stats: [
      { label: "Completed", value: "45+" },
      { label: "Pipeline", value: "$2.4B" },
      { label: "States", value: "3" }
    ],
    details: "Peregrine's development methodology is rooted in identifying untapped potential. We manage the entire lifecycle of an asset, from greenfield acquisition and zoning approvals to architectural design and structural completion."
  },
  otr: {
    title: "OTR",
    subtitle: "Premium Retail Innovation",
    image: "https://modulate.com.au/wp-content/uploads/2026/02/OTR-Greenacres-Website-Landing-Page-1600x2200px-2024.jpg",
    desc: "Australia's benchmark for premium retail and architectural convenience integration. The OTR network represents the pinnacle of high-frequency consumer infrastructure.",
    stats: [
      { label: "Locations", value: "180+" },
      { label: "Annual Visits", value: "50M+" },
      { label: "Network", value: "SA/VIC" }
    ],
    details: "By blending sophisticated architectural templates with operational excellence, OTR has redefined the convenience sector. Every site is designed as a high-flow ecosystem, maximizing consumer engagement through aesthetic and functional superiority."
  },
  motorsport: {
    title: "MOTORSPORT PARK",
    subtitle: "Global Sporting Destination",
    image: "https://modulate.com.au/wp-content/uploads/2026/02/495551705.jpg",
    desc: "The Bend Motorsport Park is a world-class multi-discipline motorsport destination. It stands as one of the most significant sporting infrastructure projects in the Southern Hemisphere.",
    stats: [
      { label: "Track Length", value: "7.7km" },
      { label: "Investment", value: "$110M" },
      { label: "Hotel Rooms", value: "100" }
    ],
    details: "Built on a scale rarely seen in private infrastructure, The Bend features an integrated hotel, convention center, and racing circuit capable of hosting global FIA sanctioned events."
  }
};

// --- Data Structures: Expertise ---

const expertiseData = {
  "property-development": {
    title: "PROPERTY DEVELOPMENT",
    subtitle: "End-to-End Delivery",
    image: "https://modulate.com.au/wp-content/uploads/2026/02/AdobeStock_306231622-scaled.jpeg",
    desc: "Peregrine Infrastructure leads the market in complex, large-scale property development. We identify potential where others see complexity.",
    stats: [
      { label: "Sector Lead", value: "Tier 1" },
      { label: "Average ROI", value: "22%" },
      { label: "Safety Rating", value: "ISO" }
    ],
    details: "Our expertise spans the entire development lifecycle. We possess in-house capabilities for site identification, feasibility modeling, architectural oversight, and construction management."
  },
  "asset-management": {
    title: "ASSET MANAGEMENT",
    subtitle: "Yield & Optimization",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
    desc: "Maximizing the long-term value of diverse portfolios through operational efficiency, proactive maintenance, and strategic leasing.",
    stats: [
      { label: "AUM", value: "$3.5B+" },
      { label: "Occupancy", value: "98%" },
      { label: "Growth", value: "12% YoY" }
    ],
    details: "Our asset management division treats every property as a high-performance business unit. By leveraging proprietary data analytics and a massive retail footprint, we drive yields that significantly outperform industry benchmarks."
  }
};

// --- Navbar Component ---

const Navbar = ({ setPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showcaseOpen, setShowcaseOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Showcase', id: 'showcase', dropdown: 'showcase' },
    { name: 'Expertise', id: 'expertise', dropdown: 'expertise' },
    { name: 'Sustainability', id: 'sustainability' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    if (currentPage !== 'home') {
      setPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setPage('home')} className="relative h-8 md:h-10 w-40 md:w-48 transition-all duration-500 block hover:opacity-80 outline-none z-[60]">
          <img 
            src={(isScrolled || currentPage !== 'home') 
              ? "https://modulate.com.au/wp-content/uploads/2026/02/Peregrine_Colour.png" 
              : "https://modulate.com.au/wp-content/uploads/2026/02/Peregrine_white.png"
            } 
            alt="Peregrine Logo" 
            className="h-full w-auto object-contain transition-opacity duration-500"
          />
        </button>
        
        <div className={`hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${(isScrolled || currentPage !== 'home') ? 'text-slate-600' : 'text-white'}`}>
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button 
                onClick={() => item.dropdown ? null : handleNavClick(item.id)}
                onMouseEnter={() => {
                  if (item.dropdown === 'showcase') { setShowcaseOpen(true); setExpertiseOpen(false); }
                  if (item.dropdown === 'expertise') { setExpertiseOpen(true); setShowcaseOpen(false); }
                }}
                className="hover:text-[#EF426F] transition-colors flex items-center gap-1 uppercase py-2"
              >
                {item.name} {item.dropdown && <ChevronDown size={12} />}
              </button>

              {/* Showcase Dropdown */}
              {item.dropdown === 'showcase' && (
                <div 
                  onMouseLeave={() => setShowcaseOpen(false)}
                  className={`absolute top-full -left-4 pt-4 transition-all duration-300 ${showcaseOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                >
                  <div className="bg-slate-900 w-64 p-6 shadow-2xl space-y-4">
                    {Object.keys(projectData).map(key => (
                      <button 
                        key={key}
                        onClick={() => { setPage(`project-${key}`); setShowcaseOpen(false); }}
                        className="block text-white hover:text-[#EF426F] text-[10px] tracking-[0.2em] transition-colors text-left uppercase w-full"
                      >
                        {projectData[key].title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Expertise Dropdown */}
              {item.dropdown === 'expertise' && (
                <div 
                  onMouseLeave={() => setExpertiseOpen(false)}
                  className={`absolute top-full -left-4 pt-4 transition-all duration-300 ${expertiseOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                >
                  <div className="bg-slate-900 w-72 p-6 shadow-2xl space-y-4">
                    {Object.keys(expertiseData).map(key => (
                      <button 
                        key={key}
                        onClick={() => { setPage(`expertise-${key}`); setExpertiseOpen(false); }}
                        className="block text-white hover:text-[#EF426F] text-[10px] tracking-[0.2em] transition-colors text-left uppercase w-full"
                      >
                        {expertiseData[key].title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu className={`transition-colors duration-500 ${(isScrolled || currentPage !== 'home') ? 'text-slate-900' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[70] flex flex-col p-10"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}><X size={32} className="text-slate-900" /></button>
            </div>
            <div className="flex flex-col gap-6 mt-12 text-2xl font-bold text-slate-900 uppercase">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-4">
                  <button 
                    onClick={() => {
                      if (!item.dropdown) {
                        handleNavClick(item.id);
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="hover:text-[#EF426F]"
                  >
                    {item.name}
                  </button>
                  {item.dropdown === 'showcase' && (
                    <div className="pl-6 flex flex-col gap-3">
                      {Object.keys(projectData).map(key => (
                        <button key={key} onClick={() => { setPage(`project-${key}`); setMobileMenuOpen(false); }} className="text-sm text-slate-400 hover:text-[#EF426F] text-left uppercase">
                          — {projectData[key].title}
                        </button>
                      ))}
                    </div>
                  )}
                  {item.dropdown === 'expertise' && (
                    <div className="pl-6 flex flex-col gap-3">
                      {Object.keys(expertiseData).map(key => (
                        <button key={key} onClick={() => { setPage(`expertise-${key}`); setMobileMenuOpen(false); }} className="text-sm text-slate-400 hover:text-[#EF426F] text-left uppercase">
                          — {expertiseData[key].title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- View: Home (Composite Sections) ---

const HomeView = ({ setPage }) => (
  <>
    {/* Landing Hero Section */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 group">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://modulate.com.au/wp-content/uploads/2026/02/AdobeStock_306231622-scaled.jpeg" 
          className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-90 group-hover:brightness-125 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
          alt="Peregrine Corporate Infrastructure" 
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 uppercase">DEFINING GLOBAL <br /> INFRASTRUCTURE</h1>
          <p className="text-sm md:text-base tracking-[0.3em] font-medium opacity-80 mb-12 uppercase">Legacy. Innovation. Architectural Integrity.</p>
          <button onClick={() => { const el = document.getElementById('showcase'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="px-10 py-3 border border-white text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-slate-900 transition-all duration-300 outline-none">VIEW SHOWCASE</button>
        </motion.div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="pt-24 pb-48 md:pt-32 md:pb-80 px-6 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h4 className="text-[#EF426F] font-mono text-[11px] tracking-[0.4em] uppercase font-bold">ESTABLISHED 1984</h4>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight uppercase tracking-tight">THE PEREGRINE <br /> LEGACY</h2>
            </div>
            <div className="space-y-6">
              <p className="text-2xl md:text-xl text-slate-600 leading-relaxed font-light">From a single retail site to a global infrastructure powerhouse.</p>
              <div className="p-8 bg-slate-50 border-l-4 border-[#B2A8A2] text-slate-600 leading-relaxed text-lg md:text-base">
                Peregrine Infrastructure represents the architectural and strategic arm of one of Australia's largest private corporations. We build ecosystems through iconic mixed-use developments.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-10 pb-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#EF426F]"><Award size={20} /><span className="text-[11px] font-bold tracking-widest uppercase">Innovation</span></div>
                <p className="text-sm md:text-xs text-slate-400 leading-relaxed">Multi-award winning project delivery across four decades.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#EF426F]"><Globe size={20} /><span className="text-[11px] font-bold tracking-widest uppercase">Global Scale</span></div>
                <p className="text-sm md:text-xs text-slate-400 leading-relaxed">Integrated assets that support national economic growth.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/5] relative overflow-hidden group shadow-2xl">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" alt="About" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#B2A8A2] -z-10 opacity-20 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>

    {/* Showcase Section: Grid aligned to TOP for labels */}
    <section id="showcase" className="relative z-20">
      <div className="max-w-[1400px] mx-auto bg-black pt-16 pb-8 px-10 md:px-8 -mt-24 md:-mt-48 lg:-mt-64 shadow-2xl">
         <h4 className="text-slate-500 font-mono text-xs md:text-[10px] tracking-[0.4em] uppercase mb-2">SELECTED WORKS</h4>
         <h2 className="text-4xl font-bold text-white uppercase tracking-tight">PROJECTS SHOWCASE</h2>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 bg-black shadow-2xl">
        {Object.entries(projectData).map(([key, item]) => (
          <div key={key} className="relative aspect-square overflow-hidden group cursor-pointer border-r border-white/5 last:border-0">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent"></div>
            
            {/* Labels and description aligned to top of the grid cell */}
            <div className="absolute inset-0 flex flex-col justify-start p-10 md:p-12 text-white space-y-4">
              <h3 className="text-lg md:text-[15px] font-bold tracking-[0.2em] uppercase">{item.title}</h3>
              <p className="text-[17px] md:text-[13px] font-light leading-relaxed opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 max-w-[320px] md:max-w-[300px]">{item.desc}</p>
              <button onClick={() => setPage(`project-${key}`)} className="flex items-center gap-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 outline-none">
                <span className="text-sm md:text-[12px] font-bold tracking-widest uppercase border-b border-white/30 pb-1 hover:border-white transition-colors">Read More</span>
                <ArrowRight size={14} className="md:w-3.5 md:h-3.5 text-[#EF426F]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Expertise Section */}
    <section id="expertise" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="text-7xl font-black text-[#B2A8A2] font-mono opacity-20">01</div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#EF426F]"><Building2 size={28} /></div>
              <span className="text-xl font-bold text-slate-900 tracking-tighter uppercase">CORE EXPERTISE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 uppercase tracking-tight leading-tight">PROPERTY DEVELOPMENT</h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">End-to-end project management from greenfield identification to architectural completion.</p>
            <button onClick={() => setPage('expertise-property-development')} className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase border-b border-slate-200 pb-1 hover:border-[#EF426F] transition-all outline-none">
              READ MORE <ArrowRight size={12} />
            </button>
          </div>
          <div className="space-y-8">
            <div className="text-7xl font-black text-[#B2A8A2] font-mono opacity-20">02</div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#EF426F]"><Layout size={28} /></div>
              <span className="text-xl font-bold text-slate-900 tracking-tighter uppercase">ASSET MANAGEMENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 uppercase tracking-tight leading-tight">PORTFOLIO OPTIMIZATION</h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">Maximizing the long-term value of diverse portfolios through operational efficiency.</p>
            <button onClick={() => setPage('expertise-asset-management')} className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase border-b border-slate-200 pb-1 hover:border-[#EF426F] transition-all outline-none">
              READ MORE <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Sustainability Section */}
    <section id="sustainability" className="relative py-24 md:py-48 px-6 overflow-hidden bg-slate-950 group cursor-default">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://modulate.com.au/wp-content/uploads/2026/02/615bd0976df5645249f535c1_Breathe-edgars-creek-house-10.jpg" 
          alt="Sustainable" 
          className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 group-hover:brightness-125 transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/20 transition-all duration-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <h4 className="text-[#EF426F] font-mono mb-6 text-xs uppercase tracking-[0.5em] font-bold">FUTURE PROOFING</h4>
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-none uppercase tracking-tighter text-white">SUSTAINABLE <br className="hidden md:block" />ARCHITECTURE</h2>
          <p className="text-xl leading-relaxed mb-16 max-w-lg font-light text-slate-200 opacity-90">Responsible development for a carbon-neutral future. We integrate ESD into every project.</p>
          <div className="p-8 md:p-12 bg-white/5 backdrop-blur-md border-l-4 border-[#EF426F] max-w-md">
            <div className="flex gap-4 items-center mb-6">
              <Wind className="text-[#EF426F]" size={32} />
              <h4 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase">ESD STRATEGY</h4>
            </div>
            <p className="text-base italic leading-relaxed opacity-80 text-slate-300">Proprietary engine targeting minimum 5-star Green Star ratings.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto p-16 shadow-2xl border border-slate-50">
        <div className="flex items-center gap-4 text-[#EF426F] mb-8">
          <MessageSquare size={32} fill="currentColor" />
          <span className="text-sm uppercase tracking-[0.4em] font-bold">CONTACT</span>
        </div>
        <h2 className="text-5xl font-light mb-12 text-slate-900 uppercase tracking-tight">START A CONVERSATION</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B2A8A2]">FULL NAME</label>
              <input type="text" className="w-full border-b-2 border-slate-100 focus:border-[#EF426F] py-3 outline-none font-medium" placeholder="YOUR NAME" />
            </div>
            <div className="space-y-4">
              <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B2A8A2]">EMAIL ADDRESS</label>
              <input type="email" className="w-full border-b-2 border-slate-100 focus:border-[#EF426F] py-3 outline-none font-medium" placeholder="EMAIL@EXAMPLE.COM" />
            </div>
          </div>
          <button type="submit" className="w-full py-6 flex items-center justify-center gap-4 text-white bg-slate-900 hover:bg-[#EF426F] transition-all uppercase text-xs font-bold tracking-[0.4em] outline-none">
            SEND MESSAGE <Send size={16}/>
          </button>
        </form>
      </div>
    </section>
  </>
);

// --- View: Detail (Unified Template for Projects & Expertise) ---

const DetailView = ({ contentId, setPage }) => {
  let content = null;
  if (contentId.startsWith('project-')) content = projectData[contentId.replace('project-', '')];
  else if (contentId.startsWith('expertise-')) content = expertiseData[contentId.replace('expertise-', '')];

  if (!content) return null;

  return (
    <div className="bg-white min-h-screen relative pb-32">
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={content.image} className="w-full h-full object-cover" alt={content.title} />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full px-6 pb-16 pt-32 relative z-10 flex flex-col justify-end h-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h4 className="text-[#EF426F] font-mono text-[11px] tracking-[0.4em] uppercase font-bold mb-4">{content.subtitle}</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-none">{content.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-8 space-y-12">
            <p className="text-3xl md:text-4xl text-slate-900 font-light leading-snug">{content.desc}</p>
            <div className="h-px bg-slate-100 w-full"></div>
            <p className="text-xl text-slate-500 leading-relaxed font-light">{content.details}</p>
          </div>
          <div className="lg:col-span-4 bg-slate-50 p-10 md:p-12 space-y-12 border-t-4 border-[#EF426F]">
            {content.stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase">{stat.label}</div>
                <div className="text-5xl font-bold text-slate-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed "Back to Home" button at bottom resolving logo conflict */}
      <div className="fixed bottom-10 left-10 z-[100]">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setPage('home')} 
          className="bg-slate-900/90 backdrop-blur-md text-white px-8 py-4 flex items-center gap-4 text-[11px] tracking-[0.4em] uppercase font-bold group shadow-2xl transition-all hover:bg-[#EF426F] outline-none"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> BACK TO HOME
        </motion.button>
      </div>
    </div>
  );
};

// --- Footer Component ---

const Footer = ({ setPage, currentPage }) => {
  const handleFooterNav = (id) => {
    if (currentPage !== 'home') {
      setPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-24 px-6 bg-slate-950 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 text-left">
        <div className="col-span-2">
          <div className="h-12 mb-10">
            <img src="https://modulate.com.au/wp-content/uploads/2026/02/Peregrine_white.png" alt="Peregrine" className="h-full w-auto object-contain" />
          </div>
          <p className="text-slate-400 max-w-sm mb-10 leading-relaxed text-lg md:text-base">Evolving the Australian landscape through visionary property and high-performance infrastructure solutions.</p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.3em] text-[11px] mb-8 text-[#B2A8A2]">OFFICE</h4>
          <p className="text-slate-400 text-base md:text-sm leading-relaxed mb-4 text-left">270 The Parade,<br />Kensington SA 5068</p>
          <p className="text-slate-400 text-base md:text-sm text-left">office@peregrine.com.au</p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.3em] text-[11px] mb-8 text-[#B2A8A2]">NAVIGATE</h4>
          <ul className="text-slate-400 text-base md:text-sm space-y-3 uppercase tracking-widest font-bold">
            {['About', 'Expertise', 'Sustainability', 'Contact'].map((item) => (
              <li key={item} className="hover:text-[#EF426F] cursor-pointer text-left">
                <button className="outline-none" onClick={() => handleFooterNav(item.toLowerCase())}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#EF426F]/20 selection:text-[#EF426F]">
      <Navbar setPage={setPage} currentPage={page} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {page === 'home' ? (
            <HomeView setPage={setPage} />
          ) : (
            <DetailView contentId={page} setPage={setPage} />
          )}
        </motion.div>
      </AnimatePresence>

      <Footer setPage={setPage} currentPage={page} />
    </div>
  );
}
