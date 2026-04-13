export default function CarbonMobilePage() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-emerald-50/80 dark:bg-slate-950/80 backdrop-blur-xl fixed top-0 w-full z-50">
<div className="flex justify-between items-center px-6 h-16 w-full max-w-md mx-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcY4Djff5vtnXNyYiziB7WRWPuzezQ3YK95ZGmQlQG2ZlfXQV6a8m9YIdRsWC5r8lEX-Fl5Dz2QawaZbmECPLCeenEOMYUAcN4hxS2dN_Q3xA7b4MYHr8ir6mwCBH4EXGwdIFwa4gYuFs-weDJUMgW3jwj1g1PQqx3QCozV_K7y_n7EMEfl-9_jTQnCbWkfSLaIcFH0aIAJ_Uotbjmnu81mFKes4xn9phRd8hz6nBxalC4wRafJ6zrBl45179zS2V1h_Twe1rbygSE" />
</div>
<span className="text-xl font-bold tracking-tighter text-emerald-700 dark:text-emerald-400">GenShakti</span>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-emerald-100/50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-150 text-emerald-600 dark:text-emerald-400">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
</header>
<main className="pt-20 px-6 max-w-md mx-auto">
{/*  Breadcrumbs  */}
<nav className="flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-widest text-outline">
<span className="hover:text-primary cursor-pointer">Dashboard</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface-variant font-bold">CarbonLens</span>
</nav>
{/*  Segmented Tab Navigation  */}
<div className="bg-surface-container-low rounded-xl p-1 flex mb-8">
<button className="flex-1 py-2 text-xs font-bold rounded-lg transition-all text-slate-500">Scope 1</button>
<button className="flex-1 py-2 text-xs font-bold rounded-lg transition-all bg-surface-container-lowest text-primary shadow-sm">Scope 2</button>
<button className="flex-1 py-2 text-xs font-bold rounded-lg transition-all text-slate-500">Scope 3</button>
<button className="flex-1 py-2 text-xs font-bold rounded-lg transition-all text-slate-500">History</button>
</div>
{/*  Scope 2 Content  */}
<section className="space-y-6">
{/*  Hero Calculation Card  */}
<div className="bg-surface-container-lowest rounded-xl p-6 relative overflow-hidden border-l-4 border-primary shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<h2 className="text-xs font-mono uppercase tracking-widest text-outline mb-1">Live CO2e Output</h2>
<div className="flex items-baseline gap-2">
<span className="data-number text-5xl font-extrabold text-on-surface tracking-tighter">1.42</span>
<span className="data-number text-xl text-primary font-bold">tCO2e</span>
</div>
</div>
<div className="bg-primary/10 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary" data-icon="visibility">visibility</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-primary">
<span className="material-symbols-outlined text-sm">trending_down</span>
<span>12% below regional baseline</span>
</div>
<div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
<span className="material-symbols-outlined text-9xl">energy_savings_leaf</span>
</div>
</div>
{/*  Input Control Section  */}
<div className="bg-surface-container-low rounded-xl p-6 space-y-6">
<div>
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-bold text-on-surface">Energy Consumption</label>
<div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg">
<span className="data-number text-lg font-bold">3,850</span>
<span className="text-[10px] font-mono text-outline uppercase">kWh</span>
</div>
</div>
<input className="mb-2" max="10000" min="0" type="range" value="3850" />
<div className="flex justify-between text-[10px] font-mono text-outline uppercase tracking-wider">
<span>0 kWh</span>
<span>10,000 kWh</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-lowest p-4 rounded-xl">
<span className="block text-[10px] font-mono text-outline uppercase mb-1">Factor</span>
<span className="data-number text-sm font-bold text-on-surface">0.369 kg/kWh</span>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl">
<span className="block text-[10px] font-mono text-outline uppercase mb-1">Reliability</span>
<span className="data-number text-sm font-bold text-primary">98.4%</span>
</div>
</div>
</div>
{/*  Breakdown & Comparison  */}
<div className="space-y-4">
<h3 className="text-xs font-mono uppercase tracking-widest text-outline px-2">National Comparison</h3>
<div className="bg-surface-container-lowest rounded-xl p-5 space-y-4">
<div className="space-y-2">
<div className="flex justify-between text-[11px] font-mono uppercase tracking-wider">
<span>Your Campus</span>
<span className="data-number font-bold">3.85 MWh</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-2/3"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[11px] font-mono uppercase tracking-wider">
<span>National Avg</span>
<span className="data-number font-bold">5.12 MWh</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-surface-variant rounded-full w-4/5"></div>
</div>
</div>
</div>
</div>
{/*  Offset Card CTA  */}
<div className="bg-secondary/5 border-l-4 border-secondary rounded-xl p-5 flex items-center justify-between">
<div>
<h4 className="text-sm font-bold text-on-surface mb-1 text-secondary">CCTS Offset Program</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Bridge your Scope 2 gap with verified credits.</p>
</div>
<button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-xs font-bold active:scale-95 transition-transform">
                    Explore
                </button>
</div>
{/*  Footer Footnote  */}
<footer className="pt-4 pb-10 border-t border-surface-container-high">
<p className="text-[10px] text-outline leading-tight font-sans">
                    Data calculated using CEA (Carbon Emission Agency) 2024 regional grid factors. Baseline comparisons updated quarterly.
                </p>
</footer>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-t border-emerald-100 dark:border-emerald-900/30 shadow-[0_-8px_32px_rgba(0,0,0,0.06)]">
<div className="flex justify-around items-center px-4 pb-6 pt-2 max-w-md mx-auto">
<div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 py-2 px-4 hover:text-emerald-500 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-sans font-medium text-[10px] uppercase tracking-widest mt-1">Dashboard</span>
</div>
<div className="flex flex-col items-center justify-center text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl py-2 px-4 active:opacity-80 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span className="font-sans font-medium text-[10px] uppercase tracking-widest mt-1">CarbonLens</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 py-2 px-4 hover:text-emerald-500 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="recycling">recycling</span>
<span className="font-sans font-medium text-[10px] uppercase tracking-widest mt-1">WasteAI</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 py-2 px-4 hover:text-emerald-500 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>
<span className="font-sans font-medium text-[10px] uppercase tracking-widest mt-1">EnergyRadar</span>
</div>
</div>
</nav>
{/*  Floating Action Button - Contextual for CarbonLens (Log Activity)  */}
<button className="fixed right-6 bottom-24 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-40">
<span className="material-symbols-outlined text-2xl" data-icon="add">add</span>
</button>

    </>
  );
}
