'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  CheckCircle2, 
  BarChart, 
  Zap, 
  Sun, 
  Waves,
  ChevronRight,
  Info
} from 'lucide-react';

export default function CarbonForecastPage() {
  const [selectedPractices, setSelectedPractices] = useState([]);

  const practices = [
    { id: 'solar', name: "Solar Panels (300kW)", impact: 2000, icon: <Sun size={18} />, desc: "Equip administration blocks with grid-tied PV systems." },
    { id: 'ev', name: "Electric Shuttles", impact: 1500, icon: <Zap size={18} />, desc: "Replace diesel fleet with 10 electric campus mini-buses." },
    { id: 'compost', name: "On-site Composting", impact: 500, icon: <Waves size={18} />, desc: "Divert student mess organic waste to aerobic composters." },
    { id: 'hvac', name: "HVAC Smart Controllers", impact: 1200, icon: <BarChart size={18} />, desc: "IoT-based scheduling for central air conditioning units." },
  ];

  const handleToggle = (id) => {
    setSelectedPractices(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const totalImpact = practices
    .filter(p => selectedPractices.includes(p.id))
    .reduce((sum, p) => sum + p.impact, 0);

  const currentEmissions = 8500;
  const projectedEmissions = currentEmissions - totalImpact;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="space-y-2">
        <nav className="flex items-center gap-2 text-emerald-500 text-[11px] font-bold uppercase tracking-widest">
          <span>Carbon Ledger</span> <ChevronRight size={10} /> <span>Impact Forecasting</span>
        </nav>
        <h1 className="text-4xl font-black text-slate-900">
          Impact <span className="text-emerald-600">Forecasting</span>
        </h1>
        <p className="text-slate-500 max-w-2xl text-lg">
          Simulate sustainability interventions and visualize their long-term impact on your campus carbon footprint.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* CONTROL PANEL */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-slate-800">Interventions</h2>
              <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-md font-bold uppercase">Simulation</span>
            </div>
            
            <div className="space-y-3">
              {practices.map((practice) => (
                <button
                  key={practice.id}
                  onClick={() => handleToggle(practice.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex gap-4 ${
                    selectedPractices.includes(practice.id)
                      ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                      : 'bg-slate-50 border-transparent hover:border-slate-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    selectedPractices.includes(practice.id) ? 'bg-emerald-500 text-white' : 'bg-white text-slate-400'
                  }`}>
                    {practice.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">{practice.name}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{practice.desc}</p>
                    {selectedPractices.includes(practice.id) && (
                      <div className="flex items-center gap-1 mt-2 text-[10px] font-black uppercase text-emerald-600">
                        <TrendingDown size={10} /> -{practice.impact} kg CO2e
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-indigo-900 rounded-3xl p-8 text-white space-y-4 shadow-xl shadow-indigo-500/20">
            <div className="flex items-center gap-2 text-indigo-300 text-[10px] font-bold uppercase tracking-widest">
              <Info size={12} /> Compliance Insight
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Implementing all selected strategies would bridge <strong>82% of the gap</strong> required for Net Zero Campus certification under current UGC guidelines.
            </p>
            <button className="w-full bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
              Download Strategy Doc
            </button>
          </div>
        </div>

        {/* VISUALIZATION */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-bold text-slate-800">Forecasted Reduction</h2>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-200 rounded-full" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Baseline</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Projected</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current (Baseline)</span>
                  <span className="text-2xl font-black text-slate-800">{currentEmissions} kg CO2e</span>
                </div>
                <div className="h-6 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '100%' }} 
                    className="h-full bg-slate-300" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end uppercase tracking-widest">
                  <span className="text-xs font-bold text-emerald-600">Post-Simulation</span>
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-black text-emerald-600">{projectedEmissions} kg CO2e</span>
                    <span className="text-[10px] font-black text-emerald-500">-{totalImpact} kg saving</span>
                  </div>
                </div>
                <div className="h-10 bg-slate-50 rounded-full overflow-hidden border-2 border-slate-100">
                  <motion.div 
                    initial={{ width: '100%' }} 
                    animate={{ width: `${(projectedEmissions/currentEmissions)*100}%` }} 
                    transition={{ type: 'spring', damping: 20 }}
                    className="h-full bg-emerald-500 flex items-center justify-end px-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                     <CheckCircle2 size={20} className="text-white" />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
               <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-800">Operational Savings</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Estimated reduction in utility expenditure based on current tariffs: <strong>₹{((totalImpact * 0.8) * 12).toLocaleString()} / year</strong>.</p>
               </div>
               <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-800">Carbon Credits</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Potential for <strong>{(totalImpact/1000).toFixed(1)} verified credits</strong> per month for internal carbon market trading.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
