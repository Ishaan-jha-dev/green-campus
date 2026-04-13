export default function Scope3Page() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="w-full sticky top-0 z-50 bg-[#f7f9ff] dark:bg-slate-950 shadow-[0_8px_32px_rgba(18,28,39,0.06)]">
<div className="flex items-center justify-between px-6 py-4 w-full">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#059669] dark:text-[#10b981]" data-icon="analytics">analytics</span>
<div className="flex flex-col">
<span className="text-[10px] data-text uppercase tracking-widest text-slate-500">Dashboard / CarbonLens</span>
<h1 className="text-xl font-bold text-[#059669] tracking-tighter">CarbonLens</h1>
</div>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
<img alt="user profile" data-alt="close-up portrait of a professional corporate sustainability officer in a bright modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgv3dkAdfA76GgLklRbYxL4Nhaz55EtDyV3-JQNIJRk0hUsTPW0SIB-1kMRaXYmyFQY-twrsVbhaoldD7a-CG95xVZ9q5_-yq6xqYvXHLDNuS2m-S5h5TZgrLgiFO1u9FMzhfNIWtzkyxTFfgQDBZos757Qg8b1zhKYAYDEoQElZl7t2G64XM66MHLT54W6cSCFYnwlo4yDhl3uGG-UhziQyeSucL3HUSUGNOqM7t0SC-HJsJSYS5RTw2wL6iu_0hak1gEUQwgl6Ig" />
</div>
</div>
<div className="bg-[#dfe9f7] dark:bg-slate-800 h-[1px] w-full"></div>
</header>
<main className="px-4 py-6 space-y-6">
{/*  Tabs Navigation  */}
<nav className="flex overflow-x-auto no-scrollbar gap-2 pb-2">
<button className="px-4 py-2 text-sm font-medium whitespace-nowrap text-slate-500 hover:bg-[#edf4ff] transition-colors rounded-xl">Scope 2</button>
<button className="px-4 py-2 text-sm font-bold whitespace-nowrap text-[#059669] bg-white border-b-2 border-[#059669] rounded-t-xl">Scope 3</button>
<button className="px-4 py-2 text-sm font-medium whitespace-nowrap text-slate-500 hover:bg-[#edf4ff] transition-colors rounded-xl">CCTS Offset</button>
<button className="px-4 py-2 text-sm font-medium whitespace-nowrap text-slate-500 hover:bg-[#edf4ff] transition-colors rounded-xl">History</button>
</nav>
{/*  Accordion Content  */}
<div className="space-y-4">
{/*  1. Commute Emissions  */}
<section className="bg-surface-container-lowest rounded-xl overflow-hidden border-l-4 border-[#059669] transition-all">
<div className="p-4 flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="commute">commute</span>
<div>
<h3 className="font-bold text-on-surface">Commute Emissions</h3>
<p className="text-[10px] data-text text-slate-500">LAST UPDATED: 2023-10-24</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-400" data-icon="expand_more">expand_more</span>
</div>
<div className="px-4 pb-4 space-y-4">
<div className="bg-surface-container-low p-3 rounded-xl">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium">Survey Completion</span>
<span className="data-text text-xs font-bold text-primary">67%</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[67%] rounded-full"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 bg-surface-container-low rounded-xl">
<span className="text-[10px] data-text text-slate-500 uppercase">Aggregated</span>
<div className="data-text text-lg font-bold">124.5 <span className="text-[10px]">tCO2e</span></div>
</div>
<div className="p-3 bg-surface-container-low rounded-xl flex flex-col justify-center items-center text-primary cursor-pointer hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="person_add">person_add</span>
<span className="text-[10px] font-bold mt-1">Invite more users</span>
</div>
</div>
{/*  Stacked Bar Chart  */}
<div className="space-y-2">
<span className="text-[10px] data-text text-slate-500 uppercase">Transport Mode Split</span>
<div className="flex h-6 w-full rounded-lg overflow-hidden">
<div className="bg-primary w-[45%] flex items-center justify-center text-[10px] text-white font-bold">Car</div>
<div className="bg-primary-container w-[30%] flex items-center justify-center text-[10px] text-white font-bold">Bus</div>
<div className="bg-inverse-primary w-[25%] flex items-center justify-center text-[10px] text-on-surface font-bold">Rail</div>
</div>
</div>
</div>
</section>
{/*  2. Canteen & Catering  */}
<section className="bg-surface-container-lowest rounded-xl overflow-hidden border-l-4 border-[#7C3AED]">
<div className="p-4 flex items-center justify-between bg-surface-container-low">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#7C3AED]" data-icon="restaurant">restaurant</span>
<div>
<h3 className="font-bold text-on-surface">Canteen & Catering</h3>
<p className="text-[10px] data-text text-slate-500">LIVE COMPUTATION</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-400" data-icon="expand_less">expand_less</span>
</div>
<div className="p-4 space-y-5">
<div className="space-y-3">
<div className="flex flex-col gap-1">
<label className="text-[10px] data-text text-slate-500 uppercase">LPG Cylinders (19kg)</label>
<input className="data-text w-full bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-[#7C3AED] py-3 px-4" type="number" value="12" />
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] data-text text-slate-500 uppercase">Generator Diesel (Liters)</label>
<input className="data-text w-full bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-[#7C3AED] py-3 px-4" type="number" value="450" />
</div>
</div>
<div className="bg-[#7C3AED]/10 p-4 rounded-xl flex justify-between items-center border border-[#7C3AED]/20">
<div className="text-[10px] data-text text-[#7C3AED] font-bold">ESTIMATED IMPACT</div>
<div className="data-text text-2xl font-bold text-[#7C3AED]">3.42 <span className="text-sm">tCO2e</span></div>
</div>
</div>
</section>
{/*  3. Business Travel  */}
<section className="bg-surface-container-lowest rounded-xl overflow-hidden border-l-4 border-[#D97706]">
<div className="p-4 flex items-center justify-between bg-surface-container-low">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#D97706]" data-icon="flight_takeoff">flight_takeoff</span>
<div>
<h3 className="font-bold text-on-surface">Business Travel</h3>
<p className="text-[10px] data-text text-slate-500">FY 2023 LOGS</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-400" data-icon="expand_less">expand_less</span>
</div>
<div className="p-4 space-y-4">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-highest">
<th className="p-2 text-[10px] data-text text-on-surface uppercase">Dest</th>
<th className="p-2 text-[10px] data-text text-on-surface uppercase">Mode</th>
<th className="p-2 text-[10px] data-text text-on-surface uppercase text-right">CO2e</th>
</tr>
</thead>
<tbody className="data-text text-[12px]">
<tr className="border-b border-surface-container-high">
<td className="p-2 font-medium">NYC</td>
<td className="p-2 flex items-center gap-1"><span className="material-symbols-outlined text-sm" data-icon="flight">flight</span> Air</td>
<td className="p-2 text-right font-bold">1.24</td>
</tr>
<tr className="border-b border-surface-container-high">
<td className="p-2 font-medium">LON</td>
<td className="p-2 flex items-center gap-1"><span className="material-symbols-outlined text-sm" data-icon="flight">flight</span> Air</td>
<td className="p-2 text-right font-bold">0.86</td>
</tr>
<tr>
<td className="p-2 font-medium">BER</td>
<td className="p-2 flex items-center gap-1"><span className="material-symbols-outlined text-sm" data-icon="train">train</span> Rail</td>
<td className="p-2 text-right font-bold">0.02</td>
</tr>
</tbody>
</table>
</div>
<button className="w-full py-3 rounded-xl border border-dashed border-[#D97706] text-[#D97706] font-bold flex items-center justify-center gap-2 hover:bg-[#D97706]/5 transition-colors">
<span className="material-symbols-outlined" data-icon="add">add</span>
                        Add Trip
                    </button>
