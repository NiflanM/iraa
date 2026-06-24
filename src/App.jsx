import React from 'react';
import { 
  Search, Menu, User, ArrowRight, ArrowUpRight, 
  BookOpen, Beaker, BarChart3, Globe, ShieldCheck, Mail 
} from 'lucide-react';
import iraaLogo from './assets/iraa.jpeg';

export default function IraaBioLanding() {
  // Prevent form submissions for non-functional interactive elements
  const handlePrevent = (e) => e.preventDefault();

  // Clean, high-end vector representation of partner badges for crisp styling
  const MockLogo = ({ name, subtitle }) => (
    <div className="flex items-center gap-1.5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 px-5 cursor-pointer">
      <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-[9px] tracking-tighter">
        {name.substring(0, 2).toUpperCase()}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-black tracking-tight text-slate-800 uppercase leading-none">{name}</span>
        {subtitle && <span className="text-[7px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 leading-none">{subtitle}</span>}
      </div>
    </div>
  );

  return (
    <div className="min-gradient bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-500 selection:text-white">
      
      {/* 1. HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm transition-all duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      
      {/* 1. BRAND LOGO */}
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

      {/* 2. DESKTOP NAVIGATION (Modern Pill Tabs) */}
      <nav className="hidden md:flex items-center bg-slate-100/60 p-1.5 rounded-full border border-slate-200/40 text-xs font-semibold text-slate-600">
        <a href="#solutions" className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Solutions</a>
        <a href="#bulk-order" className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Bulk Order</a>
        <button onClick={() => alert('Track Order clicked (Mock)')} className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Track Order</button>
        <a href="#partnership" className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Partnership</a>
        <a href="#quick-links" className="px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white transition-all duration-200">Quick Links</a>
      </nav>

      {/* 3. AUTH & ACTION CTAs */}
      <div className="hidden md:flex items-center gap-5">
        <button 
          onClick={() => alert('Login/Register modal would open here.')} 
          className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-900 transition-all group"
        >
          <User size={15} className="text-slate-400 group-hover:text-blue-900 transition-colors" />
          Login / Register
        </button>
        
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-bold text-white rounded-xl group bg-gradient-to-br from-blue-900 to-indigo-950 hover:bg-gradient-to-bl shadow-md shadow-blue-900/10 transition-all transform hover:-translate-y-0.5 mt-2">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-900 rounded-xl group-hover:bg-opacity-0">
            Ask Iraa
          </span>
        </button>
      </div>

      {/* 4. MOBILE MENU TOGGLE */}
      <button className="md:hidden p-2 rounded-xl text-slate-600 hover:text-blue-900 hover:bg-slate-50 transition-colors">
        <Menu size={22} />
      </button>

    </div>
  </div>
</header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
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
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2">
                Purchase Products
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2">
                Analyze Workflow
              </button>
              <button className="bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center gap-2">
                Execute Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT BRANDS DISPLAY (PLACED RIGHT AFTER HERO SECTION) */}
      <section className="w-full bg-white border-b border-slate-200/50 py-3.5 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between">
          <div className="relative w-full overflow-hidden flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-[100%] gap-0 animate-marquee whitespace-nowrap items-center">
              <div className="flex items-center justify-around min-w-full shrink-0">
                <MockLogo name="Roche" />
                <MockLogo name="BioMérieux" />
                <MockLogo name="Neuberg" subtitle="Diagnostics" />
                <MockLogo name="Abbott" />
                <MockLogo name="ThermoFisher" subtitle="Scientific" />
                <MockLogo name="Apollo" subtitle="Hospitals" />
                <MockLogo name="Aster" subtitle="DM Healthcare" />
              </div>
              <div className="flex items-center justify-around min-w-full shrink-0" aria-hidden="true">
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
        </div>
      </section>

      {/* 3. SERVICE CATEGORIES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Scientific Products & Services</h2>
          <p className="mt-4 text-lg text-slate-600 font-light">Accelerating research discoveries with foundational structural tools.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
              <Beaker size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              Analytical Testing <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-slate-600 font-light">High-throughput execution pipelines configured for granular accuracy validation.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              Research & Development <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-slate-600 font-light">End-to-end framework processing to assist teams launching commercial products.</p>
          </div>
        </div>
      </section>

      {/* 4. RESEARCH SOLUTIONS SECTION */}
      <section id="solutions" className="py-20 bg-slate-100/70 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">Comprehensive Solutions</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                End-to-end support for advanced scientific innovation
              </h2>
              <p className="text-slate-600 font-light mb-8 leading-relaxed">
                We simplify operational bottlenecks across academic, industrial, and clinical trial development boundaries to keep clinical processes optimized.
              </p>
              <ul className="space-y-4">
                {['IRC Associates Advanced Modules', 'Regulatory Filing Automation', 'Global Supply Logistics Ecosystem'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 bg-blue-900 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {['Neuberg Labs', 'Abbott Inc', 'Aster Healthcare', 'Chhindi Labs'].map((partner, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200/60 flex items-center justify-between group hover:border-blue-300 transition-colors">
                  <span className="font-semibold text-slate-700">{partner}</span>
                  <button 
                    onClick={() => alert(`Connecting with ${partner} integration...`)}
                    className="text-slate-400 group-hover:text-blue-900 text-xs font-medium flex items-center gap-1 bg-slate-50 group-hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors"
                  >
                    Partner Link <ArrowUpRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESEARCH OF THE MONTH */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 rounded-3xl text-white shadow-xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* Left Content Column */}
            <div className="p-8 md:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                  Research of the Month | May 2026
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                  First-line treatment illumination with trastuzumab deruxtecan in women with locally advanced unresectable or metastatic hormone-receptor negative HER2-low breast cancer.
                </h3>
                <p className="text-blue-200 text-sm mb-8 font-light">
                  Multicenter, open-label, phase 1b/2 BEGONIA platform trial setup framework.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-800/80 border border-blue-400/30 flex items-center justify-center font-bold text-sm shrink-0">SM</div>
                  <div>
                    <p className="text-sm font-semibold">Sarah Mathew</p>
                    <p className="text-xs text-blue-300">Principal Investigator • Mentor: Dr. Kelling Misdanh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
           {/* Right Image Column - Sleek Editorial Cut */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
            {/* Color-matched blend overlay */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-indigo-950/20 to-transparent z-10 pointer-events-none mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>
            
            <img 
              src="https://images.contactout.com/profiles/1f3eb40df9bef6273569d3ec9da4d26c" 
              alt="Sarah Mathews Researcher" 
              className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-1000 ease-out filter brightness-95 contrast-105"
            />
          </div>

          </div>
        </div>
      </section>

      {/* 6. RESEARCH ARTICLES / BLOG SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Learn. Explore. Innovate.</h2>
              <p className="text-slate-600 mt-2 font-light">Latest publications from our active ecosystem contributors.</p>
            </div>
            <button className="text-blue-900 font-semibold text-sm hover:underline flex items-center gap-1 hidden sm:flex">
              View all insights <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
              <div className="p-6 flex-1">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-3">Agriculture</span>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                  The Role of Biotechnology in Modern Agriculture
                </h3>
                <p className="text-slate-600 font-light text-sm line-clamp-3">
                  Exploring crispr transformations to optimize yield margins across volatile macro climatic ecosystems.
                </p>
              </div>
              <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <span>04/12/2026</span>
                <span className="font-medium text-blue-900 group-hover:underline">Read Research</span>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
              <div className="p-6 flex-1">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-3">HealthTech</span>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                  How Health Technology is Emerging in Rural Hubs
                </h3>
                <p className="text-slate-600 font-light text-sm line-clamp-3">
                  Decentralized diagnostic pipelines and remote clinical telemetry infrastructures driving healthcare parity.
                </p>
              </div>
              <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <span>03/28/2026</span>
                <span className="font-medium text-blue-900 group-hover:underline">Read Research</span>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
              <div className="p-6 flex-1">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-3">Methodology</span>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                  Effective Laboratory Techniques for Blood Glucose Testing
                </h3>
                <p className="text-slate-600 font-light text-sm line-clamp-3">
                  Bench-side calibration approaches to mitigate measurement drift within multi-cohort trials.
                </p>
              </div>
              <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <span>02/14/2026</span>
                <span className="font-medium text-blue-900 group-hover:underline">Read Research</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 7. INNOVATION HUB */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl text-white p-8 md:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-4">Innovation Hub</h2>
            <p className="text-slate-300 font-light mb-8 leading-relaxed">
              A collaborative space where visionary researchers and experienced scientists unite to nurture novel ideas, accelerate innovation, and create solutions that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors text-sm">
                Learn More
              </button>
              <button 
                onClick={() => alert('Application route placeholder')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Try IRC Associate Panel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STATISTICS / METRICS */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-black text-blue-900 mb-2">70+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Global Teams</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black text-blue-900 mb-2">120+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Researchers</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black text-blue-900 mb-2">98%</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Report Accuracy</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black text-blue-900 mb-2">15k+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Global Research Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DASHBOARD SHOWCASE */}
      <section className="py-20 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built to Outperform Traditional Workflows</h2>
            <p className="text-slate-600 font-light">Personalized dashboards tailored to the explicit visibility needs of every stakeholder role.</p>
          </div>

          {/* Interactive Role Switcher Tabs */}
          <div className="flex justify-center p-1.5 bg-slate-200 max-w-lg mx-auto rounded-xl mb-12">
            {['Associate', 'Customer', 'Enterprise', 'Partner'].map((role, i) => (
              <button 
                key={role} 
                onClick={() => alert(`Switching dashboard view blueprint to: ${role}`)}
                className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all ${i === 0 ? 'bg-white text-blue-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Dummy UI Blueprint Card representing the dashboard */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="text-xs text-slate-400 font-mono ml-2">Console v2.0 - Dr. Dhiraa</span>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded font-medium">Predictive Module Active</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-400 font-medium uppercase mb-1">Active Assays</p>
                <p className="text-2xl font-bold text-slate-800">14 / 18</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-400 font-medium uppercase mb-1">Telemetry Delivery</p>
                <p className="text-2xl font-bold text-emerald-600">Optimal</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-400 font-medium uppercase mb-1">Logistics Match</p>
                <p className="text-2xl font-bold text-slate-800">99.4%</p>
              </div>
            </div>
            <div className="h-32 bg-slate-50 border border-dashed border-slate-200 rounded-xl mt-4 flex items-center justify-center text-xs text-slate-400 font-mono">
              [ Mock Interactive Metric Visualization Framework ]
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900">What People Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[1, 2].map((_, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200/70 shadow-sm relative">
              <span className="text-6xl text-blue-100 absolute top-2 left-4 font-serif pointer-events-none">“</span>
              <p className="text-slate-600 text-sm font-light relative z-10 mb-6 leading-relaxed">
                Iraa Biosciences significantly optimized our workflow timelines. Their comprehensive testing framework minimized baseline diagnostic latency deviations completely.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">SV</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dr. Sujith Varma</h4>
                  <p className="text-xs text-slate-400">Pharmacology Lead, Biogenics Inc</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
        {/* Newsletter Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-900">
          <div className="md:flex md:items-center md:justify-between bg-gradient-to-r from-blue-950 to-slate-900 p-8 rounded-2xl border border-slate-800/60">
            <div className="mb-6 md:mb-0 max-w-md">
              <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                <Mail size={18} className="text-blue-400" /> Subscribe to our Ecosystem Newsletter
              </h3>
              <p className="text-xs text-slate-400 font-light">Get early intelligence blueprints, research drops, and catalog updates.</p>
            </div>
            <form onSubmit={handlePrevent} className="flex gap-2 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter work email" 
                className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500" 
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Directory Links */}
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

        {/* Legal Bottom Bar */}
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

      {/* Embedded CSS Loop Keyframes Block */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
}