import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeFeed from './components/HomeFeed';
import Reels from './components/Reels';
import Community from './components/Community';
import Marketplace from './components/Marketplace';
import Messages from './components/Messages';
import Profile from './components/Profile';
import DealerDashboard from './components/DealerDashboard';
import AdminDashboard from './components/AdminDashboard';
import AiModal from './components/modals/AiModal';
import CreatePostModal from './components/modals/CreatePostModal';
import CartDrawer from './components/modals/CartDrawer';
import {
  INITIAL_POSTS, INITIAL_REELS, INITIAL_PRODUCTS, INITIAL_DISCUSSIONS,
  INITIAL_DEALERS, INITIAL_NOTIFICATIONS, INITIAL_MESSAGES,
} from './data/mockData';

export default function App() {
  const [currentUserRole, setCurrentUserRole] = useState('FARMER');
  const [activeTab, setActiveTab] = useState('home');

  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [reels, setReels] = useState(INITIAL_REELS);
  const [products] = useState(INITIAL_PRODUCTS);
  const [discussions] = useState(INITIAL_DISCUSSIONS);
  const [cart, setCart] = useState([]);
  const [dealers, setDealers] = useState(INITIAL_DEALERS);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const [activeChatDealer, setActiveChatDealer] = useState(null);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [newMessageText, setNewMessageText] = useState('');

  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Handlers
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleToggleLikePost = (postId) => {
    setPosts(posts.map((p) => {
      if (p.id === postId) {
        return { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 };
      }
      return p;
    }));
  };

  const handleToggleSavePost = (postId) => {
    setPosts(posts.map((p) => (p.id === postId ? { ...p, isSaved: !p.isSaved } : p)));
  };

  const handleAddComment = (postId, commentText) => {
    if (!commentText.trim()) return;
    setPosts(posts.map((p) => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: Date.now().toString(),
              user:
                currentUserRole === 'FARMER' ? 'You (Farmer)'
                : currentUserRole === 'DEALER' ? 'Dealer Support'
                : 'Admin',
              avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
              text: commentText,
            },
          ],
        };
      }
      return p;
    }));
  };

  const handleAskAiAssistant = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);
    setAiResponse('');

    const systemInstruction =
      "You are 'KrishiSathi AI', an expert agricultural consultant specializing in Nepali farming practices, soil conditions, pest control, crop selection, and seasonal climate in Nepal. Provide concise, friendly, and practical agricultural advice in both Nepali and simple English.";

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

    // Graceful fallback when no key is configured (demo mode)
    if (!apiKey) {
      setTimeout(() => {
        setAiResponse(
          "🔧 Demo Mode: Gemini API key is not configured.\n\n" +
          "To enable real AI answers, create a `.env` file in the project root and add:\n" +
          "VITE_GEMINI_API_KEY=your_key_from_aistudio.google.com\n\n" +
          "Meanwhile, a typical organic remedy for early blight on tomato: spray Mancozeb 75% WP @ 2g/L, remove infected leaves, improve air circulation."
        );
        setIsAiLoading(false);
      }, 900);
      return;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: aiPrompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
          }),
        }
      );

      const data = await response.json();
      const text =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        'कृषि सम्बन्धी जानकारी प्राप्त गर्न सकिएन। कृपया पुनः प्रयास गर्नुहोस्।';
      setAiResponse(text);
    } catch (err) {
      setAiResponse('माफ गर्नुहोला! प्राविधिक समस्याका कारण अहिले नतिजा उपलब्ध भएन। (Offline mode)');
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (!newMessageText.trim()) return;
    setMessages([...messages, { sender: 'user', text: newMessageText, time: 'Just now' }]);
    const sentText = newMessageText;
    setNewMessageText('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'dealer',
          text: `धन्यवाद! तपाइँको जिज्ञासा "${sentText.substring(0, 20)}..." प्राप्त भयो। हामी छिट्टै उपलब्ध गराउनेछौँ।`,
          time: 'Just now',
        },
      ]);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Header
        currentUserRole={currentUserRole}
        setCurrentUserRole={setCurrentUserRole}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        isNotificationsOpen={isNotificationsOpen}
        setIsNotificationsOpen={setIsNotificationsOpen}
        notifications={notifications}
        setNotifications={setNotifications}
        setIsAiModalOpen={setIsAiModalOpen}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'home' && (
          <HomeFeed
            currentUserRole={currentUserRole}
            posts={posts}
            dealers={dealers}
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            handleToggleLikePost={handleToggleLikePost}
            handleToggleSavePost={handleToggleSavePost}
            handleAddComment={handleAddComment}
            setIsCreatePostOpen={setIsCreatePostOpen}
            setIsAiModalOpen={setIsAiModalOpen}
            setActiveChatDealer={setActiveChatDealer}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'reels' && <Reels reels={reels} setReels={setReels} />}

        {activeTab === 'community' && (
          <Community discussions={discussions} setIsAiModalOpen={setIsAiModalOpen} />
        )}

        {activeTab === 'marketplace' && (
          <Marketplace
            products={products}
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            handleAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'messages' && (
          <Messages
            dealers={dealers}
            messages={messages}
            newMessageText={newMessageText}
            setNewMessageText={setNewMessageText}
            handleSendMessage={handleSendMessage}
            activeChatDealer={activeChatDealer}
            setActiveChatDealer={setActiveChatDealer}
          />
        )}

        {activeTab === 'profile' && <Profile />}

        {activeTab === 'dealer-dashboard' && currentUserRole === 'DEALER' && (
          <DealerDashboard products={products} />
        )}

        {activeTab === 'admin-dashboard' && currentUserRole === 'ADMIN' && (
          <AdminDashboard dealers={dealers} setDealers={setDealers} />
        )}
      </main>

      <Footer />

      <AiModal
        isAiModalOpen={isAiModalOpen}
        setIsAiModalOpen={setIsAiModalOpen}
        aiPrompt={aiPrompt}
        setAiPrompt={setAiPrompt}
        aiResponse={aiResponse}
        isAiLoading={isAiLoading}
        handleAskAiAssistant={handleAskAiAssistant}
      />

      <CreatePostModal
        isCreatePostOpen={isCreatePostOpen}
        setIsCreatePostOpen={setIsCreatePostOpen}
      />

      <CartDrawer
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}
