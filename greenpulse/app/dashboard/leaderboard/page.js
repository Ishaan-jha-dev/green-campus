'use client';

export default function LeaderboardPage() {
  const users = [
    { rank: 1, name: "Arjun M.", role: "Bio Dept", pts: "14,250", change: "up" },
    { rank: 2, name: "Priya S.", role: "Hostel Warden", pts: "12,180", change: "up" },
    { rank: 3, name: "Rahul D.", role: "Maintenance", pts: "11,045", change: "same" },
    { rank: 4, name: "Dr. Nair", role: "Faculty", pts: "9,800", change: "up" },
    { rank: 5, name: "Anita V.", role: "Student Council", pts: "9,250", change: "down" },
    { rank: 6, name: "Karan B.", role: "IT Dept", pts: "8,900", change: "down" },
    { rank: 14, name: "Nakul S.", role: "Sust. Officer", pts: "4,100", change: "up", isUser: true },
  ];

  return (
    <div className="leaderboard-page p-6">
      <div className="dashboard-header mb-8">
        <h1 className="text-display-xl text-ink">Campus Leaderboard</h1>
        <p className="text-body-md text-slate-700">Eco-Points tracking for students and staff.</p>
      </div>

      <div className="banner bg-emerald-800 text-white rounded-lg p-6 mb-8 flex justify-between items-center">
         <div>
           <div className="badge border border-white/20 text-emerald-100 mb-2">WEEKLY CHALLENGE</div>
           <h2 className="text-display-lg">Zero Plastic Week</h2>
           <p className="text-emerald-100 mt-2">Log 10 non-plastic waste items this week. 500 pt bonus.</p>
         </div>
         <div className="text-center bg-white/10 p-4 rounded-lg backdrop-blur-sm hidden md:block">
           <p className="font-mono text-display-lg">42:15:00</p>
           <p className="text-xs tracking-widest opacity-80 mt-1">TIME REMAINING</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Podium */}
          <div className="podium-container pt-12 pb-6 flex items-end justify-center gap-4 mb-8">
            <div className="podium-item">
               <div className="avatar bg-emerald text-white bg-emerald-600 mb-2 max-auto">PS</div>
               <div className="podium-bar h-24 bg-cloud-100 w-24 rounded-t-lg flex flex-col items-center justify-start pt-2">
                 <span className="text-mist font-bold">2</span>
                 <span className="font-mono text-xs mt-1">12.1k</span>
               </div>
            </div>
            <div className="podium-item -mt-8">
               <span className="material-symbols-outlined text-amber mx-auto mb-1 text-warning" style={{display: 'block', textAlign: 'center'}}>Workspace_Premium</span>
               <div className="avatar bg-amber text-white bg-warning mb-2 mx-auto">AM</div>
               <div className="podium-bar h-36 bg-amber-100 w-24 rounded-t-lg flex flex-col items-center justify-start pt-2 border border-warning">
                 <span className="text-amber font-bold text-warning">1</span>
                 <span className="font-mono text-xs mt-1 text-warning">14.2k</span>
               </div>
            </div>
            <div className="podium-item">
               <div className="avatar bg-violet text-white bg-waste mb-2 mx-auto">RD</div>
               <div className="podium-bar h-16 bg-cloud-100 w-24 rounded-t-lg flex flex-col items-center justify-start pt-2">
                 <span className="text-mist font-bold">3</span>
                 <span className="font-mono text-xs mt-1">11.0k</span>
               </div>
            </div>
          </div>

          <div className="card p-0 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-cloud-100 text-label border-b text-slate-500">
                <tr>
                  <th className="p-4 w-16 text-center">Rnk</th>
                  <th className="p-4">Campus Citizen</th>
                  <th className="p-4 hidden sm:table-cell">Role</th>
                  <th className="p-4 text-right">Points</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i} className={`border-b transition ${user.isUser ? 'bg-emerald-50 border-l-4 border-emerald-600' : 'hover:bg-gray-50'} ${i === 5 ? 'border-b-4 border-b-cloud-100' : ''}`}>
                    <td className="p-4 text-center font-mono text-slate-500">{user.rank}</td>
                    <td className="p-4 flex flex-col">
                      <span className="font-bold text-ink">{user.name} {user.isUser && "(You)"}</span>
                      <span className="text-xs text-mist sm:hidden">{user.role}</span>
                    </td>
                    <td className="p-4 hidden sm:table-cell text-sm text-slate-600">{user.role}</td>
                    <td className="p-4 text-right font-mono font-bold">
                      {user.pts}
                      <span className={`ml-2 inline-block material-symbols-outlined text-[14px] align-middle ${user.change === 'up' ? 'text-emerald' : user.change === 'down' ? 'text-rose' : 'text-mist'}`}>
                         {user.change === 'up' ? 'arrow_upward' : user.change === 'down' ? 'arrow_downward' : 'horizontal_rule'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="card text-center mb-6">
             <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl mx-auto mb-4 font-bold border-2 border-emerald-600">N</div>
             <h3 className="text-heading-sm">Nakul S.</h3>
             <p className="text-caption text-mist uppercase tracking-widest mb-4">Sust. Officer</p>
             
             <div className="font-mono text-display-xl text-emerald-600 mb-1">4,100</div>
             <p className="text-body-sm text-mist mb-6 border-b pb-6">Lifetime Eco-Points</p>
             
             <div className="text-left">
                <p className="text-label text-slate-500 mb-4">YOUR BADGES</p>
                <div className="grid grid-cols-3 gap-2">
                   <div className="bg-amber-50 border border-amber-200 p-2 rounded flex flex-col items-center tooltip" title="Energy Saver">
                     <span className="material-symbols-outlined text-warning mb-1">bolt</span>
                   </div>
                   <div className="bg-violet-light border border-violet opacity-30 p-2 rounded flex flex-col items-center">
                     <span className="material-symbols-outlined text-violet mb-1">recycling</span>
                   </div>
                   <div className="bg-emerald-50 border border-emerald-200 p-2 rounded flex flex-col items-center">
                     <span className="material-symbols-outlined text-emerald-600 mb-1">park</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          margin: 0 auto 8px;
        }
        .bg-warning { background-color: var(--color-warning); }
        .bg-waste { background-color: var(--color-waste); }
        .text-warning { color: var(--color-warning); }
        .text-emerald { color: var(--color-emerald-600); }
        .text-rose { color: var(--color-critical); }
      `}</style>
    </div>
  );
}
