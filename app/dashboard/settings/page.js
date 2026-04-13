'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Trash2, 
  UserPlus, 
  ShieldCheck, 
  Database, 
  Bell, 
  ChevronRight,
  Globe,
  Lock,
  EyeOff,
  History,
  AlertTriangle
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Campus Profile');

  const menu = [
    { label: 'Campus Profile', icon: <Settings size={18} /> },
    { label: 'Emission Factors', icon: <Database size={18} /> },
    { label: 'Team Members', icon: <UserPlus size={18} /> },
    { label: 'Notifications', icon: <Bell size={18} /> },
    { label: 'Data & Privacy', icon: <ShieldCheck size={18} /> },
    { label: 'Integrations', icon: <Globe size={18} /> },
  ];

  return (
    <div className="flex h-full max-w-[1440px] mx-auto w-full">
      
      {/* LEFT SETTINGS NAV */}
      <aside className="w-[240px] bg-white border-r border-gray-100 flex flex-col py-8 sticky top-0 h-screen">
        <div className="px-8 mb-10">
           <h1 className="text-display-xl text-ink leading-none">Settings</h1>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {menu.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <button 
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center gap-3 px-4 h-11 rounded-md transition-all group ${
                  isActive 
                    ? 'bg-cloud-100 text-ink border-l-[3px] border-emerald-600' 
                    : 'text-mist-500 hover:bg-cloud-50 hover:text-ink'
                }`}
              >
                <span className={`${isActive ? 'text-emerald-600' : 'text-mist-500 group-hover:text-ink'}`}>
                  {item.icon}
                </span>
                <span className="text-[13px] font-bold uppercase tracking-widest">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-12 overflow-y-auto no-scrollbar">
        
        {activeTab === 'Campus Profile' && (
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="max-w-xl space-y-12">
            <div className="space-y-1">
               <h2 className="text-heading-md text-ink">Campus Profile</h2>
               <p className="text-sm text-mist-500">Publicly visible institutional identifying information.</p>
            </div>

            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-ink tracking-widest">Campus Name</label>
                  <input type="text" defaultValue="University of Lucknow" className="input-text w-full" />
               </div>
               
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase text-ink tracking-widest">City</label>
                     <input type="text" defaultValue="Lucknow" className="input-text w-full" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase text-ink tracking-widest">State</label>
                     <select className="input-text w-full">
                        <option>Uttar Pradesh</option>
                        <option>Maharashtra</option>
                     </select>
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-ink tracking-widest">Electricity Utility</label>
                  <select className="input-text w-full">
                     <option>UPPCL - Uttar Pradesh</option>
                     <option>MSEDCL - Maharashtra</option>
                  </select>
               </div>

               <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-emerald-200 text-emerald-600 shadow-sm shrink-0">
                     <Database size={20} />
                  </div>
                  <div className="space-y-1">
                     <p className="text-sm font-bold text-ink">Assigned Grid Factor</p>
                     <p className="text-2xl font-mono text-emerald-800">0.82 <span className="text-xs text-mist-500 font-sans uppercase">kgCO2e/kWh</span></p>
                     <p className="text-[11px] text-mist-500 font-medium">Auto-assigned based on state and utility provider (CEA 2023-24). <button className="text-emerald-600 underline font-bold">Request update</button></p>
                  </div>
               </div>
            </div>

            <div className="pt-8 border-t border-gray-100 flex justify-end gap-4">
               <button className="btn-ghost !h-11">Cancel</button>
               <button className="btn-primary !h-11 px-8">Save Changes</button>
            </div>
          </motion.div>
        )}

        {activeTab === 'Data & Privacy' && (
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl space-y-12">
             <div className="space-y-1">
               <h2 className="text-heading-md text-ink">Data & Privacy</h2>
               <p className="text-sm text-mist-500">Control how institutional telemetry and camera data is handled.</p>
            </div>

            <div className="space-y-8">
               <div className="p-8 rounded-xl border border-gray-100 flex items-start justify-between gap-8 group hover:border-emerald-600 transition-all">
                  <div className="space-y-3">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-cloud-100 text-mist-500 rounded-full flex items-center justify-center group-hover:bg-emerald-100/50 group-hover:text-emerald-600 transition-colors">
                           <EyeOff size={20} />
                        </div>
                        <h4 className="text-heading-sm text-ink group-hover:text-emerald-800">Camera data stored server-side</h4>
                     </div>
                     <p className="text-sm text-mist-500 leading-relaxed max-w-md">All waste classification runs locally on your device using WebAssembly. Camera images are never captured, stored, or sent to GenShakti servers.</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                     <div className="w-14 h-8 bg-gray-100 rounded-full p-1 relative cursor-not-allowed opacity-40">
                        <div className="w-6 h-6 bg-white rounded-full shadow-sm" />
                     </div>
                     <span className="text-[10px] font-black uppercase text-critical tracking-widest">Locked OFF</span>
                  </div>
               </div>

               <div className="p-8 rounded-xl border border-gray-100 flex items-start justify-between gap-8 hover:bg-gray-50/50 transition-all">
                  <div className="space-y-3">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-cloud-100 text-mist-500 rounded-full flex items-center justify-center">
                           <MapPinIcon />
                        </div>
                        <h4 className="text-heading-sm text-ink">Building-level GPS logging</h4>
                     </div>
                     <p className="text-sm text-mist-500 leading-relaxed max-w-md">Enables building-level waste heatmaps for better resource allocation. Logs institutional building name, never precise GPS coordinates.</p>
                  </div>
                  <div className="w-14 h-8 bg-emerald-600 rounded-full p-1 relative cursor-pointer">
                     <div className="w-6 h-6 bg-white rounded-full shadow-sm translate-x-6" />
                  </div>
               </div>

               {/* DANGER ZONE */}
               <div className="mt-16 p-10 rounded-xl border-2 border-dashed border-rose-100 bg-rose-50/20 space-y-6">
                  <div className="flex items-center gap-3 text-critical">
                     <AlertTriangle size={24} />
                     <h4 className="text-heading-sm font-bold uppercase tracking-widest">Safe & Permanent Deletion</h4>
                  </div>
                  <p className="text-sm text-rose-700/60 leading-relaxed max-w-lg">Permanently erase all campus metrics, audit logs, and compliance reports. This action is IRREVERSIBLE and will revoke institutional access for all team members.</p>
                  <button className="flex items-center gap-2 text-critical font-black uppercase tracking-widest bg-white border border-rose-200 px-6 py-3 rounded-md hover:bg-critical hover:text-white transition-all">
                     <Trash2 size={16} /> Delete all campus data
                  </button>
               </div>
            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
}

function MapPinIcon() {
  return <div className="relative w-5 h-5 border-2 border-current rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-current rounded-full" /><div className="absolute top-full w-0.5 h-1.5 bg-current" /></div>
}
