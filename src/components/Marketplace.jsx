import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { NEPAL_LOCATIONS } from '../data/mockData';

export default function Marketplace({ products, selectedDistrict, setSelectedDistrict, handleAddToCart }) {
  const filtered = products.filter((p) => selectedDistrict === 'All' || p.district === selectedDistrict);

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div>
          <h2 className="font-bold text-slate-900 text-lg">कृषि बजार (Agri Marketplace)</h2>
          <p className="text-xs text-slate-500">प्रमाणित एग्रोभेटहरूबाट सोझै बीउ, मल र उपकरण खरिद गर्नुहोस्</p>
        </div>

        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700"
        >
          <option value="All">All Districts</option>
          {NEPAL_LOCATIONS.map((l) => (
            <option key={l.district} value={l.district}>{l.district}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prod) => (
          <div key={prod.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
            <div className="h-48 bg-slate-100 relative">
              <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 bg-emerald-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {prod.category}
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">{prod.name}</h3>
                  <span className="text-emerald-700 font-extrabold text-sm whitespace-nowrap">Rs. {prod.price}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{prod.description}</p>
              </div>

              <div className="text-xs text-slate-500 space-y-1 border-t border-slate-100 pt-2">
                <div className="flex justify-between">
                  <span>विक्रेता (Dealer):</span>
                  <span className="font-semibold text-slate-700">{prod.dealerName}</span>
                </div>
                <div className="flex justify-between">
                  <span>स्थान:</span>
                  <span className="text-slate-600">{prod.district}</span>
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(prod)}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" /> Cart मा थप्नुहोस्
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
