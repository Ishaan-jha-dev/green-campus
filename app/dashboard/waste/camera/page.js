'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  X, 
  Zap, 
  HelpCircle, 
  ChevronLeft,
  Check,
  AlertCircle,
  RefreshCcw,
  Trophy
} from 'lucide-react';
import Link from 'next/link';

export default function WasteAICameraPage() {
  const [detected, setDetected] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showOverride, setShowOverride] = useState(false);

  useEffect(() => {
    // Simulate detecting an item after 1.5s
    const timer = setTimeout(() => {
      setDetected(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleConfirm = () => {
    setConfirming(true);
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setDetected(false);
        setConfirming(false);
        // Restart detection loop
        setTimeout(() => setDetected(true), 1500);
      }, 1500);
    }, 400);
  };

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col font-sans overflow-hidden">
      
      {/* TOP BAR */}
      <div className="h-16 flex items-center justify-between px-6 z-20">
         <Link href="/dashboard/waste" className="flex items-center gap-1 text-white text-sm font-bold">
            <ChevronLeft size={20} /> Dashboard
         </Link>
         <span className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em]">WasteAI</span>
         <div className="flex gap-4">
            <Zap className="text-white h-6 w-6" />
            <HelpCircle className="text-white h-6 w-6" />
         </div>
      </div>

      {/* CAMERA VIEWFINDER (Simulated) */}
      <div className="flex-1 relative bg-gray-950 overflow-hidden">
         {/* Simulated Video Placeholder */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
         
         {/* Reticle */}
         <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-52 h-52 border-2 border-white/60 rounded-3xl relative"
            >
               {/* Corners */}
               <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-waste" />
               <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-waste" />
               <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-waste" />
               <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-waste" />
            </motion.div>
         </div>

         {/* Detection Pulse */}
         {detected && !success && (
           <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-[calc(50%+120px)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
           >
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                 <p className="text-white text-[22px] font-bold">PET Plastic Bottle</p>
              </div>
              <div className="space-y-1 text-center">
                 <div className="w-40 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '94%' }} className="h-full bg-white" />
                 </div>
                 <span className="text-white text-[11px] font-black uppercase tracking-[0.2em] opacity-60">94% Confident</span>
              </div>
           </motion.div>
         )}

         {/* FLASH (Success) */}
         <AnimatePresence>
            {success && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-emerald-600 z-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"
              />
            )}
         </AnimatePresence>
      </div>

      {/* RESULT PANEL */}
      <AnimatePresence>
        {detected && !success && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="bg-[#1A0533] rounded-t-[32px] p-8 space-y-8 z-30"
          >
             <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-waste/30 rounded-2xl flex items-center justify-center text-violet-300">
                   <Trash2 size={32} />
                </div>
                <div className="space-y-1">
                   <div className="flex items-center gap-2">
                      <h4 className="text-2xl font-bold text-white">PET Plastic Bottle</h4>
                      <div className="bg-waste/40 px-2 py-0.5 rounded text-[10px] font-black text-violet-100 uppercase">94%</div>
                   </div>
                   <p className="text-mint-300 font-mono text-sm font-bold uppercase tracking-widest">DROP IN BLUE BIN</p>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <div className="h-8 px-4 bg-waste/40 rounded-full flex items-center gap-2 border border-waste/20">
                   <Trophy size={14} className="text-violet-300" />
                   <span className="text-violet-100 text-[11px] font-black uppercase tracking-widest">+5 Eco-Points</span>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4 pb-4">
                <button 
                  onClick={handleConfirm}
                  className="btn-primary !h-14 !bg-waste !shadow-none !rounded-2xl text-lg flex items-center justify-center gap-2"
                >
                  {confirming ? <RefreshCcw className="animate-spin" /> : <CheckCircle2 size={24} />}
                  Confirm & Log
                </button>
                <button 
                  onClick={() => setShowOverride(true)}
                  className="btn-secondary !h-14 !bg-transparent !text-white !border-white/20 !rounded-2xl text-lg"
                >
                  Wrong?
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS MESSAGE */}
      <AnimatePresence>
        {success && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center z-[60] p-10"
          >
             <div className="bg-white rounded-3xl p-8 text-center space-y-4 shadow-2xl w-full max-w-xs">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                   <Check size={32} />
                </div>
                <h3 className="text-heading-sm font-bold text-ink">Logged Successfully</h3>
                <p className="text-xs text-mist-500 font-medium">You've classified 47 items today.<br/>Currently Ranked #6.</p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERRIDE BOTTOM SHEET */}
      <AnimatePresence>
        {showOverride && (
          <motion.div 
             initial={{ y: '100%' }}
             animate={{ y: 0 }}
             exit={{ y: '100%' }}
             className="absolute bottom-0 left-0 w-full h-[70vh] bg-[#1A0533] rounded-t-[32px] z-50 p-8 space-y-8 flex flex-col shadow-2xl"
          >
             <div className="w-12 h-1.5 bg-white/10 rounded-full mx-auto" />
             <div className="flex justify-between items-center">
                <h3 className="text-white text-lg font-bold">Select the correct category</h3>
                <button onClick={() => setShowOverride(false)}><X className="text-white/40" /></button>
             </div>

             <div className="grid grid-cols-3 gap-3 overflow-y-auto pr-2 no-scrollbar">
                {[
                  'PET Plastic', 'Paper', 'Metal', 'Glass', 
                  'Mixed Plastic', 'Tetra Pak', 'Battery', 'e-Waste',
                  'Organic', 'Toxics', 'Sanitary', 'Styrofoam'
                ].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => { setShowOverride(false); setDetected(true); }}
                    className="aspect-square bg-white/5 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-waste/30 hover:border-waste/40 transition-all text-white/60 hover:text-white"
                  >
                     <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                        <Trash2 size={20} />
                     </div>
                     <span className="text-[10px] font-bold text-center leading-tight uppercase tracking-widest px-1">{cat}</span>
                  </button>
                ))}
             </div>

             <button 
              onClick={() => setShowOverride(false)}
              className="btn-primary !h-14 !bg-waste !shadow-none !rounded-2xl mt-auto"
             >
                Submit Correction
             </button>
             <p className="text-center text-[10px] text-white/20 font-bold uppercase tracking-widest italic pt-2">Your correction helps improve the AI for everyone.</p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
