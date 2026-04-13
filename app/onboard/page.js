'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ChevronRight, 
  Zap, 
  MapPin, 
  Building2, 
  Users,
  Eye,
  EyeOff,
  Bus,
  Bike,
  Car,
  Footprints,
  Train,
  Home,
  Utensils,
  Share2
} from 'lucide-react';
import Link from 'next/link';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    campusName: '',
    city: '',
    state: '',
    email: '',
    password: '',
    campusSize: '',
    utility: '',
    campusType: '',
    residents: 0,
    commuteMode: '',
    commuteDist: 5,
    commuteDays: 5,
    fuelType: 'Petrol',
    meals: 5,
    hasGenerator: false
  });

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const calculateCarbon = () => {
    let base = 1.2;
    if (formData.commuteMode === 'Car') base += (formData.commuteDist * formData.commuteDays * 0.2);
    if (formData.commuteMode === 'Bike') base += (formData.commuteDist * formData.commuteDays * 0.1);
    if (formData.hasGenerator) base += 0.5;
    base += (formData.meals * 0.05);
    return base.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      {/* STEP INDICATOR */}
      <div className="h-20 border-b border-gray-100 flex items-center justify-center relative bg-white sticky top-0 z-50">
        <div className="flex items-center gap-16 relative">
          {[1, 2, 3].map((s) => (
            <div key={s} className="relative z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                step >= s ? 'bg-emerald-600 text-white' : 'border-2 border-gray-200 text-gray-400'
              }`}>
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-widest mt-2 ${
                step >= s ? 'text-emerald-600' : 'text-mist-500'
              }`}>
                Step {s}
              </span>
            </div>
          ))}
          {/* Connecting Lines */}
          <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-100 -z-10" />
          <motion.div 
            className="absolute top-5 left-0 h-[2px] bg-emerald-600 -z-10"
            initial={{ width: '0%' }}
            animate={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center py-12 px-6">
        
        <AnimatePresence mode="wait">
          {/* STEP 1: REGISTRATION */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-[480px] space-y-10"
            >
              <div className="space-y-2 text-center">
                <h1 className="text-display-lg text-ink">Register your campus</h1>
                <p className="text-body-md text-mist-500">Takes 30 seconds. Free forever.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5 text-xs font-bold text-ink uppercase tracking-widest">Campus Name</div>
                <input 
                  type="text" 
                  placeholder="e.g. University of Lucknow" 
                  className="input-text w-full"
                  value={formData.campusName}
                  onChange={(e) => setFormData({...formData, campusName: e.target.value})}
                />

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-ink uppercase tracking-widest">City</div>
                    <input type="text" className="input-text w-full" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                  </div>
                  <div className="space-y-1.5 text-xs font-bold text-ink">
                    <div className="text-xs font-bold text-ink uppercase tracking-widest">State</div>
                    <select className="input-text w-full appearance-none bg-white" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})}>
                      <option value="">Select State</option>
                      {states.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* MAGIC MOMENT CALLOUT */}
                {formData.state && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-100 border-l-4 border-emerald-600 p-4 rounded-r-md"
                  >
                    <p className="text-sm text-emerald-800 font-bold">Grid Emission Factor: 0.82 kgCO2e/kWh</p>
                    <p className="text-[11px] text-emerald-700/60 uppercase font-bold tracking-widest mt-1">CEA 2023-24 · UPPCL</p>
                  </motion.div>
                )}

                <div className="space-y-1.5 pt-4">
                  <div className="text-xs font-bold text-ink uppercase tracking-widest">Institutional Email</div>
                  <input type="email" placeholder="admin@campus.edu.in" className="input-text w-full" />
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-ink uppercase tracking-widest">Password</div>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      className="input-text w-full pr-12"
                    />
                    <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-mist-500">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6 text-center">
                <button 
                  onClick={() => setStep(2)}
                  className="btn-primary w-full text-lg gap-2"
                >
                  Continue <ChevronRight size={20} />
                </button>
                <p className="text-[12px] text-mist-500">Already registered? <Link href="#" className="text-emerald-600 font-bold">Sign in</Link></p>
              </div>
            </motion.div>
          )}

          {/* STEP 2: CAMPUS PROFILE */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-[520px] space-y-12 relative"
            >
              <div className="absolute -top-12 -left-8 text-data-xl text-ink/5 text-[120px] font-black pointer-events-none">02</div>
              <div className="space-y-2 relative z-10 text-center">
                <h1 className="text-display-lg text-ink">Tell us about your campus</h1>
                <p className="text-body-md text-mist-500 italic">This helps customize your baselines.</p>
              </div>

              <div className="space-y-10 relative z-10">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-ink uppercase tracking-widest">Campus Population (Students)</div>
                  <div className="grid grid-cols-2 gap-3">
                    {['Under 2k', '2k – 10k', '10k – 30k', '30k+'].map(o => (
                      <button 
                        key={o}
                        onClick={() => setFormData({...formData, campusSize: o})}
                        className={`p-4 border-[1.5px] rounded-md text-[13px] font-bold uppercase tracking-widest transition-all ${
                          formData.campusSize === o ? 'bg-emerald-100 border-emerald-600 text-emerald-800' : 'bg-white border-gray-200 text-mist-500'
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-xs font-bold text-ink uppercase tracking-widest">Primary Electricity Utility</div>
                  <select className="input-text w-full appearance-none">
                    <option>Select Utility Provider</option>
                    <option>UPPCL - Uttar Pradesh</option>
                    <option>MSEDCL - Maharashtra</option>
                    <option>BESCOM - Karnataka</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="text-xs font-bold text-ink uppercase tracking-widest">Campus Type</div>
                  <div className="flex flex-wrap gap-2">
                    {['University', 'Engineering', 'Medical', 'Autonomous'].map(o => (
                      <button 
                        key={o}
                        onClick={() => setFormData({...formData, campusType: o})}
                        className={`px-6 py-3 border-[1.5px] rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${
                          formData.campusType === o ? 'bg-emerald-100 border-emerald-600 text-emerald-800' : 'bg-white border-gray-200 text-mist-500'
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-xs font-bold text-ink uppercase tracking-widest flex justify-between">
                    <span>Hostel Residents</span>
                    <span className="text-emerald-600 font-mono text-sm">{formData.residents}</span>
                  </div>
                  <input 
                    type="range" min="0" max="10000" step="100" 
                    className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    value={formData.residents} onChange={(e) => setFormData({...formData, residents: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-6">
                <button 
                  onClick={() => setStep(3)}
                  className="btn-primary w-full text-lg gap-2"
                >
                  Continue <ChevronRight size={20} />
                </button>
                <button className="text-sm font-bold text-mist-500 hover:text-ink transition-colors uppercase tracking-widest mx-auto">Skip for now →</button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: PERSONAL CARBON CARD */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-[560px] space-y-12 relative"
            >
              <div className="absolute -top-12 -left-8 text-data-xl text-ink/5 text-[120px] font-black pointer-events-none">03</div>
              
              {/* LIVE CO2E COUNTER */}
              <div className="flex justify-between items-end mb-8 relative z-10">
                <div className="space-y-1 text-left">
                  <h1 className="text-display-lg text-ink">Institutional Footprint</h1>
                  <p className="text-body-md text-mist-500">See your impact in real-time.</p>
                </div>
                <div className="bg-ink rounded-xl p-4 text-right shadow-lg">
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-1">Estimated Annual</p>
                  <p className="text-data-lg text-white font-mono leading-none">{calculateCarbon()} <span className="text-[10px] text-mist-500 font-sans uppercase">tCO2e</span></p>
                </div>
              </div>

              <div className="space-y-12 relative z-10">
                {/* Q1: COMMUTE */}
                <div className="space-y-6">
                  <div className="text-xs font-bold text-ink uppercase tracking-widest">How do you commute to campus?</div>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {[
                      { icon: <Bus size={20} />, label: 'Bus' },
                      { icon: <Bike size={20} />, label: 'Bike' },
                      { icon: <Car size={20} />, label: 'Car' },
                      { icon: <Footprints size={20} />, label: 'Walk' },
                      { icon: <Train size={20} />, label: 'Metro' },
                      { icon: <Home size={20} />, label: 'Hostel' },
                    ].map(o => (
                      <button 
                        key={o.label}
                        onClick={() => setFormData({...formData, commuteMode: o.label})}
                        className={`aspect-[1/1] flex flex-col items-center justify-center gap-2 border-[1.5px] rounded-lg transition-all ${
                          formData.commuteMode === o.label ? 'bg-emerald-100 border-emerald-600 text-emerald-800' : 'bg-white border-gray-100 text-mist-500 hover:border-gray-200'
                        }`}
                      >
                        {o.icon}
                        <span className="text-[10px] font-bold uppercase">{o.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q2: DISTANCE SLIDER */}
                {['Bus', 'Bike', 'Car', 'Metro'].includes(formData.commuteMode) && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-6">
                    <div className="text-xs font-bold text-ink uppercase tracking-widest flex justify-between">
                      <span>Riding {formData.commuteDist} km each way</span>
                      <span className="text-emerald-600 font-mono text-sm">{formData.commuteDist} KM</span>
                    </div>
                    <input 
                      type="range" min="1" max="80" 
                      className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      value={formData.commuteDist} onChange={(e) => setFormData({...formData, commuteDist: e.target.value})}
                    />
                  </motion.div>
                )}

                {/* Q3: MEALS */}
                <div className="space-y-6">
                  <div className="text-xs font-bold text-ink uppercase tracking-widest flex justify-between">
                    <span>Canteen meals per week</span>
                    <span className="text-emerald-600 font-mono text-sm">{formData.meals}</span>
                  </div>
                  <input 
                    type="range" min="0" max="21" 
                    className="w-full h-[3px] bg-gray-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    value={formData.meals} onChange={(e) => setFormData({...formData, meals: Number(e.target.value)})}
                  />
                </div>

                {/* Q4: GENERATOR */}
                <div className="flex items-center justify-between p-6 bg-cloud-100 rounded-xl border border-gray-200">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-ink">Hostel Personal Generator?</p>
                    <p className="text-[11px] text-mist-500 uppercase font-black tracking-widest">Adds 0.5t CO2e per year</p>
                  </div>
                  <button 
                    onClick={() => setFormData({...formData, hasGenerator: !formData.hasGenerator})}
                    className={`w-12 h-6 rounded-full p-1 transition-all ${formData.hasGenerator ? 'bg-emerald-600' : 'bg-gray-300'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-all ${formData.hasGenerator ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>

                <div className="pt-8">
                  <Link href="/dashboard" className="btn-primary w-full text-lg gap-2">
                    Enter Dashboard <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
