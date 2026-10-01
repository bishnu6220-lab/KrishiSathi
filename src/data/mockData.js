// Nepal Districts & Municipalities
export const NEPAL_LOCATIONS = [
  { district: 'Chitwan', municipalities: ['Bharatpur Metropolitan', 'Ratnanagar', 'Rapti', 'Khairahani'] },
  { district: 'Jhapa', municipalities: ['Bhadrapur', 'Damak', 'Birtamode', 'Mechinagar'] },
  { district: 'Kaski', municipalities: ['Pokhara Metropolitan', 'Annapurna', 'Machhapuchhre'] },
  { district: 'Morang', municipalities: ['Biratnagar Metropolitan', 'Belbari', 'Sundarharaicha'] },
  { district: 'Kathmandu', municipalities: ['Kathmandu Metropolitan', 'Kirtipur', 'Budhanilkantha'] },
  { district: 'Kavrepalanchok', municipalities: ['Banepa', 'Dhulikhel', 'Panauti'] },
];

export const CROP_CATEGORIES = [
  'All', 'Rice (धान)', 'Maize (मकै)', 'Wheat (गहुँ)', 'Vegetables (तरकारी)',
  'Fruits (फलफूल)', 'Livestock (पशुपन्छी)', 'Irrigation & Tools', 'Fertilizers & Seeds',
];

