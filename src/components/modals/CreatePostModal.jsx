import React from 'react';
import { X } from 'lucide-react';

export default function CreatePostModal({ isCreatePostOpen, setIsCreatePostOpen }) {
  if (!isCreatePostOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl p-5 shadow-2xl space-y-4">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <h3 className="font-bold text-slate-900 text-sm">नयाँ पोस्ट सिर्जना गर्नुहोस्</h3>
          <button onClick={() => setIsCreatePostOpen(false)}>
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <textarea
          rows="4"
          placeholder="तपाइँको अनुभव वा समस्या सेयर गर्नुहोस्..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />

        <button
          onClick={() => setIsCreatePostOpen(false)}
          className="w-full bg-emerald-800 text-white font-bold text-xs py-2.5 rounded-xl"
        >
          पोस्ट प्रकाशित गर्नुहोस्
        </button>
      </div>
    </div>
  );
}
