'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Zap, 
  ArrowRight, 
  BarChart3,
  MapPin,
  TrendingDown,
  Globe,
  Leaf,
  Database,
  Sparkles
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-emerald-500/30 bg-white overflow-hidden">
      
      {/* NAVIGATION BAR - GreenPulse STYLE */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/70 backdrop-blur-xl flex items-center justify-between px-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-slate-900 font-black text-2xl tracking-tighter">GreenPulse<span className="text-emerald-600">.</span></span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className="text-emerald-700 hover:text-emerald-600 text-sm font-black transition-all border-b-2 border-emerald-600 py-1 uppercase tracking-tighter">Audit Ecosystem</Link>
        </div>

        <Link href="/login" className="px-10 py-4 text-xs font-black text-white bg-slate-900 hover:bg-emerald-600 rounded-full transition-all shadow-2xl shadow-black/10 uppercase tracking-[0.2em]">
          Institutional Login
        </Link>
      </nav>

      {/* HERO SECTION - REFRESHED FOR GREENPULSE */}
      <section className="relative pt-32 pb-20 px-10">
        <div className="max-w-[1400px] mx-auto bg-gradient-to-br from-[#065F46] to-[#047857] rounded-[50px] relative overflow-hidden flex flex-col items-center justify-center p-20 min-h-[850px] shadow-2xl">
          {/* Ambient light effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-emerald-400/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-mint-400/20 blur-[120px] rounded-full" />

          {/* Main 3D Hero Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-[550px] h-[550px] relative z-20 mb-6 group"
          >
            <img 
              src="/images/hero.png" 
              alt="GreenPulse Intelligence" 
              className="w-full h-full object-contain filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] group-hover:rotate-2 transition-transform duration-1000"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-10 relative z-30"
          >
            <h1 className="text-7xl lg:text-9xl font-black text-white tracking-tighter leading-none">
              Powering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-mint-100">
                Sustainable
              </span> 
              Campuses.
            </h1>
            
            <p className="text-xl text-emerald-50/80 max-w-2xl mx-auto font-bold tracking-tight leading-relaxed">
              GreenPulse is the ultimate sustainability intelligence platform. Use visual AI to track emissions, audit energy waste, and automate institutional compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-32 px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-black text-[10px] uppercase tracking-widest border border-emerald-100 italic">
            <Sparkles size={14} /> The Platform Difference
          </div>
          <h2 className="text-5xl font-black text-slate-900 leading-tight tracking-tighter">
            Actionable Intelligence <br /> for a Zero-Waste Future.
          </h2>
          <div className="space-y-6 text-slate-500 font-bold leading-relaxed max-w-lg">
            <p>
              GreenPulse isn't just a dashboard—it's a multi-module ecosystem that integrates directly with your campus logistics.
            </p>
            <div className="grid grid-cols-1 gap-4">
               {[
                 { t: 'Automated Carbon Ledger', d: 'Tier-1 regulatory compliance built in.' },
                 { t: 'Visual Energy Radar', d: 'Detect leakage before it affects the bill.' },
                 { t: 'Neural Waste Analysis', d: 'In-browser ML for smart waste sorting.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle i={i} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-black text-sm uppercase">{item.t}</h4>
                      <p className="text-xs text-slate-400 font-bold mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
        <div className="relative">
           <div className="absolute inset-0 bg-emerald-600/5 blur-[100px] rounded-full -z-10" />
           <div className="bg-white border-2 border-slate-100 p-4 rounded-[40px] shadow-2xl overflow-hidden transform rotate-2">
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" alt="Platform" className="w-full h-auto rounded-[30px]" />
           </div>
           <div className="absolute -bottom-10 -left-10 bg-emerald-900 text-white p-8 rounded-[32px] shadow-2xl max-w-xs space-y-4 transform -rotate-3">
              <p className="text-xl font-black leading-tight">Reduced average campus energy waste by 22% in the first quarter.</p>
              <p className="text-[10px] font-black uppercase text-emerald-400 tracking-widest leading-none">Institutional Audit · Q1 2026</p>
           </div>
        </div>
      </section>

      {/* RE-STYLED FEATURES SECTION */}
      <section className="py-32 px-10 bg-[#F3FBF6]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Engineered for Impact</h2>
            <p className="text-slate-500 font-bold max-w-xl">Each GreenPulse module is purpose-built to solve specific institutional sustainability challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: 'Institutional Audit', 
                desc: 'Comprehensive mapping of campus infrastructure for large-scale energy efficiency.',
                img: '/images/site.png'
              },
              { 
                title: 'Carbon Forecast', 
                desc: 'Simulate the delta of sustainability decisions with advanced predictive AI.',
                img: '/images/carbon.png'
              },
              { 
                title: 'Unified Ledger', 
                desc: 'A single, cryptographically signed ledger for all campus compliance data.',
                img: '/images/data.png'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[48px] p-6 flex flex-col gap-8 shadow-sm hover:shadow-2xl transition-all border border-emerald-900/5"
              >
                <div className="aspect-square rounded-[40px] overflow-hidden bg-emerald-50 relative">
                   <img src={feature.img} alt={feature.title} className="w-full h-full object-contain p-8 hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="px-4 pb-4 space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{feature.title}</h3>
                  <p className="text-sm font-bold text-slate-500 leading-relaxed">{feature.desc}</p>
                  <div className="pt-2">
                    <Link href="/login" className="text-emerald-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 group cursor-pointer">
                      Explore Module <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - PERSONALIZED FOR GreenPulse */}
      <footer className="bg-slate-900 pt-32 pb-12 px-10">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <Leaf className="text-white w-5 h-5" />
                </div>
                <span className="text-white font-black text-2xl tracking-tighter uppercase">GreenPulse</span>
              </div>
              <p className="text-slate-400 font-bold max-w-md text-lg leading-relaxed">
                The institutional standard for campus sustainability intelligence. Built for compliance, designed for massive institutional impact.
              </p>
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                    <Globe className="text-white w-5 h-5 opacity-60" />
                 </div>
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                    <Database className="text-white w-5 h-5 opacity-60" />
                 </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] opacity-40">Core Sections</h4>
              <div className="flex flex-col gap-5 font-bold text-slate-400">
                <Link href="#" className="hover:text-emerald-400 transition-colors">Campus Audit</Link>
                <Link href="#" className="hover:text-emerald-400 transition-colors">Carbon Ledger</Link>
                <Link href="#" className="hover:text-emerald-400 transition-colors">Energy Radar</Link>
                <Link href="#" className="hover:text-emerald-400 transition-colors">Compliance Hub</Link>
                <Link href="#" className="hover:text-emerald-400 transition-colors">Login Portal</Link>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] opacity-40">Get in touch</h4>
              <div className="space-y-6 font-bold text-slate-400">
                <div className="space-y-1">
                  <p className="text-white text-sm">contact@greenpulse.edu.in</p>
                  <p className="text-emerald-500 text-[10px] uppercase font-black uppercase tracking-widest leading-none">Official Support</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white text-sm">+91 90447-XXXXX</p>
                  <p className="text-emerald-500 text-[10px] uppercase font-black uppercase tracking-widest leading-none">University Liaison</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">© 2026 GreenPulse Campus Ecosystem · Version 4.9.2</p>
            <div className="flex items-center gap-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">
               <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
               <Link href="#" className="hover:text-white transition-colors">SLA Agreement</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckCircle({ i }) {
  return (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
