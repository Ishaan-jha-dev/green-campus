'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  MapPin, 
  Upload, 
  TrendingDown, 
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  BarChart3,
  Activity,
  Leaf,
  FileSpreadsheet,
  Cpu,
  ArrowRight,
  Download,
  Building2,
  Sun,
  Globe,
  Settings,
  ShieldAlert,
  Scan
} from 'lucide-react';

const INITIAL_ZONES = [
  { id: 'z1', name: 'Engineering Block', status: 'critical', pos: { top: '15%', left: '10%' }, usage: '+45%', w: 180, h: 120 },
  { id: 'z2', name: 'Knowledge Center', status: 'normal', pos: { top: '35%', left: '35%' }, usage: '-5%', w: 220, h: 150 },
  { id: 'z3', name: 'Campus Refectory', status: 'warning', pos: { top: '65%', left: '10%' }, usage: '+15%', w: 160, h: 100 },
  { id: 'z4', name: 'Residential Zone A', status: 'critical', pos: { top: '20%', left: '72%' }, usage: '+60%', w: 140, h: 200 },
  { id: 'z5', name: 'Admin Headquarters', status: 'normal', pos: { top: '78%', left: '46%' }, usage: '-12%', w: 170, h: 110 }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'critical': return 'bg-white border-rose-500 text-rose-600 shadow-[0_15px_40px_rgba(244,63,94,0.15)]';
    case 'warning': return 'bg-white border-amber-500 text-amber-600 shadow-[0_15px_40px_rgba(245,158,11,0.15)]';
    case 'normal': return 'bg-white border-emerald-500 text-emerald-600 shadow-[0_15px_40px_rgba(16,185,129,0.15)]';
    default: return 'bg-white border-slate-200 text-slate-400';
  }
};

const getProgressBarColor = (status) => {
  switch (status) {
    case 'critical': return 'bg-rose-500';
    case 'warning': return 'bg-amber-500';
    case 'normal': return 'bg-emerald-500';
    default: return 'bg-slate-200';
  }
};

