'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ChevronRight, 
  UploadCloud, 
  Search, 
  Info, 
  History, 
  Activity, 
  AlertTriangle,
  RefreshCcw,
  CheckCircle2,
  Trash2,
  FileText
} from 'lucide-react';

export default function EnergyRadarPage() {
  const [hasData, setHasData] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setHasData(true);
    }, 3000);
  };

  return (
    <div className="flex flex-col h-full bg-cloud-100">
      
      {/* MODULE HEADER */}
      <header className="bg-[#92400E] py-6 px-8 border-b border-white/5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-1">
            <nav className="flex items-center gap-2 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
              <span>Dashboard</span> <ChevronRight size={10} /> <span>EnergyRadar</span>
            </nav>
            <h1 className="text-display-lg text-white">EnergyRadar</h1>
          </div>
          {hasData && (
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-xs font-semibold">Live Analysing 43,200 readings…</span>
              <button 
                onClick={() => setHasData(false)}
                className="h-10 px-6 border border-white/20 text-white rounded-md text-xs font-bold hover:bg-white/5 transition-colors flex items-center gap-2"
              >
                <RefreshCcw size={14} /> New Audit
              </button>
            </div>
          )}
        </div>
      </header>

      {hasData && (
        <div className="bg-white px-8 flex border-b border-gray-200 sticky top-0 z-40">
          {['Analysis', 'Recommendations', 'History'].map(tab => (
            <button 
              key={tab}
              className={`h-12 px-8 text-xs font-bold transition-all relative ${
                tab === 'Analysis' ? 'text-energy' : 'text-mist-500 hover:text-ink'
              }`}
            >
              {tab}
              {tab === 'Analysis' && (
                <motion.div layoutId="tab-underline-energy" className="absolute bottom-0 left-0 w-full h-[3px] bg-energy" />
              )}
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-[1440px] mx-auto w-full">
        
        <AnimatePresence mode="wait">
          {/* EMPTY STATE */}
          {!hasData && !isProcessing && (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-[560px] space-y-10 text-center"
            >
               <div className="h-40 flex items-center justify-center relative">
                  <svg className="w-full max-w-[320px]" viewBox="0 0 200 60">
                    <path d="M0,30 L60,30 L70,10 L80,50 L90,20 L100,30 H200" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 4" />
                    <motion.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                       d="M70,10 L80,50 L90,20 L105,30" 
                       fill="none" stroke="#D97706" strokeWidth="3" 
                    />
                  </svg>
               </div>

               <div className="space-y-4">
                  <h2 className="text-display-lg text-ink">Your meter data is waiting to be heard.</h2>
                  <p className="text-body-lg text-mist-500">
                    Upload a 30-day CSV from your smart meter portal. Discover hidden energy waste in minutes.
                  </p>
               </div>

               <div 
                 onClick={handleUpload}
                 className="w-full h-52 bg-amber-50 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-energy group transition-all"
               >
                  <div className="w-14 h-14 bg-energy/10 rounded-full flex items-center justify-center text-energy group-hover:scale-110 transition-transform">
                    <UploadCloud size={32} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-ink uppercase tracking-widest">Drag your meter CSV here</p>
                    <p className="text-xs text-mist-500 font-medium italic">or click to browse</p>
                  </div>
                  <p className="text-[10px] font-black text-mist-500 uppercase tracking-widest mt-2">Supports Intellismart · Genus · Secure meter formats</p>
               </div>

               <div className="flex flex-col items-center gap-6 pt-4">
                  <button className="text-[13px] font-bold text-energy hover:underline uppercase tracking-widest">How to export your meter CSV →</button>
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex-1 h-[1px] bg-gray-200" />
                    <span className="text-[10px] font-bold text-mist-500 uppercase tracking-widest">or</span>
                    <div className="flex-1 h-[1px] bg-gray-200" />
                  </div>
                  <button onClick={handleUpload} className="btn-ghost !text-energy border border-energy/20 px-8">Try with sample data (30-day UPPCL dataset)</button>
               </div>
            </motion.div>
          )}

          {/* PROCESSING STATE */}
          {isProcessing && (
            <motion.div 
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-md bg-white p-12 rounded-xl border border-gray-100 shadow-lg text-center space-y-8"
            >
               <div className="w-12 h-12 border-4 border-energy border-t-transparent rounded-full animate-spin mx-auto" />
               <div className="space-y-2">
                  <h3 className="text-heading-sm text-ink font-bold">Analysing 43,200 readings…</h3>
                  <p className="text-xs text-mist-500">Building your consumption baseline · Detecting anomalies</p>
               </div>
               <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3 }}
                    className="h-full bg-energy"
                  />
               </div>
            </motion.div>
          )}

          {/* ANALYSIS DASHBOARD */}
          {hasData && (
            <motion.div 
              key="analysis"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full space-y-10"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Anomalies Detected', val: '7', unit: '', color: 'text-critical' },
                  { label: 'Monthly Waste Est.', val: '4,200', unit: '₹', color: 'text-ink' },
                  { label: 'CO2 Waste', val: '184', unit: 'kg', color: 'text-ink' },
                  { label: 'Data Quality Score', val: '94', unit: '%', color: 'text-success' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm border-l-4 border-l-energy">
                    <p className="text-mist-500 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</p>
                    <div className="flex items-baseline gap-1.5">
                      {stat.unit === '₹' && <span className="text-sm font-mono text-mist-500">₹</span>}
                      <span className={`text-data-lg ${stat.color}`}>{stat.val}</span>
                      {stat.unit !== '₹' && <span className="text-mist-500 text-xs font-bold">{stat.unit}</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                 {/* HEATMAP */}
                 <div className="xl:col-span-8 bg-white rounded-xl p-8 border border-gray-100 shadow-sm space-y-8">
                    <div className="flex justify-between items-center">
                       <div className="space-y-1">
                          <h3 className="text-heading-sm text-ink font-bold">Consumption Heatmap</h3>
                          <div className="bg-cloud-100 px-3 py-1 rounded-full border border-gray-200 flex items-center gap-2">
                             <span className="text-[10px] text-mist-500 font-black uppercase tracking-widest">Meter ID: <span className="text-ink">NODE_042_U1</span></span>
                          </div>
                       </div>
                       <div className="flex items-center gap-2 text-[10px] text-mist-500 font-bold uppercase tracking-widest">
                          <span>Low</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className={`w-3 h-3 rounded-sm ${i === 1 ? 'bg-white border' : i === 2 ? 'bg-amber-100' : i === 3 ? 'bg-amber-300' : i === 4 ? 'bg-energy' : 'bg-critical'}`} />)}
                          </div>
                          <span>High</span>
                       </div>
                    </div>

                    <div className="overflow-x-auto no-scrollbar pt-4">
                       <div className="flex gap-1 min-w-[700px]">
                          <div className="flex flex-col gap-1 justify-between py-1 text-right pr-4 text-[10px] font-mono text-mist-500 uppercase">
                             <span>0:00</span>
                             <span>6:00</span>
                             <span>12:00</span>
                             <span>18:00</span>
                          </div>
                          <div className="flex-1 grid grid-cols-30 gap-1 pb-4">
                            {Array.from({ length: 30 * 24 }).map((_, i) => (
                              <motion.div 
                                key={i} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: (i % 30) * 0.01 }}
                                className={`w-full aspect-square rounded-[3px] border border-black/5 hover:scale-110 active:scale-150 transition-all cursor-pointer ${
                                  Math.random() > 0.9 ? 'bg-critical' : Math.random() > 0.8 ? 'bg-energy' : Math.random() > 0.5 ? 'bg-amber-100' : 'bg-white'
                                }`} 
                              />
                            ))}
                          </div>
                       </div>
                       <div className="flex justify-between px-16 text-[10px] font-mono text-mist-500 uppercase tracking-widest pt-2">
                          <span>Jan 01</span>
                          <span>Jan 08</span>
                          <span>Jan 15</span>
                          <span>Jan 22</span>
                          <span>Jan 30</span>
                       </div>
                    </div>
                 </div>

                 {/* RECOMMENDATIONS PANEL */}
                 <div className="xl:col-span-4 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                       <h3 className="text-heading-sm text-ink font-bold flex items-center gap-2">💡 Action Items</h3>
                    </div>
                    <div className="divide-y divide-gray-100 overflow-y-auto max-h-[500px] no-scrollbar">
                       {[
                         { id: 1, msg: 'Check AC units in Lab B — suspected timer malfunction', saving: '₹1,840/mo', co2: '84kg' },
                         { id: 2, msg: 'Phase imbalance detected in Street Light Hub 4', saving: '₹840/mo', co2: '22kg' },
                         { id: 3, msg: 'Off-hour phantom load in Computer Science Server Room', saving: '₹4,120/mo', co2: '156kg' },
                         { id: 4, msg: 'Old refrigeration unit in Canteen A is spiking', saving: '₹620/mo', co2: '18kg' },
                       ].map((rec) => (
                         <div key={rec.id} className="p-6 flex gap-4 group hover:bg-cloud-100 transition-colors cursor-pointer">
                            <span className="text-data-lg text-mist-500 font-mono opacity-40 leading-none">{rec.id}</span>
                            <div className="space-y-3">
                               <p className="text-[13px] font-medium leading-relaxed text-slate-700 group-hover:text-ink">{rec.msg}</p>
                               <div className="flex justify-between items-center bg-white/60 p-2 rounded-md border border-gray-100">
                                  <div className="flex items-center gap-2">
                                     <span className="text-[10px] text-success font-black uppercase tracking-widest">Saves:</span>
                                     <span className="text-[11px] font-bold font-mono text-ink">{rec.saving}</span>
                                  </div>
                                  <span className="text-[11px] text-mist-500 font-medium">{rec.co2} / mo</span>
                               </div>
                               <div className="flex items-center gap-2 pt-1 opacity-60 hover:opacity-100 transition-opacity">
                                  <div className="w-3 h-3 rounded-full border border-gray-300" />
                                  <span className="text-[10px] font-black uppercase tracking-widest text-mist-500">Mark as resolved</span>
                               </div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* SAVINGS PROJECTION */}
              <div className="bg-emerald-800 rounded-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                   <Zap size={140} />
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32 w-full relative z-10">
                    <div className="space-y-2">
                       <p className="text-mint-300 text-[10px] font-black uppercase tracking-widest">Monthly projected savings</p>
                       <p className="text-data-xl text-[48px] font-mono leading-none">₹4,200</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-mint-300 text-[10px] font-black uppercase tracking-widest">CO2 avoided per month</p>
                       <p className="text-data-xl text-[48px] font-mono leading-none">184 kg</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-mint-300 text-[10px] font-black uppercase tracking-widest">Equivalent avoided</p>
                       <p className="text-data-xl text-[48px] font-mono leading-none">= 720</p>
                       <p className="text-[10px] font-bold uppercase text-mint-300/60 font-mono tracking-widest">car km travel</p>
                    </div>
                 </div>

                 <div className="absolute bottom-0 right-8 py-3 flex items-center gap-2 opacity-60">
                    <RefreshCcw size={12} className="text-mint-300" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-mint-300">Automatically synced to CarbonLens</span>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