export const INITIAL_POSTS = [
  {
    id: 'p1',
    author: 'Ram Bahadur Thapa',
    role: 'FARMER',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    location: 'Chitwan, Ratnanagar-04',
    badge: 'Verified Organic Farmer',
    time: '2 hours ago',
    category: 'Vegetables (तरकारी)',
    content: 'आज मकै र गोलभेडा खेतीमा जैविक मल (Organic Fertilizer) को प्रयोग गरियो। विगत ३ वर्षदेखि रासायनिक मल छोडेर यसरी काम गर्दा उत्पादन र माटो दुवै राम्रो भएको अनुभव छ। कसैलाई प्राङ्गारिक मल बनाउने विधि चाहिएमा सम्पर्क गर्नुहोला!',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a28?auto=format&fit=crop&q=80&w=800',
    likes: 42,
    comments: [
      { id: 'c1', user: 'Sita Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', text: 'दाजु, कम्पोस्ट मल कसरी छिटो कुहाउने? अलि सिकाइदिनु न।' },
      { id: 'c2', user: 'Ram Bahadur Thapa', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', text: 'सिटा बहिनी, EM-1 घोल वा थोरै गोबरको झोल मिसाएर चिस्यान मिलाउँदा १५-२० दिनमै तयार हुन्छ।' },
    ],
    shares: 8,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 'p2',
    author: 'Hari Prasad Dahal',
    role: 'FARMER',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    location: 'Jhapa, Birtamode-02',
    badge: 'Paddy Expert',
    time: '5 hours ago',
    category: 'Rice (धान)',
    content: 'झापामा यसपालि सोना मन्सुली धानको राम्रो फसल भएको छ। ड्रिप सिँचाइ (Drip Irrigation) प्रविधि अपनाएपछि पानीको ३०% बचत भयो।',
    image: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=800',
    likes: 89,
    comments: [],
    shares: 14,
    isLiked: true,
    isSaved: true,
  },
];

export const INITIAL_REELS = [
  {
    id: 'r1',
    author: 'Anita Chaudhary',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    location: 'Morang',
    title: 'आधुनिक टमाटर टनेल खेती विधि 🍅',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-farmer-walking-in-a-greenhouse-41539-large.mp4',
    likes: 312,
    comments: 45,
    crop: 'Vegetables (तरकारी)',
    isLiked: false,
  },
  {
    id: 'r2',
    author: 'Kaski Hydroponics',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    location: 'Pokhara, Kaski',
    title: 'Hydroponics setup in Pokhara - No soil needed! 🥬',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-fresh-soil-and-a-small-plant-41534-large.mp4',
    likes: 540,
    comments: 88,
    crop: 'Technology',
    isLiked: true,
  },
];

export const INITIAL_PRODUCTS = [
  {
    id: 'prod1',
    name: 'Hybrid Tomato Seeds (SR-102)',
    category: 'Fertilizers & Seeds',
    price: 450,
    unit: '10g packet',
    stock: 120,
    dealerId: 'd1',
    dealerName: 'Chitwan Agri-Vet Suppliers',
    district: 'Chitwan',
    rating: 4.8,
    reviewsCount: 24,
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=600',
    description: 'High disease resistance hybrid tomato seeds suitable for Terai & Mid-hills of Nepal. Maturity: 65-70 days.',
    status: 'APPROVED',
  },
  {
    id: 'prod2',
    name: 'Organic Neem Pesticide Spray',
    category: 'Fertilizers & Seeds',
    price: 850,
    unit: '1 Liter',
    stock: 45,
    dealerId: 'd2',
    dealerName: 'Himalayan Bio Agro Concern',
    district: 'Kathmandu',
    rating: 4.6,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    description: '100% pure cold-pressed neem oil for natural pest control against aphids, whiteflies and caterpillars.',
    status: 'APPROVED',
  },
  {
    id: 'prod3',
    name: 'Drip Irrigation Starter Kit (1/2 Ropani)',
    category: 'Irrigation & Tools',
    price: 6500,
    unit: 'Set',
    stock: 15,
    dealerId: 'd1',
    dealerName: 'Chitwan Agri-Vet Suppliers',
    district: 'Chitwan',
    rating: 4.9,
    reviewsCount: 32,
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=600',
    description: 'Includes 100m main line, drippers, connectors, filter & tap adapter. Ideal for polyhouse farming.',
    status: 'APPROVED',
  },
];

export const INITIAL_DISCUSSIONS = [
  {
    id: 'q1',
    title: 'टमाटरको पात पहेँलो भएर सुक्न थाल्यो, के रोग होला?',
    author: 'Bishnu Adhikari',
    district: 'Kavrepalanchok',
    category: 'Vegetables (तरकारी)',
    time: '1 day ago',
    question: 'मेरो २ रोपनीमा लगाएको गोलभेडाको तल्लो पातबाट पहेँलो हुँदै माथितिर सर्दैछ। मलाई कुनै रोकथामको उपाय बताइदिनुहोला।',
    answers: [
      {
        id: 'a1',
        author: 'Dr. Ramesh Giri (Agri Specialist)',
        text: 'यो Early Blight (अगेौटे डढुवा) रोगको लक्षण हुन सक्छ। म्यानकोजेब (Mancozeb 75% WP) २ ग्राम प्रति लिटर पानीमा मिसाएर छर्कनुहोस्।',
        votes: 15,
        isVerified: true,
      },
    ],
  },
];

export const INITIAL_DEALERS = [
  { id: 'd1', name: 'Chitwan Agri-Vet Suppliers', district: 'Chitwan', status: 'VERIFIED', phone: '9855012345', sales: 'Rs. 1,45,000' },
  { id: 'd2', name: 'Himalayan Bio Agro Concern', district: 'Kathmandu', status: 'VERIFIED', phone: '9841098765', sales: 'Rs. 92,000' },
  { id: 'd3', name: 'Pokhara Seeds & Tools Store', district: 'Kaski', status: 'PENDING', phone: '9806122334', sales: 'Rs. 0' },
];

export const INITIAL_ORDERS = [
  {
    id: 'ORD-9821',
    date: '2026-03-24',
    items: [{ name: 'Hybrid Tomato Seeds (SR-102)', qty: 2, price: 450 }],
    total: 900,
    status: 'SHIPPED',
    dealerName: 'Chitwan Agri-Vet Suppliers',
    paymentMethod: 'Cash on Delivery (COD)',
  },
];

export const INITIAL_NOTIFICATIONS = [
  { id: 1, text: 'Chitwan Agri-Vet updated order ORD-9821 status to SHIPPED.', time: '10m ago', unread: true },
  { id: 2, text: 'Ram Bahadur Thapa replied to your comment on Organic Farming.', time: '2h ago', unread: true },
  { id: 3, text: 'New seeds added in Marketplace near Chitwan.', time: '1d ago', unread: false },
];

export const INITIAL_MESSAGES = [
  { sender: 'dealer', text: 'नमस्ते! चितवन एग्रो-भेटमा यहाँलाई स्वागत छ। कुन बीउ वा उपकरणबारे बुझ्न चाहनुभएको हो?', time: '10:00 AM' },
];
