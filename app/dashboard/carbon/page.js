'use client';

import { useState, useEffect } from 'react';
import { Leaf, Award, Download, Calculator, ArrowRight, BarChart, PieChart, Activity } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function CarbonCreditsPage() {
  const [calcParams, setCalcParams] = useState({
    solar: 500,
    hvacReduction: 200,
    phantomSaved: 100,
    manualUnplug: 20,
    manualLights: 15,
    treesPlanted: 50
  });

  // Calculate generic conversion of energy optimizations to token credits
  const calculatedCredits = ((
    calcParams.solar * 1.5 + 
    calcParams.hvacReduction * 1.2 + 
    calcParams.phantomSaved * 1.0 + 
    calcParams.manualUnplug * 12.5 + 
    calcParams.manualLights * 8.0 + 
    calcParams.treesPlanted * 25.0
  ) / 1000).toFixed(2);

  const doughnutData = {
    labels: ['Solar', 'HVAC', 'Phantom', 'Manual', 'Trees'],
    datasets: [{
      data: [35, 25, 15, 15, 10],
      backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#6366f1', '#14b8a6'],
      borderWidth: 0,
      hoverOffset: 20
    }]
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Monthly CR Accumulation',
      data: [4.2, 5.8, 4.9, 7.2, 8.5, 6.4],
      backgroundColor: 'rgba(16, 185, 129, 0.8)',
      borderRadius: 12,
    }]
  };

  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-10 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-slate-200 gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-2 flex items-center gap-3 tracking-tight">
            <Leaf className="w-8 h-8 text-emerald-500" /> Carbon Credit Ledger
          </h1>
          <p className="text-slate-500 font-medium">Track, manage, and tokenize your verified energy offsets.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl transition-all shadow-xl shadow-emerald-500/30 font-bold text-sm shrink-0">
           <Download className="w-5 h-5" /> Download Certificate
        </button>
      </header>

       {/* Hero Stats & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-[40px] p-10 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full" />
           <div className="flex flex-col md:flex-row justify-between relative z-10 gap-10">
              <div className="space-y-6">
                <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-[11px]">Total Banked Credits</p>
                <div className="flex items-baseline gap-4 mb-3">
                  <h2 className="text-8xl font-black text-white tracking-tighter">45.20</h2>
                  <span className="text-2xl text-emerald-400 font-black">CR</span>
                </div>
                <p className="text-base text-slate-400 font-medium max-w-sm leading-relaxed">
                  Your total earned Carbon Credits through electricity decoupling and intelligent optimizations.
                </p>
                <div className="flex gap-10 border-t border-slate-800 pt-8">
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Market Value</p>
                    <p className="text-2xl font-black text-white">₹ 94,500</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Pending Sync</p>
                    <p className="text-2xl font-black text-emerald-400">+12.4</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-64 h-64 shrink-0 flex items-center justify-center p-4 bg-white/5 rounded-[40px] border border-white/5">
                <Doughnut 
                  data={doughnutData} 
                  options={{ 
                    cutout: '75%', 
                    plugins: { legend: { display: false } }, 
                    maintainAspectRatio: false 
                  }} 
                />
                <div className="absolute flex flex-col items-center">
                  <PieChart className="text-emerald-500 w-6 h-6 mb-1 opacity-50" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Source</span>
                </div>
              </div>
           </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white border border-slate-200 rounded-[40px] p-8 h-full shadow-xl shadow-slate-200/40 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-slate-900 font-black text-xl">Monthly Yield</h3>
                <BarChart className="text-slate-200 group-hover:text-emerald-500 transition-colors" size={24} />
              </div>
              <div className="h-48">
                <Bar 
                  data={barData} 
                  options={{ 
                    plugins: { legend: { display: false } }, 
                    maintainAspectRatio: false,
                    scales: { y: { display: false }, x: { grid: { display: false }, ticks: { font: { weight: 'bold', size: 10 } } } }
                  }} 
                />
              </div>
           </div>
        </div>
      </div>

      {/* Yield Calculator */}
      <div className="pt-6">
         <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
           <Calculator className="w-6 h-6 text-blue-600" /> Credit Yield Calculator
         </h3>
         <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 w-full">
               <p className="text-slate-500 text-sm font-medium">Model both automated grid optimizations and manual human interventions to calculate your token yield.</p>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 {/* System Optimizations */}
                 <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Facility Overrides</h4>
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-2">
                        <label>Solar Generation (kWh)</label>
                        <span className="text-blue-600">{calcParams.solar}</span>
                      </div>
                      <input type="range" min="0" max="2500" step="50" value={calcParams.solar} onChange={(e) => setCalcParams({...calcParams, solar: Number(e.target.value)})} className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-2">
                        <label>HVAC Load Drop (kWh)</label>
                        <span className="text-orange-500">{calcParams.hvacReduction}</span>
                      </div>
                      <input type="range" min="0" max="1500" step="50" value={calcParams.hvacReduction} onChange={(e) => setCalcParams({...calcParams, hvacReduction: Number(e.target.value)})} className="w-full accent-orange-500 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-2">
                        <label>Phantom Load Saved (kWh)</label>
                        <span className="text-emerald-500">{calcParams.phantomSaved}</span>
                      </div>
                      <input type="range" min="0" max="1500" step="50" value={calcParams.phantomSaved} onChange={(e) => setCalcParams({...calcParams, phantomSaved: Number(e.target.value)})} className="w-full accent-emerald-500 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                 </div>

                 {/* Manual Optimizations */}
                 <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-4 border-b border-slate-100 pb-2">Manual Human Action</h4>
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-2">
                        <label>Manual Equipment Unplugging</label>
                        <span className="text-indigo-500">{calcParams.manualUnplug} devices/day</span>
                      </div>
                      <input type="range" min="0" max="100" step="1" value={calcParams.manualUnplug} onChange={(e) => setCalcParams({...calcParams, manualUnplug: Number(e.target.value)})} className="w-full accent-indigo-500 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-2">
                        <label>Manual Lighting Shutdowns</label>
                        <span className="text-pink-500">{calcParams.manualLights} rooms/day</span>
                      </div>
                      <input type="range" min="0" max="100" step="1" value={calcParams.manualLights} onChange={(e) => setCalcParams({...calcParams, manualLights: Number(e.target.value)})} className="w-full accent-pink-500 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-2">
                        <label>Tree Plantation Drives</label>
                        <span className="text-teal-500">{calcParams.treesPlanted} saplings</span>
                      </div>
                      <input type="range" min="0" max="100" step="5" value={calcParams.treesPlanted} onChange={(e) => setCalcParams({...calcParams, treesPlanted: Number(e.target.value)})} className="w-full accent-teal-500 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                 </div>
               </div>
            </div>

            <div className="w-full md:w-72 bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center shadow-inner shrink-0 relative overflow-hidden flex flex-col justify-between h-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full" />
               <p className="text-[11px] font-black uppercase text-slate-400 tracking-widest mb-4">Projected Yield</p>
               <div className="flex justify-center items-end gap-2 mb-2">
                 <span className="text-5xl font-black text-slate-900">{calculatedCredits}</span>
                 <span className="text-xl font-black text-blue-600">CR</span>
               </div>
               <p className="text-xs text-slate-500 font-bold mb-6">≈ ₹{(Number(calculatedCredits) * 2100).toLocaleString('en-IN')} INR Value</p>
               <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all flex justify-center items-center gap-2">
                 Apply Optimization <ArrowRight className="w-4 h-4" />
               </button>
            </div>
         </div>
      </div>

      {/* Ledger History */}
      <div className="pt-6">
         <h3 className="text-2xl font-black text-slate-900 mb-6">Recent Offset Transactions</h3>
         
         <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50">
            <table className="w-full text-left text-sm text-slate-600 font-medium">
               <thead className="bg-slate-50 border-b border-slate-200 text-slate-400 text-[11px] uppercase font-black tracking-widest">
                  <tr>
                     <th className="px-8 py-5">Date</th>
                     <th className="px-8 py-5">Optimization Action Source</th>
                     <th className="px-8 py-5">Campus Zone</th>
                     <th className="px-8 py-5 text-right">Credit Yield</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {[
                    { date: "12 Apr, 2026", src: "Solar Off-grid Augmentation", z: "Engineering Block", amt: "+4.20" },
                    { date: "09 Apr, 2026", src: "Night HVAC Optimization", z: "Hostel A", amt: "+2.15" },
                    { date: "02 Apr, 2026", src: "Phantom Load Elimination", z: "Central Library", amt: "+1.80" },
                    { date: "28 Mar, 2026", src: "Peak Load Shifting", z: "Main Cafe", amt: "+3.45" }
                  ].map((row, i) => (
                     <tr key={i} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-8 py-5 whitespace-nowrap text-slate-700 font-bold">{row.date}</td>
                        <td className="px-8 py-5 font-bold text-emerald-600">{row.src}</td>
                        <td className="px-8 py-5 text-slate-500">{row.z}</td>
                        <td className="px-8 py-5 text-right font-black text-slate-900 group-hover:text-emerald-600 transition-colors text-base">{row.amt} CR</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

    </div>
  );
}
