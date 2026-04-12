'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <>
      {/* Top Summary Strip */}
      <header className="bg-emerald-800 text-white p-6 shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,87.1,0C87.1,15.7,83.7,31.3,76.4,44.7C69.2,58.1,58.1,69.2,44.7,76.4C31.3,83.7,15.7,87.1,0,87.1C-15.7,87.1,-31.3,83.7,-44.7,76.4C-58.1,69.2,-69.2,58.1,-76.4,44.7C-83.7,31.3,-87.1,15.7,-87.1,0C-87.1,-15.7,-83.7,-31.3,-76.4,-44.7C-69.2,-58.1,-58.1,-69.2,-44.7,-76.4C-31.3,-83.7,-15.7,-87.1,0,-87.1C15.7,-87.1,31.3,-83.7,44.7,-76.4Z" fill="#FFFFFF" transform="translate(100 100)"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 relative z-10 p-0 m-0">
          {/* Circular Score Gauge */}
          <div className="relative flex items-center justify-center w-32 h-32 flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-white/10" cx="64" cy="64" fill="transparent" r="58" stroke="rgba(255,255,255,0.1)" strokeWidth="8"></circle>
              <circle cx="64" cy="64" fill="transparent" r="58" stroke="#85f8c4" strokeDasharray="364.4" strokeDashoffset="72.8" strokeLinecap="round" strokeWidth="8"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black leading-none">B+</span>
              <span className="text-[10px] font-mono uppercase tracking-widest mt-1 opacity-80">Performer</span>
            </div>
          </div>
          {/* Stat Blocks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 flex-1 w-full">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-200 mb-1">CO2e Footprint</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono">12.4</span>
                <span className="text-sm opacity-70">tCO2e</span>
              </div>
              <p className="text-[10px] mt-1 text-emerald-300 font-mono">↓ 4.2% VS LY</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-200 mb-1">Waste Managed</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono">847</span>
                <span className="text-sm opacity-70">units</span>
              </div>
              <p className="text-[10px] mt-1 text-emerald-300 font-mono">92% RECYCLED</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-200 mb-1">Anomalies</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono text-white">3</span>
                <span className="text-sm opacity-70">active</span>
              </div>
              <p className="text-[10px] mt-1 text-amber-300 font-mono">CRITICAL ATTN</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-200 mb-1">EPR Compliance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono">78</span>
                <span className="text-sm opacity-70">%</span>
              </div>
              <p className="text-[10px] mt-1 text-emerald-300 font-mono">+12 PTS GAIN</p>
            </div>
          </div>
        </div>
      </header>
      
      {/* Module Panels Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CarbonLens (Emerald Border) */}
          <div className="bg-white rounded-xl border-l-4 border-emerald-500 overflow-hidden shadow-sm transition-colors hover:bg-slate-50 group flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">CarbonLens</h3>
                  <p className="text-xs text-slate-600">Real-time emission monitoring</p>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Updated 2m ago</span>
              </div>
              <div className="h-32 w-full mt-6 flex items-end gap-1 overflow-hidden">
                <div className="flex-1 bg-emerald-100/50 rounded-t h-1/2"></div>
                <div className="flex-1 bg-emerald-100/50 rounded-t h-2/3"></div>
                <div className="flex-1 bg-emerald-200/50 rounded-t h-3/4"></div>
                <div className="flex-1 bg-emerald-300/50 rounded-t h-1/2"></div>
                <div className="flex-1 bg-emerald-400/50 rounded-t h-5/6"></div>
                <div className="flex-1 bg-emerald-500/50 rounded-t h-full"></div>
                <div className="flex-1 bg-emerald-600/50 rounded-t h-4/5"></div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="font-mono text-xs text-slate-500">08:00</div>
                <div className="font-mono text-xs text-slate-500">12:00</div>
                <div className="font-mono text-xs text-slate-500">16:00</div>
              </div>
            </div>
            <Link href="/dashboard/carbon" className="bg-slate-50 px-6 py-3 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs font-bold text-emerald-700 group-hover:underline cursor-pointer">View Emissions Detail</span>
              <span className="material-symbols-outlined text-emerald-700 text-sm">chevron_right</span>
            </Link>
          </div>

          {/* WasteAI (Violet Border) */}
          <div className="bg-white rounded-xl border-l-4 border-violet-600 overflow-hidden shadow-sm transition-colors hover:bg-slate-50 group flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">WasteAI</h3>
                  <p className="text-xs text-slate-600">Smart sorting & lifecycle ledger</p>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Updated 14m ago</span>
              </div>
              <div className="flex items-center gap-8 mt-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <svg className="w-full h-full">
                    <circle cx="48" cy="48" fill="transparent" r="40" stroke="#f1f5f9" strokeWidth="8"></circle>
                    <circle cx="48" cy="48" fill="transparent" r="40" stroke="#7C3AED" strokeDasharray="251.2" strokeDashoffset="62.8" strokeWidth="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold">75%</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-600"></span>
                    <span className="text-xs text-slate-600">Recyclable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                    <span className="text-xs text-slate-600">Landfill</span>
                  </div>
                  <p className="text-sm font-mono font-bold mt-2">635 kg <span className="text-[10px] text-slate-400 font-normal">TODAY</span></p>
                </div>
              </div>
            </div>
            <Link href="/dashboard/waste" className="bg-slate-50 px-6 py-3 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs font-bold text-violet-700 group-hover:underline cursor-pointer">Audit Waste Stream</span>
              <span className="material-symbols-outlined text-violet-700 text-sm">chevron_right</span>
            </Link>
          </div>

          {/* EnergyRadar (Amber Border) */}
          <div className="bg-white rounded-xl border-l-4 border-amber-500 overflow-hidden shadow-sm transition-colors hover:bg-slate-50 group flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">EnergyRadar</h3>
                  <p className="text-xs text-slate-600">Power & Thermal network</p>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Live Feed</span>
              </div>
              <div className="grid grid-cols-6 gap-1 mt-6">
                <div className="h-6 bg-amber-100 rounded-sm"></div>
                <div className="h-6 bg-amber-200 rounded-sm"></div>
                <div className="h-6 bg-amber-100 rounded-sm"></div>
                <div className="h-6 bg-amber-400 rounded-sm"></div>
                <div className="h-6 bg-amber-200 rounded-sm"></div>
                <div className="h-6 bg-red-500 animate-pulse rounded-sm" title="Critical Anomaly"></div>
                <div className="h-6 bg-amber-300 rounded-sm"></div>
                <div className="h-6 bg-amber-500 rounded-sm"></div>
                <div className="h-6 bg-amber-400 rounded-sm"></div>
                <div className="h-6 bg-amber-200 rounded-sm"></div>
                <div className="h-6 bg-amber-100 rounded-sm"></div>
                <div className="h-6 bg-amber-100 rounded-sm"></div>
              </div>
              <div className="mt-4 p-3 bg-red-50 rounded flex items-center gap-3">
                <span className="material-symbols-outlined text-red-600 text-sm">warning</span>
                <span className="text-[10px] font-mono text-red-700 leading-tight">CRITICAL: Transformer B-12 Overheating in Data Center</span>
              </div>
            </div>
            <Link href="/dashboard/energy" className="bg-slate-50 px-6 py-3 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs font-bold text-amber-700 group-hover:underline cursor-pointer">Resolve Alerts</span>
              <span className="material-symbols-outlined text-amber-700 text-sm">chevron_right</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Activity Feed */}
      <section className="max-w-7xl mx-auto px-6 w-full pb-10">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">Campus Activity Ledger</h3>
            <p className="text-xs text-slate-500">Immutable record of environmental events</p>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-emerald-600 text-xl">eco</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Carbon Offset Threshold Reached</p>
                <p className="text-[10px] text-slate-400 font-mono uppercase">CarbonLens • Central Block</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono">09:42</p>
                <p className="text-[10px] text-emerald-600 font-bold">+0.4 tCO2e</p>
              </div>
            </div>
            
            <div className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-violet-600 text-xl">auto_delete</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Batch 402 EPR Documentation Certified</p>
                <p className="text-[10px] text-slate-400 font-mono uppercase">WasteAI • Logistics Hub</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono">08:15</p>
                <p className="text-[10px] text-violet-600 font-bold">CERTIFIED</p>
              </div>
            </div>
            
            <div className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-amber-600 text-xl">electric_bolt</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Peak Load Threshold Warning</p>
                <p className="text-[10px] text-slate-400 font-mono uppercase">EnergyRadar • South Wing</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono">07:55</p>
                <p className="text-[10px] text-amber-600 font-bold">114% CAP</p>
              </div>
            </div>
          </div>
          <div className="p-4 text-center border-t border-slate-100">
            <button className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-800 transition-colors">View Full Ledger</button>
          </div>
        </div>
      </section>
    </>
  );
}
