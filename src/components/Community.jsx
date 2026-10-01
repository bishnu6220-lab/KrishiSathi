import React from 'react';
import { ChevronDown, CheckCircle, ThumbsUp } from 'lucide-react';
import { CROP_CATEGORIES } from '../data/mockData';

export default function Community({ discussions, setIsAiModalOpen }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1 space-y-3 bg-white p-4 rounded-2xl border border-slate-200 h-fit">
        <h3 className="font-bold text-slate-900 text-sm mb-3">बाली/क्षेत्र रोज्नुहोस् (Categories)</h3>
        {CROP_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium hover:bg-emerald-50 hover:text-emerald-800 transition flex justify-between items-center"
          >
            <span>{cat}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        ))}
      </div>

      <div className="lg:col-span-3 space-y-4">
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200">
          <h3 className="font-bold text-slate-800 text-base">किसान प्रश्नोत्तर तथा प्राविधिक छलफल</h3>
          <button
            onClick={() => setIsAiModalOpen(true)}
            className="bg-emerald-700 text-white text-xs px-4 py-2 rounded-xl font-bold hover:bg-emerald-800 transition"
          >
            + नयाँ प्रश्न सोध्नुहोस्
          </button>
        </div>

        {discussions.map((d) => (
          <div key={d.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <span className="bg-amber-100 text-amber-800 font-bold text-[10px] px-2.5 py-1 rounded-full">{d.category}</span>
              <span className="text-[11px] text-slate-400">{d.time}</span>
            </div>

            <h3 className="font-bold text-slate-900 text-base">{d.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{d.question}</p>

            <div className="text-xs text-slate-500 font-medium">
              प्रश्नकर्ता: <span className="text-slate-800 font-bold">{d.author}</span> ({d.district})
            </div>

            {d.answers.map((ans) => (
              <div key={ans.id} className="mt-3 p-3 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-emerald-900 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>प्रमाणित उत्तर ({ans.author}):</span>
                </div>
                <p className="text-xs text-slate-700">{ans.text}</p>
                <div className="flex items-center gap-2 pt-1">
                  <button className="flex items-center gap-1 text-[11px] text-emerald-800 font-bold hover:underline">
                    <ThumbsUp className="w-3 h-3" /> उपयोगी ({ans.votes})
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
