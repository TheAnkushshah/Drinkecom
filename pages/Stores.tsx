import React, { useState, useMemo } from 'react';
import { MapPin, Phone, Clock, Search, Navigation, Filter, Star, ShieldCheck, Heart, Crown, Landmark, Maximize, ArrowRight, ExternalLink, Coffee, Car, BadgeCheck, X, ChevronLeft, ChevronRight, Locate, MessageCircle, Mail, Calendar, HelpCircle } from 'lucide-react';

interface Store {
  id: string;
  name: string;
  type: 'Flagship' | 'Boutique' | 'Elite' | 'Express';
  city: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  amenities: string[];
  images: string[];
  rating: number;
  distance: number;
  isOpen: boolean;
  email: string;
  whatsapp: string;
  priceRange: '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹';
  isWomenFriendly: boolean;
  hasTastingRoom: boolean;
}

const STORES: Store[] = [
  {
    id: 's1',
    name: 'G-Town Grand',
    type: 'Flagship',
    city: 'Gurugram',
    area: 'Golf Course Road',
    address: 'Sector 54, Golf Course Road, Gurugram, HR 122002',
    phone: '+91-124-400-WINE',
    hours: '10:00 AM - 11:00 PM',
    amenities: ['35,000 sq. ft.', 'Private Vaults', 'Women Only Lounge', 'Valet Parking', 'Sommelier on Site'],
    images: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=1200'
    ],
    isWomenFriendly: true,
    hasTastingRoom: true,
    rating: 4.9,
    distance: 2.3,
    isOpen: true,
    email: 'flagship@gtown.com',
    whatsapp: '+91-124-400-9999',
    priceRange: '₹₹₹₹'
  },
  {
    id: 's2',
    name: 'The Heritage Cellar',
    type: 'Boutique',
    city: 'New Delhi',
    area: 'South Extension',
    address: 'A-24, South Extension Part II, New Delhi 110049',
    phone: '+91-11-4600-G-TOWN',
    hours: '11:00 AM - 10:00 PM',
    amenities: ['Rare Vintage Library', 'Tasting Bar', 'Concierge Service'],
    images: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200'
    ],
    isWomenFriendly: true,
    hasTastingRoom: true,
    rating: 4.7,
    distance: 5.8,
    isOpen: true,
    email: 'heritage@gtown.com',
    whatsapp: '+91-11-4600-8888',
    priceRange: '₹₹₹'
  },
  {
    id: 's3',
    name: 'G-Town Elite',
    type: 'Elite',
    city: 'Noida',
    area: 'Sector 18',
    address: 'Shop 104, Wave Silver Tower, Sector 18, Noida, UP 201301',
    phone: '+91-120-455-8899',
    hours: '10:30 AM - 10:30 PM',
    amenities: ['Quick Collection', 'Premium Spirits Gallery', 'Gift Wrapping'],
    images: [
      'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200'
    ],
    isWomenFriendly: true,
    hasTastingRoom: false,
    rating: 4.6,
    distance: 8.2,
    isOpen: false,
    email: 'elite@gtown.com',
    whatsapp: '+91-120-455-7777',
    priceRange: '₹₹₹'
  }
];

