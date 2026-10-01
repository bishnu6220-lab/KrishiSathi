import React from 'react';
import { Sparkles, X, RefreshCw } from 'lucide-react';

export default function AiModal({
  isAiModalOpen, setIsAiModalOpen,
  aiPrompt, setAiPrompt,
  aiResponse, isAiLoading, handleAskAiAssistant,
}) {
  if (!isAiModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 p-4 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-sm">KrishiSathi AI Plant Doctor</h3>
          </div>
          <button onClick={() => setIsAiModalOpen(false)} className="text-slate-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          <p className="text-xs text-slate-600 bg-amber-50 p-3 rounded-xl border border-amber-200">
            💡 बालीमा देखिएको समस्या वा जुनसुकै कृषि प्रश्न नेपाली वा अंग्रेजीमा लेख्नुहोस्।
          </p>

          <textarea
            rows="3"
            placeholder="उदा: गोलभेडाको पातमा सेतो थोप्ला देखियो, के उपचार गर्ने?"
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <button
            onClick={handleAskAiAssistant}
            disabled={isAiLoading}
            className="w-full bg-emerald-800 hover:bg-emerald-900 disabled:opacity-60 text-white font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-2"
          >
            {isAiLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-amber-300" />}
            <span>{isAiLoading ? 'विश्लेषण हुँदैछ...' : 'AI सल्लाह लिनुहोस्'}</span>
          </button>

          {aiResponse && (
            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-slate-800 leading-relaxed whitespace-pre-line">
              <span className="font-bold text-emerald-900 block mb-1">KrishiSathi AI सिफारिस:</span>
              {aiResponse}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
