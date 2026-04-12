'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [campusName, setCampusName] = useState('');
  const [state, setState] = useState('');
  
  // State for Carbon Card
  const [commuteDist, setCommuteDist] = useState(12);

  const renderStepIndicator = () => (
    <div className="step-indicator">
      <div className={`step-dot ${step >= 1 ? 'active' : ''}`}></div>
      <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
      <div className={`step-dot ${step >= 2 ? 'active' : ''}`}></div>
      <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
      <div className={`step-dot ${step >= 3 ? 'active' : ''}`}></div>
    </div>
  );

  return (
    <div className="onboarding-page">
      <Link href="/" className="back-btn text-mist">
        <span className="material-symbols-outlined">arrow_back</span>
        Return to Home
      </Link>
      
      <div className="onboarding-container">
        {renderStepIndicator()}

        {/* STEP 1: Registration */}
        {step === 1 && (
          <div className="step-content">
            <h1 className="text-display-lg text-ink mb-2">Register your campus</h1>
            <p className="text-body-md text-mist mb-8">Takes 30 seconds. Free forever.</p>
            
            <div className="form-group mb-4">
              <label className="text-heading-sm mb-2 block">Campus Name</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. University of Lucknow"
                value={campusName}
                onChange={e => setCampusName(e.target.value)}
              />
            </div>
            
            <div className="form-group mb-4">
              <label className="text-heading-sm mb-2 block">City</label>
              <input type="text" className="input-field" placeholder="City" />
            </div>
            
            <div className="form-group mb-6">
              <label className="text-heading-sm mb-2 block">State</label>
              <select 
                className="input-field"
                value={state}
                onChange={e => setState(e.target.value)}
              >
                <option value="">Select State</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="KA">Karnataka</option>
              </select>
            </div>
            
            {state === 'UP' && (
              <div className="magic-callout mb-6">
                <span className="material-symbols-outlined icon text-emerald">auto_awesome</span>
                <p>Grid Emission Factor: 0.82 kgCO2e/kWh (CEA 2023-24, UPPCL)</p>
              </div>
            )}
            
            <div className="form-group mb-4">
              <label className="text-heading-sm mb-2 block">Your Email</label>
              <input type="email" className="input-field" placeholder="admin@university.edu.in" />
            </div>
            
            <div className="form-group mb-8">
              <label className="text-heading-sm mb-2 block">Password</label>
              <input type="password" className="input-field" placeholder="••••••••" />
            </div>
            
            <button className="btn-primary w-full" onClick={() => setStep(2)}>
              Continue →
            </button>
            <p className="text-caption text-mist text-center mt-4">
              No credit card. No hardware. Free forever.
            </p>
          </div>
        )}

        {/* STEP 2: Profile */}
        {step === 2 && (
          <div className="step-content">
            <div className="step-watermark">02</div>
            <h1 className="text-display-lg text-ink mb-8 relative z-10">Tell us about your campus</h1>
            
            <div className="question-block mb-8 relative z-10">
              <p className="text-heading-sm mb-4">Campus Size</p>
              <div className="pill-grid">
                <div className="pill-btn">Under 2,000</div>
                <div className="pill-btn">2,000 - 10,000</div>
                <div className="pill-btn">10,000 - 30,000</div>
                <div className="pill-btn active">30,000+</div>
              </div>
            </div>
            
            <div className="question-block mb-8 relative z-10">
              <p className="text-heading-sm mb-4">Primary Electricity Utility</p>
              <select className="input-field">
                <option>UPPCL</option>
                <option>MSEDCL</option>
                <option>BESCOM</option>
              </select>
            </div>
            
            <button className="btn-primary w-full relative z-10" onClick={() => setStep(3)}>
              Continue →
            </button>
          </div>
        )}

        {/* STEP 3: Personal Carbon Card */}
        {step === 3 && (
          <div className="step-content wide">
            <div className="step-watermark">03</div>
            
            <div className="live-counter-card">
              <p className="text-label text-mint">YOUR ANNUAL FOOTPRINT</p>
              <h2 className="text-data-xl text-white">{(commuteDist * 0.12).toFixed(2)}</h2>
              <p className="text-caption text-mist">tCO2e / year</p>
            </div>

            <h1 className="text-display-lg text-ink mb-2 relative z-10">Your personal footprint</h1>
            <p className="text-body-md text-mist mb-8 relative z-10">Answer quick questions to see your impact.</p>
            
            <div className="question-block mb-8 relative z-10">
              <p className="text-heading-sm mb-4">How do you commute?</p>
              <div className="icon-grid">
                <div className="icon-card">
                  <span className="text-heading-md">🚌</span>
                  <p className="mt-2 text-body-sm">Bus</p>
                </div>
                <div className="icon-card active">
                  <span className="text-heading-md">🏍</span>
                  <p className="mt-2 text-body-sm">Two-Wheeler</p>
                </div>
                <div className="icon-card">
                  <span className="text-heading-md">🚗</span>
                  <p className="mt-2 text-body-sm">Car</p>
                </div>
              </div>
            </div>
            
            <div className="question-block mb-8 relative z-10">
              <p className="text-heading-sm mb-4">Distance one way? (km)</p>
              <div className="slider-container">
                <p className="text-data-lg text-ink text-center mb-2">{commuteDist} km</p>
                <input 
                  type="range" 
                  min="1" 
                  max="80" 
                  value={commuteDist}
                  onChange={e => setCommuteDist(e.target.value)}
                  className="w-full emerald-range"
                />
              </div>
            </div>
            
            <Link href="/dashboard" className="btn-primary w-full text-center relative z-10">
              Generate My Card →
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .onboarding-page {
          background-color: var(--color-cloud-100);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--space-8);
          position: relative;
        }
        
        .back-btn {
          position: absolute;
          top: var(--space-6);
          left: var(--space-6);
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-weight: 500;
        }
        
        .onboarding-container {
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          width: 100%;
          max-width: 520px;
          padding: var(--space-10);
          margin-top: var(--space-8);
          position: relative;
        }
        
        .step-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-10);
        }
        
        .step-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid var(--color-mist-500);
          background-color: var(--color-white);
        }
        
        .step-dot.active {
          border-color: var(--color-emerald-600);
          background-color: var(--color-emerald-600);
        }
        
        .step-line {
          height: 2px;
          width: 40px;
          background-color: #E5E7EB;
        }
        
        .step-line.active {
          background-color: var(--color-emerald-600);
        }
        
        .step-content {
          position: relative;
        }
        
        .step-watermark {
          position: absolute;
          top: -20px;
          left: -20px;
          font-family: var(--font-mono);
          font-size: 96px;
          color: var(--color-ink);
          opacity: 0.04;
          z-index: 0;
          pointer-events: none;
        }
        
        .mb-2 { margin-bottom: var(--space-2); }
        .mb-4 { margin-bottom: var(--space-4); }
        .mb-6 { margin-bottom: var(--space-6); }
        .mb-8 { margin-bottom: var(--space-8); }
        .mt-4 { margin-top: var(--space-4); }
        
        .block { display: block; }
        
        .magic-callout {
          background-color: var(--color-emerald-100);
          border-left: 4px solid var(--color-emerald-600);
          padding: var(--space-3);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-weight: 500;
          color: var(--color-emerald-800);
        }
        
        .pill-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3);
        }
        
        .pill-btn {
          padding: var(--space-3);
          border: 1px solid #E5E7EB;
          border-radius: var(--radius-md);
          text-align: center;
          cursor: pointer;
          transition: all 150ms ease;
        }
        
        .pill-btn:hover {
          background-color: var(--color-cloud-100);
        }
        
        .pill-btn.active {
          background-color: var(--color-emerald-100);
          border-color: var(--color-emerald-600);
          color: var(--color-emerald-800);
          font-weight: 600;
        }
        
        .live-counter-card {
          position: absolute;
          top: -20px;
          right: -20px;
          background-color: var(--color-ink);
          padding: var(--space-4);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          z-index: 20;
          text-align: center;
        }
        
        .icon-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
        }
        
        .icon-card {
          border: 1px solid #E5E7EB;
          border-radius: var(--radius-md);
          padding: var(--space-4);
          text-align: center;
          cursor: pointer;
          transition: all 150ms ease;
        }
        
        .icon-card.active {
          border-color: var(--color-emerald-600);
          border-width: 2px;
          background-color: var(--color-emerald-100);
        }
        
        .emerald-range {
          accent-color: var(--color-emerald-600);
        }
      `}</style>
    </div>
  );
}
