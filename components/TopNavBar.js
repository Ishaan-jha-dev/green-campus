import Link from 'next/link';

export default function TopNavBar() {
  return (
    <header className="header-nav">
      <div className="logo-container">
        <div className="logo-dot"></div>
        <span className="logo-text">GreenPulse Campus</span>
      </div>
      <nav className="primary-nav">
        <Link href="/">Home</Link>
        <Link href="/onboard">Onboarding</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
      <div className="nav-right">
        <Link href="/onboard" className="btn-ghost white-text">Sign In</Link>
        <Link href="/onboard" className="btn-primary">Get Started</Link>
      </div>

      <style jsx>{`
        .header-nav {
          height: 64px;
          background-color: var(--color-ink);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--space-6);
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255,255,255,0.08);
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
          color: var(--color-white);
          font-size: 17px;
          font-weight: 600;
          font-family: var(--font-display);
        }
        
        .primary-nav {
          display: none;
        }
        
        @media (min-width: 768px) {
          .primary-nav {
            display: flex;
            gap: var(--space-8);
            color: var(--color-white);
            font-size: 15px;
            font-weight: 500;
          }
          .primary-nav a {
            opacity: 0.8;
            transition: opacity 150ms ease;
          }
          .primary-nav a:hover {
            opacity: 1;
          }
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }
      `}</style>
    </header>
  );
}
