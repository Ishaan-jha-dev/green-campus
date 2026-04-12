'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WasteAIPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="waste-page p-6">
      <div className="dashboard-header mb-6 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-violet">camera</span>
            <span className="text-caption text-mist tracking-widest uppercase">DASHBOARD / WASTEAI</span>
          </div>
          <h1 className="text-display-xl text-violet">WasteAI Ledger</h1>
        </div>
        <Link href="/dashboard/waste/camera" className="btn-primary" style={{backgroundColor: 'var(--color-waste)'}}>
          <span className="material-symbols-outlined">photo_camera</span> Scan Item
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
           <p className="text-label text-mist">TOTAL DIVERSION</p>
           <p className="text-display-lg font-mono mt-2">64.2%</p>
           <p className="text-caption text-emerald mt-1">↑ 12% vs last month</p>
        </div>
        <div className="card">
           <p className="text-label text-mist">ITEMS LOGGED (TODAY)</p>
           <p className="text-display-lg font-mono mt-2">1,248</p>
           <p className="text-caption text-mist mt-1">Across 14 campus zones</p>
        </div>
        <div className="card border-l-4 border-violet">
           <p className="text-label text-mist">EPR COMPLIANCE SCORE</p>
           <p className="text-display-lg font-mono mt-2 text-violet">A-</p>
           <p className="text-caption text-mist mt-1">Eligible for CPCB rebate</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Analytics */}
        <div className="lg:col-span-2">
          <div className="card mb-6">
             <h3 className="text-heading-sm mb-4">Waste Stream Analysis</h3>
             <div className="h-64 flex items-end gap-2 bg-cloud-100 rounded-lg p-4 relative">
                {/* Mock Bar Chart */}
                {mounted && (
                   <>
                     <div className="flex-1 flex flex-col justify-end group">
                       <div className="w-full bg-violet rounded-t-sm" style={{height: '80%'}}></div>
                       <p className="text-center text-xs mt-2 font-mono">Plastic</p>
                     </div>
                     <div className="flex-1 flex flex-col justify-end">
                       <div className="w-full bg-mist-500 rounded-t-sm" style={{height: '30%'}}></div>
                       <p className="text-center text-xs mt-2 font-mono">Paper</p>
                     </div>
                     <div className="flex-1 flex flex-col justify-end">
                       <div className="w-full bg-emerald-600 rounded-t-sm" style={{height: '60%'}}></div>
                       <p className="text-center text-xs mt-2 font-mono">Organic</p>
                     </div>
                     <div className="flex-1 flex flex-col justify-end">
                       <div className="w-full bg-amber rounded-t-sm" style={{height: '15%'}}></div>
                       <p className="text-center text-xs mt-2 font-mono">E-Waste</p>
                     </div>
                     <div className="flex-1 flex flex-col justify-end">
                       <div className="w-full bg-mist-500 opacity-50 rounded-t-sm" style={{height: '40%'}}></div>
                       <p className="text-center text-xs mt-2 font-mono">Landfill</p>
                     </div>
                   </>
                )}
             </div>
          </div>
          
          <h3 className="text-heading-sm mb-4">Recent AI Logs</h3>
          <div className="card p-0 overflow-hidden">
             <table className="w-full text-left">
               <thead className="bg-cloud-100 border-b text-label">
                 <tr>
                   <th className="p-4">Timestamp</th>
                   <th className="p-4">Item Detected</th>
                   <th className="p-4">Confidence</th>
                   <th className="p-4">Zone</th>
                 </tr>
               </thead>
               <tbody className="font-mono text-sm">
                 <tr className="border-b">
                   <td className="p-4">12:04:11</td>
                   <td className="p-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet"></span> PET Bottle</td>
                   <td className="p-4">98.4%</td>
                   <td className="p-4">Cafeteria</td>
                 </tr>
                 <tr className="border-b">
                   <td className="p-4">12:02:45</td>
                   <td className="p-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-600"></span> Apple Core</td>
                   <td className="p-4">94.1%</td>
                   <td className="p-4">Main Quad</td>
                 </tr>
                 <tr>
                   <td className="p-4">11:58:22</td>
                   <td className="p-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-mist-500"></span> Chips Wrapper</td>
                   <td className="p-4">89.2%</td>
                   <td className="p-4">Library</td>
                 </tr>
               </tbody>
             </table>
          </div>
        </div>
        
        {/* Sidebar panels */}
        <div>
          <div className="bg-violet-light border border-violet border-opacity-20 p-6 rounded-lg mb-6">
            <h3 className="text-violet font-bold mb-2">EPR Audit Ready</h3>
            <p className="text-slate-700 text-sm mb-4">You have 1,402 logs ready for internal audit. Download the CPCB formatted CSV.</p>
            <button className="bg-white border border-violet text-violet px-4 py-2 rounded-md text-sm font-medium w-full text-center">Generate Export</button>
          </div>
          
          <div className="card">
            <h3 className="text-heading-sm mb-4">Eco-Points Leaderboard</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                 <span className="font-medium text-sm">1. Bio Dept</span>
                 <span className="font-mono text-emerald">12.4k</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                 <span className="font-medium text-sm">2. Hostels A-C</span>
                 <span className="font-mono text-emerald">9.8k</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                 <span className="font-medium text-sm text-mist">14. Your Dept</span>
                 <span className="font-mono text-emerald">4.1k</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
