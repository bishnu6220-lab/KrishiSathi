import React from 'react';
import { Heart, MessageCircle, Share2, MapPin } from 'lucide-react';

export default function Reels({ reels, setReels }) {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="bg-emerald-900 text-white p-3 rounded-xl text-center text-xs font-medium">
        📱 स्वदेशी कृषि भिडियोहरू र प्रविधि सुझावहरू (Krishi Short Videos)
      </div>

      {reels.map((reel) => (
        <div key={reel.id} className="bg-black rounded-3xl overflow-hidden shadow-2xl relative h-[520px] flex flex-col justify-end">
          <video
            src={reel.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          <div className="relative z-10 p-5 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
            <div className="absolute right-4 bottom-16 flex flex-col items-center gap-4 text-white">
              <button
                onClick={() => {
                  setReels(reels.map((r) =>
                    r.id === reel.id
                      ? { ...r, isLiked: !r.isLiked, likes: r.isLiked ? r.likes - 1 : r.likes + 1 }
                      : r
                  ));
                }}
                className="flex flex-col items-center"
              >
                <div className={`p-3 rounded-full bg-black/40 backdrop-blur-md ${reel.isLiked ? 'text-red-500' : 'text-white'}`}>
                  <Heart className={`w-6 h-6 ${reel.isLiked ? 'fill-red-500' : ''}`} />
                </div>
                <span className="text-[10px] mt-1 font-bold">{reel.likes}</span>
              </button>

              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[10px] mt-1 font-bold">{reel.comments}</span>
              </div>

              <div className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white">
                <Share2 className="w-6 h-6" />
              </div>
            </div>

            <div className="pr-16 text-white space-y-2">
              <div className="flex items-center gap-2">
                <img src={reel.avatar} alt={reel.author} className="w-9 h-9 rounded-full border-2 border-emerald-400" />
                <div>
                  <h4 className="font-bold text-sm text-amber-300">{reel.author}</h4>
                  <p className="text-[10px] text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {reel.location}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-100 font-medium leading-normal">{reel.title}</p>
              <span className="inline-block bg-emerald-600/80 backdrop-blur-md text-emerald-100 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                #{reel.crop}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
