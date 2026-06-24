import React, { useState } from 'react';
import { 
  Search, Menu, X, User, ArrowRight, ArrowUpRight, 
  BookOpen, Beaker, BarChart3, Globe, ShieldCheck, Mail,
  CheckCircle2, Activity, Layers, Truck, Building, Users
} from 'lucide-react';
import iraaLogo from './assets/iraa.jpeg';

export default function IraaBioLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDashboardRole, setActiveDashboardRole] = useState('Associate');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handlePrevent = (e) => e.preventDefault();

  const MockLogo = ({ name, subtitle }) => (
    <div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 px-6 cursor-pointer select-none">
      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center font-bold text-slate-800 text-[10px] tracking-tighter border border-slate-200/60 shadow-sm">
        {name.substring(0, 2).toUpperCase()}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-extrabold tracking-tight text-slate-800 uppercase leading-none">{name}</span>
        {subtitle && <span className="text-[7px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 leading-none">{subtitle}</span>}
      </div>
    </div>
  );

  //mock data
  const dashboardRolesData = {
    Associate: {
      console: "Console v2.0 - Dr. Dhiraa",
      badge: "Predictive Module Active",
      metrics: [
        { label: "Active Assays", val: "14 / 18", color: "blue" },
        { label: "Telemetry Delivery", val: "Optimal", color: "emerald" },
        { label: "Logistics Match", val: "99.4%", color: "slate" }
      ],
      viz: "[ Associate Operational Pipeline Trace Vector Loaded ]"
    },
    Customer: {
      console: "Client Access Portal - BioGen Inc",
      badge: "Secure Order Stream",
      metrics: [
        { label: "Pending Deliveries", val: "2 Batches", color: "blue" },
        { label: "Accuracy Quality Check", val: "Passed", color: "emerald" },
        { label: "Account Manager Response", val: "< 4 min", color: "indigo" }
      ],
      viz: "[ Real-Time Product Delivery & Custom Formula Telemetry Matrix ]"
    },
    Enterprise: {
      console: "Enterprise Node Cluster Node-09",
      badge: "Scale Optimization On",
      metrics: [
        { label: "Global Shared Nodes", val: "42 Units", color: "purple" },
        { label: "SDR Compliance Check", val: "100% Locked", color: "emerald" },
        { label: "Active Cohort Feeds", val: "11,200/sec", color: "blue" }
      ],
      viz: "[ Multi-Cohort Trial Calibration Drift Correction Visual Grid ]"
    },
    Partner: {
      console: "Affiliated Ecosystem Console - Neuberg Labs",
      badge: "Active Integration Sync",
      metrics: [
        { label: "API Sync Channels", val: "8 Active", color: "emerald" },
        { label: "Data Pipeline Bridge", val: "99.98% Up", color: "blue" },
        { label: "Partner Revenue Margin", val: "+14.2%", color: "indigo" }
      ],
      viz: "[ Cross-Ecosystem Logistical Mesh Network Mapping Dynamic ]"
    }
  };

  return (
    <div className="min-h-screen text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white relative bg-dot-grid">
      
      {/* NAVBAR*/}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3.5 group cursor-pointer">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-slate-200/80 shadow-sm transition-transform group-hover:scale-102 duration-300">
                <img 
                  src={iraaLogo} 
                  alt="Iraa Biosciences Logo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<span class="text-blue-900 font-black text-xl tracking-tighter">I</span>';
                  }}
                />
              </div>
              <div className="flex flex-col select-none">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-blue-900 transition-colors">Iraa</span>
                <span className="text-[9px] font-black text-blue-900 tracking-[0.2em] uppercase mt-1 leading-none opacity-80">Biosciences</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 text-xs font-semibold text-slate-600 shadow-sm">
              <a href="#solutions" className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Solutions</a>
              <a href="#bulk-order" className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Bulk Order</a>
              <button onClick={() => alert('Track Order clicked (Mock)')} className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Track Order</button>
              <a href="#partnership" className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Partnership</a>
              <a href="#quick-links" className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Quick Links</a>
            </nav>

            <div className="hidden md:flex items-center gap-5">
              {/* Search BAR */}
              <div className={`flex items-center bg-slate-100 border border-slate-200/60 rounded-xl transition-all duration-300 px-3 py-1.5 ${isSearchExpanded ? 'w-56' : 'w-36'}`}>
                <Search size={14} className="text-slate-400 mr-1.5 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search Contents ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchExpanded(true)}
                  onBlur={() => setIsSearchExpanded(false)}
                  className="bg-transparent text-xs text-slate-800 w-full focus:outline-none placeholder:text-slate-400 font-medium"
                />
              </div>

              <button 
                onClick={() => alert('Login/Register modal would open here.')} 
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-900 transition-all group"
              >
                <User size={15} className="text-slate-400 group-hover:text-blue-900 transition-colors" />
                Login / Register
              </button>
              
              <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-white rounded-xl group bg-gradient-to-br from-blue-900 to-indigo-950 hover:bg-gradient-to-bl shadow-md shadow-blue-900/10 transition-all transform hover:-translate-y-0.5">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-900 rounded-xl group-hover:bg-opacity-0">
                  Ask Iraa
                </span>
              </button>
            </div>

            {/* Mobile Menu Action Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-blue-900 hover:bg-slate-50 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Dynamic Mobile Dropout Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-xl absolute top-20 left-0 w-full px-6 py-6 flex flex-col gap-4 font-semibold text-sm animate-fadeIn">
            <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-slate-700 hover:text-blue-900 border-b border-slate-100">Solutions</a>
            <a href="#bulk-order" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-slate-700 hover:text-blue-900 border-b border-slate-100">Bulk Order</a>
            <button onClick={() => { alert('Track Order Context'); setIsMobileMenuOpen(false); }} className="text-left py-2 text-slate-700 hover:text-blue-900 border-b border-slate-100">Track Order</button>
            <a href="#partnership" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-slate-700 hover:text-blue-900 border-b border-slate-100">Partnership</a>
            <a href="#quick-links" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-slate-700 hover:text-blue-900 border-b border-slate-100">Quick Links</a>
            <div className="flex flex-col gap-3 pt-4">
              <button onClick={() => alert('Sign-in Modal')} className="w-full text-center py-3 border border-slate-200 rounded-xl font-bold text-slate-700 bg-slate-50">Login / Register</button>
              <button className="w-full text-center py-3 bg-blue-900 text-white rounded-xl font-bold shadow-md shadow-blue-950/20">Ask Iraa AI</button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24 lg:py-32 border-b border-blue-900/40">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
              Built for Innovation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              The Integrated Research Ecosystem for End-to-End <span className="text-blue-400">Scientific Outcomes.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
              From study design and laboratory testing to complete research and development with comprehensive commercialization support.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => alert('Routing to E-Commerce catalog...')} className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2">
                Purchase Products
              </button>
              <button onClick={() => alert('Opening Analytical Workflow Modeler...')} className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2">
                Analyze Workflow
              </button>
              <button onClick={() => alert('Deploying Multi-cohort Research Study Wizard...')} className="bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center gap-2">
                Execute Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS*/}
      <section className="w-full bg-white/60 backdrop-blur-md border-b border-slate-200/80 py-5 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-0 animate-marquee whitespace-nowrap items-center">
            <div className="flex items-center justify-around min-w-full shrink-0 gap-4">
              <MockLogo name="Roche" />
              <MockLogo name="BioMérieux" />
              <MockLogo name="Neuberg" subtitle="Diagnostics" />
              <MockLogo name="Abbott" />
              <MockLogo name="ThermoFisher" subtitle="Scientific" />
              <MockLogo name="Apollo" subtitle="Hospitals" />
              <MockLogo name="Aster" subtitle="DM Healthcare" />
            </div>
            <div className="flex items-center justify-around min-w-full shrink-0 gap-4" aria-hidden="true">
              <MockLogo name="Roche" />
              <MockLogo name="BioMérieux" />
              <MockLogo name="Neuberg" subtitle="Diagnostics" />
              <MockLogo name="Abbott" />
              <MockLogo name="ThermoFisher" subtitle="Scientific" />
              <MockLogo name="Apollo" subtitle="Hospitals" />
              <MockLogo name="Aster" subtitle="DM Healthcare" />
            </div>
          </div>
        </div>
      </section>

      {/*SERVICE CATEGORIES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="flex justify-center mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Scientific Products & Services</h2>
          <p className="mt-3 text-base text-slate-500 font-normal">Accelerating research discoveries with foundational structural tools.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          <div onClick={() => alert('Redirecting to Analytical Validation Engine...')} className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-md border border-slate-200 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 mb-8 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100">
              <Beaker size={26} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              Analytical Testing <ArrowRight size={20} className="text-slate-300 group-hover:text-blue-900 group-hover:translate-x-1.5 transition-all" />
            </h3>
            <p className="text-slate-600 font-normal text-sm leading-relaxed">High-throughput execution pipelines configured for granular accuracy validation across varied testing conditions.</p>
          </div>
          <div onClick={() => alert('Opening R&D Commercial Framework Portal...')} className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-md border border-slate-200 hover:border-indigo-500/40 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-900 mb-8 group-hover:bg-indigo-900 group-hover:text-white transition-all duration-300 shadow-sm border border-indigo-100">
              <BarChart3 size={26} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              Research & Development <ArrowRight size={20} className="text-slate-300 group-hover:text-indigo-900 group-hover:translate-x-1.5 transition-all" />
            </h3>
            <p className="text-slate-600 font-normal text-sm leading-relaxed">End-to-end framework processing to assist teams launching scalable and compliant commercial bio-products.</p>
          </div>
        </div>
      </section>

      {/*  RESEARCH SOLUTIONS SECTION */}
      <section id="solutions" className="py-24 bg-slate-100/60 border-y border-slate-200/80 relative">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">Comprehensive Solutions</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6 leading-tight">
                End-to-end support for advanced scientific innovation
              </h2>
              <p className="text-slate-600 font-normal text-sm mb-8 leading-relaxed">
                We simplify operational bottlenecks across academic, industrial, and clinical trial development boundaries to keep clinical processes optimized.
              </p>
              <ul className="space-y-4">
                {['IRC Associates Advanced Modules', 'Regulatory Filing Automation', 'Global Supply Logistics Ecosystem'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] shadow-sm shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {['Neuberg Labs', 'Abbott Inc', 'Aster Healthcare', 'Chhindi Labs'].map((partner, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center justify-between group hover:border-blue-500 hover:shadow-lg transition-all duration-300 relative">
                  <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                  <span className="font-bold text-slate-800 text-sm">{partner}</span>
                  <button 
                    onClick={() => alert(`Connecting with ${partner} integration ecosystem data sync pipeline...`)}
                    className="text-slate-500 group-hover:text-blue-900 text-xs font-bold flex items-center gap-1 bg-slate-50 group-hover:bg-blue-50 px-3.5 py-2 rounded-xl transition-all duration-200 border border-slate-100"
                  >
                    Partner Link <ArrowUpRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH OF THE MONTH */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 rounded-[32px] text-white shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
          <div className="grid lg:grid-cols-12 items-stretch min-h-[480px]">
            
            <div className="p-8 md:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center relative z-10">
              <div className="mb-6 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="bg-blue-500/20 text-blue-300 border border-blue-400/40 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider inline-block">
                  Research of the Month | May 2026
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-snug tracking-tight">
                First-line treatment illumination with trastuzumab deruxtecan in women with locally advanced unresectable or metastatic hormone-receptor negative HER2-low breast cancer.
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-8 font-normal max-w-xl">
                Multicenter, open-label, phase 1b/2 BEGONIA platform trial setup framework.
              </p>
              <div className="flex items-center gap-4 border-t border-slate-800 pt-6 mt-2">
                <div className="w-11 h-11 rounded-full bg-blue-600/30 border border-blue-400/30 flex items-center justify-center font-bold text-sm shrink-0 shadow-inner">SM</div>
                <div>
                  <p className="text-sm font-bold text-white">Sarah Mathew</p>
                  <p className="text-xs text-slate-400 mt-0.5">Principal Investigator • Mentor: Dr. Kelling Misdanh</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/90 via-slate-950/30 to-transparent z-10 pointer-events-none"></div>
              <img 
                src="https://images.contactout.com/profiles/1f3eb40df9bef6273569d3ec9da4d26c" 
                alt="Sarah Mathews Researcher" 
                className="absolute inset-0 w-full h-full object-cover object-top filter brightness-90 contrast-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/*RESEARCH ARTICLES*/}
      <section className="py-24 bg-white/80 border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Learn. Explore. Innovate.</h2>
              <p className="text-slate-500 mt-2 font-normal text-sm">Latest publications from our active ecosystem contributors.</p>
            </div>
            <button onClick={() => alert('Opening full archival research publication directory...')} className="text-blue-900 font-bold text-sm hover:underline flex items-center gap-1.5 hidden sm:flex bg-slate-100 hover:bg-slate-200/80 px-4 py-2 rounded-xl transition-all">
              View all insights <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cat: 'Agriculture', title: 'The Role of Biotechnology in Modern Agriculture', desc: 'Exploring CRISPR transformations to optimize yield margins across volatile macro climatic ecosystems.', date: '04/12/2026' },
              { cat: 'HealthTech', title: 'How Health Technology is Emerging in Rural Hubs', desc: 'Decentralized diagnostic pipelines and remote clinical telemetry infrastructures driving healthcare parity.', date: '03/28/2026' },
              { cat: 'Methodology', title: 'Effective Laboratory Techniques for Blood Glucose Testing', desc: 'Bench-side calibration approaches to mitigate measurement drift within multi-cohort trials.', date: '02/14/2026' }
            ].map((art, idx) => (
              <article key={idx} onClick={() => alert(`Loading document bundle for article: "${art.title}"`)} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer relative shadow-sm">
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors"></div>
                <div className="p-8 flex-1">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-4">{art.cat}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-slate-500 font-normal text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {art.desc}
                  </p>
                </div>
                <div className="px-8 py-5 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-400 font-medium">
                  <span>{art.date}</span>
                  <span className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors">Read Research</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/*INNOVATION HUB */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-[32px] text-white p-10 md:p-16 text-center relative overflow-hidden border border-slate-800">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Innovation Hub</h2>
            <p className="text-slate-400 font-normal text-sm mb-10 leading-relaxed">
              A collaborative space where visionary researchers and experienced scientists unite to nurture novel ideas, accelerate innovation, and create solutions that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => alert('Loading Innovation Roadmap documentation.')} className="bg-white text-slate-900 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-all text-sm shadow-md">
                Learn More
              </button>
              <button 
                onClick={() => alert('Application route placeholder activated')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm shadow-md shadow-blue-600/10"
              >
                Try IRC Associate Panel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white/60 backdrop-blur-md border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-slate-200">
            {[
              { val: '70+', label: 'Global Teams' },
              { val: '120+', label: 'Researchers' },
              { val: '98%', label: 'Report Accuracy' },
              { val: '15k+', label: 'Global Partners' }
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-2.5 tracking-tight">{stat.val}</p>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*DASHBOARD SHOWCASE*/}
      <section className="py-24 bg-slate-100/60 border-b border-slate-200 relative">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Built to Outperform Traditional Workflows</h2>
            <p className="text-slate-500 font-normal text-sm">Personalized dashboards tailored to the explicit visibility needs of every stakeholder role.</p>
          </div>

          {/* Tab Selector Btns */}
          <div className="flex justify-center p-1 bg-slate-200 max-w-md mx-auto rounded-xl mb-12 border border-slate-300/40">
            {Object.keys(dashboardRolesData).map((role) => (
              <button 
                key={role} 
                onClick={() => setActiveDashboardRole(role)}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${activeDashboardRole === role ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-950'}`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xl max-w-4xl mx-auto relative overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                <span className="text-xs text-slate-500 font-mono ml-3 transition-colors">{dashboardRolesData[activeDashboardRole].console}</span>
              </div>
              <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200/40 px-2.5 py-1 rounded-md font-bold tracking-wide animate-pulse">
                {dashboardRolesData[activeDashboardRole].badge}
              </span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {dashboardRolesData[activeDashboardRole].metrics.map((metric, index) => (
                <div key={index} className="bg-slate-50/70 p-5 rounded-xl border border-slate-200 relative group hover:bg-slate-100/70 transition-colors">
                  <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${metric.color === 'emerald' ? 'bg-emerald-500' : metric.color === 'blue' ? 'bg-blue-500' : metric.color === 'purple' ? 'bg-purple-500' : 'bg-indigo-500'}`}></div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">{metric.label}</p>
                  <p className="text-2xl font-black text-slate-900">{metric.val}</p>
                </div>
              ))}
            </div>

            <div className="h-36 bg-slate-50/50 border border-dashed border-slate-200 rounded-xl mt-4 flex items-center justify-center text-xs text-slate-400 font-mono select-none transition-all text-center px-4">
              {dashboardRolesData[activeDashboardRole].viz}
            </div>
          </div>
        </div>
      </section>

      {/* Feedbacks */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">What People Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          {[1, 2].map((_, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between group hover:border-slate-300 transition-colors">
              <span className="text-6xl text-slate-100 absolute top-2 left-4 font-serif pointer-events-none select-none">“</span>
              <p className="text-slate-600 text-sm font-normal relative z-10 mb-8 leading-relaxed">
                Iraa Biosciences significantly optimized our workflow timelines. Their comprehensive testing framework minimized baseline diagnostic latency deviations completely.
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 shadow-sm shrink-0">SV</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dr. Sujith Varma</h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Pharmacology Lead, Biogenics Inc</p>
                  </div>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-all"></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-900">
          <div className="md:flex md:items-center md:justify-between bg-gradient-to-r from-blue-950 to-slate-900 p-8 rounded-2xl border border-slate-800/60 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
            <div className="mb-6 md:mb-0 max-w-md relative z-10">
              <h3 className="text-white font-bold text-base mb-1 flex items-center gap-2">
                <Mail size={18} className="text-blue-400" /> Subscribe to our Ecosystem Newsletter
              </h3>
              <p className="text-xs text-slate-400 font-light">Get early intelligence blueprints, research drops, and catalog updates.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully to Iraa Ecosystem intelligence drop feeds.'); }} className="flex gap-2 w-full max-w-md relative z-10">
              <input 
                type="email" 
                required
                placeholder="Enter work email" 
                className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500" 
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><a href="#about" className="hover:text-white transition-colors">About Ecosystem</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">Press Newsroom</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><a href="#assays" className="hover:text-white transition-colors">Analytical Assays</a></li>
              <li><a href="#trial" className="hover:text-white transition-colors">Trial Processing</a></li>
              <li><a href="#custom" className="hover:text-white transition-colors">Custom Formulations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Hub & Support</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#tickets" className="hover:text-white transition-colors">Support Ticket Line</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Governance</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><a href="#compliance" className="hover:text-white transition-colors">SDR Compliance</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Vault Blueprint</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Other Brands</h4>
            <p className="text-xs font-light text-slate-500 leading-relaxed">
              Iraa Pharmacy • Wise Partner Networks • IRC Logistical Fleet
            </p>
          </div>
        </div>

        <div className="bg-slate-950 py-6 border-t border-slate-900/60 text-xs font-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600">
            <p>© 2026 Iraa Biosciences Inc.</p>
            <div className="flex gap-4">
              <a href="#terms" className="hover:text-slate-400">Terms</a>
              <a href="#privacy" className="hover:text-slate-400">Privacy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS*/}
      <style>{`
        .bg-dot-grid {
          background-color: #f8fafc;
          background-image: 
            radial-gradient(#cbd5e1 1.5px, transparent 1.5px),
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
          background-size: 24px 24px, 120px 120px, 120px 120px;
          background-position: 0 0, 0 0, 0 0;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>

    </div>
  );
}