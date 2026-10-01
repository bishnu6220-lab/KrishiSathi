import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function DealerDashboard({ products }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-slate-400 text-xs font-medium block">कुल बिक्री (Total Sales)</span>
          <span className="text-2xl font-extrabold text-emerald-800 mt-1 block">Rs. 1,45,000</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-slate-400 text-xs font-medium block">सक्रिय अर्डरहरू (Pending Orders)</span>
          <span className="text-2xl font-extrabold text-amber-600 mt-1 block">3 Orders</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-slate-400 text-xs font-medium block">प्रमाणिकरण स्थिति (Verification)</span>
          <span className="text-sm font-bold text-emerald-600 mt-1 flex items-center gap-1">
            <CheckCircle className="w-4 h-4" /> VERIFIED DEALER
          </span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-900 text-base">तपाइँका सामानहरू (Your Products)</h3>
          <button className="bg-emerald-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl">
            + नयाँ सामान थप्नुहोस्
          </button>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {products.filter((p) => p.dealerId === 'd1').map((p) => (
            <div key={p.id} className="py-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                <div>
                  <span className="font-bold text-slate-800 block">{p.name}</span>
                  <span className="text-slate-400">Stock: {p.stock} units</span>
                </div>
              </div>
              <span className="font-bold text-emerald-700">Rs. {p.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
