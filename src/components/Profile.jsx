import React from 'react';
import { MapPin } from 'lucide-react';

export default function Profile() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="h-36 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 relative"></div>

      <div className="p-6 relative pt-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-12 mb-4 gap-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            alt="Ram Thapa"
            className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
          />
          <button className="bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-xl">
            Edit Profile (प्रोफाइल सम्पादन)
          </button>
        </div>

        <div>
          <h2 className="font-extrabold text-slate-900 text-xl">Ram Bahadur Thapa</h2>
          <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Chitwan, Ratnanagar-04, Nepal
          </p>
          <div className="flex gap-2 mt-2">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              🌱 Vegetable Farmer
            </span>
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Experience: 8 Years
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-3 max-w-xl">
            चितवनमा व्यावसायिक तरकारी खेती गर्दै आएको छु। गोलभेडा, काँक्रो र मकैको अर्गानिक उत्पादनमा रुचि छ।
          </p>
        </div>
      </div>
    </div>
  );
}
