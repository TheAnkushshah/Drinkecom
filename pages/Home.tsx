
import React, { useState, useEffect, useRef } from 'react';
import { MOCK_WINES } from '../constants';
import WineCard from '../components/WineCard';
import QuickViewModal from '../components/QuickViewModal';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  GraduationCap,
  Wine as WineIcon,
  Quote,
  Mail,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  Headphones,
  Heart,
  Crown,
  Gem,
  GlassWater,
  MapPin,
  Maximize,
  Search,
  CheckCircle2,
  Newspaper,
  ExternalLink,
  Play,
  FileText,
  Download,
  Plus,
  Minus,
  HelpCircle,
  Star,
  Volume2,
  VolumeX
} from 'lucide-react';
import { Wine } from '../types';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (wine: Wine) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onAddToCart }) => {
  const featuredWines = MOCK_WINES.slice(0, 3);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [quickViewWine, setQuickViewWine] = useState<Wine | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Brands Carousel Ref & Logic
  const brandsRef = useRef<HTMLDivElement>(null);
  const scrollBrands = (direction: 'left' | 'right') => {
    if (brandsRef.current) {
      const { scrollLeft, clientWidth } = brandsRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      brandsRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      text: "The 2019 Estate Cabernet is quite simply the finest domestic release I've tasted in a decade. G-Town continues to set the standard for elegance.",
      author: "Marcus Vane",
      title: "Senior Critic, The Vintage Journal"
    },
    {
      text: "Exceptional service and curate-grade selections. The Wine Club has completely transformed our Friday evenings with rare, small-batch finds.",
      author: "Elena Rodriguez",
      title: "Private Collector"
    },
    {
      text: "From the educational notes to the flawless delivery, G-Town treats every bottle like a masterpiece. Truly a world-class experience.",
      author: "David Chen",
      title: "Sommelier, L'Aube"
    }
  ];

  const faqs = [
    {
      question: "How do I secure allocations for rare library vintages?",
      answer: "Rare allocations and library vintages are released quarterly, with priority access granted to our Platinum and Gold Circle members. Members receive personal notifications 72 hours prior to public availability to secure these limited-production masterpieces."
    },
    {
      question: "What measures are taken for temperature-controlled global shipping?",
      answer: "We utilize specialized, climate-stabilized shipping containers and insulated packaging for all transcontinental dispatches. Every shipment is monitored via real-time sensors to ensure your vintage arrives in the exact condition it left our cellar."
    },
    {
      question: "Can I schedule a private consultation with a Master Sommelier?",
      answer: "Absolutely. Our Concierge Mastery service allows distinguished collectors to schedule private one-on-one sessions for cellar building, event pairing, or technical investment advice. Platinum members enjoy complimentary monthly consultations."
    },
    {
      question: "What is the provenance guarantee for G-Town selections?",
      answer: "Every bottle in our portfolio is sourced directly from the estate or verified heritage cellars. We provide a digital Certificate of Provenance with every purchase above $500, detailing the storage history and authentic chain of custody."
    },
    {
      question: "Are there exclusive benefits for corporate gifting and events?",
      answer: "G-Town offers bespoke corporate accounts that include personalized engraving, private sommelier-led virtual tastings, and dedicated account managers to handle complex multi-address global gifting logistics during the festive season."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="animate-in fade-in duration-1000">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .text-outline-gold {
          -webkit-text-stroke: 1px rgba(212, 175, 55, 0.1);
          color: transparent;
        }
      `}</style>

      {/* Hero Section with Video */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://drinkecom-cdn.b-cdn.net/Video3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative max-w-7xl mx-auto px-6 w-full z-10 text-[#faf8f5]">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            <h4 className="text-[#d4af37] uppercase tracking-[0.4em] font-bold text-[0.60rem] md:text-xs animate-in slide-in-from-top-4 duration-700">Since 2005</h4>
            <h1 className="text-4xl md:text-8xl font-serif leading-[1.1] tracking-tight animate-in slide-in-from-left-4 duration-1000 delay-100">
              Discover Premium <br />
              <span className="italic">Wines from Top #1 G-Town</span>
            </h1>
            <p className="text-md md:text-xl font-lora opacity-90 leading-relaxed max-w-xl italic animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              Crafted with Passion, Delivered with Excellence. Every bottle tells the story of our valley's soul.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4 animate-in fade-in duration-1000 delay-500">
              <button
                onClick={() => onNavigate('shop')}
                className="bg-[#722f3f] hover:bg-[#5a2532] text-white px-12 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all shadow-2xl hover:scale-105"
              >
                Shop Collection
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-12 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Audio Toggle Button - Ultra Luxury Integration */}
        <div className="absolute bottom-6 left-6 z-20 animate-in fade-in duration-1000 delay-700">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="group flex items-center space-x-4 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-full hover:bg-white/10 hover:border-[#d4af37]/30 transition-all duration-500"
            title={isMuted ? "Unmute Ambiance" : "Mute Ambiance"}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#722f3f]/20 border border-[#d4af37]/20 group-hover:bg-[#722f3f] transition-all duration-500">
              {isMuted ? (
                <VolumeX size={18} className="text-[#d4af37] group-hover:text-white transition-colors" />
              ) : (
                <Volume2 size={18} className="text-[#d4af37] group-hover:text-white transition-colors" />
              )}
            </div>
            <span className="pr-4 text-[9px] uppercase tracking-[0.3em] font-bold text-white/60 group-hover:text-white transition-colors hidden md:block">
              {isMuted ? "Ambiance Off" : "Ambiance On"}
            </span>
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-[2.1rem] md:text-5xl font-serif text-[#2a2a2a] mb-6">Signature Releases</h2>
              <p className="text-gray-500 font-lora italic text-md md:text-lg leading-relaxed">
                Hand-picked by our Master Sommelier, these vintages represent the pinnacle of this season's harvest.
              </p>
            </div>
            <button
              onClick={() => onNavigate('shop')}
              className="group flex items-center space-x-4 text-[#722f3f] uppercase tracking-[0.3em] text-[10px] font-bold"
            >
              <span>View Full Cellar</span>
              <div className="w-10 h-10 border border-[#722f3f] rounded-full flex items-center justify-center group-hover:bg-[#722f3f] group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredWines.map(wine => (
              <WineCard
                key={wine.id}
                wine={wine}
                onClick={() => onNavigate('product', { id: wine.id })}
                onAddToCart={(e) => { e.stopPropagation(); onAddToCart(wine); }}
                onQuickView={(e) => { e.stopPropagation(); setQuickViewWine(wine); }}
                isInWishlist={false} // Would need global state check
                onToggleWishlist={(e) => { e.stopPropagation(); }} // Placeholder
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Premier Women-Friendly Liquor Emporium */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#faf8f5]/50 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="text-[#722f3f] uppercase tracking-[0.5em] font-bold text-xs">G-TOWN WINES</h4>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight text-[#2a2a2a]">
                  NCR's Premier <br />
                  <span className="italic text-[#722f3f]">Women-Friendly</span> <br />
                  Liquor Emporium
                </h2>
                <div className="h-1 w-24 bg-[#d4af37]"></div>
              </div>

              <p className="text-xl font-lora italic text-gray-600 leading-relaxed">
                Discover an exquisite collection of world-class wines and spirits, curated with unparalleled sophistication and offered at irresistible prices that redefine luxury accessibility.
              </p>

              <div className="space-y-6">
                <div className="p-8 bg-[#faf8f5] border-l-4 border-[#722f3f] shadow-sm">
                  <h3 className="text-xl font-serif mb-3">Every Celebration Deserves Excellence</h3>
                  <p className="text-sm font-lora text-gray-500 leading-relaxed italic">
                    In a world of fleeting moments, elevate your gatherings with authentic masterpieces. For the discerning host who demands perfection—respectfully sourced, impeccably presented—G-TOWN WINES stands alone as NCR's unrivaled sanctuary for connoisseurs.
                  </p>
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#722f3f] flex items-center">
                  <Crown size={16} className="mr-3 text-[#d4af37]" /> Authenticity. Elegance. Uncompromising Quality.
                </p>
                <p className="text-sm font-lora text-gray-400">
                  The only destination where women celebrate freely amidst premium selections that transform every occasion into an extraordinary affair.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-center lg:text-left mb-8">How ? G-TOWN WINES Redefines Luxury</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Gem size={28} className="text-[#d4af37]" />,
                    title: "Exclusive Collections",
                    desc: "Handpicked vintages from the world's finest vineyards—rarities you won't find elsewhere."
                  },
                  {
                    icon: <Crown size={28} className="text-[#d4af37]" />,
                    title: "Irresistible Prestige Pricing",
                    desc: "Luxury without compromise: Premium bottles at prices that captivate the elite palate."
                  },
                  {
                    icon: <Heart size={28} className="text-[#d4af37]" />,
                    title: "Women-First Elegance",
                    desc: "NCR's pioneering women-friendly haven, where sophistication meets seamless celebration."
                  },
                  {
                    icon: <GlassWater size={28} className="text-[#d4af37]" />,
                    title: "Celebration Perfected",
                    desc: "From intimate soirées to grand galas, stock up on bubbly perfection that commands attention."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-[#faf8f5] p-8 rounded-sm border border-[#e8e6e1] hover:border-[#722f3f] transition-all group">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                    <h4 className="text-lg font-serif mb-2 group-hover:text-[#722f3f] transition-colors">{feature.title}</h4>
                    <p className="text-xs font-lora text-gray-500 leading-relaxed italic">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 text-center lg:text-left">
                <p className="text-lg font-serif italic text-[#722f3f]">
                  G-TOWN WINES: Where Authenticity Meets Opulence.
                </p>
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 mt-2">
                  Your Legacy of Extraordinary Moments Begins Here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY LEGACY MILESTONES SECTION */}
      <section className="py-24 bg-[#2a2a2a] text-[#faf8f5] relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { value: '25', label: 'Years Legacy' },
              { value: '2500', label: 'Supreme Brands' },
              { value: '70', label: 'Metropolitan Cities' },
              { value: '450', label: 'Exclusive Outlets' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="relative inline-block">
                  <h3 className="text-5xl md:text-7xl font-serif text-[#d4af37] leading-none mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </h3>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#d4af37]/40 group-hover:w-16 transition-all duration-500"></div>
                </div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-gray-400 max-w-[120px] mx-auto leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW GRANDEUR & WHOLESALE PRESTIGE MANIFESTO SECTION */}
      <section className="py-32 bg-[#111111] text-[#faf8f5] relative overflow-hidden">
        {/* Decorative background "Ghost Text" */}
        <div className="absolute -top-20 -left-20 text-[20vw] font-serif font-bold text-white/[0.02] pointer-events-none select-none">
          G-TOWN
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h4 className="text-[#d4af37] uppercase tracking-[0.8em] font-bold text-xs mb-4">The Grandeur Manifesto</h4>
            <h2 className="text-4xl md:text-7xl font-serif leading-tight">
              Women-Friendly Elegance <br />
              <span className="italic text-[#d4af37]">Unprecedented Wholesale Prestige</span>
            </h2>
          </div>

          <div className="flex flex-col items-center mb-32">
            <div className="max-w-4xl text-center space-y-12">
              <h3 className="text-3xl md:text-5xl font-serif italic text-[#faf8f5] leading-relaxed">
                "Be Original. Acquire the Authentic."
              </h3>
              <p className="text-xl font-lora italic text-gray-400 leading-relaxed max-w-3xl mx-auto">
                A philosophy upheld with unwavering devotion—delivering an unparalleled shopping sanctuary for women amid NCR's scarcity of refined liquor destinations. G-Town Wines emerges as the pioneering bastion of safety, authenticity, and exclusivity, unveiling niche masterpieces at wholesale prices that redefine opulence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            <div className="bg-white/5 border-t border-[#d4af37]/30 p-10 space-y-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 border border-[#d4af37] rounded-full flex items-center justify-center mb-8">
                <Gem size={20} className="text-[#d4af37]" />
              </div>
              <h4 className="text-2xl font-serif">One-Stop Connoisseur's Vault</h4>
              <p className="text-sm font-lora text-gray-400 leading-relaxed italic">
                Curated masterpieces from India and beyond—legendary whiskies, world-class wines, artisanal beers. From exquisite low-volume pints to ultra-premium icons, all at prices that command loyalty.
              </p>
            </div>
            <div className="bg-white/5 border-t border-[#d4af37]/30 p-10 space-y-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 border border-[#d4af37] rounded-full flex items-center justify-center mb-8">
                <Crown size={20} className="text-[#d4af37]" />
              </div>
              <h4 className="text-2xl font-serif">Exclusive Collections, Irresistible Prestige</h4>
              <p className="text-sm font-lora text-gray-400 leading-relaxed italic">
                Rare selections sourced globally, presented at wholesale elegance—luxury accessible only to the elite.
              </p>
            </div>
            <div className="bg-white/5 border-t border-[#d4af37]/30 p-10 space-y-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 border border-[#d4af37] rounded-full flex items-center justify-center mb-8">
                <Heart size={20} className="text-[#d4af37]" />
              </div>
              <h4 className="text-2xl font-serif">Pioneering Women-First Sophistication</h4>
              <p className="text-sm font-lora text-gray-400 leading-relaxed italic">
                NCR's first sanctuary where women revel in seamless discovery, surrounded by authenticity and unmatched value.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-y border-white/10 py-24">
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-[#d4af37] text-xs uppercase tracking-[0.5em] font-bold">Elevate Every Occasion to Mastery</h4>
                <h3 className="text-5xl font-serif italic">Every Celebration Demands Distinction</h3>
              </div>
              <p className="text-lg font-lora italic text-gray-300 leading-relaxed">
                Amid life's crescendo, the clarion call to curate brilliance resounds. No revelry achieves transcendence without impeccable provenance. For the visionary host who orchestrates with precision—respectful, flawless, eternal—authenticity is paramount.
              </p>
              <div className="space-y-4">
                <h4 className="text-2xl font-serif text-[#d4af37]">G-Town Wines: The Sole Guarantee of Grandeur.</h4>
                <p className="text-sm uppercase tracking-[0.3em] font-bold text-gray-500 italic">Where wholesale whispers meet world-class wonders. Your gateway to the pinnacle wine lifestyle experience.</p>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 border-2 border-[#d4af37]/20 transform rotate-3 translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Collection"
                className="w-full h-full object-cover relative z-10 filter brightness-75 contrast-125"
              />
            </div>
          </div>

          <div className="mt-24 text-center space-y-4">
            <p className="text-3xl font-serif italic text-[#faf8f5]">G-Town Wines: Where Originality Commands the Extraordinary.</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-[10px] uppercase tracking-[0.6em] font-bold text-[#d4af37] mt-8">
              <span>#1 Authenticity</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-white/20 rounded-full"></span>
              <span>#2 Exclusivity</span>
              <span className="hidden md:block w-1.5 h-1.5 bg-white/20 rounded-full"></span>
              <span>#3 Unrivaled Elegance</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: G-TOWN WINES OUTLETS */}
      <section className="py-32 bg-[#0a0a0a] text-[#faf8f5] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.15] mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Vineyard Background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-6">
            <h4 className="text-[#d4af37] uppercase tracking-[0.8em] font-bold text-[10px]">G-TOWN WINES OUTLETS</h4>
            <h2 className="text-4xl md:text-6xl font-serif">The Pinnacle of Premium Liquor Refinement</h2>
            <div className="h-0.5 w-24 bg-[#d4af37] mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif italic text-[#d4af37]">Replenish Your Collection in Grandeur</h3>
                <p className="text-lg font-lora italic text-gray-400 leading-relaxed">
                  Renowned across NCR for delivering uncompromising premium quality, G-Town Wines pioneers modern luxury retail with an expansive network exceeding <span className="text-white font-bold">450 exquisite outlets</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-[#d4af37] transition-all">
                  <MapPin size={32} className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-serif mb-2">Omnipresent Luxury</h4>
                  <p className="text-xs font-lora text-gray-500 uppercase tracking-widest leading-relaxed">450+ Strategically Located Destinations Across NCR.</p>
                </div>
                <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-[#d4af37] transition-all">
                  <Maximize size={32} className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-serif mb-2">Architectural Opulence</h4>
                  <p className="text-xs font-lora text-gray-500 uppercase tracking-widest leading-relaxed">Designed to facilitate an unparalleled sensory discovery.</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden shadow-2xl w-full">

              {/* IMAGE WRAPPER */}
              <div className="
              relative
              w-full
              min-h-[320px]        /* mobile */
              sm:min-h-[380px]     /* small screens */
              md:min-h-[420px]     /* tablets */
              lg:aspect-square     /* desktops */
              overflow-hidden
              ">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200"
                  alt="Flagship Interior"
                  className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-transform
                  duration-[3000ms]
                  group-hover:scale-110
                "
                />
              </div>

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* TEXT CONTENT */}
              <div className="
                        absolute
                        bottom-6 sm:bottom-8 lg:bottom-10
                        left-6 sm:left-8 lg:left-10
                        right-6 sm:right-8 lg:right-10
                        space-y-3 sm:space-y-4
                      ">
                <h4 className="text-[#d4af37] text-[10px] uppercase tracking-[0.5em] font-bold">
                  Our Flagship Masterpiece
                </h4>

                <h3 className="text-2xl sm:text-3xl font-serif">
                  A Breathtaking <span className="italic">35,000 sq. ft.</span> Sanctuary
                </h3>

                <p className="text-sm font-lora text-gray-300 italic max-w-xl">
                  The largest of its kind—where connoisseurs immerse in world-class selections,
                  redefining opulence in every acquisition.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-white/10 text-center space-y-6">
            <h3 className="text-2xl font-serif italic text-white">Elevate Your Stock to Legendary Status.</h3>
            <p className="text-[10px] uppercase tracking-[0.8em] font-bold text-[#d4af37]">Where Premium Meets Monumental Scale.</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: CURATED PORTFOLIO OF PRESTIGE */}
      <section className="py-32 bg-[#0d0d0d] text-[#faf8f5] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h4 className="text-[#d4af37] uppercase tracking-[0.8em] font-bold text-[10px]">G-TOWN WINES</h4>
            <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tight">Curated Portfolio of Prestige</h2>
            <div className="h-0.5 w-24 bg-[#d4af37] mx-auto mt-8"></div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20 space-y-8 animate-in fade-in duration-1000">
            <h3 className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed">An Exquisite Symphony of the World's Finest</h3>
            <p className="text-lg font-lora italic text-gray-400 leading-relaxed">
              From rare specialty spirits and timeless bar icons to legendary wines and celestial champagnes, discover G-Town's unrivaled mastery:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 border border-white/10 mb-24">
            {[
              "Scotch Whisky", "Irish Whiskey", "World Whiskies",
              "Cognac & Brandy", "Vodka", "Gin",
              "Liqueurs & Bitters", "Rum", "Champagne",
              "Tequila & Mezcal", "Aperitifs", "Fine Wines"
            ].map((cat, i) => (
              <div key={i} className="bg-[#0d0d0d] p-12 flex flex-col items-center justify-center text-center space-y-6 hover:bg-white/[0.03] transition-all duration-500 group cursor-default">
                <div className="text-[#d4af37] opacity-30 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500">
                  <WineIcon size={28} strokeWidth={1} />
                </div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-500 group-hover:text-white transition-colors">{cat}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-20">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-serif italic text-white">The Most Comprehensive Collection in Existence.</h3>
              <p className="text-xs uppercase tracking-[0.6em] font-bold text-gray-500">Where every pour tells a story of unparalleled heritage and craftsmanship.</p>
            </div>

            {/* Logo showcase section - Animated Brands Carousel */}
            <div className="relative group/brands">
              {/* Navigation Arrows (Strictly Preserved) */}
              <button
                onClick={() => scrollBrands('left')}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/40 border border-[#d4af37]/20 rounded-full text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all opacity-0 group-hover/brands:opacity-100 backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>

              <div
                ref={brandsRef}
                className="overflow-x-hidden mask-edges opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-[1000ms]"
              >
                <div className="animate-marquee py-6">
                  {[
                    "BRANCOTT ESTATE", "SAINTE MARGUERITE", "KENWOOD VINEYARDS", "CAMPO VIEJO", "CHURCH ROAD", "GEORGE WYNDHAM", "JACOB'S CREEK",
                    "ST HUGO", "YSIOS", "STONELEIGH", "PASTIS 51", "LILLET", "SUZE",
                    "RICARD", "PERNOD", "ITALICUS", "OJO DE TIGRE", "CODIGO", "OLMECA",
                    "DEL MAGUEY", "AVION", "ALTOS", "G.H.MUMM", "PERRIER JOUET", "HAVANA CLUB",
                    "MALIBU", "MINTTU", "KAHLUA", "RAMAZZOTTI", "BEEFEATER LONDON", "KI NO BI",
                    "MONKEY 47", "PLYMOUTH GIN", "UNGAVA", "MALFY", "ABSOLUT ELYX", "ABSOLUT.",
                    "L.ORBE", "OSTOYA VODKA", "ARARAT", "AUGIER", "MARTELL", "BLENDERS PRIDE", "J.P. WISER'S", "L0T 40",
                    "RABBIT HOLE", "SMOOTH AMBLER", "TX", "IMPERIAL BLUE", "JEFFERSON'S", "ROYAL STAG", "JAMESON", "METHOD AND MADNESS", "MIDLETON", "POWERS",
                    "REDBREAST", "SPOT WHISKEYS", "100 PIPERS", "ABERLOUR", "BALLANTINE'S", "LONG JOHN",
                    "PASSPORT SCOTCH", "ROYAL SALUTE", "SCAPA", "SECRET SPEYSIDE", "SOMETHING SPECIAL", "CHIVAS REGAL",
                    "IMPERIAL", "THE GLENLIVET"
                  ].map((brand, i) => (
                    <div key={i} className="flex-shrink-0 flex items-center justify-center min-w-[200px] px-8 py-6 border-x border-white/5 group relative">
                      <span className="text-xl md:text-2xl font-serif tracking-[0.4em] font-bold text-white group-hover:text-[#d4af37] transition-colors whitespace-nowrap">{brand}</span>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-px bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollBrands('right')}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/40 border border-[#d4af37]/20 rounded-full text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all opacity-0 group-hover/brands:opacity-100 backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="pt-24 border-t border-white/5 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#d4af37] rotate-45"></div>
              <p className="text-2xl md:text-3xl font-serif italic text-[#d4af37] tracking-wide">G-Town Wines: Mastery Beyond Measure.</p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mt-12 text-[10px] uppercase tracking-[0.5em] font-bold text-gray-600">
                <span>#1 Authenticity</span>
                <span>#2 Exclusivity</span>
                <span>#3 Unrivaled Elegance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: IN THE MEDIA */}
      <section className="py-32 bg-[#faf8f5] relative overflow-hidden border-y border-[#e8e6e1]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h4 className="text-[#722f3f] uppercase tracking-[0.8em] font-bold text-[10px]">G-TOWN WINES</h4>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">In the Media: <br /><span className="italic text-[#d4af37]">Where Prestige Meets Publication</span></h2>
            <div className="h-0.5 w-24 bg-[#722f3f] mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-4xl font-serif italic text-[#2a2a2a] leading-relaxed">NCR's Pinnacle of Luxury, Chronicled by the Elite</h3>
              <p className="text-lg font-lora italic text-gray-600 leading-relaxed">
                G-Town Wines commands the spotlight among discerning tastemakers, connoisseurs, and luxury arbiters. From exclusive unveilings to opulent milestones, witness our ascent as the unrivaled sovereign of premium spirits.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { pub: "ECONOMIC TIMES", text: "NCR's 35,000 sq. ft. Liquor Palace Sets New Luxury Benchmark" },
                { pub: "FOOD & WINE MAGAZINE", text: "G-Town: The Safe Haven for Discerning Hosts" },
                { pub: "BUSINESS STANDARD", text: "From Pints to Prestige: G-Town's 450+ Outlet Empire" }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white border border-[#e8e6e1] hover:border-[#d4af37] transition-all group shadow-sm">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#722f3f] mb-3 group-hover:text-[#d4af37] transition-colors">{item.pub}</h4>
                  <p className="text-sm font-serif italic text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-32">
            <div className="flex items-center space-x-4 mb-12">
              <Newspaper size={24} className="text-[#d4af37]" />
              <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-[#722f3f]">Premier Publications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "VOGUE INDIA", date: "December 2025", title: "NCR's Opulent Bastion of Rare Vintages", desc: "G-Town's 35,000 sq. ft. flagship redefines luxury retail, curating whiskies and champagnes that transcend mere acquisition." },
                { name: "ROBB REPORT", date: "November 2025", title: "The Women-First Empire Revolutionizing Premium Spirits", desc: "Pioneering authenticity at wholesale prestige, G-Town delivers niche masterpieces to NCR's elite." },
                { name: "LUXURY DAILY", date: "October 2025", title: "G-Town Unveils World's Most Comprehensive Portfolio", desc: "From rare Scotch single malts to celestial champagnes, G-Town's vaulted collection positions it as the ultimate connoisseur's dominion." }
              ].map((pub, idx) => (
                <div key={idx} className="space-y-6 flex flex-col border-t border-gray-200 pt-8 group">
                  <div className="flex justify-between items-start">
                    <span className="text-lg font-bold font-serif tracking-widest text-gray-300 group-hover:text-[#d4af37] transition-colors">{pub.name}</span>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">{pub.date}</span>
                  </div>
                  <h4 className="text-xl font-serif italic leading-tight group-hover:text-[#722f3f] transition-colors">{pub.title}</h4>
                  <p className="text-xs font-lora italic text-gray-500 leading-relaxed flex-grow">{pub.desc}</p>
                  <button className="flex items-center space-x-2 text-[#722f3f] text-[9px] uppercase font-bold tracking-widest border-b border-[#722f3f] pb-1 w-fit mt-4 hover:opacity-70">
                    <span>Exclusive Feature</span>
                    <ExternalLink size={10} />
                  </button>
                </div>
              ))}
            </div>

            {/* NEW: View All Press Archives Button */}
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => onNavigate('education')}
                className="group flex items-center space-x-4 text-[#722f3f] uppercase tracking-[0.3em] text-[10px] font-bold"
              >
                <span>View Full Press Archives</span>
                <div className="w-10 h-10 border border-[#722f3f] rounded-full flex items-center justify-center group-hover:bg-[#722f3f] group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-gray-200 pt-24">
            <div className="space-y-12">
              <div className="flex items-center space-x-4">
                <FileText size={24} className="text-[#d4af37]" />
                <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-[#722f3f]">Official Press Releases</h3>
              </div>
              <div className="space-y-8">
                {[
                  { date: "Dec 15, 2025", title: "Flagship Expansion: 35,000 sq. ft. of Pure Opulence" },
                  { date: "Nov 10, 2025", title: "\"Be Original\" Campaign: Wholesale Luxury for the Elite" },
                  { date: "Oct 5, 2025", title: "Celebrates 450+ Outlets: The Pinnacle Achieved" }
                ].map((pr, i) => (
                  <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-white p-4 -mx-4 transition-all border-b border-gray-50">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-[#d4af37] uppercase">{pr.date}</span>
                      <p className="font-serif italic text-[#2a2a2a] group-hover:text-[#722f3f] transition-colors">{pr.title}</p>
                    </div>
                    <Download size={16} className="text-gray-300 group-hover:text-[#722f3f] transition-colors" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-12">
              <div className="flex items-center space-x-4">
                <Play size={24} className="text-[#d4af37]" />
                <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-[#722f3f]">In the Elite Spotlight</h3>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { brand: "NDTV LUXE", title: "CEO Interview: \"Redefining Spirits for the Modern Connoisseur\"" },
                  { brand: "ET NOW", title: "\"Why G-Town Commands Premium Loyalty\" Live Analysis" },
                  { brand: "INSTAGRAM", title: "Live with Sommelier Extraordinaire - 50K+ Views" }
                ].map((spot, i) => (
                  <div key={i} className="flex items-center p-6 bg-white border border-[#e8e6e1] hover:shadow-lg transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-[#faf8f5] rounded-full flex items-center justify-center mr-6 group-hover:bg-[#722f3f] group-hover:text-white transition-all">
                      <Play size={14} fill="currentColor" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-[#722f3f]">{spot.brand}</span>
                      <p className="font-serif text-sm leading-tight text-gray-600 mt-1">{spot.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-32 pt-24 border-t border-[#722f3f]/10 text-center space-y-8">
            <p className="text-3xl md:text-5xl font-serif italic text-[#722f3f]">G-Town Wines: Not Merely News—Legend in the Making.</p>
            <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-gray-400">As chronicled by those who define luxury.</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 pt-12">
              <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-[#722f3f]">
                <Mail size={16} />
                <span>press@gtownwines.com</span>
              </div>
              <button className="bg-[#722f3f] text-white px-8 py-4 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-[#5a2532] transition-all shadow-xl">
                Subscribe to Elite Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW LUXURY FAQ SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-6">
            <h4 className="text-[#722f3f] uppercase tracking-[0.8em] font-bold text-[10px]">CONNOISSEUR CODEX</h4>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Mastering the <br /><span className="italic text-[#d4af37]">G-Town Experience</span></h2>
            <div className="h-0.5 w-24 bg-[#722f3f] mx-auto mt-8"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border border-[#e8e6e1] transition-all duration-500 overflow-hidden ${activeFaq === idx ? 'bg-[#faf8f5] border-[#722f3f] shadow-xl' : 'bg-white hover:border-gray-400'}`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-8 py-8 flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-6">
                    <span className="text-[10px] font-bold text-[#d4af37] tracking-widest">0{idx + 1}</span>
                    <h3 className={`text-lg md:text-xl font-serif transition-colors ${activeFaq === idx ? 'text-[#722f3f]' : 'text-[#2a2a2a] group-hover:text-[#722f3f]'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`transition-transform duration-500 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                    {activeFaq === idx ? <Minus size={20} className="text-[#722f3f]" /> : <Plus size={20} className="text-gray-300 group-hover:text-[#722f3f]" />}
                  </div>
                </button>
                <div className={`px-8 transition-all duration-500 ease-in-out ${activeFaq === idx ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-14">
                    <p className="text-sm md:text-base font-lora italic text-gray-500 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                    <div className="mt-8 pt-8 border-t border-[#722f3f]/5">
                      <button className="text-[9px] uppercase font-bold tracking-[0.4em] text-[#722f3f] flex items-center group/btn">
                        <span>Consult our curator</span>
                        <ArrowRight size={12} className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center space-y-6">
            <div className="p-4 bg-[#faf8f5] rounded-full">
              <HelpCircle size={32} className="text-[#d4af37] opacity-50" />
            </div>
            <p className="text-center text-sm font-lora italic text-gray-400 max-w-md">
              Inquisitive minds deserve meticulous clarity. Should your specific query remain unaddressed, our Concierge Mastery cadre awaits your instruction.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#722f3f] text-[10px] uppercase font-bold tracking-[0.6em] border-b border-[#722f3f] pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
            >
              Explore In-depth Support
            </button>
          </div>
        </div>
      </section>

      {/* LUXURY TESTIMONIALS / REVIEWS SECTION */}
      <section className="py-40 bg-[#1a1a1a] text-[#faf8f5] overflow-hidden relative">
        {/* Luxury Texture Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

        {/* Background Ghost Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif font-bold text-white/[0.02] pointer-events-none select-none whitespace-nowrap uppercase tracking-tighter">
          Excellence
        </div>

        {/* Framing Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-[#d4af37]/30"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-[#d4af37]/30"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#d4af37" className="text-[#d4af37]" />)}
            </div>
            <h4 className="text-[#d4af37] uppercase tracking-[0.8em] font-bold text-[10px]">THE COLLECTOR'S CIRCLE</h4>
            <h2 className="text-4xl md:text-6xl font-serif">Echoes of Distinction</h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-8"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Item */}
            <div className="h-[450px] md:h-[350px] flex flex-col items-center justify-center text-center">
              <div key={activeTestimonial} className="animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-[1500ms] flex flex-col items-center">
                <Quote size={80} className="text-[#d4af37] mb-12 opacity-20" />
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-white leading-[1.4] mb-12 max-w-4xl tracking-wide">
                  "{testimonials[activeTestimonial].text}"
                </h2>
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-px w-12 bg-[#d4af37]"></div>
                  <div className="space-y-1">
                    <p className="text-sm md:text-base font-bold uppercase tracking-[0.5em] text-[#d4af37]">{testimonials[activeTestimonial].author}</p>
                    <p className="text-[10px] md:text-xs text-gray-400 font-lora italic tracking-widest uppercase">{testimonials[activeTestimonial].title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Controls */}
            <div className="flex justify-center items-center space-x-8 mt-16">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-4 border border-white/10 rounded-full text-white/40 hover:text-[#d4af37] hover:border-[#d4af37] transition-all group"
              >
                <ChevronLeft size={24} className="group-active:scale-90 transition-transform" />
              </button>

              <div className="flex space-x-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-0.5 transition-all duration-700 ${activeTestimonial === i ? 'bg-[#d4af37] w-16' : 'bg-white/10 w-8 hover:bg-white/30'}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-4 border border-white/10 rounded-full text-white/40 hover:text-[#d4af37] hover:border-[#d4af37] transition-all group"
              >
                <ChevronRight size={24} className="group-active:scale-90 transition-transform" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-x-16 gap-y-8">
            {[
              { label: 'GLOBAL VINTAGE RANKINGS', val: 'TOP 1%' },
              { label: 'AUTHENTICITY RATING', val: '100% SECURE' },
              { label: 'COLLECTOR SATISFACTION', val: 'PLATINUM GRADE' }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-1">
                <p className="text-[8px] font-bold tracking-[0.4em] text-gray-600 uppercase">{item.label}</p>
                <p className="text-xs font-serif italic text-[#d4af37] tracking-widest">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewWine && (
        <QuickViewModal
          wine={quickViewWine}
          isOpen={!!quickViewWine}
          onClose={() => setQuickViewWine(null)}
          onAddToCart={(wine) => {
            onAddToCart(wine);
            setQuickViewWine(null);
          }}
          onNavigateToProduct={(id) => onNavigate('product', { id })}
          onToggleWishlist={(wine) => { }} // Placeholder for home
          isInWishlist={false}
        />
      )}

      {/* LUXURY VALUE PROPOSITIONS: WHY G-TOWN WINES */}
      <section className="py-32 bg-[#faf8f5] relative overflow-hidden border-y border-[#e8e6e1]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#722f3f]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h4 className="text-[#d4af37] uppercase tracking-[0.8em] font-bold text-[10px]">WHY G-TOWN WINES</h4>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight text-[#2a2a2a]">Curated Mastery for the <br /><span className="italic text-[#722f3f]">Discerning Elite</span></h2>
            <div className="h-0.5 w-24 bg-[#722f3f] mx-auto mt-8"></div>
            <p className="text-sm uppercase tracking-[0.4em] font-bold text-gray-400 pt-4">The Pinnacle of Prestige Service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e6e1] border border-[#e8e6e1] shadow-2xl">
            {[
              {
                icon: <ShieldCheck size={32} strokeWidth={1} />,
                title: 'Curated Excellence',
                desc: 'Every bottle meticulously hand-selected by our Master Sommeliers—rarities chosen for their transcendent legacy and unparalleled distinction.'
              },
              {
                icon: <Truck size={32} strokeWidth={1} />,
                title: 'Cellar Direct Delivery',
                desc: 'Secure, temperature-controlled global transport—preserving perfection from vault to your private collection.'
              },
              {
                icon: <Sparkles size={32} strokeWidth={1} />,
                title: 'Exclusive Access Privileges',
                desc: "Members-only unveilings of limited releases and rare library vintages—acquisitions reserved for the world's most refined palates."
              },
              {
                icon: <GraduationCap size={32} strokeWidth={1} />,
                title: 'Sommelier Scholarship',
                desc: 'In-depth tasting monographs and guided virtuoso experiences—elevating connoisseurship to art form.'
              },
              {
                icon: <Award size={32} strokeWidth={1} />,
                title: 'Uncompromising Provenance',
                desc: 'Guaranteed authenticity through flawless, climate-perfected cellar stewardship—legacy preserved for generations.'
              },
              {
                icon: <Headphones size={32} strokeWidth={1} />,
                title: 'Concierge Mastery',
                desc: 'Dedicated sommelier cadre at your command—bespoke curation for the most distinguished cellars worldwide.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 space-y-8 group hover:bg-[#faf8f5] transition-all duration-700 relative overflow-hidden">
                <div className="text-[#d4af37] transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
                  {item.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-[#2a2a2a] group-hover:text-[#722f3f] transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-lora italic opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#d4af37] group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button
              onClick={() => onNavigate('about')}
              className="group flex items-center space-x-6 mx-auto text-[#722f3f] uppercase tracking-[0.4em] text-[10px] font-bold"
            >
              <span>Explore Our Full Heritage & Service standards</span>
              <div className="w-12 h-12 border border-[#722f3f]/30 rounded-full flex items-center justify-center group-hover:bg-[#722f3f] group-hover:text-white group-hover:border-[#722f3f] transition-all duration-500">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-serif mb-4">Browse by Category</h2>
            <div className="h-0.5 w-12 bg-[#d4af37] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
            <div
              className="relative group cursor-pointer overflow-hidden rounded-sm h-full"
              onClick={() => onNavigate('shop', { type: 'Red' })}
            >
              <img src="/category1.jpg" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Red Wines" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-4xl font-serif mb-2">The Bold Reds</h3>
                <p className="uppercase tracking-widest text-xs opacity-80">Explore Full-Bodied Vintages</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
              <div
                className="relative group cursor-pointer overflow-hidden rounded-sm"
                onClick={() => onNavigate('shop', { type: 'White' })}
              >
                <img src="/category2.png" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="White Wines" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif mb-1">Crisp Whites</h3>
                  <p className="uppercase tracking-widest text-[10px] opacity-80">Refining Elegance</p>
                </div>
              </div>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-sm"
                onClick={() => onNavigate('shop', { type: 'Sparkling' })}
              >
                <img src="/category3.png" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sparkling" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif mb-1">Fine Bubbles</h3>
                  <p className="uppercase tracking-widest text-[10px] opacity-80">Celebratory Classics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-serif">Wine Education</h2>
            <button
              onClick={() => onNavigate('education')}
              className="text-[#722f3f] text-xs font-bold uppercase tracking-widest border-b-2 border-[#722f3f] pb-1 hover:text-[#5a2532] transition-colors"
            >
              Explore Journal
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative group">
              <img src="/wineducation.gif" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Sommelier Education" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em] flex items-center">
                  <BookOpen size={16} className="mr-3" /> Master the Glass
                </span>
                <h3 className="text-5xl font-serif leading-tight">Deepen Your Connection with the Vine</h3>
                <p className="text-lg font-lora italic text-gray-600 leading-relaxed">
                  "Understanding wine is a journey of the senses. We believe education elevates the tasting experience from simple enjoyment to profound appreciation."
                </p>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "Vintage Reports", desc: "How climate shaped our 2023 harvest." },
                  { title: "The Art of Aging", desc: "Guide to building your personal cellar." },
                  { title: "Soil & Spirit", desc: "The role of limestone in Napa varietals." }
                ].map((item, idx) => (
                  <li key={idx} className="flex group cursor-pointer" onClick={() => onNavigate('education')}>
                    <div className="w-12 h-12 flex-shrink-0 bg-[#e8e6e1]/40 flex items-center justify-center rounded-full group-hover:bg-[#722f3f] group-hover:text-white transition-all mr-6">
                      <ArrowRight size={18} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif mb-1 group-hover:text-[#722f3f] transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-400 font-lora">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Club Membership Tiers Preview */}
      <section className="py-32 bg-[#722f3f] text-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20 space-y-4">
          <h4 className="text-[#d4af37] text-xs uppercase tracking-[0.5em] font-bold">A Toast to Loyalty</h4>
          <h2 className="text-5xl font-serif italic">The G-Town Wine Club</h2>
          <p className="text-xl font-lora opacity-80 max-w-2xl mx-auto italic">
            "Experience private allocations and member-only benefits."
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tier: 'Silver', price: '185', bottles: '6', color: 'border-gray-400' },
            { tier: 'Gold', price: '350', bottles: '12', color: 'border-[#d4af37]' },
            { tier: 'Platinum', price: '650', bottles: '24', color: 'border-white' }
          ].map((item) => (
            <div key={item.tier} className={`bg-white/5 backdrop-blur-xl border ${item.color} p-12 rounded-sm space-y-8 hover:bg-white/10 transition-all cursor-pointer group`}>
              <h3 className="text-3xl font-serif text-[#d4af37] group-hover:scale-110 transition-transform">{item.tier}</h3>
              <div className="space-y-2">
                <p className="text-lg font-lora italic opacity-80">{item.bottles} Bottles / Semester</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Starting at ${item.price}</p>
              </div>
              <ul className="text-[10px] uppercase tracking-[0.2em] space-y-4 font-bold border-t border-white/10 pt-8">
                <li className="flex items-center"><Award size={14} className="mr-3 text-[#d4af37]" /> 15% Collection Discount</li>
                <li className="flex items-center"><Award size={14} className="mr-3 text-[#d4af37]" /> Complimentary Shipping</li>
                <li className="flex items-center"><Award size={14} className="mr-3 text-[#d4af37]" /> Library Access</li>
              </ul>
              <button onClick={() => onNavigate('club')} className="w-full bg-[#d4af37] text-[#2a2a2a] py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
                Select {item.tier}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Newsletter Signup - Join the Inner Sanctum */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Decorative background element - UPDATED TO REQUESTED IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images5.alphacoders.com/443/443997.jpg"
            alt="Vineyard Background"
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[4000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        {/* Glassmorphism texture and Glow (Preserved for Luxury Feel) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 pointer-events-none z-[1]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#722f3f]/10 rounded-full blur-[120px] pointer-events-none z-[1]"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="border border-[#d4af37]/20 p-12 md:p-20 text-center space-y-12 backdrop-blur-md bg-white/[0.02]">
            <div className="space-y-4">
              <div className="flex justify-center mb-6">
                <Crown size={32} className="text-[#d4af37] animate-pulse" />
              </div>
              <h4 className="text-[#d4af37] uppercase tracking-[0.6em] font-bold text-[10px]">EXCLUSIVE G-TOWN WINES</h4>
              <h2 className="text-4xl md:text-6xl font-serif text-white italic">Join the Inner Sanctum</h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-8"></div>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-xl font-serif text-white/90">Enter the Elite Vanguard</h3>
              <p className="text-sm md:text-base font-lora italic text-gray-400 leading-relaxed">
                Secure first access to private allocations, exclusive harvest unveilings, and members-only cellar masterpieces—reserved for the world's most discerning.
              </p>
            </div>

            <form className="max-w-md mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="w-full bg-transparent border-b border-white/20 py-4 px-2 outline-none text-white text-center font-lora italic transition-all focus:border-[#d4af37]"
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#d4af37] transition-all duration-700 group-focus-within:w-full"></div>
              </div>
              <button className="w-full bg-[#722f3f] text-white py-5 uppercase text-[10px] font-bold tracking-[0.4em] hover:bg-[#5a2532] transition-all shadow-2xl relative overflow-hidden group">
                <span className="relative z-10">Subscribe to Privilege</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>

            <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">
              Immediate elevation to connoisseur status awaits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
