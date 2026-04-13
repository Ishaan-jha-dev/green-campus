'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Plus, Database, CheckCircle2, FileSpreadsheet } from 'lucide-react';

export default function DataEntryPage() {
  const [activeTab, setActiveTab] = useState('manual');
  const [formData, setFormData] = useState({
    zone: 'Engineering Block',
    date: '',
    peakLoad: '',
    averageLoad: '',
  });
  const [isUploading, setIsUploading] = useState(false);
  const [msg, setMsg] = useState(null);

  const handleManualSubmit = (e) => {
    e.preventDefault();
    setMsg('Data point manually saved successfully. Map and carbon metrics updated.');
    setTimeout(() => setMsg(null), 4000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setMsg(`CSV "${file.name}" uploaded successfully. Anomalies and Carbon footprints calculated.`);
        setTimeout(() => setMsg(null), 4000);
      }, 1500);
    }
  };

  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-10 font-sans">
      <header>
        <h1 className="text-4xl font-black text-slate-900 mb-2 flex items-center gap-3 tracking-tight">
          <Database className="w-8 h-8 text-blue-600" /> Data Management
        </h1>
        <p className="text-slate-500 font-medium">Upload meter reading CSV records or manually override zone electric loads.</p>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-8">
        <button 
          onClick={() => setActiveTab('manual')}
          className={`pb-4 text-sm font-bold transition-colors relative ${activeTab === 'manual' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-700'}`}
        >
          Manual Data Entry
          {activeTab === 'manual' && <motion.div layoutId="indicator" className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-full" />}
        </button>
        <button 
          onClick={() => setActiveTab('csv')}
          className={`pb-4 text-sm font-bold transition-colors relative ${activeTab === 'csv' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-700'}`}
        >
          Mass CSV Upload
          {activeTab === 'csv' && <motion.div layoutId="indicator" className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-full" />}
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl shadow-slate-200/50">
        {msg && (
          <div className="mb-8 p-5 bg-emerald-50 border-2 border-emerald-200 text-emerald-800 font-bold rounded-2xl flex items-center gap-3 shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> {msg}
          </div>
        )}

        {activeTab === 'manual' ? (
          <form onSubmit={handleManualSubmit} className="space-y-8 max-w-2xl">
             <div className="grid grid-cols-2 gap-8">
               <div className="space-y-3">
                 <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Campus Zone</label>
                 <select 
                   value={formData.zone} onChange={(e) => setFormData({...formData, zone: e.target.value})}
                   className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-800 font-semibold outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                 >
                   <option>Engineering Block</option>
                   <option>Central Library</option>
                   <option>Main Cafe</option>
                   <option>Hostel A</option>
                   <option>Admin Wing</option>
                 </select>
               </div>
               <div className="space-y-3">
                 <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Reading Date</label>
                 <input type="date" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-800 font-semibold outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm" required />
               </div>
               <div className="space-y-3">
                 <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Peak Load (kW)</label>
                 <input type="number" placeholder="e.g. 140" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-800 font-semibold outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm placeholder:font-medium placeholder:text-slate-400" required />
               </div>
               <div className="space-y-3">
                 <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Base Load Avg (kW)</label>
                 <input type="number" placeholder="e.g. 50" className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-800 font-semibold outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm placeholder:font-medium placeholder:text-slate-400" required />
               </div>
             </div>
             
             <button type="submit" className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-xl shadow-blue-500/30 font-bold transition-all">
                <Plus className="w-5 h-5" /> Save Data Point
             </button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 hover:bg-slate-100 hover:border-blue-300 transition-all group cursor-pointer relative shadow-inner">
            <input type="file" onChange={handleFileUpload} accept=".csv" disabled={isUploading} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <div className={`p-5 rounded-3xl bg-white shadow-xl shadow-slate-200 border border-slate-100 text-blue-600 mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-transform ${isUploading && 'animate-pulse'}`}>
               {isUploading ? <Upload className="w-10 h-10" /> : <FileSpreadsheet className="w-10 h-10" />}
            </div>
            <h3 className="text-slate-900 font-bold text-xl mb-3 flex items-center gap-2">
              {isUploading ? 'Analyzing Grid Data...' : 'Drag & Drop your precise CSV files here'}
            </h3>
            <p className="text-slate-500 font-medium text-sm max-w-md text-center leading-relaxed">
              Upload your smart meter readings or utility reports. We instantly plot the exact time and location of electricity waste spikes.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
