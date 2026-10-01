import React from 'react';
import {
  MapPin, Filter, Sparkles, Camera, Sprout, CheckCircle, Heart,
  MessageCircle, Bookmark, TrendingUp, Store,
} from 'lucide-react';
import { NEPAL_LOCATIONS } from '../data/mockData';

export default function HomeFeed({
  currentUserRole, posts, dealers,
  selectedDistrict, setSelectedDistrict,
  handleToggleLikePost, handleToggleSavePost, handleAddComment,
  setIsCreatePostOpen, setIsAiModalOpen,
  setActiveChatDealer, setActiveTab,
}) {
  const filteredPosts = posts.filter(
    (p) => selectedDistrict === 'All' || p.location.includes(selectedDistrict)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
              alt="User Avatar"
              className="w-14 h-14 rounded-full object-cover border-2 border-emerald-600"
            />
            <div>
              <h3 className="font-bold text-slate-900 text-base">Ram Bahadur Thapa</h3>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600" /> Chitwan, Nepal
              </p>
              <span className="inline-block mt-1 bg-emerald-100 text-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                {currentUserRole}
              </span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 text-center text-xs">
            <div><span className="block font-bold text-slate-800">24</span><span className="text-slate-400">Posts</span></div>
            <div><span className="block font-bold text-slate-800">1.2k</span><span className="text-slate-400">Followers</span></div>
            <div><span className="block font-bold text-slate-800">180</span><span className="text-slate-400">Following</span></div>
          </div>
        </div>

        {/* District Filter */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-emerald-600" /> Filter by District (जिल्ला)
          </h4>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="All">All Nepal (सबै जिल्लाहरू)</option>
            {NEPAL_LOCATIONS.map((loc) => (
              <option key={loc.district} value={loc.district}>{loc.district}</option>
            ))}
          </select>
        </div>

        {/* AI Promo */}
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl p-4 text-white shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h4 className="font-bold text-sm text-amber-300">Krishi AI Assistant</h4>
          </div>
          <p className="text-xs text-emerald-100 leading-relaxed mb-3">
            बालिमा रोग लाग्यो? वा प्राङ्गारिक मल बनाउन जान्नुपर्‍यो? हाम्रो AI डाक्टरलाई सोध्नुहोस्।
          </p>
          <button
            onClick={() => setIsAiModalOpen(true)}
            className="w-full bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs font-bold py-2 rounded-xl transition"
          >
            प्रश्न सोध्नुहोस् (Ask AI)
          </button>
        </div>
      </div>

      {/* Middle Column */}
      <div className="lg:col-span-2 space-y-5">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <button
              onClick={() => setIsCreatePostOpen(true)}
              className="flex-1 bg-slate-100 hover:bg-slate-200/80 rounded-full text-left px-4 text-xs text-slate-500 transition"
            >
              केही कृषि अनुभव वा जिज्ञासा सेयर गर्नुहोस...
            </button>
          </div>
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium px-2">
            <button onClick={() => setIsCreatePostOpen(true)} className="flex items-center gap-1.5 hover:text-emerald-700">
              <Camera className="w-4 h-4 text-emerald-600" /> फोटो/भिडियो
            </button>
            <button onClick={() => setIsCreatePostOpen(true)} className="flex items-center gap-1.5 hover:text-emerald-700">
              <MapPin className="w-4 h-4 text-amber-500" /> स्थान (Location)
            </button>
            <button onClick={() => setIsCreatePostOpen(true)} className="flex items-center gap-1.5 hover:text-emerald-700">
              <Sprout className="w-4 h-4 text-green-600" /> बालि वर्ग (Crop)
            </button>
          </div>
        </div>

        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-sm">{post.author}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                  </div>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1">
                    <span>{post.location}</span> • <span>{post.time}</span>
                  </p>
                </div>
              </div>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <p className="px-4 pb-3 text-xs sm:text-sm text-slate-700 leading-relaxed">{post.content}</p>

            {post.image && (
              <div className="relative bg-slate-900 max-h-96 overflow-hidden">
                <img src={post.image} alt="Post Attachment" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="p-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span>{post.likes} प्रतिक्रियाहरू (Likes)</span>
                <span>{post.comments.length} टिप्पणीहरू (Comments)</span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-xs font-semibold text-slate-600">
                <button
                  onClick={() => handleToggleLikePost(post.id)}
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-50 transition ${post.isLiked ? 'text-red-500 font-bold' : ''}`}
                >
                  <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  <span>मनपर्यो</span>
                </button>
                <button className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-50 transition">
                  <MessageCircle className="w-4 h-4 text-slate-500" />
                  <span>कमेन्ट</span>
                </button>
                <button
                  onClick={() => handleToggleSavePost(post.id)}
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-50 transition ${post.isSaved ? 'text-emerald-700' : ''}`}
                >
                  <Bookmark className={`w-4 h-4 ${post.isSaved ? 'fill-emerald-700 text-emerald-700' : ''}`} />
                  <span>सञ्चय</span>
                </button>
              </div>

              {post.comments.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 bg-slate-50 p-3 rounded-xl">
                  {post.comments.map((c) => (
                    <div key={c.id} className="flex gap-2 text-xs">
                      <img src={c.avatar} alt={c.user} className="w-6 h-6 rounded-full object-cover mt-0.5" />
                      <div className="bg-white p-2 rounded-lg border border-slate-200 flex-1">
                        <span className="font-bold text-slate-800 block text-[11px]">{c.user}</span>
                        <p className="text-slate-600">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  placeholder="कमेन्ट लेख्नुहोस्..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAddComment(post.id, e.target.value);
                      e.target.value = '';
                    }
                  }}
                  className="flex-1 bg-slate-100 text-xs px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-600" /> चर्चामा रहेका विषय (Trending)
          </h4>
          <div className="space-y-2.5 text-xs">
            <div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
              <span className="font-semibold text-slate-800 block">#ड्रिप_सिँचाइ (Drip Irrigation)</span>
              <span className="text-slate-400 text-[10px]">१४२ किसानहरूले छलफल गरे</span>
            </div>
            <div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
              <span className="font-semibold text-slate-800 block">#जैविक_कीटनाशक (Bio Pesticides)</span>
              <span className="text-slate-400 text-[10px]">९८ पोस्टहरू</span>
            </div>
            <div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
              <span className="font-semibold text-slate-800 block">#सोना_मन्सुली (Sona Mansuli Paddy)</span>
              <span className="text-slate-400 text-[10px]">५६ पोस्टहरू</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-1.5">
            <Store className="w-4 h-4 text-emerald-600" /> नजिकैका प्रमाणित एग्रोभेट
          </h4>
          <div className="space-y-3 text-xs">
            {dealers.map((d) => (
              <div key={d.id} className="flex justify-between items-center border-b border-slate-100 pb-2">
                <div>
                  <span className="font-bold text-slate-800 block">{d.name}</span>
                  <span className="text-[10px] text-slate-500">{d.district} • Verified Dealer</span>
                </div>
                <button
                  onClick={() => { setActiveChatDealer(d); setActiveTab('messages'); }}
                  className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-2 py-1 rounded-md text-[10px] font-bold"
                >
                  Message
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
