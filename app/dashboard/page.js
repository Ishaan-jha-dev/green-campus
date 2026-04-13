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
  Scan,
  Building2,
  Sun,
  Globe,
  Settings,
  ShieldAlert,
  Download
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

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

  const [lineData, setLineData] = useState({
    labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'],
    datasets: [{
      label: 'Campus Load (MW)',
      data: [120, 190, 248, 210, 180, 160, 130],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 0
    }]
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
      const reader = new FileReader();
      
      reader.onload = (event) => {
        const text = event.target.result;
        const rows = text.split('\n').filter(row => row.trim() !== '');
        if (rows.length < 2) return;
        
        const headers = rows[0].split(',').map(h => h.trim().toLowerCase());
        
        // Flexible header detection
        const findIdx = (keywords) => headers.findIndex(h => keywords.some(k => h.includes(k)));
        
        const blockIdx = findIdx(['block', 'building', 'zone', 'facility']);
        const consIdx = findIdx(['units', 'cons', 'usage', 'kw', 'energy']);
        const timeIdx = findIdx(['time', 'read', 'hour', 'date']);
        const pfIdx = findIdx(['pf', 'factor', 'power']);
        const peakIdx = findIdx(['peak', 'demand', 'max']);

        if (blockIdx === -1 || consIdx === -1) {
          console.warn('Missing critical columns, using best effort parse.');
        }

        const dataRows = rows.slice(1).map(row => {
          const cols = row.split(',').map(c => c.trim());
          const safeGet = (idx) => cols[idx] || '';
          const safeNum = (idx, fallback = 0) => parseFloat(cols[idx]) || fallback;
          
          return {
            block: safeGet(blockIdx) || 'General Block',
            cons: safeNum(consIdx, Math.random() * 10), // Use random for missing values to ensure visual change
            time: safeGet(timeIdx) || '00:00:00',
            pf: safeNum(pfIdx, 0.95),
            peak: safeNum(peakIdx, 5)
          };
        });

        // 1. Update KPI Stats
        const totalCons = dataRows.reduce((acc, r) => acc + r.cons, 0);
        const avgPF = (dataRows.reduce((acc, r) => acc + r.pf, 0) / dataRows.length * 100).toFixed(0);
        const avgPeak = (dataRows.reduce((acc, r) => acc + r.peak, 0) / dataRows.length).toFixed(1);

        setKpiData({
          gridLoad: { value: avgPeak, sub: "Dynamic Reading" },
          carbon: { value: (totalCons / 1000).toFixed(1), sub: "Institutional Total" },
          efficiency: { value: `${avgPF}%`, sub: "Grid Efficiency" },
        });

        // 2. Update Charts (Hourly Aggregation)
        const hourlyMap = {};
        dataRows.forEach(r => {
          const hour = r.time.split(':')[0] + 'H';
          hourlyMap[hour] = (hourlyMap[hour] || 0) + r.cons;
        });
        
        const labels = Object.keys(hourlyMap).slice(0, 7);
        const chartValues = labels.map(l => hourlyMap[l]);

        setLineData(prev => ({
          ...prev,
          labels,
          datasets: [{ ...prev.datasets[0], data: chartValues }]
        }));

        // 3. Update Audit Map (Zones)
        const uniqueBlocks = [...new Set(dataRows.map(r => r.block))].slice(0, 8);
        const newZones = uniqueBlocks.map((b, i) => {
          const bData = dataRows.filter(r => r.block === b);
          const bCons = bData.reduce((acc, r) => acc + r.cons, 0);
          const top = 10 + (Math.floor(i / 3) * 25) + '%';
          const left = 10 + ((i % 3) * 30) + '%';
          
          return {
            id: `csv-${i}`,
            name: b,
            status: bCons > 5 ? 'critical' : 'stable',
            pos: { top, left },
            usage: `+${bCons.toFixed(1)}%`,
            w: 160,
            h: 110
          };
        });

        setZones(newZones);
        setCsvData({ loaded: true, count: dataRows.length });
        setIsUploading(false);
      };
      
      reader.readAsText(file);
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
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8">
        <div className="space-y-3 lg:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Campus <br /> <span className="text-emerald-600">Operations Hub</span>
          </h1>
          <p className="text-slate-400 font-bold max-w-xl text-sm md:text-base lg:text-lg tracking-tight">
            Comprehensive sustainability auditing for GreenPulse campuses. Transform raw utility data into actionable institutional insights.
          </p>
        </div>
      </div>

      {/* KPI METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {[
          { title: "Campus Load", value: kpiData.gridLoad.value, unit: "MW", icon: Zap, color: "emerald", trend: "+12%" },
          { title: "Carbon Yield", value: kpiData.carbon.value, unit: "tCO2", icon: Leaf, color: "emerald", trend: "Recalc" },
          { title: "Grid Efficiency", value: kpiData.efficiency.value, unit: "Score", icon: Activity, color: "amber", trend: "Audit" },
          { title: "Active Compliance", value: "A+", unit: "Tier", icon: Building2, color: "rose", trend: "Stage 1" },
        ].map((stat, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
            className={`bg-white border-2 border-slate-50 rounded-[32px] lg:rounded-[40px] p-6 lg:p-8 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 blur-[50px] rounded-full -mr-10 -mt-10 group-hover:bg-emerald-100 transition-colors" />
            <div className="flex justify-between items-start mb-4 lg:mb-6 relative z-10">
               <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-emerald-50 flex items-center justify-center`}>
                  <stat.icon size={20} className={`text-emerald-600`} />
               </div>
               <span className="text-slate-900 font-black text-[9px] lg:text-[10px] uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">{stat.trend}</span>
            </div>
            <div className="relative z-10 space-y-1">
               <p className="text-slate-400 font-black uppercase text-[9px] lg:text-[10px] tracking-widest">{stat.title}</p>
               <h4 className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-none">{stat.value}<span className="text-xs ml-1 text-slate-300">{stat.unit}</span></h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AUDIT INTERFACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        
        {/* MAP AUDIT */}
        <div className="lg:col-span-8">
           <div className="bg-white border-4 border-slate-50 rounded-[40px] lg:rounded-[50px] p-6 lg:p-10 shadow-2xl relative overflow-hidden h-[500px] lg:h-[750px] flex flex-col">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-10 pb-6 lg:pb-8 border-b border-slate-50 relative z-10 gap-4">
                 <div className="space-y-1">
                    <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter uppercase">Intelligent Audit Map</h3>
                    <p className="text-slate-400 text-[9px] lg:text-[10px] font-black uppercase tracking-widest italic">GreenPulse Spatial Intelligence v4.0</p>
                 </div>
                 
                 <div className="flex gap-4 w-full sm:w-auto">
                    <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".csv" className="hidden" />
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1 sm:flex-none px-6 lg:px-8 py-3 lg:py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl lg:rounded-2xl font-black text-[10px] lg:text-[11px] uppercase tracking-widest shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-3 transition-all"
                    >
                      {isUploading ? <Activity className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                      {isUploading ? 'Parsing Grid...' : 'Ingest Meter Data'}
                    </button>
                 </div>
              </div>

              <div className="flex-1 bg-slate-50/50 rounded-[30px] lg:rounded-[40px] border-4 border-slate-50 relative overflow-hidden group">
                 {/* Map container with horizontal scroll support for very small screens if needed, 
                     but here we'll let it be responsive within the relative container */}
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                 
                 <div className="relative w-full h-full overflow-hidden">
                   {zones.map((zone) => (
                     <motion.div
                       key={zone.id}
                       onClick={() => setSelectedZone(zone)}
                       initial={{ scale: 0.9, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       whileHover={{ scale: 1.05 }}
                       className={`absolute cursor-pointer border-2 lg:border-4 rounded-[20px] lg:rounded-[32px] flex flex-col items-center justify-center p-2 lg:p-4 transition-all hover:z-20 ${getStatusColor(zone.status)} ${selectedZone?.id === zone.id ? 'z-30 scale-110 !border-emerald-600 bg-emerald-50' : ''}`}
                       style={{ 
                         top: zone.pos.top, 
                         left: zone.pos.left, 
                         width: typeof window !== 'undefined' && window.innerWidth < 1024 ? (zone.w * 0.6) : zone.w, 
                         height: typeof window !== 'undefined' && window.innerWidth < 1024 ? (zone.h * 0.6) : zone.h 
                       }}
                     >
                       <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3">
                          <div className="flex h-4 w-4 lg:h-6 lg:w-6">
                             <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-40 bg-current`} />
                             <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-white border-2 lg:border-4 border-current flex items-center justify-center">
                                <div className="w-1 lg:w-1.5 h-1 lg:h-1.5 rounded-full bg-current" />
                             </div>
                          </div>
                       </div>
                       <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-center leading-tight mb-1 lg:mb-2 opacity-60 px-1 lg:px-4 truncate w-full">{zone.name}</span>
                       <span className="text-lg lg:text-3xl font-black tracking-tighter">{zone.usage}</span>
                     </motion.div>
                   ))}

                   {!csvData && (
                     <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-20 backdrop-blur-sm bg-white/5">
                        <div className="bg-slate-900 p-8 lg:p-12 rounded-[40px] lg:rounded-[50px] shadow-2xl text-center space-y-4 lg:space-y-6 max-w-lg border border-white/5 relative">
                           <div className="absolute -top-6 lg:-top-10 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-20 lg:h-20 bg-emerald-500 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-600/30">
                              <Scan size={24} className="text-white lg:hidden" />
                              <Scan size={32} className="text-white hidden lg:block" />
                           </div>
                           <h4 className="text-white text-lg lg:text-2xl font-black uppercase tracking-tighter pt-4">Awaiting Telemetry Ingestion</h4>
                           <p className="text-slate-400 font-bold leading-relaxed text-xs lg:text-sm">
                              Upload your raw utility bill (CSV) to initialize the spatial energy audit. GreenPulse AI will automatically map load centers.
                           </p>
                           <button onClick={() => fileInputRef.current?.click()} className="text-emerald-400 font-black text-[10px] lg:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 mx-auto group">
                              Initialize Scan <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                           </button>
                        </div>
                     </div>
                   )}
                 </div>
              </div>
           </div>
        </div>

        {/* DIAGNOSTICS HUB */}
        <div className="lg:col-span-4 space-y-6 lg:space-y-10">
           
           <div className={`bg-white border-4 border-slate-50 rounded-[40px] lg:rounded-[50px] p-6 lg:p-8 shadow-2xl h-auto lg:h-[360px] flex flex-col ${selectedZone ? 'border-emerald-100' : ''}`}>
              <h3 className="text-base lg:text-lg font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3 mb-6">
                <AlertTriangle className={selectedZone?.status === 'critical' ? 'text-rose-500' : 'text-emerald-500'} size={20} /> Audit Diagnosis
              </h3>
              
              {selectedZone ? (
                <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                   <div className="flex justify-between items-end border-b-2 border-slate-50 pb-4">
                      <div className="min-w-0">
                        <span className="text-xl lg:text-2xl font-black text-slate-800 tracking-tighter truncate block">{selectedZone.name}</span>
                        <span className="text-[9px] lg:text-[10px] font-black uppercase text-emerald-600 tracking-widest block mt-1">Live Zone Status</span>
                      </div>
                      <div className={`shrink-0 px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-white ${getProgressBarColor(selectedZone.status)}`}>
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
                           <div className="flex justify-between text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400">
                             <span>{m.l}</span>
                             <span>{m.v}</span>
                           </div>
                           <div className="w-full h-1.5 lg:h-2 bg-slate-50 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: m.s === 'critical' ? '85%' : '20%' }} className={`h-full ${getProgressBarColor(m.s)} rounded-full`} />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-10 text-center space-y-4 bg-slate-50/50 rounded-[32px] border-2 border-dashed border-slate-100 h-[200px] lg:h-auto">
                   <MapPin className="text-slate-200 lg:hidden" size={32} />
                   <MapPin className="text-slate-200 hidden lg:block" size={48} />
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-loose">Select a campus node on the map to run intelligence diagnostics.</p>
                </div>
              )}
           </div>

           <div className="bg-slate-900 border-4 border-slate-800 rounded-[40px] lg:rounded-[50px] p-6 lg:p-8 shadow-2xl flex flex-col h-auto lg:h-[350px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[80px] rounded-full group-hover:bg-emerald-500/30 transition-all duration-1000" />
              
              <h3 className="text-base lg:text-lg font-black text-white uppercase tracking-tighter flex items-center gap-3 mb-6 relative z-10">
                <Leaf className="text-emerald-400" size={20} /> Green Mitigation
              </h3>
              
              <div className="space-y-6 lg:space-y-8 relative z-10 scrollbar-hide">
                 <div className="space-y-4">
                    <div className="flex justify-between items-end">
                       <span className="text-[9px] lg:text-[10px] font-black text-white/40 uppercase tracking-widest">Target Solar Offset (kWp)</span>
                       <span className="text-3xl lg:text-4xl font-black text-emerald-400 tracking-tighter">{solarSlider}</span>
                    </div>
                    <input type="range" min="0" max="1000" step="50" value={solarSlider} onChange={(e) => setSolarSlider(e.target.value)} className="w-full h-2 lg:h-3 bg-white/5 rounded-full appearance-none cursor-pointer accent-emerald-500 border border-white/5" />
                 </div>

                 <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/5">
                    <div className="space-y-1">
                       <p className="text-white/30 text-[8px] lg:text-[9px] font-black uppercase tracking-widest leading-none">Yield Projection</p>
                       <p className="text-xl lg:text-2xl font-black text-white tracking-tighter leading-none">+{calculatedCredits} <span className="text-[8px] lg:text-[9px] text-emerald-400">CR</span></p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-white/30 text-[8px] lg:text-[9px] font-black uppercase tracking-widest leading-none">Capital ROI</p>
                       <p className="text-xl lg:text-2xl font-black text-white tracking-tighter leading-none">₹{Math.floor(solarSlider * 0.45)}K</p>
                    </div>
                 </div>

                 <button onClick={handleExport} className="w-full py-4 lg:py-5 bg-emerald-500 hover:bg-emerald-600 text-slate-900 rounded-[20px] lg:rounded-[24px] font-black text-[10px] lg:text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                    {isExporting ? <Activity className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                    {isExporting ? 'Finalizing...' : 'Download Full strategy'}
                 </button>
              </div>
           </div>

        </div>
      </div>
      {/* AUDIT INTELLIGENCE TRENDS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
         <div className="lg:col-span-8 bg-white p-6 lg:p-10 rounded-[30px] lg:rounded-[40px] border border-slate-100 shadow-xl shadow-emerald-600/5 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 lg:mb-8 gap-4">
               <div>
                  <h3 className="text-lg lg:text-xl font-black text-slate-900 uppercase tracking-tighter">Energy Consumption Trend</h3>
                  <p className="text-[10px] lg:text-xs font-bold text-slate-400">Live Telemetry · 24 Hour Cycle</p>
               </div>
               <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] lg:text-[10px] font-black uppercase tracking-widest">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Low Load
                  </div>
               </div>
            </div>
            <div className="h-[200px] lg:h-[300px]">
               <Line 
                  data={lineData} 
                  options={{ 
                     maintainAspectRatio: false,
                     plugins: { legend: { display: false } },
                     scales: {
                        y: { grid: { color: '#f8fafc' }, ticks: { font: { weight: 'bold', size: 9 } } },
                        x: { grid: { display: false }, ticks: { font: { weight: 'bold', size: 9 } } }
                     }
                  }} 
               />
            </div>
         </div>

         <div className="lg:col-span-4 bg-emerald-600 p-8 lg:p-10 rounded-[30px] lg:rounded-[40px] text-white flex flex-col justify-between shadow-2xl shadow-emerald-600/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative z-10">
               <Activity className="w-8 lg:w-10 h-8 lg:h-10 mb-4 lg:mb-6 opacity-50" />
               <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tighter mb-4">Grid Health <br /> Index</h3>
               <p className="text-emerald-50/80 text-xs lg:text-sm font-bold leading-relaxed">
                  Your institutional grid is currently operating at <span className="text-white font-black">Peak Efficiency</span>.
               </p>
            </div>
            <div className="pt-6 lg:pt-8 border-t border-white/10 mt-6 lg:mt-8">
               <div className="flex justify-between items-end mb-2">
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest opacity-60">Uptime</span>
                  <span className="text-xl lg:text-2xl font-black">99.9%</span>
               </div>
               <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-[99.9%]" />
               </div>
            </div>
         </div>
      </div>


    </div>
  );
}

