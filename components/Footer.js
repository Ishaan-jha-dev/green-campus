import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="col logo-col">
          <div className="logo-container">
            <div className="logo-dot"></div>
            <span className="logo-text">GenShakti Ecosystem</span>
          </div>
          <p className="tagline text-mist text-body-sm mt-4">
            Making Indian campuses measurable. Built for compliance, designed for impact, driven by data.
          </p>
        </div>
        
        <div className="col links-col">
          <h4 className="text-white text-heading-sm mb-4">Platform</h4>
          <Link href="/dashboard" className="footer-link">Dashboard</Link>
          <Link href="/dashboard/carbon" className="footer-link">CarbonLens</Link>
          <Link href="/dashboard/waste" className="footer-link">WasteAI</Link>
          <Link href="/dashboard/energy" className="footer-link">EnergyRadar</Link>
        </div>
        
        <div className="col action-col">
          <Link href="/onboard" className="btn-secondary w-full text-center">Campus Login</Link>
          <a href="#" className="github-link">
            <span className="material-symbols-outlined">code</span> View on GitHub
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container flex justify-between items-center text-caption text-mist">
          <span>© 2026 GenShakti Ecosystem · Privacy Policy</span>
          <span>SYSTEM_STATUS: NOMINAL</span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--color-ink);
          color: var(--color-white);
          padding-top: var(--space-12);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-10);
          padding: 0 var(--space-6) var(--space-10);
        }
        
        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: 2fr 1fr 1fr;
          }
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        
        .logo-dot {
          width: 12px;
          height: 12px;
          background-color: var(--color-emerald-600);
          border-radius: 50%;
        }
        
        .logo-text {
          font-size: 20px;
          font-weight: 700;
        }
        
        .mt-4 { margin-top: var(--space-4); }
        .mb-4 { margin-bottom: var(--space-4); }
        
        .footer-link {
          display: block;
          color: var(--color-mist-500);
          margin-bottom: var(--space-3);
          transition: color 150ms ease;
        }
        .footer-link:hover {
          color: var(--color-emerald-600);
        }
        
        .github-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          color: var(--color-mist-500);
          margin-top: var(--space-4);
          transition: color 150ms ease;
        }
        .github-link:hover {
          color: var(--color-white);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: var(--space-6);
        }
      `}</style>
    </footer>
  );
}
