'use client';

import { useState } from 'react';

export default function EnergyRadarPage() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Simulate loading data
    setTimeout(() => setDataLoaded(true), 1000);
  };
  
  const handleSimulateLoad = () => {
     setDataLoaded(true);
  }

  // Generate 24x7 mock heatmap data
  // Using an array of 7 days, 24 hours
  const generateHeatmap = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    return (
      <div className="heatmap-grid mt-4">
        <div className="flex">
          <div className="w-10"></div>
          {Array.from({length: 24}).map((_, i) => (
             <div key={i} className="flex-1 text-center text-xs text-mist font-mono">{i % 4 === 0 ? i : ''}</div>
          ))}
        </div>
        
        {days.map((day, dIdx) => (
          <div key={day} className="flex mb-1 items-center">
            <div className="w-10 text-xs text-mist font-mono text-right pr-2">{day}</div>
            {Array.from({length: 24}).map((_, hIdx) => {
               // Determine heat level
               let heatClass = 'bg-cloud-100 border-white border';
               
               // Weekend off
               if (dIdx >= 5) {
                  heatClass = 'bg-amber-50 border-white border';
                  // Anomaly on saturday night
                  if (dIdx === 5 && hIdx >= 2 && hIdx <= 4) heatClass = 'bg-warning-pulse opacity-90 border-warning border-l-2';
               } else {
                  // Weekday pattern
                  if (hIdx >= 8 && hIdx <= 18) {
                    // working hours
                    heatClass = 'bg-amber opacity-60 border-amber border opacity-80';
                    if (hIdx >= 11 && hIdx <= 15) heatClass = 'bg-amber border-amber border'; // Peak
                  } else {
                    // night time 
                    heatClass = 'bg-amber-100 border-white border';
                    // Vampiric load
                    if (hIdx >= 0 && hIdx <= 5) heatClass = 'bg-amber-200 border-white border opacity-80'; 
                  }
               }
               
               return <div key={hIdx} className={`flex-1 h-6 ${heatClass}`}></div>;
            })}
          </div>
        ))}
      </div>
    );
  };

  if (!dataLoaded) {
    return (
      <div className="energy-page p-6 min-h-screen flex flex-col">
        <div className="dashboard-header mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-amber">bolt</span>
            <span className="text-caption text-mist tracking-widest uppercase">DASHBOARD / ENERGYRADAR</span>
          </div>
          <h1 className="text-display-xl text-amber">EnergyRadar</h1>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div 
            className={`dropzone ${dragActive ? 'active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
             <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-amber mx-auto mb-6">
               <span className="material-symbols-outlined text-4xl">upload_file</span>
             </div>
             <h2 className="text-heading-md mb-2">Upload Smart Meter Data</h2>
             <p className="text-body-md text-mist mb-6">Drag & drop your CSV file here, or click to browse. Max 50MB.</p>
             <button className="btn-primary bg-amber text-white border-none mx-auto" style={{backgroundColor: 'var(--color-warning)'}} onClick={handleSimulateLoad}>
                Browse Files
             </button>
             <p className="text-caption text-mist mt-4">Demo: Click "Browse Files" to simulate upload</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="energy-page p-6">
      <div className="dashboard-header mb-6 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-amber">bolt</span>
            <span className="text-caption text-mist tracking-widest uppercase">DASHBOARD / ENERGYRADAR</span>
          </div>
          <h1 className="text-display-xl text-amber">EnergyRadar</h1>
        </div>
        <div className="flex gap-2">
           <button className="btn-secondary">Export Log</button>
           <button className="btn-primary" style={{backgroundColor: 'var(--color-warning)'}}>New Upload</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card md:col-span-2 bg-amber-50 border-amber-200 border">
           <p className="text-label text-amber">POTENTIAL SAVINGS</p>
           <div className="flex items-end gap-4 mt-2">
              <p className="text-display-lg font-mono text-amber">₹2,45,000</p>
              <p className="text-body-sm font-medium pb-2 text-slate-700">/ year</p>
           </div>
        </div>
        <div className="card">
           <p className="text-label text-mist">PEAK LOAD Z-SCORE</p>
           <p className="text-display-lg font-mono mt-2 text-rose">3.2σ</p>
           <p className="text-caption text-rose mt-1">Severity: Critical</p>
        </div>
        <div className="card">
           <p className="text-label text-mist">VAMPIRE LOAD</p>
           <p className="text-display-lg font-mono mt-2">14%</p>
           <p className="text-caption text-amber mt-1">Night consumption</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Heatmap Area */}
        <div className="xl:col-span-2">
          <div className="card mb-6">
             <div className="flex justify-between items-center mb-4">
               <div>
                  <h3 className="text-heading-sm">Consumption Heatmap</h3>
                  <p className="text-caption text-mist">7-Day Aggregated View · Main Block</p>
               </div>
               <div className="flex items-center gap-2 text-caption text-mist">
                 <span>Low</span>
                 <div className="w-16 h-3 bg-gradient-to-r from-cloud-100 via-amber-200 to-amber-600 rounded"></div>
                 <span>Critical</span>
               </div>
             </div>
             
             {generateHeatmap()}
          </div>
          
          <h3 className="text-heading-sm mb-4 mt-8">AI Savings Recommendations</h3>
          <div className="space-y-4">
             <div className="card bg-white hover:bg-cloud-100 transition cursor-pointer flex gap-4 items-start border-l-4" style={{borderLeftColor: 'var(--color-warning)'}}>
               <div className="bg-amber-100 p-2 rounded-lg text-amber"><span className="material-symbols-outlined">ac_unit</span></div>
               <div className="flex-1">
                 <div className="flex justify-between items-start">
                   <h4 className="font-bold">HVAC optimization in Block C</h4>
                   <span className="font-mono font-bold text-amber">₹1.2L/yr</span>
                 </div>
                 <p className="text-sm text-slate-700 mt-1">Staggered pre-cooling sequence before 9AM will shift load from peak tariffs.</p>
               </div>
             </div>
             
             <div className="card bg-white hover:bg-cloud-100 transition cursor-pointer flex gap-4 items-start border-l-4" style={{borderLeftColor: 'var(--color-critical)'}}>
               <div className="bg-rose-100 p-2 rounded-lg text-rose"><span className="material-symbols-outlined">power_off</span></div>
               <div className="flex-1">
                 <div className="flex justify-between items-start">
                   <h4 className="font-bold">Vampire Load Detection</h4>
                   <span className="font-mono font-bold text-amber">₹85K/yr</span>
                 </div>
                 <p className="text-sm text-slate-700 mt-1">Labs 401-408 show consistent 12kW draw between 2AM-5AM. Recommend physical audit.</p>
               </div>
             </div>
          </div>
        </div>
        
        {/* Anomalies List */}
        <div>
          <h3 className="text-heading-sm mb-4">Detected Anomalies</h3>
          <div className="card p-0 overflow-hidden divide-y">
             <div className="p-4 bg-rose-50 border-l-4 border-rose">
               <div className="flex justify-between text-sm mb-1">
                 <span className="font-mono text-mist">Sat 03:15 AM</span>
                 <span className="badge badge-up" style={{backgroundColor: 'rgba(225,29,72,0.1)', color: 'var(--color-critical)'}}>3.2σ</span>
               </div>
               <p className="font-bold text-ink">Unscheduled Surge</p>
               <p className="text-sm text-slate-700 mt-1">Transformer B12 spike detected. 450% above baseline.</p>
             </div>
             
             <div className="p-4 border-l-4 border-amber">
               <div className="flex justify-between text-sm mb-1">
                 <span className="font-mono text-mist">Mon 09:00 AM</span>
                 <span className="badge" style={{backgroundColor: 'rgba(217,119,6,0.1)', color: 'var(--color-warning)'}}>2.1σ</span>
               </div>
               <p className="font-bold text-ink">Early Peak Load</p>
               <p className="text-sm text-slate-700 mt-1">Campus power draw reached peak capacity 45m earlier than historical avg.</p>
             </div>
             
             <div className="p-4 border-l-4 border-emerald-600 opacity-60">
               <div className="flex justify-between text-sm mb-1">
                 <span className="font-mono text-mist">Wed 11:30 PM</span>
                 <span className="badge badge-neutral bg-cloud-100">RESOLVED</span>
               </div>
               <p className="font-bold text-ink">Phase Imbalance</p>
               <p className="text-sm text-slate-700 mt-1">Block A. System normal.</p>
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dropzone {
          border: 2px dashed #CBD5E1;
          border-radius: var(--radius-xl);
          padding: 80px 40px;
          text-align: center;
          width: 100%;
          max-width: 600px;
          background-color: var(--color-white);
          transition: all 0.2s ease;
        }
        
        .dropzone.active {
          border-color: var(--color-warning);
          background-color: var(--color-amber-50);
        }
        
        .bg-amber { background-color: var(--color-warning); border-color: var(--color-warning); }
        .bg-amber-50 { background-color: #FFFBEB; }
        .bg-amber-100 { background-color: #FEF3C7; }
        .bg-amber-200 { background-color: #FDE68A; }
        .text-amber { color: var(--color-warning); }
        .border-amber { border-color: var(--color-warning); }
        .border-amber-200 { border-color: #FDE68A; }
        
        .bg-rose-50 { background-color: #FFF1F2; }
        .bg-rose-100 { background-color: #FFE4E6; }
        .border-rose { border-color: var(--color-critical); }
        
        .bg-warning-pulse {
          background-color: var(--color-critical);
          animation: pulse-bg 2s infinite;
        }
        
        @keyframes pulse-bg {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        .divide-y > * + * {
          border-top-width: 1px;
          border-color: #E5E7EB;
        }
      `}</style>
    </div>
  );
}
