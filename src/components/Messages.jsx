import React from 'react';
import { Send } from 'lucide-react';

export default function Messages({
  dealers, messages, newMessageText, setNewMessageText,
  handleSendMessage, activeChatDealer, setActiveChatDealer,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-3 h-[580px]">
      <div className="border-r border-slate-200 p-4 space-y-3 overflow-y-auto">
        <h3 className="font-bold text-slate-900 text-sm">एग्रोभेट संवाद (Agri Chats)</h3>
        {dealers.map((d) => (
          <div
            key={d.id}
            onClick={() => setActiveChatDealer(d)}
            className={`p-3 rounded-xl cursor-pointer transition flex items-center gap-3 ${
              activeChatDealer?.id === d.id ? 'bg-emerald-50 border border-emerald-200' : 'hover:bg-slate-50'
            }`}
          >
            <div className="w-10 h-10 bg-emerald-800 text-amber-300 rounded-full flex items-center justify-center font-bold text-sm">
              {d.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs">{d.name}</h4>
              <p className="text-[10px] text-slate-500">{d.district} • Online</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:col-span-2 flex flex-col justify-between bg-slate-50">
        <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              {activeChatDealer ? activeChatDealer.name : 'Chitwan Agri-Vet Suppliers'}
            </h4>
            <span className="text-[10px] text-emerald-600 font-semibold">● Online for assistance</span>
          </div>
          <button className="text-xs bg-slate-100 px-3 py-1 rounded-lg text-slate-600 font-medium">
            Call Dealer
          </button>
        </div>

        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-3 rounded-2xl text-xs ${
                m.sender === 'user'
                  ? 'bg-emerald-800 text-white rounded-br-none'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
              }`}>
                <p>{m.text}</p>
                <span className={`text-[9px] mt-1 block ${m.sender === 'user' ? 'text-emerald-200' : 'text-slate-400'}`}>
                  {m.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
          <input
            type="text"
            placeholder="संदेश लेख्नुहोस् (Type message)..."
            value={newMessageText}
            onChange={(e) => setNewMessageText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-slate-100 text-xs px-4 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
          <button
            onClick={handleSendMessage}
            className="bg-emerald-800 text-white p-2.5 rounded-xl hover:bg-emerald-900 transition"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
