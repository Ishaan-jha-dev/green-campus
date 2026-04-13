'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  ChevronRight, 
  Trash2, 
  Recycle, 
  Award, 
  ShieldCheck, 
  TrendingUp,
  BarChart3,
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function WasteAIPage() {
  const [activeTab, setActiveTab] = useState('Analytics');

  return (
    <div className="flex flex-col h-full bg-cloud-100">
      
      {/* MODULE HEADER */}
      <header className="bg-[#4C1D95] py-6 px-8 border-b border-white/5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-1">
            <nav className="flex items-center gap-2 text-violet-300 text-[11px] font-bold uppercase tracking-widest">
              <span>Dashboard</span> <ChevronRight size={10} /> <span>WasteAI</span>
            </nav>
            <h1 className="text-display-lg text-white">WasteAI</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs font-semibold">Real-time Visual Neural Processing</span>
            <button className="h-10 px-6 border border-white/20 text-white rounded-md text-xs font-bold hover:bg-white/5 transition-colors flex items-center gap-2">
              <Camera size={14} /> Launch Scanner
            </button>
          </div>
        </div>
      </header>

      {/* TABS */}
      <div className="bg-white px-8 flex border-b border-gray-200 sticky top-0 z-40">
        {['Classify', 'Analytics', 'EPR Dashboard', 'Eco-Points'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-12 px-8 text-xs font-bold transition-all relative ${
              activeTab === tab ? 'text-waste' : 'text-mist-500 hover:text-ink'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div layoutId="tab-underline-waste" className="absolute bottom-0 left-0 w-full h-[3px] bg-waste" />
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 p-8 max-w-[1440px] mx-auto w-full">
        
        <AnimatePresence mode="wait">
          {activeTab === 'Analytics' && (
            <motion.div 
              key="analytics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Items Scanned', val: '847', unit: '', color: 'text-ink' },
                  { label: 'Recyclable %', val: '82.4', unit: '%', color: 'text-waste' },
                  { label: 'EPR Score', val: '71', unit: '/100', color: 'text-ink' },
                  { label: 'Eco-Points Issued', val: '12.4k', unit: 'pts', color: 'text-ink' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm border-l-4 border-l-waste">
                    <p className="text-mist-500 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-data-lg ${stat.color}`}>{stat.val}</span>
                      <span className="text-mist-500 text-xs font-bold">{stat.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* DONUT CHART (Simulated) */}
                <div className="lg:col-span-12 xl:col-span-8 bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center gap-12">
                   <div className="relative w-64 h-64 shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 32 32">
                        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#F3F4F6" strokeWidth="10" />
                        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#7C3AED" strokeWidth="10" strokeDasharray="60 100" strokeLinecap="round" />
                        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#059669" strokeWidth="10" strokeDasharray="20 100" strokeDashoffset="-60" strokeLinecap="round" />
                        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#D97706" strokeWidth="10" strokeDasharray="10 100" strokeDashoffset="-80" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-data-lg text-ink">847</span>
                        <span className="text-label text-mist-500 uppercase tracking-widest">Total</span>
                      </div>
                   </div>

                   <div className="flex-1 space-y-6 w-full">
                      <div className="flex items-center justify-between">
                        <h3 className="text-heading-sm text-ink font-bold">Material Breakdown</h3>
                        <p className="text-[10px] font-bold text-mist-500 uppercase tracking-widest">Top 12 Categories</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                        {[
                          { l: 'PET Plastic', val: '42%', c: 'bg-waste' },
                          { l: 'Paper & Cardboard', val: '28%', c: 'bg-emerald-600' },
                          { l: 'Aluminium Cans', val: '12%', c: 'bg-amber-500' },
                          { l: 'Glass', val: '8%', c: 'bg-indigo-300' },
                          { l: 'Mixed Plastic', val: '5%', c: 'bg-rose-500' },
                          { l: 'Other', val: '5%', c: 'bg-gray-400' },
                        ].map((m, i) => (
                          <div key={i} className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
                               <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${m.c}`} />
                                <span className="text-slate-700">{m.l}</span>
                               </div>
                               <span className="text-ink">{m.val}</span>
                            </div>
                            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: m.val }} className={`h-full ${m.c}`} />
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>

                {/* TODAY SUMMARY */}
                <div className="lg:col-span-12 xl:col-span-4 bg-[#1A0533] rounded-xl p-8 text-white flex flex-col justify-between shadow-xl">
                    <div className="space-y-1">
                      <p className="text-violet-300 text-[10px] font-black uppercase tracking-widest">Today's Classifications</p>
                      <h3 className="text-display-lg leading-tight">Fastest Shift Recorded</h3>
                    </div>
                    <div className="space-y-6 border-t border-white/10 pt-8 mt-12">
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold opacity-60">Items Scanned</span>
                          <span className="text-2xl font-mono font-bold">23</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold opacity-60">Avg. Precision</span>
                          <span className="text-2xl font-mono font-bold text-mint-300">98.4%</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold opacity-60">Estimated Diversion</span>
                          <span className="text-2xl font-mono font-bold">12.4kg</span>
                       </div>
                    </div>
                </div>
              </div>

              {/* WASTE LOG FEED */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-16 flex items-center justify-between px-8 border-b border-gray-100">
                  <h3 className="text-heading-sm text-ink font-bold">Live Material Stream</h3>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                      <input type="text" placeholder="Search items..." className="h-9 w-64 bg-cloud-100 rounded-md pl-10 pr-4 text-[13px] outline-none" />
                    </div>
                    <button className="h-9 px-4 bg-cloud-100 text-mist-500 rounded-md text-[11px] font-bold uppercase tracking-widest hover:text-ink transition-all">Export Stream</button>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100">
                   {[
                     { name: 'PET Plastic Bottle', cat: 'Plastic', bin: 'Blue', time: 'Just now', pts: '+5', icon: <Recycle size={18} /> },
                     { name: 'A4 Printing Paper', cat: 'Paper', bin: 'Green', time: '3m ago', pts: '+2', icon: <Trash2 size={18} /> },
                     { name: 'Cold Drink Can', cat: 'Metal', bin: 'Blue', time: '12m ago', pts: '+8', icon: <Trash2 size={18} /> },
                     { name: 'Cardboard Box', cat: 'Paper', bin: 'Green', time: '24m ago', pts: '+10', icon: <Recycle size={18} /> },
                   ].map((item, i) => (
                     <div key={i} className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
                       <div className="flex items-center gap-6">
                         <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-waste group-hover:bg-waste group-hover:text-white transition-colors">
                            {item.icon}
                         </div>
                         <div className="space-y-0.5">
                           <p className="text-[15px] font-bold text-ink">{item.name}</p>
                           <p className="text-[10px] text-mist-500 font-black uppercase tracking-widest">{item.cat}</p>
                         </div>
                       </div>
                       <div className="flex items-center gap-12">
                         <div className="bg-cloud-100 px-3 py-1 rounded-full border border-gray-200">
                            <span className="text-[10px] font-black uppercase tracking-widest text-mist-500">Bin: <span className={item.bin === 'Blue' ? 'text-blue-600' : 'text-emerald-600'}>{item.bin}</span></span>
                         </div>
                         <span className="text-xs font-mono font-medium text-gray-400 w-20 text-right">{item.time}</span>
                         <span className="text-xs font-bold text-waste w-12 text-right">{item.pts} pts</span>
                       </div>
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'EPR Dashboard' && (
            <motion.div 
              key="epr"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* PLASTIC EPR */}
              <div className="bg-white rounded-xl p-10 border border-gray-100 shadow-sm border-t-4 border-t-waste flex flex-col items-center space-y-8">
                 <div className="w-full flex justify-between items-center">
                    <h3 className="text-heading-sm text-ink font-bold flex items-center gap-2">🧴 Plastic EPR Compliance</h3>
                    <div className="bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
                       <span className="text-critical text-[10px] font-black uppercase tracking-widest">Action Required</span>
                    </div>
                 </div>
                 
                 <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 32 32">
                      <circle r="16" cx="16" cy="16" fill="transparent" stroke="#F3F4F6" strokeWidth="6" />
                      <circle r="16" cx="16" cy="16" fill="transparent" stroke="#7C3AED" strokeWidth="6" strokeDasharray="61 100" strokeLinecap="round" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-data-xl text-ink font-mono">61%</span>
                      <span className="text-[10px] text-mist-500 font-bold uppercase tracking-widest">Compliant</span>
                    </div>
                 </div>

                 <div className="text-center space-y-2">
                    <p className="text-sm font-semibold text-slate-700">1,242 kg uncertified gap</p>
                    <p className="text-mist-500 text-xs italic">Bridge with the GenShakti PRO partnership to reach 100%.</p>
                 </div>

                 <button className="btn-primary w-full !bg-waste !shadow-none gap-2">Download Plastic EPR Report</button>
              </div>

              {/* BATTERY EPR */}
              <div className="bg-white rounded-xl p-10 border border-gray-100 shadow-sm border-t-4 border-t-energy flex flex-col items-center space-y-8">
                 <div className="w-full flex justify-between items-center">
                    <h3 className="text-heading-sm text-ink font-bold flex items-center gap-2">🔋 Battery EPR Compliance</h3>
                    <div className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                       <span className="text-emerald-600 text-[10px] font-black uppercase tracking-widest">Compliant</span>
                    </div>
                 </div>
                 
                 <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 32 32">
                      <circle r="16" cx="16" cy="16" fill="transparent" stroke="#F3F4F6" strokeWidth="6" />
                      <circle r="16" cx="16" cy="16" fill="transparent" stroke="#D97706" strokeWidth="6" strokeDasharray="92 100" strokeLinecap="round" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-data-xl text-ink font-mono">92%</span>
                      <span className="text-[10px] text-mist-500 font-bold uppercase tracking-widest">Compliant</span>
                    </div>
                 </div>

                 <div className="text-center space-y-2">
                    <p className="text-sm font-semibold text-slate-700">All Li-ion batches successfully logged</p>
                    <p className="text-mist-500 text-xs italic">Minor lead-acid gap detected in maintenance yard.</p>
                 </div>

                 <button className="btn-primary w-full !bg-energy !shadow-none gap-2">Download Battery EPR Report</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
