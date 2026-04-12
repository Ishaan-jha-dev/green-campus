'use client';

import { useState } from 'react';

export default function CarbonLensPage() {
  const [activeTab, setActiveTab] = useState('Scope 2');
  const [kwh, setKwh] = useState(3850);
  
  // Carbon calculation
  const factor = 0.369; // UP state factor example
  const co2e = ((kwh * factor) / 1000).toFixed(2);
  const natAvg = 5120; // 5.12 MWh

  return (
    <div className="carbon-page p-6">
      <div className="dashboard-header mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-emerald">energy_savings_leaf</span>
          <span className="text-caption text-mist tracking-widest uppercase">DASHBOARD / CARBONLENS</span>
        </div>
        <h1 className="text-display-xl text-emerald">CarbonLens</h1>
      </div>

      <div className="tabs mb-8 border-b border-gray-200">
        {['Scope 1', 'Scope 2', 'Scope 3', 'CCTS Offset', 'History'].map(tab => (
          <button 
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active text-emerald border-emerald-600' : 'text-slate-500 hover:text-ink'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Scope 2' && (
        <div className="tab-content">
          <div className="live-output-card mb-6 flex justify-between items-center group">
            <div>
              <p className="text-label text-mist">LIVE CO2E OUTPUT</p>
              <div className="text-display-2xl text-ink font-mono mt-2">
                {co2e} <span className="text-emerald text-heading-md">tCO2e</span>
              </div>
              <p className="text-body-sm text-emerald mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_down</span>
                12% below regional baseline
              </p>
            </div>
            <div className="bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center relative shadow-sm">
               <span className="material-symbols-outlined text-emerald text-display-lg absolute -top-2 -right-2 bg-white rounded-md p-1 shadow-xs">visibility</span>
               <span className="material-symbols-outlined text-emerald" style={{fontSize: '48px'}}>bolt</span>
            </div>
          </div>

          <div className="card mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-heading-sm">Energy Consumption</h3>
              <div className="bg-white border rounded-md px-4 py-2 font-mono text-heading-sm">
                {kwh.toLocaleString()} <span className="text-caption text-mist font-sans">KWH</span>
              </div>
            </div>
            
            <input 
              type="range" 
              min="0" 
              max="10000" 
              value={kwh} 
              onChange={e => setKwh(e.target.value)}
              className="w-full slider emerald"
            />
            <div className="flex justify-between text-caption text-mist mt-2 font-mono">
              <span>0 KWH</span>
              <span>10,000 KWH</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-cloud-100 p-4 rounded-lg">
                <p className="text-label text-mist mb-2">FACTOR</p>
                <p className="font-mono text-heading-sm">{factor} <span className="text-body-sm font-sans">kg/kWh</span></p>
              </div>
              <div className="bg-cloud-100 p-4 rounded-lg">
                <p className="text-label text-mist mb-2">RELIABILITY</p>
                <p className="font-mono text-heading-sm text-emerald">98.4%</p>
              </div>
            </div>
          </div>

          <h3 className="text-label text-mist mb-4">NATIONAL COMPARISON</h3>
          <div className="card mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-label text-ink">YOUR CAMPUS</span>
              <span className="font-mono text-body-sm">{(kwh/1000).toFixed(2)} MWH</span>
            </div>
            <div className="w-full bg-cloud-100 h-4 rounded-full mb-6">
              <div className="bg-emerald-600 h-full rounded-full" style={{width: `${(kwh/natAvg)*100}%`}}></div>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-label text-mist">NATIONAL AVG</span>
              <span className="font-mono text-body-sm">5.12 MWH</span>
            </div>
            <div className="w-full bg-cloud-100 h-4 rounded-full">
              <div className="bg-mist-500 h-full rounded-full opacity-30" style={{width: '100%'}}></div>
            </div>
          </div>
          
          <div className="bg-violet-light border-l-4 border-violet p-6 rounded-r-lg">
            <h3 className="text-violet font-bold mb-2">CCTS Offset Program</h3>
            <p className="text-slate-700 text-sm mb-4">Bridge your Scope 2 gap with verified credits.</p>
            <button className="bg-violet text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90">Explore offset matching</button>
          </div>
        </div>
      )}
      
      {activeTab === 'Scope 3' && (
        <div className="tab-content">
          {/* Scope 3 Content */}
          <div className="border border-emerald-600 border-l-4 rounded-lg p-6 mb-4 bg-white relative">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald">directions_car</span>
                <h3 className="font-bold text-lg">Commute Emissions</h3>
              </div>
              <span className="material-symbols-outlined text-slate-400">expand_more</span>
            </div>
            <div className="bg-cloud-100 p-4 rounded-md mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Survey Completion</span>
                <span className="font-bold text-emerald">67%</span>
              </div>
              <div className="w-full bg-mist h-2 rounded-full opacity-30">
                <div className="bg-emerald-600 h-full rounded-full" style={{width: '67%'}}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-cloud-100 p-4 rounded-md">
                 <p className="text-label text-mist">AGGREGATED</p>
                 <p className="font-mono text-2xl mt-1">124.5 <span className="text-sm font-sans">tCO2e</span></p>
               </div>
               <div className="bg-emerald-50 text-emerald text-sm font-bold p-4 rounded-md flex flex-col items-center justify-center border border-emerald-100 cursor-pointer hover:bg-emerald-100 transition">
                 <span className="material-symbols-outlined mb-1">person_add</span>
                 Invite more users
               </div>
            </div>
          </div>
          
          <div className="border border-violet border-l-4 rounded-lg p-6 mb-4 bg-white opacity-80">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-violet">restaurant</span>
                <h3 className="font-bold text-lg">Canteen & Catering</h3>
              </div>
              <span className="material-symbols-outlined text-slate-400">expand_less</span>
            </div>
            {/* Expanded Content */}
            <div className="mb-4">
              <label className="text-label text-mist block mb-2">LPG CYLINDERS (19KG)</label>
              <input type="text" className="input-field bg-cloud-100 font-mono" value="12" readOnly />
            </div>
            <div className="mb-6">
              <label className="text-label text-mist block mb-2">GENERATOR DIESEL (LITERS)</label>
              <input type="text" className="input-field bg-cloud-100 font-mono" value="450" readOnly />
            </div>
            <div className="bg-violet-light p-4 rounded-md flex justify-between items-center">
              <span className="text-violet font-bold text-sm tracking-widest uppercase text-label">Estimated Impact</span>
              <span className="font-mono text-2xl text-violet font-bold">3.42 <span className="text-sm font-sans font-normal">tCO2e</span></span>
            </div>
          </div>
        </div>
      )}

      {/* Basic implementations for other tabs not fully shown in PRD but indicated */}
      {activeTab === 'CCTS Offset' && (
        <div className="tab-content text-center py-12">
          <span className="material-symbols-outlined text-4xl text-mist mb-4">account_balance</span>
          <h2 className="text-xl font-bold">CCTS Offset Estimator</h2>
          <p className="text-mist mt-2">Connect to the Indian Carbon Market</p>
        </div>
      )}
      
      {activeTab === 'History' && (
        <div className="tab-content py-6 text-center text-slate-500">
           <span className="material-symbols-outlined text-4xl mb-4">bar_chart</span>
           <p>Historical Reporting unavailable in Demo mode.</p>
        </div>
      )}

      <style jsx>{`
        .p-6 { padding: var(--space-6); }
        .mb-2 { margin-bottom: var(--space-2); }
        .mb-4 { margin-bottom: var(--space-4); }
        .mb-6 { margin-bottom: var(--space-6); }
        .mb-8 { margin-bottom: var(--space-8); }
        .mt-2 { margin-top: var(--space-2); }
        .mt-6 { margin-top: var(--space-6); }
        
        .tabs {
          display: flex;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
        }
        .tabs::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        
        .tab-btn {
          padding: var(--space-3) var(--space-6);
          font-weight: 500;
          font-size: 15px;
          border-bottom: 2px solid transparent;
          white-space: nowrap;
          transition: all 150ms;
        }
        
        .live-output-card {
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          padding: var(--space-8);
          border-left: 6px solid var(--color-emerald-600);
          box-shadow: var(--shadow-sm);
        }
        
        .slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 4px;
          background: #d3d3d3;
          outline: none;
        }
        
        .slider.emerald::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--color-emerald-600);
          cursor: pointer;
        }
        
        .slider.emerald::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--color-emerald-600);
          cursor: pointer;
        }
        
        .bg-cloud-100 { background-color: var(--color-cloud-100); }
      `}</style>
    </div>
  );
}
