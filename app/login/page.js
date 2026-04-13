'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Loader2, Leaf, ShieldCheck, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F3FBF6] flex flex-col items-center justify-center p-6 selection:bg-emerald-500/30 relative overflow-hidden font-sans">
      
      {/* Dynamic Background Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-emerald-600/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/30 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg bg-white border-4 border-white rounded-[60px] p-16 relative z-10 shadow-[0_40px_100px_rgba(5,150,105,0.08)] flex flex-col items-center"
      >
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <div className="w-24 h-24 rounded-[32px] bg-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-600/30 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
            <Leaf className="text-white w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">GreenPulse<span className="text-emerald-600">.</span></h1>
            <p className="text-slate-400 text-sm font-bold leading-relaxed max-w-xs uppercase tracking-widest px-4">Institutional Sustainability Intelligence Portal</p>
          </div>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-5 bg-slate-900 hover:bg-emerald-700 text-white font-black py-6 px-4 rounded-[32px] transition-all disabled:opacity-80 shadow-2xl shadow-black/10 uppercase text-xs tracking-[0.2em] group"
        >
          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin text-emerald-400" />
          ) : (
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
               <Globe className="w-4 h-4 text-white" />
            </div>
          )}
          {isLoading ? 'Authenticating Access...' : 'Continue with Google SSO'}
        </button>

        <div className="mt-12 w-full flex flex-col items-center gap-8">
           <div className="flex items-center gap-4 text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">
              <ShieldCheck size={14} className="text-emerald-500" /> Authorized Institutional Environment
           </div>
           
           <div className="w-full h-[1px] bg-slate-50 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              </div>
           </div>

           <div className="flex gap-8 items-center text-[10px] font-black text-slate-300 uppercase tracking-widest">
              <span className="hover:text-emerald-600 cursor-pointer transition-colors">Audit Node</span>
              <span className="hover:text-emerald-600 cursor-pointer transition-colors">Compliance</span>
              <span className="hover:text-emerald-600 cursor-pointer transition-colors">Support</span>
           </div>
        </div>

      </motion.div>
      
      <p className="mt-16 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Official GreenPulse Campus Portal v4.9.2
      </p>
    </div>
  );
}
