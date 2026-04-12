'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { icon: 'home', label: 'Dashboard', path: '/dashboard' },
    { icon: 'energy_savings_leaf', label: 'CarbonLens', path: '/dashboard/carbon' },
    { icon: 'camera', label: 'WasteAI', path: '/dashboard/waste' },
    { icon: 'bolt', label: 'EnergyRadar', path: '/dashboard/energy' },
    { icon: 'description', label: 'Reports', path: '/dashboard/reports' },
    { icon: 'emoji_events', label: 'Leaderboard', path: '/dashboard/leaderboard' },
  ];

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR (Desktop) */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="logo-container">
            <div className="logo-dot"></div>
            <span className="logo-text">GreenPulse Campus</span>
          </div>
          
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`nav-item ${pathname === item.path ? 'active' : ''}`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            
            <div className="nav-divider"></div>
            
            <Link 
              href="/dashboard/settings"
              className={`nav-item ${pathname === '/dashboard/settings' ? 'active' : ''}`}
            >
              <span className="material-symbols-outlined">settings</span>
              Settings
            </Link>
          </nav>
        </div>
        
        <div className="sidebar-bottom">
          <div className="user-profile">
            <div className="avatar">N</div>
            <div className="user-info">
              <span className="user-name">Nakul S.</span>
              <span className="user-role badge badge-neutral">Sust. Officer</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAV */}
      <nav className="mobile-nav">
        {navItems.slice(0, 4).map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`mobile-nav-item ${pathname === item.path ? 'active' : ''}`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="mobile-nav-label">{item.label}</span>
          </Link>
        ))}
        <Link 
          href="/dashboard/settings"
          className={`mobile-nav-item ${pathname === '/dashboard/settings' ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined">person</span>
          <span className="mobile-nav-label">Profile</span>
        </Link>
      </nav>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {children}
        
        {/* MOBILE FAB */}
        <div className="mobile-fab">
          <span className="material-symbols-outlined">add</span>
        </div>
      </main>

      <style jsx>{`
        .dashboard-layout {
          display: flex;
          min-height: 100vh;
          background-color: var(--color-cloud-100);
        }
        
        .sidebar {
          display: none;
          width: 240px;
          background-color: var(--color-ink);
          color: var(--color-white);
          flex-direction: column;
          justify-content: space-between;
          position: sticky;
          top: 0;
          height: 100vh;
        }
        
        @media (min-width: 1024px) {
          .sidebar {
            display: flex;
          }
        }
        
        .sidebar-top {
          padding: var(--space-6);
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-bottom: var(--space-8);
        }
        
        .logo-dot {
          width: 12px;
          height: 12px;
          background-color: var(--color-emerald-600);
          border-radius: 50%;
        }
        
        .logo-text {
          font-weight: 600;
          font-size: 14px;
        }
        
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          height: 40px;
          padding: 0 var(--space-3);
          border-radius: var(--radius-md);
          color: var(--color-mist-500);
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: all 150ms ease;
        }
        
        .nav-item:hover {
          background-color: rgba(255,255,255,0.05);
          color: var(--color-white);
        }
        
        .nav-item.active {
          background-color: rgba(255,255,255,0.08);
          color: var(--color-white);
          border-left: 3px solid var(--color-emerald-600);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }
        
        .nav-divider {
          height: 1px;
          background-color: rgba(255,255,255,0.08);
          margin: var(--space-4) 0;
        }
        
        .sidebar-bottom {
          padding: var(--space-6);
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        
        .user-profile {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }
        
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--color-emerald-600);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        
        .user-info {
          display: flex;
          flex-direction: column;
        }
        
        .user-name {
          font-size: 14px;
          font-weight: 600;
        }
        
        .user-role {
          font-size: 10px;
          margin-top: 2px;
          background-color: rgba(110, 231, 183, 0.2);
          color: var(--color-mint-300);
        }
        
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding-bottom: 80px; /* Space for mobile nav */
          width: 100%;
          overflow-x: hidden;
        }
        
        @media (min-width: 1024px) {
          .main-content {
            padding-bottom: 0;
          }
        }
        
        .mobile-nav {
          display: flex;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background-color: var(--color-white);
          border-top: 1px solid #E5E7EB;
          z-index: 50;
          justify-content: space-around;
          align-items: center;
          padding-bottom: env(safe-area-inset-bottom);
        }
        
        @media (min-width: 1024px) {
          .mobile-nav {
            display: none;
          }
        }
        
        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--color-mist-500);
          text-decoration: none;
        }
        
        .mobile-nav-item.active {
          color: var(--color-emerald-600);
        }
        
        .mobile-nav-item.active .material-symbols-outlined {
          font-variation-settings: 'FILL' 1;
        }
        
        .mobile-nav-label {
          font-size: 10px;
          margin-top: 2px;
          font-weight: 500;
        }
        
        .mobile-fab {
          position: fixed;
          bottom: 80px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--color-emerald-600);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lg);
          z-index: 40;
        }
        
        @media (min-width: 1024px) {
          .mobile-fab {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
