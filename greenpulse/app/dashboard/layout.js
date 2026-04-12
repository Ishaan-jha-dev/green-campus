'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { icon: 'visibility', label: 'CarbonLens', path: '/dashboard/carbon' },
    { icon: 'recycling', label: 'WasteAI', path: '/dashboard/waste' },
    { icon: 'bolt', label: 'EnergyRadar', path: '/dashboard/energy' },
    { icon: 'description', label: 'Reports', path: '/dashboard/reports' },
    { icon: 'leaderboard', label: 'Leaderboard', path: '/dashboard/leaderboard' },
    { icon: 'settings', label: 'Settings', path: '/dashboard/settings' },
  ];

  const mobileNavItems = [
    { icon: 'home', label: 'Home', path: '/dashboard' },
    { icon: 'analytics', label: 'Carbon', path: '/dashboard/carbon' },
    { icon: 'delete_outline', label: 'Waste', path: '/dashboard/waste' },
    { icon: 'electric_bolt', label: 'Energy', path: '/dashboard/energy' },
  ];

  return (
    <div className="flex min-h-screen bg-[#f7f9ff]">
      {/* SIDEBAR (Desktop) */}
      <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-[#0F1923] py-8 overflow-y-auto z-50">
        <div className="px-6 mb-10">
          <h1 className="text-lg font-black text-white leading-none">GreenPulse</h1>
          <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-1">Sovereign Ledger</p>
        </div>
        
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 font-sans text-sm tracking-wide transition-all ${
                  isActive 
                    ? 'text-emerald-400 bg-emerald-500/10 border-l-4 border-emerald-500' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
        
        <div className="px-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-400 text-sm">corporate_fare</span>
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">North Campus</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Instance #402</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-64 min-h-screen pb-24 md:pb-8 flex flex-col overflow-x-hidden">
        {children}
        
        {/* Contextual Floating Action Button */}
        <button className="fixed bottom-20 right-6 md:bottom-10 md:right-10 w-14 h-14 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-40 group">
          <span className="material-symbols-outlined text-2xl">add</span>
          <span className="absolute right-full mr-4 px-3 py-1 bg-slate-800 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">Manual Log</span>
        </button>
      </main>

      {/* MOBILE BOTTOM NAV */}
      <nav className="fixed md:hidden bottom-0 left-0 w-full z-50 h-16 flex justify-around items-center px-4 bg-white/90 backdrop-blur-lg border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {mobileNavItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={`flex flex-col items-center gap-1 transition-transform active:scale-100 scale-95 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-mono text-[10px] uppercase font-bold">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  );
}
