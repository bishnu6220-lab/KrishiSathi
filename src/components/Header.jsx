import React from 'react';
import {
  Sprout, Search, ShoppingCart, Bell, Sparkles, Video, Users,
  ShoppingBag, MessageSquare, User, Store, Award,
} from 'lucide-react';

export default function Header({
  currentUserRole, setCurrentUserRole,
  activeTab, setActiveTab,
  searchQuery, setSearchQuery,
  cart, isCartOpen, setIsCartOpen,
  isNotificationsOpen, setIsNotificationsOpen,
  notifications, setNotifications,
  setIsAiModalOpen,
}) {
  const tabClass = (tab) =>
    `py-3 px-3 border-b-2 flex items-center gap-2 whitespace-nowrap transition ${
      activeTab === tab
        ? 'border-amber-400 text-amber-300 font-bold'
        : 'border-transparent text-emerald-100 hover:text-white'
    }`;

  const roleBtn = (role) =>
    `px-2.5 py-1 rounded-md font-semibold transition ${
      currentUserRole === role
        ? 'bg-amber-400 text-emerald-950 shadow'
        : 'text-emerald-100 hover:text-white'
    }`;

  const cartCount = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <header className="sticky top-0 z-40 bg-emerald-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-emerald-500 p-2 rounded-xl text-white shadow-inner">
              <Sprout className="w-7 h-7" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                Krishi<span className="text-amber-300">Sathi</span>
              </span>
              <span className="text-[10px] text-emerald-200 block -mt-1 font-medium">नेपाल कृषि नेटवर्क</span>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3" />
            <input
              type="text"
              placeholder="खोज्नुहोस्: किसान, बिउबिजन, प्राङ्गारिक प्रविधि..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-900/60 border border-emerald-700/60 rounded-full py-2 pl-9 pr-4 text-sm text-white placeholder-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Role Switcher */}
            <div className="bg-emerald-900/80 p-1 rounded-lg border border-emerald-700 flex items-center text-xs">
              <span className="text-emerald-300 px-2 font-medium hidden sm:inline">Role:</span>
              <button onClick={() => { setCurrentUserRole('FARMER'); setActiveTab('home'); }} className={roleBtn('FARMER')}>Farmer</button>
              <button onClick={() => { setCurrentUserRole('DEALER'); setActiveTab('dealer-dashboard'); }} className={roleBtn('DEALER')}>Dealer</button>
              <button onClick={() => { setCurrentUserRole('ADMIN'); setActiveTab('admin-dashboard'); }} className={roleBtn('ADMIN')}>Admin</button>
            </div>

            {/* AI Doctor */}
            <button
              onClick={() => setIsAiModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-emerald-950 px-3 py-1.5 rounded-full font-bold text-xs shadow-md transition transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Krishi AI Doctor</span>
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 text-emerald-100 hover:text-white hover:bg-emerald-700/50 rounded-full"
              title="Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-amber-400 text-emerald-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 text-emerald-100 hover:text-white hover:bg-emerald-700/50 rounded-full relative"
                title="Notifications"
              >
                <Bell className="w-6 h-6" />
                {notifications.some((n) => n.unread) && (
                  <span className="absolute top-1.5 right-1.5 bg-red-500 w-2.5 h-2.5 rounded-full ring-2 ring-emerald-800"></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
                  <div className="p-3 bg-emerald-800 text-white font-semibold text-sm flex justify-between items-center">
                    <span>Notifications (अधिसूचनाहरू)</span>
                    <button
                      onClick={() => setNotifications(notifications.map((n) => ({ ...n, unread: false })))}
                      className="text-xs text-amber-300 hover:underline"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto divide-y divide-slate-100 text-xs">
                    {notifications.map((n) => (
                      <div key={n.id} className={`p-3 hover:bg-slate-50 ${n.unread ? 'bg-emerald-50/50 font-medium' : ''}`}>
                        <p className="text-slate-700">{n.text}</p>
                        <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-emerald-900 border-t border-emerald-700/60">
        <div className="max-w-7xl mx-auto px-4 flex space-x-1 sm:space-x-6 overflow-x-auto no-scrollbar text-sm font-medium">
          <button onClick={() => setActiveTab('home')} className={tabClass('home')}>
            <Sprout className="w-4 h-4" /> Home Feed
          </button>
          <button onClick={() => setActiveTab('reels')} className={tabClass('reels')}>
            <Video className="w-4 h-4" /> Krishi Reels
          </button>
          <button onClick={() => setActiveTab('community')} className={tabClass('community')}>
            <Users className="w-4 h-4" /> Q&A Forum
          </button>
          <button onClick={() => setActiveTab('marketplace')} className={tabClass('marketplace')}>
            <ShoppingBag className="w-4 h-4" /> Marketplace
          </button>
          <button onClick={() => setActiveTab('messages')} className={tabClass('messages')}>
            <MessageSquare className="w-4 h-4" /> Chat with Dealers
          </button>
          <button onClick={() => setActiveTab('profile')} className={tabClass('profile')}>
            <User className="w-4 h-4" /> Profile
          </button>

          {currentUserRole === 'DEALER' && (
            <button onClick={() => setActiveTab('dealer-dashboard')} className={tabClass('dealer-dashboard')}>
              <Store className="w-4 h-4 text-amber-400" /> Dealer Dashboard
            </button>
          )}
          {currentUserRole === 'ADMIN' && (
            <button onClick={() => setActiveTab('admin-dashboard')} className={tabClass('admin-dashboard')}>
              <Award className="w-4 h-4 text-amber-400" /> Admin Control
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
