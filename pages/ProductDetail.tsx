
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Wine, CartItem, Review } from '../types';
import { MOCK_WINES } from '../constants';
import WineCard from '../components/WineCard';
import { 
  Minus, 
  Plus, 
  ShoppingBag, 
  Heart, 
  Star, 
  Info, 
  GlassWater, 
  Utensils, 
  Award, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  ChevronRight,
  Share2,
  ChevronDown,
  Headphones,
  Clock,
  Eye,
  Waves,
  Droplets,
  Timer,
  Wind,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  Camera,
  Filter,
  MoreVertical,
  Flag,
  AlertTriangle
} from 'lucide-react';

interface ProductDetailProps {
  id: string;
  onAddToCart: (wine: Wine, quantity: number) => void;
  onNavigate: (page: string, params?: any) => void;
  onToggleWishlist: (wine: Wine) => void;
  isInWishlist: boolean;
}

type TabType = 'Notes' | 'Attributes' | 'Pairing' | 'Winemaking' | 'Guide';
type SortType = 'Relevant' | 'Helpful' | 'Positive' | 'Critical' | 'Recent';

interface EnhancedReview extends Review {
  isVerified: boolean;
  hasPhotos: boolean;
  helpfulCount: number;
  topics: string[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ id, onAddToCart, onNavigate, onToggleWishlist, isInWishlist }) => {
  const wine = MOCK_WINES.find(w => w.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>('Notes');
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [mainImage, setMainImage] = useState(wine?.imageUrl || '');
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  // Review System State
  const [reviewSort, setReviewSort] = useState<SortType>('Relevant');
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [hasPhotosOnly, setHasPhotosOnly] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Expanded Mock Reviews with Avatars and Official Replies
  const mockReviews: EnhancedReview[] = [
    { 
      id: 'r1', 
      userName: 'Eleanor P.', 
      userAvatar: 'https://i.pravatar.cc/150?u=eleanor',
      rating: 5, 
      comment: 'Simply divine. The depth of the dark fruit notes is unparalleled in this price range. A true representation of the valley.', 
      date: 'Oct 14, 2024',
      isVerified: true,
      hasPhotos: true,
      helpfulCount: 24,
      topics: ['Complexity', 'Value', 'Terroir'],
      officialReply: {
        author: 'G-Town Sommelier Team',
        text: 'We are thrilled you enjoyed the complex layers of this vintage, Eleanor! The terroir of our east-facing slopes truly shines here.',
        date: 'Oct 15, 2024'
      }
    },
    { 
      id: 'r2', 
      userName: 'James T.', 
      userAvatar: 'https://i.pravatar.cc/150?u=james',
      rating: 4, 
      comment: 'A bit tight upon opening, but after 45 minutes in the decanter, it really sang. Great structure and tannins.', 
      date: 'Sep 28, 2024',
      isVerified: true,
      hasPhotos: false,
      helpfulCount: 15,
      topics: ['Decanting', 'Structure', 'Tannins'],
      officialReply: {
        author: 'G-Town Cellar Master',
        text: 'An excellent point on decanting, James. This vintage has a robust skeleton that definitely benefits from aeration.',
        date: 'Sep 30, 2024'
      }
    },
    { 
      id: 'r3', 
      userName: 'Marcus L.', 
      userAvatar: 'https://i.pravatar.cc/150?u=marcus',
      rating: 5, 
      comment: 'The finish on this vintage is what impressed me most. It lingers with a beautiful minerality that speaks to the soil quality.', 
      date: 'Aug 12, 2024',
      isVerified: true,
      hasPhotos: true,
      helpfulCount: 8,
      topics: ['Finish', 'Minerality']
    },
    { 
      id: 'r4', 
      userName: 'Sarah W.', 
      userAvatar: 'https://i.pravatar.cc/150?u=sarah',
      rating: 3, 
      comment: 'Good, but perhaps a bit over-oaked for my palate. I prefer a slightly more fruit-forward expression.', 
      date: 'Jul 20, 2024',
      isVerified: false,
      hasPhotos: false,
      helpfulCount: 2,
      topics: ['Oak', 'Palate']
    }
  ];

  const rawTopics = ['Complexity', 'Structure', 'Value', 'Decanting', 'Tannins', 'Finish', 'Terroir', 'Oak', 'Palate', 'Minerality'];
  
  // Calculate review counts for each topic
  const reviewTopicsWithCounts = useMemo(() => {
    return rawTopics.map(topic => ({
      name: topic,
      count: mockReviews.filter(r => r.topics.includes(topic)).length
    })).filter(t => t.count > 0);
  }, [mockReviews]);

  const filteredReviews = useMemo(() => {
    let result = [...mockReviews];
    
    if (filterRating) result = result.filter(r => r.rating === filterRating);
    if (verifiedOnly) result = result.filter(r => r.isVerified);
    if (hasPhotosOnly) result = result.filter(r => r.hasPhotos);
    if (activeTopic) result = result.filter(r => r.topics.includes(activeTopic));

    switch (reviewSort) {
      case 'Helpful': result.sort((a, b) => b.helpfulCount - a.helpfulCount); break;
      case 'Positive': result.sort((a, b) => b.rating - a.rating); break;
      case 'Critical': result.sort((a, b) => a.rating - b.rating); break;
      case 'Recent': result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); break;
      default: break; // Relevant (Mixed logic)
    }

    return result;
  }, [filterRating, verifiedOnly, hasPhotosOnly, activeTopic, reviewSort]);

  // Mock Rating Distribution
  const ratingDistribution = [
    { stars: 5, percentage: 82, count: 34 },
    { stars: 4, percentage: 12, count: 5 },
    { stars: 3, percentage: 4, count: 2 },
    { stars: 2, percentage: 2, count: 1 },
    { stars: 1, percentage: 0, count: 0 },
  ];

  const relatedWines = MOCK_WINES.filter(w => w.id !== id).slice(0, 4);

  useEffect(() => {
    const handleScroll = () => {
      const mainButton = document.getElementById('main-atc-button');
      if (mainButton) {
        const rect = mainButton.getBoundingClientRect();
        setIsStickyVisible(rect.top < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (wine) setMainImage(wine.imageUrl);
  }, [id, wine]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleShare = async () => {
    const shareData = {
      title: `G-Town Wines: ${wine?.name}`,
      text: `Discover this exquisite ${wine?.vintage} ${wine?.name} from G-Town Wines.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Product link copied to clipboard.');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!wine) return <div className="py-32 text-center font-serif text-2xl">Vintage not found in our cellar.</div>;

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 animate-in fade-in duration-700 relative">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-12">
        <button onClick={() => onNavigate('home')} className="hover:text-[#722f3f] transition-colors">Home</button>
        <ChevronRight size={10} />
        <button onClick={() => onNavigate('shop')} className="hover:text-[#722f3f] transition-colors">Collection</button>
        <ChevronRight size={10} />
        <span className="text-[#2a2a2a] font-bold">{wine.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
        {/* Left: Gallery with Zoom */}
        <div className="space-y-6 sticky top-32">
          <div 
            ref={containerRef}
            className="aspect-[4/5] bg-white rounded-sm overflow-hidden shadow-2xl relative cursor-zoom-in"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            <img 
              src={mainImage} 
              alt={wine.name}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-500 ease-out ${isZoomed ? 'scale-[2]' : 'scale-100'}`}
              style={isZoomed ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : {}}
            />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              {wine.rating >= 95 && (
                <div className="bg-[#d4af37] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  Top Collector Selection
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[wine.imageUrl, 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1510850478944-d5ec3ca2c5fe?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1558001373-7b93ee48fffb?auto=format&fit=crop&q=80&w=800'].map((img, i) => (
              <div 
                key={i} 
                className={`aspect-square bg-white rounded-sm overflow-hidden border transition-all cursor-pointer group ${mainImage === img ? 'border-[#722f3f] scale-105 shadow-md' : 'border-[#e8e6e1] hover:border-gray-400'}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt={`${wine.name} detail ${i}`} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-[#722f3f] font-bold tracking-[0.3em] uppercase text-xs">{wine.type}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-gray-400 font-medium tracking-widest uppercase text-xs">{wine.vintage} Vintage</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle2 size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">In Stock</span>
              </div>
            </div>
            
            <div className="flex justify-between items-start gap-4">
              <h1 className="text-5xl md:text-6xl font-serif text-[#2a2a2a] leading-tight flex-grow">{wine.name}</h1>
              <button 
                onClick={handleShare}
                className="p-3 border border-[#e8e6e1] rounded-full hover:bg-[#722f3f] hover:text-white transition-all group shrink-0"
              >
                <Share2 size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-3xl text-[#722f3f] font-medium font-serif">${wine.price}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest italic">Free shipping for Wine Club members</p>
                </div>
                {/* Expected Shipping Time */}
                <div className="flex items-center space-x-2 text-gray-500 bg-gray-50/80 px-3 py-1.5 rounded-sm w-fit border border-gray-100">
                  <Clock size={12} className="text-[#d4af37]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Estimated Delivery: 2-4 Business Days</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-[#d4af37] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(wine.rating / 20) ? '#d4af37' : 'none'} strokeWidth={2} />
                  ))}
                </div>
                <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">{wine.rating} Points • Verified Reviews</span>
              </div>
            </div>
          </div>

          <p className="text-xl font-lora text-gray-600 leading-relaxed italic">
            "{wine.description}"
          </p>

          {/* Expandable Technical Details */}
          <div className="border-t border-[#e8e6e1]">
            {[
              { id: 'tech', label: 'Technical Specifications', content: (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Varietal</p>
                    <p className="text-sm font-bold font-serif">{wine.varietal}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">ABV</p>
                    <p className="text-sm font-bold font-serif">{wine.abv}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Region</p>
                    <p className="text-sm font-bold font-serif">{wine.region.split(',')[0]}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Body</p>
                    <p className="text-sm font-bold font-serif">{wine.body}</p>
                  </div>
                </div>
              )},
              { id: 'certs', label: 'Certifications & Awards', content: (
                <div className="py-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {wine.certifications?.map(c => (
                      <span key={c} className="px-3 py-1 bg-[#e8e6e1]/30 text-[10px] uppercase font-bold tracking-widest text-[#722f3f] border border-[#722f3f]/10">
                        {c}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {wine.awards.map((a, i) => (
                      <li key={i} className="text-xs font-lora italic text-gray-500 flex items-center">
                        <Award size={14} className="mr-2 text-[#d4af37]" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            ].map(section => (
              <div key={section.id} className="border-b border-[#e8e6e1]">
                <button 
                  onClick={() => toggleSection(section.id)}
                  className="w-full py-6 flex items-center justify-between group"
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 group-hover:text-black transition-colors">{section.label}</span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${expandedSection === section.id ? 'rotate-180 text-[#722f3f]' : 'text-gray-300'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center border border-[#e8e6e1] rounded-sm h-16 bg-white shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-6 h-full hover:text-[#722f3f] transition-colors"
                ><Minus size={18} /></button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-6 h-full hover:text-[#722f3f] transition-colors"
                ><Plus size={18} /></button>
              </div>
              <button 
                id="main-atc-button"
                onClick={() => onAddToCart(wine, quantity)}
                className="flex-grow bg-[#722f3f] text-white px-10 py-4 h-16 uppercase tracking-[0.3em] font-bold text-xs hover:bg-[#5a2532] transition-all flex items-center justify-center space-x-3 shadow-xl active:scale-95"
              >
                <ShoppingBag size={20} />
                <span>Add to Cellar</span>
              </button>
              <button 
                onClick={() => onToggleWishlist(wine)}
                className={`h-16 w-16 border border-[#e8e6e1] flex items-center justify-center transition-all shadow-sm group ${isInWishlist ? 'bg-[#722f3f] text-white' : 'hover:text-red-500 bg-white'}`}
              >
                <Heart size={24} className={`${isInWishlist ? 'fill-white' : 'group-hover:fill-red-500'} transition-colors`} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-[#e8e6e1]/50">
              <div className="flex flex-col items-center text-center space-y-2 group">
                <Truck size={20} className="text-[#d4af37] group-hover:scale-110 transition-transform" />
                <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400 leading-tight">Climate Controlled Shipping</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 group">
                <ShieldCheck size={20} className="text-[#d4af37] group-hover:scale-110 transition-transform" />
                <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400 leading-tight">Secured Checkout</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 group">
                <CheckCircle2 size={20} className="text-[#d4af37] group-hover:scale-110 transition-transform" />
                <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400 leading-tight">G-Town Authentic Vintage</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 group">
                <Award size={20} className="text-[#d4af37] group-hover:scale-110 transition-transform" />
                <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400 leading-tight">Premium Quality Guaranteed</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 group col-span-2 md:col-span-1">
                <Headphones size={20} className="text-[#d4af37] group-hover:scale-110 transition-transform" />
                <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400 leading-tight">Exceptional Customer Service</p>
              </div>
            </div>
          </div>

          {/* Tabs for expanded details */}
          <div className="pt-10">
            <div className="flex space-x-12 border-b border-[#e8e6e1] mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {[
                { id: 'Notes', label: 'Tasting Notes' },
                { id: 'Attributes', label: 'Wine Attributes' },
                { id: 'Pairing', label: 'Food Pairings' },
                { id: 'Winemaking', label: 'Winemaking' },
                { id: 'Guide', label: 'Serving Guide' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`pb-4 text-[11px] uppercase tracking-[0.3em] font-bold transition-all relative ${
                    activeTab === tab.id ? 'text-[#722f3f]' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#722f3f]" />}
                </button>
              ))}
            </div>

            <div className="min-h-[300px] animate-in fade-in slide-in-from-bottom-4 duration-500">
              {activeTab === 'Notes' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <h4 className="flex items-center text-sm font-bold uppercase tracking-widest border-b border-[#e8e6e1] pb-3 text-[#722f3f]">
                        <Eye size={16} className="mr-3" /> Sensory Profile
                      </h4>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-start p-4 bg-white border border-[#e8e6e1] rounded-sm hover:border-[#722f3f] transition-all group">
                          <div className="mr-5 mt-1">
                             <div className={`w-8 h-8 rounded-full border border-gray-100 shadow-inner ${wine.type === 'Red' ? 'bg-[#722f3f]' : wine.type === 'White' ? 'bg-[#fef9c3]' : 'bg-[#fda4af]'}`}></div>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest block mb-1">Appearance</span>
                            <span className="text-sm font-lora italic text-gray-700">{wine.appearance || 'Deep garnet with ruby reflections'}</span>
                          </div>
                        </div>
                        <div className="flex items-start p-4 bg-white border border-[#e8e6e1] rounded-sm hover:border-[#722f3f] transition-all group">
                          <div className="mr-5 mt-1 text-[#d4af37]">
                             <Wind size={24} />
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest block mb-1">Aroma</span>
                            <span className="text-sm font-lora italic text-gray-700">{wine.aroma || wine.tastingNotes.slice(0, 3).join(', ')}</span>
                          </div>
                        </div>
                        <div className="flex items-start p-4 bg-white border border-[#e8e6e1] rounded-sm hover:border-[#722f3f] transition-all group">
                          <div className="mr-5 mt-1 text-[#722f3f]">
                             <GlassWater size={24} />
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest block mb-1">Palate</span>
                            <span className="text-sm font-lora italic text-gray-700 leading-relaxed">{wine.palate || 'Rich, full-bodied with structured layers of dark fruit and spices.'}</span>
                          </div>
                        </div>
                        <div className="flex items-start p-4 bg-white border border-[#e8e6e1] rounded-sm hover:border-[#722f3f] transition-all group">
                          <div className="mr-5 mt-1 text-gray-400">
                             <Timer size={24} />
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest block mb-1">Finish</span>
                            <span className="text-sm font-lora italic text-gray-700">{wine.finish || 'Long, elegant with lingering mineral notes.'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Structural Body</p>
                        <span className="text-[10px] font-bold uppercase">{wine.body}</span>
                      </div>
                      <div className="flex space-x-1.5 h-1.5">
                        {[1, 2, 3, 4, 5].map(i => {
                          const level = wine.body === 'Light' ? 1 : wine.body === 'Medium' ? 3 : 5;
                          return <div key={i} className={`flex-grow rounded-full transition-all duration-1000 ${i <= level ? 'bg-[#722f3f]' : 'bg-gray-100'}`} />
                        })}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Acidity / Crispness</p>
                        <span className="text-[10px] font-bold uppercase">{wine.acidity}</span>
                      </div>
                      <div className="flex space-x-1.5 h-1.5">
                        {[1, 2, 3, 4, 5].map(i => {
                          const level = wine.acidity === 'Low' ? 1 : wine.acidity === 'Medium' ? 3 : 5;
                          return <div key={i} className={`flex-grow rounded-full transition-all duration-1000 ${i <= level ? 'bg-[#722f3f]' : 'bg-gray-100'}`} />
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Attributes' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="flex items-center text-sm font-bold uppercase tracking-widest border-b border-[#e8e6e1] pb-2 text-[#722f3f]">
                      <Info size={16} className="mr-3" /> Technical Stats
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { label: 'Alcohol', value: wine.abv },
                        { label: 'Varietal', value: wine.varietal },
                        { label: 'Body', value: wine.body },
                        { label: 'Tannins', value: wine.tannins },
                        { label: 'Acidity', value: wine.acidity },
                        { label: 'Sweetness', value: wine.sweetness || 'Dry' }
                      ].map((attr, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-[#e8e6e1]/30">
                          <span className="text-[10px] uppercase font-bold text-gray-400">{attr.label}</span>
                          <span className="text-sm font-serif font-bold">{attr.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#faf8f5] p-8 border border-[#e8e6e1] rounded-sm flex flex-col justify-center text-center">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Chemical Composition</p>
                    <div className="space-y-4">
                      <div className="flex justify-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-serif text-[#722f3f]">3.6</div>
                          <div className="text-[8px] uppercase font-bold">pH Level</div>
                        </div>
                        <div className="w-px h-8 bg-gray-200 self-center"></div>
                        <div className="text-center">
                          <div className="text-2xl font-serif text-[#722f3f]">6.2</div>
                          <div className="text-[8px] uppercase font-bold">Total Acidity (g/L)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Pairing' && (
                <div className="space-y-8">
                  <div className="bg-[#722f3f] text-white p-8 rounded-sm relative overflow-hidden group">
                    <div className="relative z-10 space-y-4">
                      <h4 className="flex items-center text-sm font-bold uppercase tracking-widest">
                        <Utensils size={18} className="mr-3 text-[#d4af37]" /> The Perfect Plate
                      </h4>
                      <p className="text-lg font-lora italic opacity-90 leading-relaxed max-w-xl">
                        "The {wine.varietal} varietal demands a companion that respects its structure while elevating its subtle herbal undertones."
                      </p>
                    </div>
                    <Award size={120} className="absolute -right-8 -bottom-8 opacity-5 text-white group-hover:rotate-12 transition-transform duration-700" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {(wine.foodPairings.length > 0 ? wine.foodPairings : ['Beef Steaks', 'Hearty Pasta', 'Aged Cheeses', 'Game Meats']).map(food => (
                      <div key={food} className="bg-white border border-[#e8e6e1] p-6 text-center rounded-sm hover:border-[#722f3f] transition-all group">
                        <p className="text-sm font-serif italic mb-2 group-hover:text-[#722f3f]">{food}</p>
                        <p className="text-[9px] uppercase tracking-widest text-gray-400">Recommended Serving</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Winemaking' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="flex items-center text-sm font-bold uppercase tracking-widest border-b border-[#e8e6e1] pb-2 text-[#722f3f]">
                      <Waves size={16} className="mr-3" /> The Craft
                    </h4>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-bold text-gray-400 flex items-center">
                           <Droplets size={12} className="mr-2" /> Oak Aging
                        </span>
                        <p className="text-sm font-lora italic text-gray-600">{wine.oakAging || '18 months in small-grain French oak barrels (30% new).'}</p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-bold text-gray-400 flex items-center">
                           <Timer size={12} className="mr-2" /> Fermentation
                        </span>
                        <p className="text-sm font-lora italic text-gray-600">{wine.fermentation || 'Native yeast fermentation in temperature-controlled stainless steel.'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#faf8f5] p-8 border border-[#e8e6e1] rounded-sm">
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">Production Notes</h5>
                    <p className="text-sm font-lora text-gray-500 leading-relaxed italic">
                      {wine.productionNotes || 'Harvested manually at dawn to preserve aromatic freshness. Grapes undergo a double sorting process before gentle pressing.'}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'Guide' && (
                <div className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="flex items-center text-sm font-bold uppercase tracking-widest border-b border-[#e8e6e1] pb-2 text-[#722f3f]">
                        <GlassWater size={18} className="mr-3" /> Optimal Presentation
                      </h4>
                      <div className="space-y-6 text-sm font-lora italic text-gray-600">
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl font-serif text-[#d4af37] leading-none">01</span>
                          <p>Chill to precisely <span className="font-bold text-[#2a2a2a]">{wine.servingTemp || '64-68°F'}</span> to maintain aromatic integrity.</p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl font-serif text-[#d4af37] leading-none">02</span>
                          <p>Decant for <span className="font-bold text-[#2a2a2a]">{wine.decanting || '30 minutes'}</span> to allow the tannins to soften and breathe.</p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl font-serif text-[#d4af37] leading-none">03</span>
                          <p>Present in a wide-bowled <span className="font-bold text-[#2a2a2a]">{wine.glassware || 'Bordeaux glass'}</span> for maximum oxygen contact.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#faf8f5] p-8 border border-[#e8e6e1] rounded-sm space-y-4 flex flex-col justify-center">
                      <h5 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Aging Potential</h5>
                      <p className="text-2xl font-serif italic text-[#722f3f]">Optimal Drinking: {wine.peakDrinking || '2024—2035'}</p>
                      <p className="text-sm font-lora text-gray-500">This vintage will continue to gain complexity and secondary leather notes with careful cellaring.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="border-t border-[#e8e6e1] pt-24 mb-32">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Average Rating & Breakdown */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif text-[#2a2a2a]">Collector Reviews</h2>
                <div className="flex items-center space-x-4">
                  <div className="text-5xl font-serif text-[#722f3f]">4.8</div>
                  <div className="space-y-1">
                    <div className="flex text-[#d4af37]">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#d4af37" />)}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Based on 42 reviews</span>
                  </div>
                </div>
              </div>

              {/* Rating Distribution Chart */}
              <div className="space-y-3">
                {ratingDistribution.map((row) => (
                  <button 
                    key={row.stars} 
                    onClick={() => setFilterRating(filterRating === row.stars ? null : row.stars)}
                    className={`flex items-center space-x-4 w-full group text-left transition-all ${filterRating && filterRating !== row.stars ? 'opacity-30' : 'opacity-100'}`}
                  >
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest w-12">{row.stars} Stars</span>
                    <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${filterRating === row.stars ? 'bg-[#722f3f]' : 'bg-[#d4af37]'}`} 
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 w-8 text-right">{row.percentage}%</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#722f3f] text-white px-8 py-4 uppercase text-[10px] font-bold tracking-widest hover:bg-[#5a2532] transition-all shadow-sm flex items-center space-x-2">
                  <Plus size={14} /> <span>Write a Review</span>
                </button>
              </div>
            </div>

            {/* AI Review Summary */}
            <div className="w-full md:w-2/3">
              <div className="bg-white p-8 border border-[#722f3f]/10 rounded-sm relative overflow-hidden shadow-sm group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                  <Sparkles size={80} className="text-[#722f3f]" />
                </div>
                <div className="relative z-10 space-y-6">
                   <div className="flex items-center space-x-3 text-[#722f3f]">
                      <Sparkles size={18} />
                      <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">Summarized by G-Town AI</h4>
                   </div>
                   <div className="space-y-4">
                      <p className="text-xl font-lora italic text-gray-700 leading-relaxed">
                        "Collectors consistently praise this vintage for its <span className="text-[#722f3f] font-bold">remarkable depth</span> and structured tannins. Common themes include exceptional aging potential and high value compared to its peers."
                      </p>
                      <div className="flex flex-wrap gap-6 pt-2">
                         <div className="space-y-1">
                            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">Sentiment</span>
                            <p className="text-xs font-bold text-green-600 uppercase">94% Positive</p>
                         </div>
                         <div className="space-y-1">
                            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">Key Attribute</span>
                            <p className="text-xs font-bold text-[#d4af37] uppercase">Complex Finish</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Topic Filters with COUNTS */}
              <div className="mt-8">
                <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest mb-4">Explore Specific Topics</p>
                <div className="flex flex-wrap gap-2">
                  {reviewTopicsWithCounts.map(topic => (
                    <button
                      key={topic.name}
                      onClick={() => setActiveTopic(activeTopic === topic.name ? null : topic.name)}
                      className={`px-4 py-2 text-[10px] uppercase font-bold tracking-widest rounded-full border transition-all ${
                        activeTopic === topic.name ? 'bg-[#722f3f] text-white border-[#722f3f]' : 'bg-white text-gray-400 border-[#e8e6e1] hover:border-[#722f3f] hover:text-[#722f3f]'
                      }`}
                    >
                      {topic.name} <span className="ml-1 opacity-50">({topic.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Filtering & Sorting Controls */}
          <div className="bg-[#faf8f5] p-6 border border-[#e8e6e1] rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-3">
                   <Filter size={14} className="text-[#722f3f]" />
                   <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Filter by:</span>
                </div>
                <label className="flex items-center space-x-2 cursor-pointer group">
                   <input type="checkbox" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} className="accent-[#722f3f] w-3 h-3" />
                   <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-black">Verified Only</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                   <input type="checkbox" checked={hasPhotosOnly} onChange={(e) => setHasPhotosOnly(e.target.checked)} className="accent-[#722f3f] w-3 h-3" />
                   <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-black">With Photos</span>
                </label>
             </div>
             <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Sort By:</span>
                <select value={reviewSort} onChange={(e) => setReviewSort(e.target.value as SortType)} className="bg-transparent text-[10px] uppercase font-bold tracking-widest outline-none text-[#722f3f]">
                   <option value="Relevant">Most Relevant</option>
                   <option value="Helpful">Most Helpful</option>
                   <option value="Positive">Highest Rated</option>
                   <option value="Critical">Lowest Rated</option>
                   <option value="Recent">Most Recent</option>
                </select>
             </div>
          </div>

          {/* Individual Reviews Grid with Avatars, Replies and Menus */}
          <div className="grid grid-cols-1 gap-12">
            {filteredReviews.length > 0 ? filteredReviews.map((review) => (
              <div key={review.id} className="bg-white p-10 border border-[#e8e6e1] shadow-sm space-y-8 group hover:border-[#722f3f] transition-all relative">
                
                {/* Review Header with Avatar and Menu */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#e8e6e1] bg-gray-50">
                      <img src={review.userAvatar || `https://ui-avatars.com/api/?name=${review.userName}`} alt={review.userName} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-lg font-serif">{review.userName}</span>
                        {review.isVerified && (
                          <div className="flex items-center text-accent text-[9px] font-bold uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded-full">
                            <CheckCircle2 size={10} className="mr-1" /> Verified
                          </div>
                        )}
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{review.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex text-[#d4af37]">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < review.rating ? '#d4af37' : 'none'} />)}
                    </div>
                    {/* Three-dot menu */}
                    <div className="relative">
                       <button onClick={() => setActiveMenuId(activeMenuId === review.id ? null : review.id)} className="p-2 text-gray-300 hover:text-black transition-colors">
                          <MoreVertical size={20} />
                       </button>
                       {activeMenuId === review.id && (
                         <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#e8e6e1] shadow-xl z-20 py-2 animate-in zoom-in-95 duration-200">
                           <button className="w-full text-left px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:bg-red-50 hover:text-red-500 flex items-center space-x-2">
                              <Flag size={14} /> <span>Flag as Inappropriate</span>
                           </button>
                           <button className="w-full text-left px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:bg-gray-50 hover:text-black flex items-center space-x-2">
                              <AlertTriangle size={14} /> <span>Flag as Spam</span>
                           </button>
                         </div>
                       )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                   <div className="md:col-span-3 space-y-4">
                      <p className="text-gray-600 font-lora italic leading-relaxed text-lg">"{review.comment}"</p>
                      <div className="flex flex-wrap gap-2">
                        {review.topics.map(t => (
                          <span key={t} className="px-2 py-1 bg-[#faf8f5] text-[8px] uppercase font-bold tracking-widest text-gray-400 border border-[#e8e6e1]">#{t}</span>
                        ))}
                      </div>
                   </div>
                   {review.hasPhotos && (
                     <div className="flex space-x-2">
                        <div className="aspect-square w-20 bg-gray-100 rounded-sm overflow-hidden border border-[#e8e6e1] group-hover:border-[#722f3f] transition-colors relative cursor-pointer">
                           <img src="https://images.unsplash.com/photo-1510850478944-d5ec3ca2c5fe?auto=format&fit=crop&q=80&w=200" alt="Review Photo" className="w-full h-full object-cover opacity-80" />
                        </div>
                     </div>
                   )}
                </div>

                {/* OFFICIAL G-TOWN REPLY */}
                {review.officialReply && (
                  <div className="bg-[#722f3f]/5 border-l-4 border-[#722f3f] p-6 rounded-r-sm space-y-3 animate-in fade-in duration-500">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-[#722f3f]">
                         <CheckCircle2 size={14} />
                         <span className="text-[10px] uppercase font-bold tracking-widest">{review.officialReply.author}</span>
                      </div>
                      <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">{review.officialReply.date}</span>
                    </div>
                    <p className="text-sm font-lora italic text-gray-700 leading-relaxed">"{review.officialReply.text}"</p>
                  </div>
                )}

                <div className="pt-8 border-t border-[#faf8f5] flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <ThumbsUp size={12} className="text-[#d4af37]" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                      {review.helpfulCount} collectors found this helpful
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">Was this helpful?</span>
                    <div className="flex space-x-4">
                       <button className="flex items-center space-x-1.5 text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-[#722f3f] transition-colors">
                          <ThumbsUp size={14} /> <span>Yes</span>
                       </button>
                       <button className="flex items-center space-x-1.5 text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-red-500 transition-colors">
                          <ThumbsDown size={14} /> <span>No</span>
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="py-24 text-center border-2 border-dashed border-[#e8e6e1] rounded-sm">
                 <Filter size={48} className="mx-auto text-gray-200 mb-6" />
                 <h3 className="text-xl font-serif">No reviews match your filter</h3>
                 <button onClick={() => { setFilterRating(null); setVerifiedOnly(false); setHasPhotosOnly(false); setActiveTopic(null); }} className="mt-6 text-[#722f3f] text-[10px] uppercase font-bold tracking-widest border-b border-[#722f3f] pb-1">Reset all filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t border-[#e8e6e1] pt-24">
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-[#d4af37] text-xs uppercase tracking-[0.5em] font-bold">You May Also Appreciate</h4>
          <h2 className="text-5xl font-serif italic">The Curator's Choice</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {relatedWines.map(w => (
            <WineCard key={w.id} wine={w} onClick={() => { onNavigate('product', { id: w.id }); window.scrollTo(0, 0); }} onAddToCart={(e) => { e.stopPropagation(); onAddToCart(w, 1); }} onToggleWishlist={() => onToggleWishlist(w)} isInWishlist={false} />
          ))}
        </div>
      </section>

      {/* Sticky Add to Cart (Desktop/Mobile) */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#faf8f5]/90 backdrop-blur-md border-t border-[#e8e6e1] py-4 px-6 z-[45] transition-all duration-500 transform ${isStickyVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <div className="hidden sm:flex items-center space-x-6">
            <div className="w-12 aspect-[3/4] bg-white border border-[#e8e6e1] rounded-sm overflow-hidden flex-shrink-0">
              <img src={wine.imageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="font-serif text-lg leading-none">{wine.name}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">{wine.vintage} Vintage • ${wine.price}</p>
            </div>
          </div>
          <div className="flex-grow sm:flex-grow-0 flex items-center space-x-4">
            <div className="hidden md:flex items-center border border-[#e8e6e1] rounded-sm h-12 bg-white">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 h-full hover:text-[#722f3f] transition-colors"><Minus size={14} /></button>
              <span className="w-8 text-center font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 h-full hover:text-[#722f3f] transition-colors"><Plus size={14} /></button>
            </div>
            <button 
              onClick={() => onAddToCart(wine, quantity)}
              className="flex-grow sm:w-64 bg-[#722f3f] text-white px-8 py-3 h-12 uppercase tracking-[0.2em] font-bold text-[10px] hover:bg-[#5a2532] transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-3"
            >
              <ShoppingBag size={14} />
              <span>Add to Cellar</span>
            </button>
            <button 
              onClick={() => onToggleWishlist(wine)}
              className={`h-12 w-12 border border-[#e8e6e1] flex items-center justify-center transition-all shadow-sm ${isInWishlist ? 'bg-[#722f3f] text-white' : 'hover:text-red-500 bg-white'}`}
            >
              <Heart size={20} className={isInWishlist ? 'fill-white' : ''} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
