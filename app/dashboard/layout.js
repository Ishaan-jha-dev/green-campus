'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import AIAssistantWidget from '../../components/AIAssistantWidget';
import { 
  Zap, 
  MapPin, 
  LogOut,
  User,
  Bell,
  Search,
  Settings,
  Database,
  Leaf,
  BarChart3,
  Sparkles,
  Command,
  LayoutDashboard,
  ShieldCheck
} from 'lucide-react';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Campus Map', icon: <MapPin size={18} />, path: '/dashboard' },
    { label: 'Energy Radar', icon: <Zap size={18} />, path: '/dashboard/data' },
    { label: 'Carbon Ledger', icon: <Leaf size={18} />, path: '/dashboard/carbon' },
    { label: 'Sustainability AI', icon: <Sparkles size={18} />, path: '/dashboard/suggestions' },
    { label: 'Reports Hub', icon: <BarChart3 size={18} />, path: '/dashboard/reports' },
    { label: 'Settings', icon: <Settings size={18} />, path: '/dashboard/settings' },
  ];

  return (
    <div className="flex h-screen bg-[#F3FBF6] text-slate-900 font-sans overflow-hidden selection:bg-emerald-500/30">
      
      {/* SIDEBAR - GREENPULSE BRANDED */}
      <aside className="w-[280px] bg-white flex flex-col h-full border-r border-emerald-100 shrink-0 relative z-20 shadow-[10px_0_30px_rgba(5,150,105,0.02)]">
        <div className="h-24 flex items-center px-8 border-b border-slate-50">
          <div className="flex items-center gap-3">
             <div className="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                <Leaf className="text-white w-6 h-6" />
             </div>
             <div>
               <span className="text-slate-900 font-black text-xl block tracking-tighter uppercase leading-none">GreenPulse</span>
               <span className="text-emerald-500 text-[10px] uppercase font-black tracking-[0.2em] block mt-1 leading-none">Intelligence</span>
             </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-10 space-y-1.5 overflow-y-auto no-scrollbar">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 px-4 opacity-60">Operations</p>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.path}
                href={item.path}
                className={`flex items-center gap-4 px-5 h-12 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest leading-none ${
                  isActive 
                    ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/20' 
                    : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                <span className={`${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-6">
          <div className="group bg-slate-900 p-4 rounded-[32px] cursor-pointer hover:bg-emerald-950 transition-all shadow-2xl relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-white shrink-0 shadow-inner border border-white/5 group-hover:bg-emerald-500 transition-colors">
                <User size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs font-black truncate uppercase tracking-tighter">Admin Central</p>
                <div className="flex items-center gap-1 mt-0.5">
                   <ShieldCheck size={10} className="text-emerald-400" />
                   <span className="text-emerald-400/80 text-[8px] uppercase font-black tracking-widest block">Level 4 Clearance</span>
                </div>
              </div>
              <LogOut size={16} className="text-white/20 ml-auto group-hover:text-rose-400 transition-colors" />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Environmental Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/40 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* TOP NAV VIEW */}
        <header className="h-24 bg-white/50 backdrop-blur-2xl border-b border-emerald-900/5 flex items-center justify-between px-12 shrink-0 relative z-10">
          <div className="max-w-md w-full relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-600 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search campus analytics..." 
              className="w-full h-14 bg-white/40 rounded-[24px] pl-14 pr-6 text-xs font-black text-slate-900 placeholder-slate-300 outline-none border-2 border-transparent focus:border-emerald-600/10 focus:bg-white transition-all shadow-sm"
            />
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center bg-white rounded-full px-5 py-2 border-2 border-emerald-50 shadow-sm">
               <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
               <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">Campus AQI · 42</span>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="relative cursor-pointer w-14 h-14 rounded-[24px] bg-white border-2 border-emerald-50 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm group">
                 <Bell size={20} className="text-slate-700 group-hover:text-white" />
                 <span className="absolute top-4 right-4 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
               </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto relative z-0">
           <div className="p-12">
              {children}
           </div>
        </main>
        
        <AIAssistantWidget />
      </div>
    </div>
  );
}
