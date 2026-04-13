import { useState } from 'react';
import { Bot, X, Send, Sparkles, MessageCircle, Leaf, Zap, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GreenPulseAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Operational. I am the GreenPulse Intelligence Hub. How can I assist with your institutional audit today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Node verified. Cross-referencing current meter data with historical baselines. Anomalies detected in Phase 3 of the Engineering Block. Estimated leakage: ₹14,500/week. Should I trigger a detailed diagnostic scan?' 
      }]);
    }, 1200);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }}
            className="fixed bottom-24 right-10 w-[400px] h-[550px] bg-white rounded-[40px] shadow-[0_20px_60px_rgba(5,150,105,0.15)] border border-emerald-900/5 overflow-hidden flex flex-col z-50 font-sans"
          >
            {/* Header */}
            <div className="bg-slate-900 p-8 flex items-center justify-between text-white shrink-0 relative overflow-hidden">
              {/* Dynamic pulse effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[60px] rounded-full animate-pulse" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
                  <Activity size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tighter leading-none">GreenPulse AI</h3>
                  <p className="text-[9px] text-emerald-400 uppercase tracking-[0.2em] font-black mt-1 leading-none">Scanning Network</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-2xl transition-all border border-white/5"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#F3FBF6]/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-5 rounded-[28px] text-[13px] font-bold leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-br-sm' 
                      : 'bg-white border border-emerald-900/5 text-slate-700 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <div className="p-6 bg-white shrink-0">
               <form onSubmit={handleSend} className="h-16 bg-slate-50 rounded-[28px] px-4 flex items-center gap-4 border-2 border-transparent focus-within:border-emerald-600/10 focus-within:bg-white transition-all">
                  <Zap size={18} className="text-slate-300 ml-2" />
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Inquire about campus nodes..." 
                    className="flex-1 h-full bg-transparent text-[13px] font-bold outline-none text-slate-800 placeholder-slate-300"
                  />
                  <button 
                    type="submit" 
                    disabled={!input.trim()}
                    className="w-11 h-11 bg-slate-900 text-white rounded-[20px] flex items-center justify-center hover:bg-emerald-600 disabled:opacity-20 disabled:hover:bg-slate-900 transition-all shadow-xl"
                  >
                    <Send size={18} />
                  </button>
               </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-10 right-10 w-20 h-20 rounded-[30px] flex items-center justify-center shadow-2xl transition-all z-50 group border-8 border-white ${isOpen ? 'bg-rose-500 shadow-rose-500/20' : 'bg-emerald-600 shadow-emerald-600/20'}`}
      >
        <span className={`absolute w-full h-full rounded-[30px] animate-ping opacity-20 group-hover:opacity-40 ${isOpen ? 'bg-rose-500' : 'bg-emerald-600'}`}></span>
        {isOpen ? <X size={28} className="text-white" /> : <Bot size={34} className="text-white" />}
      </button>
    </>
  );
}