export default function GreenPulseDashboard() {
  const [zones, setZones] = useState(INITIAL_ZONES);
  const [csvData, setCsvData] = useState(null);
  const [kpiData, setKpiData] = useState({
    gridLoad: { value: "248.5", sub: "Reading Active" },
    carbon: { value: "12.4", sub: "Annual Projection" },
    efficiency: { value: "88%", sub: "Institutional Avg" },
  });
  const [solarSlider, setSolarSlider] = useState(450);

  const [isUploading, setIsUploading] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [selectedZone, setSelectedZone] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setCsvData({ loaded: true });
        
        const newBuildingsParsed = [
          { id: 'z7', name: 'Innovation Hub', status: 'critical', pos: { top: '55%', left: '75%' }, usage: '+85%', w: 180, h: 130 },
        ];
        
        setZones(prev => [...prev, ...newBuildingsParsed]);
        setKpiData({
          gridLoad: { value: "312.8", sub: "Spike Detected" },
          carbon: { value: "18.6", sub: "Recalculated" },
          efficiency: { value: "72%", sub: "Action Required" },
        });
      }, 2000);
    }
  };

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      window.print();
    }, 1500);
  };

  const calculatedCredits = (solarSlider * 1.5 / 100).toFixed(2);

  return (
    <div className="space-y-12">
      
      {/* HEADER SECTION - GreenPulse BRANDING */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="space-y-4">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-black text-[10px] uppercase tracking-widest border border-emerald-200 italic">
            <Scan size={14} /> Intelligence Node Active
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Campus <br /> <span className="text-emerald-600">Operations Hub</span>
          </h1>
          <p className="text-slate-400 font-bold max-w-xl text-lg tracking-tight">
            Comprehensive sustainability auditing for GreenPulse campuses. Transform raw utility data into actionable institutional insights.
          </p>
        </div>

        <div className="bg-white p-2 rounded-[32px] border-2 border-slate-50 shadow-xl flex gap-2">
            <div className="flex -space-x-4 p-4">
               {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white bg-slate-100 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="admin" />
               </div>)}
            </div>
            <div className="pr-10 flex flex-col justify-center">
               <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Authorized Peers</span>
               <span className="text-slate-900 font-black text-xs uppercase tracking-tighter">3 Admins Live</span>
            </div>
        </div>
      </div>

      {/* KPI METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { title: "Campus Load", value: kpiData.gridLoad.value, unit: "MW", icon: Zap, color: "emerald", trend: "+12%" },
          { title: "Carbon Yield", value: kpiData.carbon.value, unit: "tCO2", icon: Leaf, color: "emerald", trend: "Recalc" },
          { title: "Grid Efficiency", value: kpiData.efficiency.value, unit: "Score", icon: Activity, color: "amber", trend: "Audit" },
          { title: "Active Compliance", value: "A+", unit: "Tier", icon: Building2, color: "rose", trend: "Verified" },
        ].map((stat, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
            className={`bg-white border-2 border-slate-50 rounded-[40px] p-8 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 blur-[50px] rounded-full -mr-10 -mt-10 group-hover:bg-emerald-100 transition-colors" />
            <div className="flex justify-between items-start mb-6 relative z-10">
               <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 flex items-center justify-center`}>
                  <stat.icon size={24} className={`text-${stat.color}-600`} />
               </div>
               <span className="text-slate-900 font-black text-[10px] uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">{stat.trend}</span>
            </div>
            <div className="relative z-10 space-y-1">
               <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest">{stat.title}</p>
               <h4 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">{stat.value}<span className="text-xs ml-1 text-slate-300">{stat.unit}</span></h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AUDIT INTERFACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* MAP AUDIT */}
        <div className="lg:col-span-8">
           <div className="bg-white border-4 border-slate-50 rounded-[50px] p-10 shadow-2xl relative overflow-hidden h-[750px] flex flex-col">
              <div className="flex justify-between items-center mb-10 pb-8 border-b border-slate-50 relative z-10">
                 <div className="space-y-1">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Intelligent Audit Map</h3>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic">GreenPulse Spatial Intelligence v4.0</p>
                 </div>
                 
                 <div className="flex gap-4">
                    <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".csv" className="hidden" />
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-emerald-600/30 flex items-center gap-3 transition-all"
                    >
                      {isUploading ? <Activity className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                      {isUploading ? 'Parsing Grid...' : 'Ingest Meter Data'}
                    </button>
                 </div>
              </div>

              <div className="flex-1 bg-slate-50/50 rounded-[40px] border-4 border-slate-50 relative overflow-hidden group">
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                 
                 {zones.map((zone) => (
                   <motion.div
                     key={zone.id}
                     onClick={() => setSelectedZone(zone)}
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     whileHover={{ scale: 1.05 }}
                     className={`absolute cursor-pointer border-4 rounded-[32px] flex flex-col items-center justify-center p-4 transition-all hover:z-20 ${getStatusColor(zone.status)} ${selectedZone?.id === zone.id ? 'z-30 scale-110 !border-emerald-600 bg-emerald-50' : ''}`}
                     style={{ top: zone.pos.top, left: zone.pos.left, width: zone.w, height: zone.h }}
                   >
                     <div className="absolute -top-3 -right-3">
                        <div className="flex h-6 w-6">
                           <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-40 bg-current`} />
                           <div className="w-6 h-6 rounded-full bg-white border-4 border-current flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-current" />
                           </div>
                        </div>
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-center leading-tight mb-2 opacity-60 px-4">{zone.name}</span>
                     <span className="text-3xl font-black tracking-tighter">{zone.usage}</span>
                   </motion.div>
                 ))}

                 {!csvData && (
                   <div className="absolute inset-0 flex items-center justify-center p-20 backdrop-blur-sm bg-white/5">
                      <div className="bg-slate-900 p-12 rounded-[50px] shadow-2xl text-center space-y-6 max-w-lg border border-white/5 relative">
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-600/30">
                            <Scan size={32} className="text-white" />
                         </div>
                         <h4 className="text-white text-2xl font-black uppercase tracking-tighter pt-4">Awaiting Telemetry Ingestion</h4>
                         <p className="text-slate-400 font-bold leading-relaxed">
                            Upload your raw utility bill (CSV) to initialize the spatial energy audit. GreenPulse AI will automatically map load centers and audit efficiency.
                         </p>
                         <button onClick={() => fileInputRef.current?.click()} className="text-emerald-400 font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 mx-auto group">
                            Initialize Scan <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                         </button>
                      </div>
                   </div>
                 )}
              </div>
           </div>
        </div>

        {/* DIAGNOSTICS HUB */}
        <div className="lg:col-span-4 space-y-10">
           
           <div className={`bg-white border-4 border-slate-50 rounded-[50px] p-8 shadow-2xl h-[360px] flex flex-col ${selectedZone ? 'border-emerald-100' : ''}`}>
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3 mb-6">
                <AlertTriangle className={selectedZone?.status === 'critical' ? 'text-rose-500' : 'text-emerald-500'} size={24} /> Audit Diagnosis
              </h3>
              
              {selectedZone ? (
                <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                   <div className="flex justify-between items-end border-b-2 border-slate-50 pb-4">
                      <div>
                        <span className="text-2xl font-black text-slate-800 tracking-tighter">{selectedZone.name}</span>
                        <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block mt-1">Live Zone Status</span>
                      </div>
                      <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-white ${getProgressBarColor(selectedZone.status)}`}>
                        {selectedZone.status}
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      {[
                        { l: 'Load Intensity', v: selectedZone.usage, s: selectedZone.status },
                        { l: 'Leakage Probability', v: selectedZone.status === 'critical' ? '92%' : 'Low', s: selectedZone.status },
                        { l: 'Est. Savings', v: selectedZone.status === 'critical' ? '₹18,400' : 'Verified', s: selectedZone.status }
                      ].map((m, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                             <span>{m.l}</span>
                             <span>{m.v}</span>
                           </div>
                           <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: m.s === 'critical' ? '85%' : '20%' }} className={`h-full ${getProgressBarColor(m.s)} rounded-full`} />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-10 text-center space-y-4 bg-slate-50/50 rounded-[32px] border-2 border-dashed border-slate-100">
                   <MapPin className="text-slate-200" size={48} />
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-loose">Select a campus node on the map to run intelligence diagnostics.</p>
                </div>
              )}
           </div>

           <div className="bg-slate-900 border-4 border-slate-800 rounded-[50px] p-8 shadow-2xl flex flex-col h-[350px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[80px] rounded-full group-hover:bg-emerald-500/30 transition-all duration-1000" />
              
              <h3 className="text-lg font-black text-white uppercase tracking-tighter flex items-center gap-3 mb-6 relative z-10">
                <Leaf className="text-emerald-400" size={24} /> Green Mitigation
              </h3>
              
              <div className="space-y-8 relative z-10 scrollbar-hide">
                 <div className="space-y-4">
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Target Solar Offset (kWp)</span>
                       <span className="text-4xl font-black text-emerald-400 tracking-tighter">{solarSlider}</span>
                    </div>
                    <input type="range" min="0" max="1000" step="50" value={solarSlider} onChange={(e) => setSolarSlider(e.target.value)} className="w-full h-3 bg-white/5 rounded-full appearance-none cursor-pointer accent-emerald-500 border border-white/5" />
                 </div>

                 <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/5">
                    <div className="space-y-1">
                       <p className="text-white/30 text-[9px] font-black uppercase tracking-widest leading-none">Yield Projection</p>
                       <p className="text-2xl font-black text-white tracking-tighter leading-none">+{calculatedCredits} <span className="text-[9px] text-emerald-400">CR</span></p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-white/30 text-[9px] font-black uppercase tracking-widest leading-none">Capital ROI</p>
                       <p className="text-2xl font-black text-white tracking-tighter leading-none">₹{(solarSlider * 45).toLocaleString()}</p>
                    </div>
                 </div>

                 <button onClick={handleExport} className="w-full py-5 bg-emerald-500 hover:bg-emerald-600 text-slate-900 rounded-[24px] font-black text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                    {isExporting ? <Activity className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                    {isExporting ? 'Finalizing Audit...' : 'Download Full Strategy Doc'}
                 </button>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}