const Stores: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Flagship' | 'Women-First'>('All');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStore, setLightboxStore] = useState<Store | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const filteredStores = useMemo(() => {
    return STORES.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.area.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = activeFilter === 'All' || 
                         (activeFilter === 'Flagship' && s.type === 'Flagship') || 
                         (activeFilter === 'Women-First' && s.isWomenFriendly);
      const matchesCity = selectedCity === 'All Cities' || s.city === selectedCity;
      return matchesSearch && matchesType && matchesCity;
    });
  }, [searchQuery, activeFilter, selectedCity]);

  const openLightbox = (store: Store, imageIndex: number) => {
    setLightboxStore(store);
    setLightboxImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxStore(null);
    setLightboxImageIndex(0);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!lightboxStore) return;
    const totalImages = lightboxStore.images.length;
    setLightboxImageIndex(prev => 
      direction === 'next' 
        ? (prev + 1) % totalImages 
        : (prev - 1 + totalImages) % totalImages
    );
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-[#faf8f5]">
      {/* Cinematic Header Section */}
      <section className="relative overflow-hidden flex items-center justify-center bg-[#0b0b0b] min-h-[70vh] pt-20">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover scale-110 animate-slow-zoom brightness-60"
            src="/Video2.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl h-full flex flex-col items-center justify-center">
           <div className="space-y-4">
             <h1 className="text-4xl md:text-8xl font-serif italic text-white tracking-tight animate-in slide-in-from-bottom-4 duration-1000 drop-shadow-2xl">
               Locate G-Town
             </h1>
             <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
           </div>
          <p className="max-w-3xl mx-auto text-md md:text-xl font-lora italic text-white/85 leading-relaxed">
            Discover NCR's most sophisticated sanctuaries for premium wines and spirits. Over 450 destinations of unrivaled prestige.
          </p>
          <div className="hidden md:flex flex-wrap justify-center gap-3 pt-4">
            {['Flagship Sanctuaries', 'Women-First Lounges', 'Concierge & Valet', 'Curated Tastings'].map(tag => (
              <span key={tag} className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/80 bg-white/10 border border-white/15 rounded-full backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Search & Filters */}
      <section className="py-24 relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white via-[#faf8f5] to-white p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] rounded-sm border border-[#e8e6e1] relative overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#d4af37]/20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#d4af37]/20 pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Section Header */}
              <div className="text-center mb-12 pb-8 relative">
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#e8e6e1] to-transparent"></div>
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
                  <Filter size={16} className="text-[#d4af37]" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
                </div>
                <h3 className="text-[1.3rem] md:text-3xl font-serif italic text-[#2a2a2a] mb-2">Refine Your Destination</h3>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Precision Search Tools</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                {/* Search Input - Takes more space */}
                <div className="lg:col-span-6 space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#722f3f] flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#d4af37] rotate-45"></span>
                    <span>Discover Location</span>
                  </label>
                  <div className="relative group rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#722f3f]/10 via-white to-[#d4af37]/15 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    <div className="relative border-2 border-[#e8e6e1] group-focus-within:border-[#722f3f] bg-white/80 backdrop-blur-sm shadow-lg shadow-[#722f3f]/5 rounded-md transition-all">
                      <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#722f3f] transition-colors" />
                      <input 
                        type="text" 
                        placeholder="Enter area, landmark, or store name..." 
                        className="w-full pl-14 pr-10 py-5 bg-transparent outline-none text-sm font-lora italic tracking-wide"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#722f3f] transition-colors"
                        >
                          <span className="text-sm font-bold">×</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* City Selector */}
                <div className="lg:col-span-3 space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 flex items-center space-x-2">
                    <MapPin size={10} className="text-[#d4af37]" />
                    <span>Territory</span>
                  </label>
                  <div className="relative group rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-white to-[#722f3f]/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    <div className="relative border-2 border-[#e8e6e1] group-focus-within:border-[#d4af37] bg-white/85 backdrop-blur-sm shadow-lg shadow-[#d4af37]/5 rounded-md transition-all">
                      <select 
                        className="w-full bg-transparent py-5 px-5 outline-none font-serif text-sm cursor-pointer appearance-none"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                      >
                        <option>All Cities</option>
                        <option>Gurugram</option>
                        <option>New Delhi</option>
                        <option>Noida</option>
                        <option>Faridabad</option>
                      </select>
                      <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#722f3f]">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
                          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="lg:col-span-3 space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 flex items-center space-x-2">
                    <Star size={10} className="text-[#d4af37]" />
                    <span>Experience</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { key: 'All', label: 'Stores', icon: <Landmark size={14} /> },
                      { key: 'Flagship', label: 'Flagship', icon: <Crown size={14} /> },
                      { key: 'Women-First', label: 'Women', icon: <Heart size={14} /> }
                    ].map(filter => (
                      <button
                        key={filter.key}
                        onClick={() => setActiveFilter(filter.key as any)}
                        className={`relative overflow-hidden py-6 px-4 text-[9px] uppercase tracking-[0.15em] font-bold border-2 transition-all duration-500 rounded-sm group ${
                          activeFilter === filter.key 
                          ? 'bg-gradient-to-br from-[#722f3f] via-[#8b3a4f] to-[#5a2532] text-white border-[#722f3f] shadow-2xl shadow-[#722f3f]/40 scale-105' 
                          : 'bg-white text-gray-500 border-[#e8e6e1] hover:border-[#d4af37] hover:text-[#722f3f] hover:shadow-lg'
                        }`}
                      >
                        {/* Animated background gradient on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${activeFilter === filter.key ? 'hidden' : ''}`}></div>
                        
                        <div className="relative flex flex-col items-center justify-center space-y-2">
                          <div className={`transition-all duration-300 ${activeFilter === filter.key ? 'text-white scale-110' : 'text-[#d4af37] group-hover:scale-110'}`}>
                            {filter.icon}
                          </div>
                          <span className="leading-tight">{filter.label}</span>
                        </div>

                        {/* Active indicator dot */}
                        {activeFilter === filter.key && (
                          <div className="absolute top-2 right-2 w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Spotlight */}
      {activeFilter === 'All' && !searchQuery && (
        <section className="py-24 bg-white overflow-hidden relative border-y border-[#e8e6e1]">
          <div className="absolute top-0 right-0 text-[15vw] font-serif font-bold text-[#faf8f5] pointer-events-none select-none translate-x-1/4 -translate-y-1/4">FLAGSHIP</div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 border border-[#d4af37]/20 pointer-events-none group-hover:inset-0 transition-all duration-700"></div>
                <div className="aspect-square overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" 
                    alt="Grand Flagship" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white">
                    <div className="flex items-center space-x-3 mb-2">
                      <Crown size={20} className="text-[#d4af37]" />
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold">The Sovereign Destination</span>
                    </div>
                    <h3 className="text-4xl font-serif italic">The 35,000 sq. ft. Sanctuary</h3>
                  </div>
                </div>
              </div>
              <div className="space-y-10">
                <div className="space-y-6">
                  <h4 className="text-[#722f3f] text-[11px] uppercase tracking-[1em] font-bold">GURUGRAM GLOBAL FLAGSHIP</h4>
                  <h2 className="text-4xl md:text-6xl font-serif leading-tight">Architecture of <br /><span className="italic text-[#d4af37]">Pure Opulence</span></h2>
                  <div className="h-px w-24 bg-[#722f3f]"></div>
                </div>
                <p className="text-xl font-lora italic text-gray-500 leading-relaxed">
                  NCR's largest and most refined spirits emporium. A breathtaking architectural masterpiece designed for the discerning elite, featuring climate-controlled vaults and a pioneering women-first lounge environment.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-[#722f3f]">
                      <Heart size={18} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Women-First Design</span>
                    </div>
                    <p className="text-xs text-gray-400 font-lora italic leading-relaxed">Exclusive safe-haven zones for refined shopping.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-[#722f3f]">
                      <Maximize size={18} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Monumental Scale</span>
                    </div>
                    <p className="text-xs text-gray-400 font-lora italic leading-relaxed">Global selection across 35,000 square feet luxury.</p>
                  </div>
                </div>
                <button className="bg-[#722f3f] text-white px-6 sm:px-10 py-5 uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-[#5a2532] transition-all flex items-center justify-center sm:justify-start space-x-4 shadow-xl group w-full sm:w-auto">
                  <span className="hidden sm:inline">Explore Flagship Details</span>
                  <span className="sm:hidden">Chk Flagship Details</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Store Listings Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-10 mb-3 sm:mb-20">
            <div className="space-y-4">
              <h4 className="text-[#d4af37] text-[11px] uppercase tracking-[0.6em] font-bold">DIRECTORY</h4>
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#2a2a2a]">Curated Destinations</h2>
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 sm:mb-0 text-right w-full sm:w-auto">
               Showing {filteredStores.length} premium locations
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredStores.map(store => (
              <div key={store.id} className="bg-white border border-[#e8e6e1] rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-700 group flex flex-col h-full">
                <div 
                  className="h-64 overflow-hidden relative cursor-pointer"
                  onClick={() => openLightbox(store, currentImageIndex[store.id] || 0)}
                >
                  <img 
                    src={store.images[currentImageIndex[store.id] || 0]} 
                    alt={`${store.name} - Image ${(currentImageIndex[store.id] || 0) + 1}`} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                  />
                  
                  <div className="absolute top-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center space-x-1 shadow-lg">
                    <span>{store.rating.toFixed(1)}</span>
                    <Star size={12} className="text-[#d4af37]" />
                  </div>
                  
                  <div className={`absolute bottom-6 left-6 px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center space-x-2 shadow-lg ${
                    store.isOpen 
                      ? 'bg-green-500/90 text-white' 
                      : 'bg-red-500/90 text-white'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${store.isOpen ? 'bg-white animate-pulse' : 'bg-white'}`}></span>
                    <span>{store.isOpen ? 'Open Now' : 'Closed'}</span>
                  </div>
                  
                  {/* Image Navigation Dots */}
                  {store.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {store.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => ({ ...prev, [store.id]: idx }));
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            (currentImageIndex[store.id] || 0) === idx 
                              ? 'bg-[#d4af37] w-6' 
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                          aria-label={`View image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="absolute top-6 left-6 bg-[#722f3f] text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-lg">
                    {store.type}
                  </div>
                  {store.isWomenFriendly && (
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-2 rounded-full text-[#d4af37] shadow-md border border-[#d4af37]/20" aria-label="Verified Store">
                      <BadgeCheck size={16} />
                    </div>
                  )}
                </div>
                
                <div className="p-10 space-y-8 flex-grow flex flex-col">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif text-[#2a2a2a] group-hover:text-[#722f3f] transition-colors">{store.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin size={12} className="text-[#d4af37]" />
                      <span className="text-[10px] uppercase font-bold tracking-widest">{store.area}, {store.city}</span>
                    </div>
                  </div>

                  <p className="text-sm font-lora italic text-gray-500 leading-relaxed line-clamp-2">
                    {store.address}
                  </p>

                  <div className="space-y-4 ">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                      <div className="flex items-center space-x-3 text-[#d4af37]">
                        <Clock size={12} />
                        <span>Hours Today</span>
                      </div>
                      <span className="text-[#2a2a2a]">{store.hours}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                      <div className="flex items-center space-x-3 text-[#d4af37]">
                        <Phone size={12} />
                        <span>Concierge Line</span>
                      </div>
                      <span className="text-[#2a2a2a]">{store.phone}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                      <div className="flex items-center space-x-3 text-[#d4af37]">
                        <Locate size={12} />
                        <span>Distance</span>
                      </div>
                      <span className="text-[#2a2a2a]">{store.distance.toFixed(1)} km</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-gray-500">Price Range</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < store.priceRange.length
                                ? 'text-[#d4af37]'
                                : 'text-gray-300'
                            }`}
                          >
                            ₹
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {store.amenities.map(amenity => (
                      <span key={amenity} className="px-2 py-1 bg-[#faf8f5] text-[8px] font-bold uppercase tracking-widest text-gray-400 border border-[#e8e6e1] group-hover:border-[#722f3f]/30 transition-colors">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => window.open(`https://wa.me/${store.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')} className="flex items-center justify-center space-x-2 border border-[#d4af37] text-[#722f3f] py-2.5 text-[8px] uppercase font-bold tracking-widest rounded-sm hover:bg-[#d4af37] hover:text-white transition-all">
                      <MessageCircle size={11} />
                      <span>WhatsApp</span>
                    </button>
                    <button onClick={() => window.open(`mailto:${store.email}`, '_blank')} className="flex items-center justify-center space-x-2 border border-[#d4af37] text-[#722f3f] py-2.5 text-[8px] uppercase font-bold tracking-widest rounded-sm hover:bg-[#d4af37] hover:text-white transition-all">
                      <Mail size={11} />
                      <span>Email</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 border border-[#d4af37] text-[#722f3f] py-2.5 text-[8px] uppercase font-bold tracking-widest rounded-sm hover:bg-[#d4af37] hover:text-white transition-all">
                      <Calendar size={11} />
                      <span>Book</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 border border-[#d4af37] text-[#722f3f] py-2.5 text-[8px] uppercase font-bold tracking-widest rounded-sm hover:bg-[#d4af37] hover:text-white transition-all">
                      <HelpCircle size={11} />
                      <span>Inquire</span>
                    </button>
                  </div>

                  <div className="pt-4 mt-auto grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center space-x-2 border border-[#e8e6e1] py-3 text-[9px] uppercase font-bold tracking-widest hover:bg-[#722f3f] hover:text-white hover:border-[#722f3f] transition-all">
                      <Navigation size={12} />
                      <span>Directions</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 bg-[#faf8f5] py-3 text-[9px] uppercase font-bold tracking-widest text-[#722f3f] hover:bg-white transition-all border border-transparent hover:border-[#e8e6e1]">
                      <ExternalLink size={12} />
                      <span>Store Page</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStores.length === 0 && (
            <div className="py-40 text-center bg-white border border-dashed border-[#e8e6e1] rounded-sm">
              <div className="max-w-xs mx-auto space-y-6">
                <Search size={48} className="mx-auto text-gray-200" />
                <h3 className="text-xl font-serif">No destinations found</h3>
                <p className="text-sm font-lora italic text-gray-400">Try broadening your search or exploring all cities in the dominion.</p>
                <button onClick={() => {setSearchQuery(''); setActiveFilter('All'); setSelectedCity('All Cities');}} className="text-[#722f3f] font-bold uppercase tracking-widest text-[10px] border-b-2 border-[#722f3f] pb-1">Reset Filters</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust & Amenities Section */}
      <section className="py-24 bg-[#111111] text-white">
         <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { icon: <ShieldCheck className="text-[#d4af37]" />, title: "Secure Acquisition", desc: "100% authenticity guaranteed at every outlet in our network." },
               { icon: <Heart className="text-[#d4af37]" />, title: "Women-First Priority", desc: "Pioneering safe and sophisticated spirits shopping for women." },
               { icon: <Car className="text-[#d4af37]" />, title: "Valet & Concierge", desc: "Complimentary valet parking available at all flagship destinations." },
               { icon: <Coffee className="text-[#d4af37]" />, title: "Tasting Lounges", desc: "Sip before you acquire at our curated in-store tasting libraries." }
             ].map((item, i) => (
              <div key={i} className="space-y-6 group text-center md:text-left">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-colors mx-auto md:mx-0">
                   {item.icon}
                 </div>
                <h4 className="text-xl font-serif">{item.title}</h4>
                <p className="text-xs font-lora italic text-gray-400 leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Lightbox Modal */}
      {lightboxOpen && lightboxStore && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div 
            className="relative max-w-6xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            {lightboxStore.images.length > 1 && (
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 z-10 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={lightboxStore.images[lightboxImageIndex]}
                alt={`${lightboxStore.name} - Image ${lightboxImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-sm"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md text-[#2a2a2a] px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm max-w-[90vw] shadow-xl">
                <div className="flex flex-row items-center gap-2 sm:gap-3 justify-center">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold truncate max-w-[150px] sm:max-w-[250px]">{lightboxStore.name}</span>
                  <span className="text-[#d4af37]">•</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold whitespace-nowrap text-gray-500">{lightboxImageIndex + 1} / {lightboxStore.images.length}</span>
                </div>
              </div>
            </div>

            {/* Next Button */}
            {lightboxStore.images.length > 1 && (
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 z-10 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            )}

            {/* Thumbnail Navigation */}
            {lightboxStore.images.length > 1 && (
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 justify-center flex-wrap max-w-[90vw]">
                {lightboxStore.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxImageIndex(idx)}
                    className={`flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                      lightboxImageIndex === idx 
                        ? 'border-[#d4af37] scale-110' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Stores;
