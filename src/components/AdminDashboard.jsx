import React from 'react';

export default function AdminDashboard({ dealers, setDealers }) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-900 text-base mb-3">एग्रोभेट स्वीकृती सूची (Dealer Verification Queue)</h3>

        <div className="divide-y divide-slate-100 text-xs">
          {dealers.map((d) => (
            <div key={d.id} className="py-3 flex justify-between items-center">
              <div>
                <span className="font-bold text-slate-800 block">{d.name}</span>
                <span className="text-slate-400">{d.district} • Phone: {d.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  d.status === 'VERIFIED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {d.status}
                </span>
                {d.status === 'PENDING' && (
                  <button
                    onClick={() => setDealers(dealers.map((item) => item.id === d.id ? { ...item, status: 'VERIFIED' } : item))}
                    className="bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg"
                  >
                    Approve Dealer
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