</div>
</section>
{/*  4. Procurement (Coming Soon)  */}
<section className="bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden border-l-4 border-slate-300 opacity-60">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400" data-icon="shopping_cart">shopping_cart</span>
<div className="flex items-center gap-2">
<h3 className="font-bold text-slate-500">Procurement</h3>
<span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-[10px] data-text font-bold">PHASE 2</span>
</div>
</div>
<div className="text-[10px] data-text text-slate-400 uppercase font-bold tracking-widest">Coming Soon</div>
</div>
</section>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-4 pb-safe bg-white/80 backdrop-blur-xl dark:bg-[#121c27]/80 border-t border-[#dfe9f7] dark:border-slate-800">
<a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:text-[#059669] transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="data-text text-[10px] uppercase tracking-widest mt-1">Overview</span>
</a>
<a className="flex flex-col items-center justify-center text-[#059669] dark:text-[#10b981] relative after:content-[''] after:absolute after:bottom-[-8px] after:w-8 after:h-1 after:bg-[#059669] after:rounded-t-full" href="#">
<span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span className="data-text text-[10px] uppercase tracking-widest mt-1">Scope 3</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:text-[#059669] transition-all" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="data-text text-[10px] uppercase tracking-widest mt-1">Reports</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:text-[#059669] transition-all" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="data-text text-[10px] uppercase tracking-widest mt-1">Settings</span>
</a>
</nav>

    </>
  );
}
