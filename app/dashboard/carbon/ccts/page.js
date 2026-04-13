export default function CCTSPage() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#edf4ff] dark:bg-[#121c27] flex items-center justify-between px-6 py-4 w-full shadow-[0_8px_32px_rgba(18,28,39,0.06)] fixed top-0 z-50">
<div className="flex flex-col">
<span className="font-['DM_Sans'] font-bold text-[#059669] text-xl tracking-tight">GenShakti</span>
<nav className="flex items-center gap-1 mt-0.5">
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Dashboard</span>
<span className="material-symbols-outlined text-[10px] text-slate-400">chevron_right</span>
<span className="text-[10px] uppercase tracking-widest text-[#059669] font-bold">CarbonLens</span>
</nav>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img className="w-full h-full object-cover" data-alt="professional male profile portrait with clean lighting and neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_FCrt_W-XnZh78CTcG2C_G1Hes-ZIScVn6BUaSF5Tm1XC5PB7d8wssz5PwaR4b2DDR5D1zvOcPy9zH-h7rlAMsGe3tN1iiAaH5bqFa9e-IehprvKHggyvatqiIO8qc5sGN_d-6AZ9qerVXb4J4SBaHNHIDUdl3e-yJ_RGVi_Q0Og5qYhwiztqoAfyGS3wYn3dQokfvTkbr3w2gvtgbgKXVcrnTp-eiiR6VgJLmNUfktk0GWeZTNrlLQP9EfCQ3VR3hpco9jc8id8k" />
</div>
</header>
<main className="pt-24 px-4 max-w-lg mx-auto">
{/*  Page Title & Module Tabs  */}
<div className="mb-6">
<h1 className="text-2xl font-bold text-on-surface mb-4">CCTS Offset Estimator</h1>
<div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
<button className="whitespace-nowrap px-1 py-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors">Scope 2</button>
<button className="whitespace-nowrap px-1 py-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors">Scope 3</button>
<button className="whitespace-nowrap px-1 py-2 text-sm font-bold text-[#059669] border-b-2 border-[#059669]">CCTS Offset</button>
<button className="whitespace-nowrap px-1 py-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors">History</button>
</div>
</div>
{/*  Stat Summary Row  */}
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-[#059669]">
<p className="text-[10px] font-['JetBrains_Mono'] text-slate-500 uppercase tracking-tighter mb-1">Total CO2e</p>
<p className="text-xl data-font font-bold">12.4 <span className="text-xs font-normal text-slate-400">t</span></p>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-[#059669]">
<p className="text-[10px] font-['JetBrains_Mono'] text-slate-500 uppercase tracking-tighter mb-1">CCCs Needed</p>
<p className="text-xl data-font font-bold">149</p>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-slate-300">
<p className="text-[10px] font-['JetBrains_Mono'] text-slate-500 uppercase tracking-tighter mb-1">Est. Cost</p>
<p className="text-xl data-font font-bold">₹96,850</p>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-primary">
<p className="text-[10px] font-['JetBrains_Mono'] text-slate-500 uppercase tracking-tighter mb-1">vs Last Year</p>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-primary">arrow_downward</span>
<p className="text-xl data-font font-bold text-primary">4.2%</p>
</div>
</div>
</div>
{/*  Main Estimator Card  */}
<div className="bg-surface-container-lowest rounded-xl p-6 mb-6 shadow-sm">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-sm font-bold text-on-surface">Compliance Benchmark</h3>
<p className="text-xs text-slate-500 mt-1">Based on 12.4 tCO2e intensity</p>
</div>
<span className="text-[10px] data-font bg-surface-container-high px-2 py-1 rounded">2024 V.2</span>
</div>
{/*  Comparison Bar  */}
<div className="space-y-6 mb-8">
<div className="relative pt-6">
<div className="flex justify-between text-[10px] data-font uppercase tracking-widest text-slate-400 mb-2">
<span>Min</span>
<span>BEE Benchmark</span>
<span>Max</span>
</div>
<div className="h-4 w-full bg-surface-container-high rounded-full overflow-hidden relative">
{/*  Benchmark Line  */}
<div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-on-surface z-10"></div>
{/*  Actual Value Fill  */}
<div className="h-full bg-[#059669] rounded-full" style={{"width":"72%"}}></div>
</div>
{/*  Marker  */}
<div className="absolute top-10 left-[72%] -translate-x-1/2 flex flex-col items-center">
<div className="w-0.5 h-2 bg-[#059669]"></div>
<span className="text-[10px] data-font font-bold text-[#059669] mt-1">YOUR CAMPUS</span>
</div>
</div>
</div>
{/*  Calculation Box  */}
<div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 mb-6">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-[#059669]">calculate</span>
<span className="text-xs font-bold uppercase tracking-tight">Financial Commitment</span>
</div>
<div className="flex items-baseline justify-between">
<p className="data-font text-sm text-slate-600">149 CCCs × ₹650</p>
<p className="data-font text-xl font-bold text-on-surface">₹96,850<span className="text-[10px] text-slate-400 font-normal ml-1">/year</span></p>
</div>
</div>
{/*  Reduction Scenario Slider  */}
<div className="space-y-4">
<div className="flex justify-between items-center">
<h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">Reduction Scenario</h4>
<span className="data-font text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">15% Reduction</span>
</div>
<div className="px-2">
<input className="w-full h-1.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-[#059669]" max="50" min="0" type="range" value="15" />
</div>
<div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/10">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">savings</span>
<span className="text-xs font-medium">Potential Savings</span>
</div>
<span className="data-font text-sm font-bold text-primary">₹14,527.50</span>
</div>
</div>
<p className="mt-6 text-[10px] text-slate-400 italic leading-relaxed">
                * Indicative pricing based on current carbon market trends in the India CCTS framework. Actual settlement prices may vary at time of trading.
            </p>
</div>
{/*  Call to Action  */}
<button className="w-full bg-[#006948] text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg active:scale-[0.98] transition-transform mb-8">
            RESERVE OFFSET CREDITS
        </button>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-white/80 backdrop-blur-xl border-t border-[#dfe9f7] dark:border-[#1e293b]">
<div className="flex flex-col items-center justify-center text-slate-400 pt-2 transition-all">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-['DM_Sans'] font-bold text-[10px] uppercase tracking-widest mt-1">Overview</span>
</div>
<div className="flex flex-col items-center justify-center text-[#059669] border-t-2 border-[#059669] pt-2 transition-all">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>filter_center_focus</span>
<span className="font-['DM_Sans'] font-bold text-[10px] uppercase tracking-widest mt-1">CarbonLens</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 pt-2 transition-all">
<span className="material-symbols-outlined">delete_outline</span>
<span className="font-['DM_Sans'] font-bold text-[10px] uppercase tracking-widest mt-1">WasteAI</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 pt-2 transition-all">
<span className="material-symbols-outlined">bolt</span>
<span className="font-['DM_Sans'] font-bold text-[10px] uppercase tracking-widest mt-1">EnergyRadar</span>
</div>
</nav>

    </>
  );
}
