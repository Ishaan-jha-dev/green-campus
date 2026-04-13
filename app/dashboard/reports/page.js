'use client';

export default function ReportsPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8 h-full flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
         <span className="text-2xl text-slate-500">📊</span>
      </div>
      <h1 className="text-3xl font-bold text-white">Analytics Sandbox</h1>
      <p className="text-slate-400 max-w-md">Detailed predictive insight generation is currently being synced with your newly uploaded meter loads. Please check back.</p>
    </div>
  );
}
