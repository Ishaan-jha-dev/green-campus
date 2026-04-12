'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Campus Profile');

  const tabs = [
    'Campus Profile',
    'Emission Factors',
    'Team Members',
    'Notifications',
    'Data & Privacy'
  ];

  return (
    <div className="settings-page p-6 max-w-5xl mx-auto">
      <div className="dashboard-header mb-8">
        <h1 className="text-display-xl text-ink">Settings</h1>
        <p className="text-body-md text-slate-700">Manage your institutional data and platform access.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Settings Sidebar */}
        <div className="bg-cloud-100 w-full md:w-64 flex-shrink-0 border-r border-gray-200">
           <nav className="flex flex-col p-4 gap-1">
              <span className="text-caption text-mist uppercase tracking-widest font-bold px-4 py-2">Organization</span>
              
              {tabs.map((tab) => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={`text-left px-4 py-2 rounded-md font-medium text-sm transition-colors ${activeTab === tab ? 'bg-emerald-100 text-emerald-800 font-bold' : 'text-slate-600 hover:bg-white'}`}
                 >
                   {tab}
                 </button>
              ))}
           </nav>
        </div>

        {/* Settings Content */}
        <div className="p-8 flex-1">
           {activeTab === 'Campus Profile' && (
             <div className="animate-fade-in">
               <h2 className="text-heading-sm mb-6 border-b pb-4">Institutional Details</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="form-group">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Institution Name</label>
                    <input type="text" className="input-field w-full" defaultValue="Demo University" />
                  </div>
                  <div className="form-group">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Campus ID</label>
                    <input type="text" className="input-field w-full bg-cloud-100 font-mono" defaultValue="IND-UP-4402" readOnly />
                  </div>
                  <div className="form-group">
                    <label className="block text-sm font-bold text-slate-700 mb-2">State / Zone</label>
                    <select className="input-field w-full text-slate-700">
                      <option>Uttar Pradesh (NEWNE Grid)</option>
                      <option>Maharashtra (NEWNE Grid)</option>
                      <option>Karnataka (SR Grid)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Campus Area (Acres)</label>
                    <input type="number" className="input-field w-full" defaultValue="140" />
                  </div>
               </div>
               
               <button className="btn-primary">Save Changes</button>
             </div>
           )}

           {activeTab === 'Emission Factors' && (
             <div className="animate-fade-in">
               <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h2 className="text-heading-sm">Grid Emission Factors</h2>
                  <span className="badge badge-neutral">Auto-Synced</span>
               </div>
               
               <p className="text-sm text-slate-600 mb-6">GreenPulse automatically updates these factors based on the latest Central Electricity Authority (CEA) CO2 Baseline Database.</p>
               
               <div className="border rounded-md overflow-hidden mb-8">
                 <table className="w-full text-left text-sm">
                   <thead className="bg-cloud-100 text-mist font-bold uppercase text-xs">
                     <tr>
                       <th className="p-3">Source</th>
                       <th className="p-3">Current Factor</th>
                       <th className="p-3">Last Update</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-t">
                       <td className="p-3 font-medium">Electricity (Scope 2)</td>
                       <td className="p-3 font-mono font-bold text-emerald">0.820 <span className="text-xs text-mist font-sans font-normal">kgCO2e/kWh</span></td>
                       <td className="p-3 font-mono text-mist text-xs">2026-04-01</td>
                     </tr>
                     <tr className="border-t">
                       <td className="p-3 font-medium">Diesel Generator (Scope 1)</td>
                       <td className="p-3 font-mono font-bold text-amber text-warning">2.680 <span className="text-xs text-mist font-sans font-normal">kgCO2e/L</span></td>
                       <td className="p-3 font-mono text-mist text-xs">Fixed</td>
                     </tr>
                     <tr className="border-t">
                       <td className="p-3 font-medium">LPG (Canteen Scope 1)</td>
                       <td className="p-3 font-mono font-bold text-amber text-warning">2.983 <span className="text-xs text-mist font-sans font-normal">kgCO2e/kg</span></td>
                       <td className="p-3 font-mono text-mist text-xs">Fixed</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
           )}

           {activeTab === 'Data & Privacy' && (
             <div className="animate-fade-in">
               <h2 className="text-heading-sm mb-6 border-b pb-4">Sovereign Data Controls</h2>
               
               <div className="p-4 border rounded-md mb-6 bg-cloud-100">
                  <div className="flex justify-between items-start">
                     <div>
                       <p className="font-bold mb-1">Local Processing (WasteAI)</p>
                       <p className="text-sm text-slate-600">Ensure all camera images are processed on-device. Images will never be sent to the cloud.</p>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                       <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                       <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                     </label>
                  </div>
               </div>

               <div className="p-6 border border-rose rounded-md bg-rose-50 mt-12">
                 <h3 className="text-rose font-bold mb-2 text-critical" style={{color: 'var(--color-critical)'}}>Danger Zone</h3>
                 <p className="text-sm text-slate-700 mb-4">Permanently delete your campus data from the ledger. This action cannot be reversed and will void CCTS compliance history.</p>
                 <button className="bg-white border border-rose text-rose px-4 py-2 rounded-md font-bold hover:bg-rose-100 transition text-critical" style={{borderColor: 'var(--color-critical)', color: 'var(--color-critical)'}}>
                   Purge Campus Identity
                 </button>
               </div>
             </div>
           )}
           
           {(activeTab === 'Team Members' || activeTab === 'Notifications') && (
             <div className="animate-fade-in text-center py-12 text-mist">
               <span className="material-symbols-outlined text-4xl mb-4">construction</span>
               <p>This settings pane is currently unconfigured in the Demo Environment.</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
