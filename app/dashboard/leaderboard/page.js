'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  ChevronRight, 
  Search, 
  Crown, 
  TrendingUp, 
  TrendingDown, 
  Share2, 
  ShieldCheck, 
  Zap,
  Camera,
  Leaf,
  Target
} from 'lucide-react';

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState('Individual');

  const leaderboard = [
    { rank: 1, name: 'Sneha Kapur', dept: 'CS - 3rd Year', points: 1420, trend: +3, avatar: 'SK' },
    { rank: 2, name: 'Arjun Mehta', dept: 'Mech - Final', points: 1380, trend: -1, avatar: 'AM' },
    { rank: 3, name: 'Vikram Seth', dept: 'Bio-Tech', points: 1250, trend: +5, avatar: 'VS' },
    { rank: 4, name: 'Priya Das', dept: 'CS - 2nd Year', points: 1100, trend: +12, avatar: 'PD' },
    { rank: 5, name: 'Zaid Khan', dept: 'EE - 1st Year', points: 1050, trend: 0, avatar: 'ZK' },
    { rank: 6, name: 'Rahul Singh', dept: 'Mech - 2nd Year', points: 940, trend: +2, avatar: 'RS', currentUser: true },
    { rank: 7, name: 'Ishita Roy', dept: 'CS - 4th Year', points: 880, trend: -3, avatar: 'IR' },
    { rank: 8, name: 'Abhay Jain', dept: 'Civil', points: 720, trend: +1, avatar: 'AJ' },
  ];

  return (
    <div className="flex flex-col h-full bg-cloud-100">
      
      {/* WEEKLY CHALLENGE BANNER */}
      <div className="mx-8 mt-10">
        <div className="bg-waste rounded-xl p-8 text-white relative overflow-hidden group shadow-lg">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-all">
             <Trophy size={140} />
           </div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Trophy size={32} />
                 </div>
                 <div className="space-y-1">
                    <h3 className="text-heading-md font-bold">This Week: Classify 50 Waste Items</h3>
                    <p className="text-violet-200 text-sm font-medium">3 days left in the challenge</p>
                 </div>
              </div>

              <div className="flex-1 max-w-md w-full space-y-3">
                 <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-violet-200">
                    <span>34 / 50 items</span>
                    <span>72%</span>
                 </div>
                 <div className="h-2.5 bg-violet-900/40 rounded-full overflow-hidden border border-white/5">
                    <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} className="h-full bg-mint-300" />
                 </div>
              </div>

              <div className="flex flex-col items-center gap-1 bg-white/10 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
                 <span className="text-mint-300 text-xl font-mono font-bold">+200</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-violet-100 italic">Eco-Points</span>
              </div>
           </div>
        </div>
      </div>

      <div className="flex-1 p-8 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start max-w-[1440px] mx-auto w-full">
        
        {/* MAIN LEADERBOARD */}
        <div className="xl:col-span-8 space-y-8">
          
          <div className="flex items-center justify-between">
            <div className="flex gap-1 p-1 bg-white rounded-lg border border-gray-200">
              {['Individual', 'Department', 'Hostel'].map(tab => (
                 <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2.5 rounded-md text-[11px] font-bold uppercase tracking-widest transition-all ${
                    activeTab === tab ? 'bg-ink text-white shadow-sm' : 'text-mist-500 hover:text-ink'
                  }`}
                 >
                  {tab}
                 </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input type="text" placeholder="Find user..." className="h-10 w-64 bg-white border border-gray-200 rounded-lg pl-10 pr-4 text-[13px] outline-none focus:border-ink" />
            </div>
          </div>

          {/* PODIUM */}
          <div className="flex items-end justify-center gap-2 pt-12 pb-8">
            {/* Rank 2 */}
            <div className="flex flex-col items-center gap-4">
               <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center font-bold text-ink border-4 border-white shadow-md">AM</div>
               <div className="h-24 w-32 bg-white rounded-t-xl border-x border-t border-gray-100 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-4">
                  <span className="text-mist-500 text-[11px] font-black uppercase tracking-widest mb-1">#2</span>
                  <p className="text-[13px] font-bold text-ink truncate w-full text-center">Arjun M.</p>
                  <span className="text-emerald-600 font-mono text-sm">1380</span>
               </div>
            </div>

            {/* Rank 1 */}
            <div className="flex flex-col items-center gap-4 relative">
               <div className="absolute -top-12 flex flex-col items-center">
                  <Crown className="text-yellow-500 fill-yellow-500 animate-bounce" size={24} />
               </div>
               <div className="w-20 h-20 bg-emerald-600/10 rounded-full flex items-center justify-center font-bold text-emerald-600 border-4 border-white shadow-lg relative z-10">SK</div>
               <div className="h-44 w-40 bg-white rounded-t-2xl border-x border-t border-emerald-600/10 shadow-[0_-20px_50px_-10px_rgba(5,150,105,0.15)] flex flex-col items-center justify-center p-6 pb-12 relative">
                  <div className="absolute inset-0 bg-emerald-600/5 -z-10 rounded-t-2xl" />
                  <span className="text-emerald-600 text-[11px] font-black uppercase tracking-widest mb-2">#1 Overall</span>
                  <p className="text-[17px] font-black text-ink mb-1">Sneha K.</p>
                  <span className="text-emerald-600 font-mono text-2xl font-bold">1420</span>
               </div>
            </div>

            {/* Rank 3 */}
            <div className="flex flex-col items-center gap-4">
               <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center font-bold text-ink border-4 border-white shadow-md">VS</div>
               <div className="h-16 w-32 bg-white rounded-t-xl border-x border-t border-gray-100 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-4">
                  <span className="text-mist-500 text-[11px] font-black uppercase tracking-widest mb-1">#3</span>
                  <p className="text-[13px] font-bold text-ink truncate w-full text-center">Vikram S.</p>
                  <span className="text-emerald-600 font-mono text-sm">1250</span>
               </div>
            </div>
          </div>

          {/* LIST */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="divide-y divide-gray-100">
                {leaderboard.map((user) => (
                  <div key={user.rank} className={`px-8 py-5 flex items-center justify-between hover:bg-cloud-100 transition-all group ${user.currentUser ? 'bg-emerald-100 border-l-[4px] border-emerald-600' : ''}`}>
                    <div className="flex items-center gap-8">
                       <span className={`w-8 font-mono text-xl ${user.rank <= 3 ? 'text-ink font-bold' : 'text-mist-500'}`}>{user.rank}</span>
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${user.rank === 1 ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-mist-500'}`}>{user.avatar}</div>
                       <div className="space-y-0.5">
                          <p className="text-[15px] font-bold text-ink">{user.name} {user.currentUser && <span className="text-[10px] text-emerald-600 font-black uppercase ml-2">(You)</span>}</p>
                          <p className="text-[11px] text-mist-500 font-medium">{user.dept}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-12">
                       <div className="flex items-center gap-2">
                          {user.trend > 0 ? <TrendingUp size={14} className="text-emerald-600" /> : user.trend < 0 ? <TrendingDown size={14} className="text-critical" /> : <ChevronRight size={14} className="text-gray-300 rotate-90" />}
                          <span className={`text-[10px] font-black uppercase tracking-widest ${user.trend > 0 ? 'text-emerald-600' : user.trend < 0 ? 'text-critical' : 'text-gray-400'}`}>
                             {user.trend === 0 ? '—' : user.trend > 0 ? `▲ ${user.trend}` : `▼ ${Math.abs(user.trend)}`}
                          </span>
                       </div>
                       <span className={`text-lg font-mono font-bold ${user.currentUser ? 'text-emerald-800' : 'text-ink'}`}>{user.points}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>

        </div>

        {/* PROFILE SIDEBAR */}
        <aside className="xl:col-span-4 bg-white rounded-xl border border-gray-100 shadow-sm p-8 space-y-10 sticky top-24">
           <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg shadow-emerald/30">RS</div>
              <div className="space-y-1">
                 <h2 className="text-heading-md text-ink">Rahul Singh</h2>
                 <p className="text-[11px] text-mist-500 font-black uppercase tracking-[0.2em]">Sustainability Officer</p>
              </div>
              <div className="bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
                 <span className="text-emerald-800 text-[11px] font-black uppercase tracking-widest">Rank #6 Overall</span>
              </div>
           </div>

           <div className="space-y-4 pt-10 border-t border-gray-100">
              <p className="text-mist-500 text-[10px] font-black uppercase tracking-widest">Your Badges</p>
              <div className="grid grid-cols-4 gap-4">
                 {[
                   { icon: <Leaf size={16} />, label: 'Eco-Init', color: 'bg-emerald-600', active: true },
                   { icon: <Camera size={16} />, label: 'Scanner', color: 'bg-waste', active: true },
                   { icon: <Zap size={16} />, label: 'Volt', color: 'bg-energy', active: false },
                   { icon: <Target size={16} />, label: 'Master', color: 'bg-indigo-600', active: false },
                 ].map((b, i) => (
                   <div key={i} className="flex flex-col items-center gap-2">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${b.active ? b.color + ' text-white shadow-md' : 'bg-cloud-100 text-mist-500 grayscale opacity-40'}`}>
                        {b.active ? b.icon : <Trophy size={16} />}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-mint-800">{b.label}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="space-y-4 pt-10">
              <button className="btn-primary w-full gap-2 !shadow-none">
                 <Share2 size={16} /> Share My Sustainability Card
              </button>
           </div>
        </aside>

      </div>

    </div>
  );
}
