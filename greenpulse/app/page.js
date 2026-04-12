'use client';

import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="landing-page">
      <TopNavBar />
      
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="eyebrow text-mint text-label">TRACK 4 — SOCIAL IMPACT</span>
            <h1 className="text-display-2xl mt-4 mb-4 text-white">
              Your campus has a carbon problem. Now you can measure it.
            </h1>
            <p className="text-body-lg text-mist mb-8">
              Free. Browser-based. Built for India's 2026 sustainability mandates.
            </p>
            
            <div className="hero-actions">
              <Link href="/onboard" className="btn-primary" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                Register Your Campus — Free
              </Link>
              <Link href="/dashboard" className="btn-ghost white-text text-mint">
                See a Live Demo →
              </Link>
            </div>
            <p className="text-caption text-mist mt-4">
              No hardware. No app download. No credit card.
            </p>
          </div>
          
          <div className="hero-visual">
            <div className="live-card">
              <div className="live-card-header">
                <div className="badge-pulse">
                  <span className="pulse-dot"></span>
                  <span className="text-label text-mint">Live Demo Campus</span>
                </div>
              </div>
              <div className="live-stats">
                <div className="stat-mini">
                  <p className="text-caption text-mist">Monthly CO2e</p>
                  <p className="text-data-lg text-ink">12.4 t</p>
                </div>
                <div className="stat-mini">
                  <p className="text-caption text-mist">Items Scanned</p>
                  <p className="text-data-lg text-ink">342</p>
                </div>
                <div className="stat-mini">
                  <p className="text-caption text-mist">Energy Saved</p>
                  <p className="text-data-lg text-ink">8.5%</p>
                </div>
              </div>
              <div className="demo-chart-container">
                {mounted && (
                  <svg viewBox="0 0 300 80" className="demo-chart" preserveAspectRatio="none">
                    <path d="M0,80 L0,60 Q30,50 60,65 T120,45 T180,55 T240,30 T300,10 L300,80 Z" fill="rgba(5, 150, 105, 0.1)"></path>
                    <path d="M0,60 Q30,50 60,65 T120,45 T180,55 T240,30 T300,10" fill="none" stroke="var(--color-emerald-600)" strokeWidth="2"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="container stats-container">
          <div className="stat-item">
            <p className="text-data-xl text-white">43,796</p>
            <p className="text-label text-mint mt-2">colleges in India</p>
          </div>
          <div className="stat-item">
            <p className="text-data-xl text-white">65%</p>
            <p className="text-label text-mint mt-2">waste goes unsegregated</p>
          </div>
          <div className="stat-item">
            <p className="text-data-xl text-white">5.83 Cr</p>
            <p className="text-label text-mint mt-2">smart meters installed</p>
          </div>
          <div className="stat-item">
            <p className="text-data-xl text-white">₹0</p>
            <p className="text-label text-mint mt-2">affordable campus tools exist</p>
          </div>
        </div>
      </section>

      {/* MODULE CARDS */}
      <section className="modules-section">
        <div className="container">
          <div className="modules-grid">
            <div className="module-feature-card carbon">
              <span className="material-symbols-outlined icon text-emerald">energy_savings_leaf</span>
              <h3 className="text-heading-md text-ink mt-4 mb-4">CarbonLens</h3>
              <p className="text-body-md text-slate-700 mb-6">
                Track Scope 2 + 3 emissions. Auto-calculate from your electricity bill. Aligned with India's CCTS 2023 framework.
              </p>
              <Link href="/dashboard/carbon" className="text-emerald text-heading-sm">Explore CarbonLens →</Link>
            </div>
            
            <div className="module-feature-card waste">
              <span className="material-symbols-outlined icon text-violet">camera</span>
              <h3 className="text-heading-md text-ink mt-4 mb-4">WasteAI</h3>
              <p className="text-body-md text-slate-700 mb-6">
                Point your phone camera at any waste item. AI classifies in under 2 seconds. No app install. Generates EPR audit logs automatically.
              </p>
              <Link href="/dashboard/waste" className="text-violet text-heading-sm">Explore WasteAI →</Link>
            </div>
            
            <div className="module-feature-card energy">
              <span className="material-symbols-outlined icon text-amber">bolt</span>
              <h3 className="text-heading-md text-ink mt-4 mb-4">EnergyRadar</h3>
              <p className="text-body-md text-slate-700 mb-6">
                Upload your smart meter CSV. Detect phantom loads and off-hour spikes. Get plain-language savings recommendations in INR.
              </p>
              <Link href="/dashboard/energy" className="text-amber text-heading-sm">Explore EnergyRadar →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="container">
          <div className="steps">
            <div className="step-row">
              <div className="step-text">
                <div className="step-watermark">01</div>
                <h2 className="text-display-lg text-ink mb-4">Register your campus in 30 seconds</h2>
                <p className="text-body-lg text-slate-700">
                  Enter your institution, state, and electricity provider. We assign your state grid emission factor automatically.
                </p>
              </div>
              <div className="step-visual visual-bg-1"></div>
            </div>
            
            <div className="step-row reverse">
              <div className="step-text">
                <div className="step-watermark">02</div>
                <h2 className="text-display-lg text-ink mb-4">Scan waste with your phone camera</h2>
                <p className="text-body-lg text-slate-700">
                  Open GreenPulse in any mobile browser. Point at waste. Get instant classification and bin guidance.
                </p>
              </div>
              <div className="step-visual visual-bg-2"></div>
            </div>
            
            <div className="step-row">
              <div className="step-text">
                <div className="step-watermark">03</div>
                <h2 className="text-display-lg text-ink mb-4">Download compliance reports in one click</h2>
                <p className="text-body-lg text-slate-700">
                  CCTS-aligned carbon reports. EPR audit logs. NAAC Criterion 7.1 summaries. All auto-generated.
                </p>
              </div>
              <div className="step-visual visual-bg-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY TRUST BAR */}
      <section className="trust-bar">
        <div className="container text-center">
          <h2 className="text-heading-md text-white mb-6">Aligned with India's 2026 mandates</h2>
          <div className="trust-badges">
            <div className="trust-pill text-mint">CCTS 2023</div>
            <div className="trust-pill text-mint">EPR Rules 2024</div>
            <div className="trust-pill text-mint">RDSS Smart Meters</div>
            <div className="trust-pill text-mint">NAAC Criterion 7.1</div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .hero-section {
          background-color: var(--color-ink);
          min-height: calc(100vh - 64px);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: var(--space-24) var(--space-6);
        }
        
        .hero-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-10);
          position: relative;
          z-index: 10;
        }
        
        @media (min-width: 1024px) {
          .hero-container {
            flex-direction: row;
            align-items: center;
          }
          .hero-content {
            flex: 0 0 55%;
            padding-right: var(--space-8);
          }
          .hero-visual {
            flex: 0 0 45%;
          }
        }
        
        .eyebrow {
          display: inline-block;
          letter-spacing: 0.1em;
        }
        
        .mt-4 { margin-top: var(--space-4); }
        .mb-4 { margin-bottom: var(--space-4); }
        .mb-8 { margin-bottom: var(--space-8); }
        
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          align-items: center;
        }
        
        .live-card {
          background-color: var(--color-white);
          border-radius: var(--radius-2xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-lg);
          transition: transform 300ms ease;
        }
        .live-card:hover {
          transform: translateY(-5px);
        }
        
        .badge-pulse {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background-color: rgba(5, 150, 105, 0.1);
          padding: 6px var(--space-3);
          border-radius: var(--radius-full);
          border: 1px solid rgba(5, 150, 105, 0.2);
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-emerald-600);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(5, 150, 105, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(5, 150, 105, 0); }
          100% { box-shadow: 0 0 0 0 rgba(5, 150, 105, 0); }
        }
        
        .live-stats {
          display: flex;
          justify-content: space-between;
          margin-top: var(--space-6);
          margin-bottom: var(--space-6);
          gap: var(--space-4);
        }
        
        .demo-chart-container {
          height: 120px;
          width: 100%;
          background-color: var(--color-cloud-100);
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
        }
        
        .demo-chart {
          width: 100%;
          height: 100%;
        }

        .stats-bar {
          background-color: var(--color-emerald-800);
          padding: var(--space-8) var(--space-6);
          position: relative;
          z-index: 20;
        }
        
        .stats-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        
        @media (min-width: 640px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .stats-container {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .mt-2 { margin-top: var(--space-2); }
        
        .modules-section {
          background-color: var(--color-cloud-100);
          padding: var(--space-16) var(--space-6);
        }
        
        .modules-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        
        @media (min-width: 768px) {
          .modules-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .module-feature-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          box-shadow: var(--shadow-sm);
          border-top: 4px solid;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        
        .module-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        
        .module-feature-card.carbon { border-color: var(--color-emerald-600); }
        .module-feature-card.waste { border-color: var(--color-waste); }
        .module-feature-card.energy { border-color: var(--color-warning); }
        
        .icon {
          font-size: 32px;
          display: block;
        }
        
        .mb-6 { margin-bottom: var(--space-6); }
        
        .how-it-works {
          background-color: var(--color-white);
          padding: 80px var(--space-6);
        }
        
        .step-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-10);
          margin-bottom: 80px;
        }
        
        .step-row:last-child {
          margin-bottom: 0;
        }
        
        @media (min-width: 768px) {
          .step-row {
            flex-direction: row;
          }
          .step-row.reverse {
            flex-direction: row-reverse;
          }
          .step-text {
            flex: 1;
            padding: 0 var(--space-8);
          }
          .step-visual {
            flex: 1;
          }
        }
        
        .step-text {
          position: relative;
        }
        
        .step-watermark {
          position: absolute;
          top: -40px;
          left: -20px;
          font-family: var(--font-mono);
          font-size: 96px;
          color: var(--color-ink);
          opacity: 0.06;
          z-index: 0;
          pointer-events: none;
        }
        
        .step-visual {
          width: 100%;
          height: 300px;
          background-color: var(--color-cloud-100);
          border-radius: var(--radius-xl);
        }
        
        .trust-bar {
          background-color: var(--color-ink);
          padding: 40px var(--space-6);
        }
        
        .trust-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-4);
        }
        
        .trust-pill {
          background-color: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 8px var(--space-4);
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
