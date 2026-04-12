'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="dashboard-content p-6">
      <div className="dashboard-header mb-6">
        <h1 className="text-display-xl text-ink">Dashboard</h1>
        <p className="text-body-md text-slate-700">Welcome back, Nakul. Your campus is performing well.</p>
      </div>

      {/* TOP SUMMARY STRIP */}
      <div className="summary-strip mb-8">
        <div className="gauge-container">
          <div className="gauge">
            <svg viewBox="0 0 100 50" className="gauge-svg">
              <path d="M 10,50 A 40,40 0 0,1 90,50" fill="none" strokeWidth="8" stroke="#E5E7EB" strokeLinecap="round" />
              <path d="M 10,50 A 40,40 0 0,1 70,15" fill="none" strokeWidth="8" stroke="url(#emerald-gradient)" strokeLinecap="round" />
              <defs>
                <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>
            </svg>
            <div className="gauge-value">
              <span className="text-display-lg text-white font-mono">B+</span>
              <span className="text-label text-mint mt-1">PERFORMER</span>
            </div>
          </div>
        </div>
        
        <div className="stat-blocks">
          <div className="stat-block">
            <span className="text-label text-mint">CO2E FOOTPRINT</span>
            <div className="stat-value text-white font-mono text-display-lg">12.4<span className="text-body-md ml-1">t</span></div>
            <span className="badge badge-down">↓ 4.2%</span>
          </div>
          <div className="stat-block">
            <span className="text-label text-mint">WASTE MANAGED</span>
            <div className="stat-value text-white font-mono text-display-lg">847</div>
            <span className="text-caption text-mint">92% Recycled</span>
          </div>
          <div className="stat-block">
            <span className="text-label text-mint">ANOMALIES</span>
            <div className="stat-value text-white font-mono text-display-lg">3</div>
            <span className="text-caption text-rose">Requires Action</span>
          </div>
          <div className="stat-block">
            <span className="text-label text-mint">EPR COMPLIANCE</span>
            <div className="stat-value text-white font-mono text-display-lg">78%</div>
            <span className="text-caption text-mint">+12 Pts</span>
          </div>
        </div>
      </div>

      {/* MODULE PANELS */}
      <div className="module-panels mb-8">
        {/* CarbonLens */}
        <div className="module-panel carbon">
          <div className="panel-header">
            <div className="flex items-center gap-2">
              <div className="panel-dot bg-emerald"></div>
              <h3 className="text-heading-sm">CarbonLens</h3>
            </div>
            <span className="text-caption text-mist">Updated 2m ago</span>
          </div>
          <p className="text-body-sm text-slate-700 mb-4">Real-time emission monitoring</p>
          
          <div className="mini-chart mb-4 bg-emerald-50 rounded-md">
            {/* Mock Chart */}
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full p-2">
               <rect x="5" y="20" width="10" height="30" fill="#6EE7B7" rx="2" />
               <rect x="20" y="10" width="10" height="40" fill="#6EE7B7" rx="2" />
               <rect x="35" y="15" width="10" height="35" fill="#6EE7B7" rx="2" />
               <rect x="50" y="25" width="10" height="25" fill="#6EE7B7" rx="2" />
               <rect x="65" y="5" width="10" height="45" fill="#6EE7B7" rx="2" />
               <rect x="80" y="12" width="10" height="38" fill="#6EE7B7" rx="2" />
            </svg>
          </div>
          
          <Link href="/dashboard/carbon" className="text-emerald text-body-sm font-semibold flex items-center justify-between mt-auto">
            View Emissions Detail <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* WasteAI */}
        <div className="module-panel waste">
          <div className="panel-header">
            <div className="flex items-center gap-2">
              <div className="panel-dot bg-violet"></div>
              <h3 className="text-heading-sm">WasteAI</h3>
            </div>
            <span className="text-caption text-mist">Updated 14m ago</span>
          </div>
          <p className="text-body-sm text-slate-700 mb-4">Smart sorting & lifecycle ledger</p>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="donut-chart">
              <svg viewBox="0 0 36 36" className="circular-chart violet">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="donut-text font-mono">75%</div>
            </div>
            <div className="donut-legend">
              <div className="legend-item"><span className="legend-dot bg-violet"></span> Recyclable</div>
              <div className="legend-item"><span className="legend-dot bg-mist"></span> Landfill</div>
              <div className="text-data-md mt-2 font-mono">635 kg <span className="text-caption text-mist font-sans">TODAY</span></div>
            </div>
          </div>
          
          <Link href="/dashboard/waste" className="text-violet text-body-sm font-semibold flex items-center justify-between mt-auto">
            Audit Waste Stream <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* EnergyRadar */}
        <div className="module-panel energy">
          <div className="panel-header">
            <div className="flex items-center gap-2">
              <div className="panel-dot bg-amber"></div>
              <h3 className="text-heading-sm">EnergyRadar</h3>
            </div>
            <span className="text-caption text-mist">Live Feed</span>
          </div>
          <p className="text-body-sm text-slate-700 mb-4">Power & Thermal network</p>
          
          <div className="heatmap-mock mb-4">
            <div className="heatmap-row">
              <div className="heat-cell bg-amber-light"></div>
              <div className="heat-cell bg-amber-light"></div>
              <div className="heat-cell bg-amber"></div>
              <div className="heat-cell bg-amber"></div>
              <div className="heat-cell bg-rose-light"></div>
            </div>
            <div className="heatmap-row">
              <div className="heat-cell bg-amber"></div>
              <div className="heat-cell bg-amber font-bold text-white">!</div>
              <div className="heat-cell bg-amber"></div>
              <div className="heat-cell bg-amber-light"></div>
              <div className="heat-cell bg-white border"></div>
            </div>
            <div className="alert-message mt-2 bg-rose-light text-rose p-2 text-xs rounded-md flex items-center gap-1">
              <span className="material-symbols-outlined" style={{fontSize: '14px'}}>warning</span>
              CRITICAL: Transformer B-12 Overheating
            </div>
          </div>
          
          <Link href="/dashboard/energy" className="text-amber text-body-sm font-semibold flex items-center justify-between mt-auto">
            Resolve Alerts <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="activity-feed bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-heading-sm mb-4">Campus Activity Ledger</h3>
        <p className="text-body-sm text-mist mb-6">Immutable record of environmental events</p>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon bg-emerald-100 text-emerald">
              <span className="material-symbols-outlined text-sm">energy_savings_leaf</span>
            </div>
            <div className="timeline-content">
              <p className="text-body-md font-medium">Carbon Offset Threshold Reached</p>
              <p className="text-caption text-mist uppercase font-mono">CarbonLens • Central Block</p>
            </div>
            <div className="timeline-meta">
              <p className="text-body-sm font-mono text-ink">09:42</p>
              <p className="text-caption text-emerald">+0.4 tCO2e</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon bg-violet-light text-violet">
              <span className="material-symbols-outlined text-sm">recycling</span>
            </div>
            <div className="timeline-content">
              <p className="text-body-md font-medium">Batch 402 EPR Documentation Certified</p>
              <p className="text-caption text-mist uppercase font-mono">WasteAI • Logistics Hub</p>
            </div>
            <div className="timeline-meta">
              <p className="text-body-sm font-mono text-ink">08:15</p>
              <p className="text-caption text-violet">CERTIFIED</p>
            </div>
          </div>
          
          <div className="timeline-item border-none">
            <div className="timeline-icon bg-amber-light text-amber">
              <span className="material-symbols-outlined text-sm">bolt</span>
            </div>
            <div className="timeline-content">
              <p className="text-body-md font-medium">Peak Load Threshold Warning</p>
              <p className="text-caption text-mist uppercase font-mono">EnergyRadar • South Wing</p>
            </div>
            <div className="timeline-meta">
              <p className="text-body-sm font-mono text-ink">07:55</p>
              <p className="text-caption text-amber">114% CAP</p>
            </div>
          </div>
        </div>
        
        <button className="btn-ghost w-full mt-4 text-center text-label">VIEW FULL LEDGER</button>
      </div>

      <style jsx>{`
        .p-6 { padding: var(--space-6); }
        .mb-4 { margin-bottom: var(--space-4); }
        .mb-6 { margin-bottom: var(--space-6); }
        .mb-8 { margin-bottom: var(--space-8); }
        .mt-1 { margin-top: var(--space-1); }
        .mt-2 { margin-top: var(--space-2); }
        .mt-4 { margin-top: var(--space-4); }
        .mt-auto { margin-top: auto; }
        .ml-1 { margin-left: var(--space-1); }
        
        .summary-strip {
          background-color: var(--color-emerald-800);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }
        
        @media (min-width: 1024px) {
          .summary-strip {
            flex-direction: row;
            align-items: stretch;
          }
        }
        
        .gauge-container {
          flex: 0 0 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .gauge {
          position: relative;
          width: 180px;
          height: 90px;
        }
        
        .gauge-svg {
          width: 100%;
          height: 100%;
        }
        
        .gauge-value {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .stat-blocks {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          padding-left: var(--space-6);
        }
        
        @media (min-width: 768px) {
          .stat-blocks {
            grid-template-columns: repeat(4, 1fr);
            border-left: 1px solid rgba(255,255,255,0.1);
          }
        }
        
        .stat-block {
          display: flex;
          flex-direction: column;
        }
        
        .module-panels {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        
        @media (min-width: 1024px) {
          .module-panels {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .module-panel {
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }
        
        .module-panel.carbon { border-left: 4px solid var(--color-emerald-600); }
        .module-panel.waste { border-left: 4px solid var(--color-waste); }
        .module-panel.energy { border-left: 4px solid var(--color-warning); }
        
        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-2);
        }
        
        .panel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .bg-emerald { background-color: var(--color-emerald-600); border-color: var(--color-emerald-600); }
        .bg-violet { background-color: var(--color-waste); border-color: var(--color-waste); }
        .bg-amber { background-color: var(--color-warning); border-color: var(--color-warning); }
        .bg-mist { background-color: var(--color-mist-500); }
        
        .bg-emerald-50 { background-color: #ECFDF5; }
        .bg-amber-light { background-color: var(--color-amber-light); }
        .bg-rose-light { background-color: var(--color-rose-light); }
        .bg-violet-light { background-color: var(--color-violet-light); }
        .bg-emerald-100 { background-color: var(--color-emerald-light); }
        
        .mini-chart { height: 120px; }
        
        .donut-chart {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .circular-chart {
          display: block;
          margin: 0 auto;
          max-width: 80%;
          max-height: 250px;
        }
        
        .circle-bg {
          fill: none;
          stroke: #F3F4F6;
          stroke-width: 3.8;
        }
        
        .circle {
          fill: none;
          stroke-width: 2.8;
          stroke-linecap: round;
        }
        
        .circular-chart.violet .circle {
          stroke: var(--color-waste);
        }
        
        .donut-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 14px;
          font-weight: bold;
        }
        
        .donut-legend {
          flex: 1;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 12px;
          color: var(--color-slate-700);
          margin-bottom: 2px;
        }
        
        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .heatmap-mock {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .heatmap-row {
          display: flex;
          gap: 4px;
        }
        
        .heat-cell {
          height: 24px;
          flex: 1;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        
        .border { border: 1px solid #E5E7EB; }
        
        .timeline-item {
          display: flex;
          padding: var(--space-4) 0;
          border-bottom: 1px solid #E5E7EB;
          gap: var(--space-4);
        }
        
        .border-none { border-bottom: none; }
        
        .timeline-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .timeline-content {
          flex: 1;
        }
        
        .timeline-meta {
          text-align: right;
        }
      `}</style>
    </div>
  );
}
