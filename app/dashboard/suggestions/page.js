'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Leaf, 
  Zap, 
  Trash2, 
  ArrowRight,
  ChevronRight,
  TrendingDown,
  Globe,
  Database,
  Scan,
  CheckCircle2
} from 'lucide-react';

export default function SuggestionsPage() {
  const [transport, setTransport] = useState('');
  const [energy, setEnergy] = useState('');
  const [waste, setWaste] = useState('');
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setHasGenerated(true);

    setTimeout(() => {
      const mockPoints = [
        "<strong>Green Shuttles:</strong> Transition internal campus transit to high-efficiency EV pods, reducing Scope 1 tailpipe emissions by an estimated 38% annually.",
        "<strong>Solar Thermal Cafeteria:</strong> Install solar-evacuated tube collectors for industrial-scale water heating in campus messes.",
        "<strong>Neural Waste Tracking:</strong> Integrate visual-AI sensors at major waste collection nodes to automate EPR documentation for plastic recovery.",
        "<strong>Chiller-Side AI Management:</strong> Use predictive load balancing to manage the central HVAC plant, shaving 12% off peak-hour energy surges.",
        "<strong>Modular Composting:</strong> Expand decentralized composting capacity to process 100% of campus organic waste into premium bio-compost."
      ];
      
      setOutput(mockPoints);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-[1400px] mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-black text-[10px] uppercase tracking-widest border border-emerald-200">
            <Scan size={14} /> Intelligence Generation
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Sustainability <br /> <span className="text-emerald-600">AI Intelligence</span>
          </h1>
          <p className="text-slate-400 font-bold max-w-xl text-lg tracking-tight">
            Leverage the GreenPulse visual engine to generate a high-impact roadmap for campus-wide decarbonization.
          </p>
        </div>
        
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* INPUT CARD */}
        <div className="lg:col-span-4 bg-white rounded-[50px] p-10 border border-slate-50 shadow-2xl space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Campus Baseline</h2>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Input Parameters for Audit</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transport Intensity</label>
              <select 
                value={transport} 
                onChange={(e) => setTransport(e.target.value)}
                className="w-full bg-slate-50 border-4 border-slate-50 rounded-[28px] py-4 px-6 text-xs font-black uppercase tracking-widest focus:ring-4 focus:ring-emerald-600/10 focus:bg-white transition-all outline-none"
                required
              >
                <option value="">Select Level</option>
                <option value="low">Low (Active Travel)</option>
                <option value="medium">Medium (Hybrid)</option>
                <option value="high">High (ICE Vehicles)</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Energy Profile</label>
              <select 
                value={energy} 
                onChange={(e) => setEnergy(e.target.value)}
                className="w-full bg-slate-50 border-4 border-slate-50 rounded-[28px] py-4 px-6 text-xs font-black uppercase tracking-widest focus:ring-4 focus:ring-emerald-600/10 focus:bg-white transition-all outline-none"
                required
              >
                <option value="">Select Profile</option>
                <option value="low">Optimized / Green</option>
                <option value="medium">Standard Utility</option>
                <option value="high">Heavy Load Factor</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Waste Auditing</label>
              <select 
                value={waste} 
                onChange={(e) => setWaste(e.target.value)}
                className="w-full bg-slate-50 border-4 border-slate-50 rounded-[28px] py-4 px-6 text-xs font-black uppercase tracking-widest focus:ring-4 focus:ring-emerald-600/10 focus:bg-white transition-all outline-none"
                required
              >
                <option value="">Select Footprint</option>
                <option value="low">Zero-Waste Capable</option>
                <option value="medium">Mixed Disposal</option>
                <option value="high">High Landfill Vol</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-6 rounded-[32px] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                  Generating Roadmap...
                </>
              ) : (
                <>Trigger AI Audit <ArrowRight size={18} /></>
              )}
            </button>
          </form>
        </div>

        {/* RESULTS AREA */}
        <div className="lg:col-span-8 space-y-10">
          <AnimatePresence mode="wait">
            {!hasGenerated ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full min-h-[500px] border-4 border-dashed border-slate-100 rounded-[50px] flex flex-col items-center justify-center text-center p-20 space-y-6"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-[40px] flex items-center justify-center text-slate-200">
                  <Database size={48} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Audit Node Standby</h3>
                  <p className="text-slate-400 font-bold max-w-md">Input your campus metrics to initialize the GreenPulse intelligence engine.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { label: 'Projected Delta', val: '12.4%', icon: <TrendingDown size={14} />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Impact Factor', val: 'TIER-A', icon: <CheckCircle2 size={14} />, color: 'text-emerald-700', bg: 'bg-[#F3FBF6]' },
                    { label: 'Grid Stability', val: '+4.2%', icon: <Zap size={14} />, color: 'text-amber-600', bg: 'bg-amber-50' },
                  ].map((stat, i) => (
                    <div key={i} className={`${stat.bg} p-8 rounded-[40px] border border-white flex flex-col justify-between h-40 shadow-sm`}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">{stat.label}</span>
                      <div className={`flex items-center gap-3 font-black text-2xl tracking-tighter ${stat.color}`}>
                        {stat.icon}
                        <span>{stat.val}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-[50px] border border-slate-50 overflow-hidden shadow-2xl relative">
                  <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-[#F3FBF6]/30">
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Strategic Audit Recommendations</h3>
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-600 rounded-full text-[10px] font-black uppercase text-white tracking-widest">
                       GreenPulse AI
                    </div>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {output.map((point, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-10 flex gap-8 hover:bg-slate-50 transition-all cursor-pointer group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 font-black text-white text-lg group-hover:bg-emerald-600 transition-colors shadow-lg shadow-black/10">
                          {index + 1}
                        </div>
                        <div className="space-y-2">
                           <p className="text-slate-700 font-bold leading-relaxed text-lg tracking-tight" dangerouslySetInnerHTML={{ __html: point }} />
                           <div className="flex items-center gap-4 text-[10px] font-black uppercase text-emerald-600 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                              Run Simulation <ArrowRight size={10} />
                           </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
