'use client';

export default function ReportsPage() {
  const reports = [
    {
      id: "REP-CCTS-Q3",
      title: "CCTS 2023 Compliance",
      desc: "Scope 2/3 GHG accounting formatted to Central Electricity Authority guidelines.",
      type: "CarbonLens",
      date: "Oct 24, 2026",
      color: "emerald"
    },
    {
      id: "REP-EPR-BATT",
      title: "EPR Battery Audit",
      desc: "E-Waste logs. Formatted for Central Pollution Control Board (CPCB) upload.",
      type: "WasteAI",
      date: "Oct 22, 2026",
      color: "violet"
    },
    {
      id: "REP-EPR-PLAS",
      title: "EPR Plastic Audit",
      desc: "Plastic waste logs. Formatted for Central Pollution Control Board (CPCB) upload.",
      type: "WasteAI",
      date: "Oct 22, 2026",
      color: "violet"
    },
    {
      id: "REP-NAAC-7.1",
      title: "NAAC Criterion 7.1",
      desc: "Compiled summary of institutional values and social responsibilities.",
      type: "Platform",
      date: "Sep 30, 2026",
      color: "ink"
    },
    {
      id: "REP-ENG-LEAK",
      title: "Thermal Leakage Report",
      desc: "Identified vampire loads and HVAC inefficiencies.",
      type: "EnergyRadar",
      date: "Oct 15, 2026",
      color: "amber"
    },
    {
      id: "REP-ANNUAL",
      title: "Annual Sustainability Report",
      desc: "Comprehensive public-facing document for campus leadership and stakeholders.",
      type: "Platform",
      date: "Dec 31, 2025",
      color: "ink"
    }
  ];

  return (
    <div className="reports-page p-6">
      <div className="dashboard-header mb-8">
        <h1 className="text-display-xl text-ink">Regulatory Reports</h1>
        <p className="text-body-md text-slate-700">Auto-generated cryptographic ledgers for compliance.</p>
        
        <div className="flex gap-4 mt-6">
          <div className="search-bar border rounded-md px-4 py-2 flex items-center bg-white flex-1 max-w-md">
            <span className="material-symbols-outlined text-mist mr-2">search</span>
            <input type="text" placeholder="Search report ID..." className="outline-none w-full" />
          </div>
          <select className="border rounded-md px-4 py-2 bg-white outline-none">
            <option>All Modules</option>
            <option>CarbonLens</option>
            <option>WasteAI</option>
            <option>EnergyRadar</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div key={report.id} className={`card flex flex-col ${report.color === 'ink' ? 'border-gray-300' : ''}`} style={report.color !== 'ink' ? {borderLeft: `4px solid var(--color-${report.color === 'emerald' ? 'emerald-600' : report.color === 'amber' ? 'warning' : report.color})`} : {}}>
             <div className="flex justify-between items-start mb-4">
               <div>
                 <span className="font-mono text-xs text-mist bg-cloud-100 px-2 py-1 rounded">{report.id}</span>
               </div>
               <span className={`text-xs font-bold uppercase tracking-widest ${report.color === 'ink' ? 'text-slate-700' : `text-${report.color}`}`}>{report.type}</span>
             </div>
             
             <h3 className="text-heading-sm mb-2 text-ink">{report.title}</h3>
             <p className="text-body-sm text-slate-700 mb-6 flex-1">{report.desc}</p>
             
             <div className="flex justify-between items-center pt-4 border-t border-gray-100">
               <span className="text-caption font-mono text-mist">GEN: {report.date}</span>
               <div className="flex gap-2">
                 <button className="text-mist hover:text-ink transition"><span className="material-symbols-outlined text-xl">visibility</span></button>
                 <button className="text-mist hover:text-ink transition"><span className="material-symbols-outlined text-xl">download</span></button>
               </div>
             </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-cloud-100 p-6 rounded-lg text-center max-w-2xl mx-auto">
         <span className="material-symbols-outlined text-mist text-3xl mb-2">lock</span>
         <h4 className="text-heading-sm">Sovereign Data Guarantee</h4>
         <p className="text-sm text-slate-600 mt-2">All reports are hashed to prevent tampering. GreenPulse Campus cannot view or alter your source utility data.</p>
      </div>
    </div>
  );
}
