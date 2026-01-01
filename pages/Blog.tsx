
import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Wine, 
  Sparkles, 
  TrendingUp,
  Award,
  Globe,
  ChevronRight,
  Filter,
  Search,
  BookMarked,
  Pen,
  Star,
  Quote,
  PlayCircle,
  Bookmark,
  Share2,
  Eye
} from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeQuote, setActiveQuote] = useState(0);
  
  const quotes = [
    { text: "Wine is bottled poetry", author: "Robert Louis Stevenson" },
    { text: "Age appears to be best in four things; old wood best to burn, old wine to drink, old friends to trust, and old authors to read", author: "Francis Bacon" },
    { text: "In victory, you deserve Champagne. In defeat, you need it", author: "Napoleon Bonaparte" }
  ];

  const experts = [
    {
      name: "Jean-Baptiste Moreau",
      role: "Master Sommelier",
      specialty: "Burgundy & Bordeaux",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      articles: 24
    },
    {
      name: "Victoria Sterling",
      role: "Wine Educator",
      specialty: "Old World Classics",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
      articles: 18
    },
    {
      name: "Marcus Chen",
      role: "Cellar Master",
      specialty: "Natural & Biodynamic",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      articles: 31
    },
    {
      name: "Isabella Rossi",
      role: "Investment Advisor",
      specialty: "Fine Wine Portfolio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300",
      articles: 15
    }
  ];

  const vintageTimeline = [
    { year: "2023", rating: "Exceptional", description: "Perfect growing conditions across Bordeaux" },
    { year: "2022", rating: "Outstanding", description: "Burgundy delivers stellar Pinot Noir" },
    { year: "2021", rating: "Excellent", description: "Napa Valley's finest in decades" },
    { year: "2020", rating: "Very Good", description: "Champagne region shows resilience" }
  ];

  const featuredArticle = {
    title: "The Renaissance of Burgundy: 2023 Harvest Report",
    category: "Industry Insights",
    date: "Dec 28, 2025",
    readTime: "12 min read",
    author: "Jean-Baptiste Moreau",
    authorRole: "Master Sommelier",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=2000",
    excerpt: "An unprecedented season in the Côte d'Or delivers what many are calling the vintage of the century. We traveled to Domaine de la Romanée-Conti to witness history in the making.",
    tags: ["Burgundy", "Vintage Report", "Investment"],
    views: "12.4K"
  };

  const articles = [
    {
      title: "Understanding Vintage Variation",
      category: "Education",
      date: "Dec 15, 2025",
      readTime: "8 min read",
      author: "Victoria Sterling",
      image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1000",
      excerpt: "Why a 2018 Cabernet tastes fundamentally different from its 2019 counterpart, and what to look for in the glass.",
      featured: false,
      tags: ["Education", "Tasting"],
      views: "8.2K"
    },
    {
      title: "The Art of the Holiday Pairing",
      category: "Lifestyle",
      date: "Dec 08, 2025",
      readTime: "6 min read",
      author: "Marcus Chen",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000",
      excerpt: "From standing rib roast to delicate seafood, our Sommelier shares the secrets to festive food and wine harmony.",
      featured: true,
      tags: ["Pairing", "Holidays"],
      views: "15.7K"
    },
    {
      title: "Cellaring 101: Humidity and Light",
      category: "Guides",
      date: "Nov 22, 2025",
      readTime: "10 min read",
      author: "Isabella Rossi",
      image: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=1000",
      excerpt: "Protect your investment. Learn the essential conditions required to age your fine wines for the next decade.",
      featured: false,
      tags: ["Storage", "Investment"],
      views: "6.9K"
    },
    {
      title: "Champagne vs. Prosecco: The Ultimate Guide",
      category: "Education",
      date: "Nov 10, 2025",
      readTime: "7 min read",
      author: "Victoria Sterling",
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&q=80&w=1000",
      excerpt: "Understanding the key differences between these celebrated sparkling wines and when to serve each.",
      featured: true,
      tags: ["Sparkling", "Education"],
      views: "11.3K"
    },
    {
      title: "Natural Wines: Beyond the Hype",
      category: "Trends",
      date: "Nov 03, 2025",
      readTime: "9 min read",
      author: "Marcus Chen",
      image: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&q=80&w=1000",
      excerpt: "Exploring the natural wine movement and what makes these bottles unique in taste and production.",
      featured: false,
      tags: ["Natural", "Trends"],
      views: "9.8K"
    },
    {
      title: "Investment Grade Bordeaux: 2024 En Primeur",
      category: "Investment",
      date: "Oct 28, 2025",
      readTime: "15 min read",
      author: "Jean-Baptiste Moreau",
      image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&q=80&w=1000",
      excerpt: "Our comprehensive analysis of this year's Bordeaux En Primeur campaign and top picks for collectors.",
      featured: true,
      tags: ["Bordeaux", "Investment"],
      views: "18.2K"
    }
  ];

  const categories = ["All", "Education", "Lifestyle", "Guides", "Trends", "Investment"];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="animate-in fade-in duration-1000 bg-[#faf8f5]">
      {/* Ultra-Unique Immersive Hero Section */}
      <section className="min-h-screen pt-20 relative overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 z-0">
          {/* Base Image */}
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Wine Library"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#722f3f]/95 via-[#1a1a1a]/85 to-[#d4af37]/20" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4af37] rounded-full animate-ping opacity-30"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
            <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Decorative Lines with Animation */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-12 animate-in slide-in-from-left duration-1000">
              {/* Floating Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
                <Sparkles size={16} className="text-[#d4af37] animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white">Curated Connoisseur Content</span>
              </div>

              {/* Main Title - Staggered Animation */}
              <div className="space-y-6">
                <h4 className="text-[11px] uppercase tracking-[0.8em] font-bold text-[#d4af37] animate-in slide-in-from-top-4 duration-700">
                  The G-Town Chronicle
                </h4>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight">
                  <span className="block animate-in slide-in-from-left duration-700 delay-100">Where</span>
                  <span className="block italic text-[#d4af37] animate-in slide-in-from-left duration-700 delay-200">Elegance</span>
                  <span className="block animate-in slide-in-from-left duration-700 delay-300">Meets Insight</span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-[#d4af37] to-transparent animate-in slide-in-from-left duration-700 delay-400"></div>
              </div>

              <p className="text-xl md:text-2xl font-lora italic text-white/90 leading-relaxed max-w-xl animate-in slide-in-from-left duration-700 delay-500">
                Immerse yourself in the world's most prestigious wine journal—where centuries of tradition meet modern sophistication.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 animate-in slide-in-from-left duration-700 delay-600">
                <button className="group bg-[#d4af37] text-[#722f3f] px-10 py-5 flex items-center space-x-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white transition-all shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative z-10">Explore Articles</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 flex items-center space-x-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white/20 transition-all">
                  <PlayCircle size={18} />
                  <span>Watch Featured</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 animate-in slide-in-from-left duration-700 delay-700">
                {[
                  { number: "500+", label: "Expert Articles" },
                  { number: "15K+", label: "Global Readers" },
                  { number: "50+", label: "Wine Regions" }
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-3xl font-serif text-[#d4af37]">{stat.number}</p>
                    <p className="text-[9px] uppercase tracking-widest font-bold text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Card Stack */}
            <div className="relative h-[600px] animate-in slide-in-from-right duration-1000 delay-300">
              {/* Card 3 - Back */}
              <div className="absolute top-12 right-8 w-full max-w-sm bg-white/5 backdrop-blur-sm border border-white/20 p-8 rounded-sm transform rotate-6 shadow-2xl">
                <div className="h-40 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-sm"></div>
              </div>

              {/* Card 2 - Middle */}
              <div className="absolute top-6 right-4 w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/30 p-8 rounded-sm transform rotate-3 shadow-2xl">
                <div className="h-48 bg-gradient-to-br from-[#d4af37]/30 to-transparent rounded-sm mb-4"></div>
                <div className="h-3 w-3/4 bg-white/30 rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-white/20 rounded"></div>
              </div>

              {/* Card 1 - Front (Featured) */}
              <div className="absolute top-0 right-0 w-full max-w-sm bg-white backdrop-blur-md border-2 border-[#d4af37] p-8 rounded-sm shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer group">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-gray-100 mb-6 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Featured"
                  />
                  <div className="absolute top-4 right-4 bg-[#722f3f] text-white px-3 py-1 text-[8px] uppercase tracking-wider font-bold">
                    Latest
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-[9px] uppercase tracking-wider font-bold text-[#d4af37]">
                    <Award size={12} />
                    <span>Editor's Pick</span>
                  </div>

                  <h3 className="text-xl font-serif text-[#2a2a2a] group-hover:text-[#722f3f] transition-colors leading-tight">
                    2023 Vintage: The Year That Changed Everything
                  </h3>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock size={14} />
                      <span className="text-xs">12 min read</span>
                    </div>
                    <button className="text-[#722f3f] group-hover:text-[#d4af37] transition-colors">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-white/70">
            <span className="text-[8px] uppercase tracking-widest font-bold">Scroll to Explore</span>
            <ChevronRight size={20} className="rotate-90" />
          </div>
        </div>
      </section>

      {/* Rotating Quote Section */}
      <section className="py-16 bg-white border-y-2 border-[#d4af37] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #722f3f 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Quote size={40} className="text-[#d4af37] mx-auto mb-8 opacity-30" />
          <blockquote className="text-2xl md:text-4xl font-serif italic text-[#2a2a2a] leading-relaxed mb-8">
            "{quotes[activeQuote].text}"
          </blockquote>
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-[#722f3f]">
            — {quotes[activeQuote].author}
          </p>

          <div className="flex justify-center space-x-3 mt-12">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveQuote(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeQuote === idx ? 'bg-[#722f3f] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expert Contributors Section */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <div className="flex justify-center">
              <div className="w-12 h-12 border border-[#d4af37] rotate-45 flex items-center justify-center">
                <Pen size={20} className="text-[#722f3f] -rotate-45" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-[#2a2a2a]">Our Master Contributors</h2>
            <p className="text-lg font-lora italic text-gray-500 max-w-2xl mx-auto">
              World-renowned sommeliers, educators, and wine experts sharing their decades of expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#e8e6e1] hover:border-[#d4af37] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] opacity-5 rounded-full -mr-16 -mt-16"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#d4af37] group-hover:scale-110 transition-transform duration-500">
                    <img src={expert.image} className="w-full h-full object-cover" alt={expert.name} />
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-serif text-[#2a2a2a] group-hover:text-[#722f3f] transition-colors">
                      {expert.name}
                    </h3>
                    <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#d4af37]">
                      {expert.role}
                    </p>
                    <p className="text-sm font-lora italic text-gray-500">
                      {expert.specialty}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-center space-x-2">
                    <BookOpen size={16} className="text-[#722f3f]" />
                    <span className="text-sm font-bold text-[#2a2a2a]">{expert.articles} Articles</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Vintage Timeline */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Diagonal Lines Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #d4af37 35px, #d4af37 36px)',
            }}></div>
          </div>

          {/* Radial Gradients */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#722f3f] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[120px] opacity-15"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#d4af37] rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20 space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                {/* Rotating Border */}
                <div className="absolute inset-0 border-2 border-[#d4af37] rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#722f3f] to-[#5a2532] rounded-full flex items-center justify-center backdrop-blur-md">
                  <Star size={32} className="text-[#d4af37] animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-tight">
                Recent Vintage<br/>
                <span className="text-[#d4af37]">Hall of Fame</span>
              </h2>
              <div className="flex justify-center">
                <div className="h-1 w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>
            </div>
            
            <p className="text-xl font-lora italic text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our distinguished panel of Master Sommeliers evaluates the world's finest vintages, 
              <span className="text-[#d4af37]"> celebrating exceptional harvests </span> 
              that define generations of wine excellence.
            </p>

            {/* Rating Legend */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#d4af37] fill-[#d4af37]" />
                  ))}
                </div>
                <span className="text-xs text-white/60 font-lora italic">= Legendary</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#d4af37] fill-[#d4af37]" />
                  ))}
                  <Star size={12} className="text-white/30" />
                </div>
                <span className="text-xs text-white/60 font-lora italic">= Exceptional</span>
              </div>
            </div>
          </div>

          {/* Vintage Cards - Horizontal Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {vintageTimeline.map((vintage, idx) => (
                <div key={idx} className="group relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#d4af37] rounded-full border-4 border-[#1a1a1a] z-20">
                    <div className="absolute inset-0 bg-[#d4af37] rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-sm overflow-hidden hover:border-[#d4af37] transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#d4af37]/20">
                    
                    {/* Top Accent Bar */}
                    <div className="h-2 bg-gradient-to-r from-[#722f3f] via-[#d4af37] to-[#722f3f]"></div>

                    {/* Decorative Corner */}
                    <div className="absolute top-2 right-0 w-32 h-32 bg-[#d4af37] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>

                    <div className="p-8 space-y-6 relative z-10">
                      
                      {/* Year Badge */}
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="text-7xl font-serif text-[#d4af37] tracking-tight group-hover:scale-110 transition-transform duration-500">
                            {vintage.year}
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-[#d4af37] rounded-full flex items-center justify-center bg-[#1a1a1a]">
                            <span className="text-[8px] font-bold text-[#d4af37]">#{idx + 1}</span>
                          </div>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center space-x-2 py-4 border-y border-white/10">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="transform transition-all duration-300"
                            style={{ 
                              transitionDelay: `${i * 100}ms`,
                              transform: i < 4 ? 'scale(1)' : 'scale(0.8)'
                            }}
                          >
                            <Star 
                              size={18} 
                              className={i < 4 ? "text-[#d4af37] fill-[#d4af37] drop-shadow-lg" : "text-white/30"} 
                            />
                          </div>
                        ))}
                      </div>

                      {/* Rating Badge */}
                      <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full">
                          <Award size={14} className="text-[#d4af37]" />
                          <span className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                            {vintage.rating}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm font-lora italic text-white/80 text-center leading-relaxed min-h-[60px]">
                        {vintage.description}
                      </p>

                      {/* Bottom Action */}
                      <button className="w-full group/btn bg-white/5 hover:bg-[#d4af37] border border-white/20 hover:border-[#d4af37] text-white py-3 px-6 flex items-center justify-center space-x-2 text-[9px] uppercase tracking-wider font-bold transition-all duration-300 rounded-sm">
                        <span>View Details</span>
                        <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                  <Globe size={20} className="text-[#d4af37]" />
                </div>
                <p className="text-sm font-lora italic text-white/70">
                  Evaluated across <span className="text-[#d4af37] font-bold">50+ regions</span>
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                  <User size={20} className="text-[#d4af37]" />
                </div>
                <p className="text-sm font-lora italic text-white/70">
                  Reviewed by <span className="text-[#d4af37] font-bold">12 Master Sommeliers</span>
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                  <Wine size={20} className="text-[#d4af37]" />
                </div>
                <p className="text-sm font-lora italic text-white/70">
                  Based on <span className="text-[#d4af37] font-bold">10,000+ tastings</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article - Large Format */}
      <section className="py-24 md:py-32 -mt-32 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-[400px] lg:h-auto overflow-hidden group">
                <img 
                  src={featuredArticle.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={featuredArticle.title}
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#722f3f] text-white px-4 py-2 text-[9px] uppercase tracking-[0.3em] font-bold">
                    Featured Story
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 md:p-16 flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400">
                    <span className="text-[#d4af37]">{featuredArticle.category}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-serif text-[#2a2a2a] leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-lg font-lora italic text-gray-600 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {featuredArticle.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#faf8f5] text-[8px] uppercase tracking-widest font-bold text-gray-500 border border-[#e8e6e1]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#faf8f5] border-2 border-[#d4af37] flex items-center justify-center">
                      <User size={20} className="text-[#722f3f]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#2a2a2a]">{featuredArticle.author}</p>
                      <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400">{featuredArticle.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock size={14} />
                    <span className="text-xs font-lora italic">{featuredArticle.readTime}</span>
                  </div>
                </div>

                <button className="w-full bg-[#722f3f] text-white py-5 px-8 flex items-center justify-center space-x-3 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#5a2532] transition-all group shadow-xl">
                  <span>Read Full Article</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filter & Search Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#faf8f5] via-white to-[#faf8f5] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#722f3f] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#722f3f 1px, transparent 1px), linear-gradient(90deg, #722f3f 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 border-2 border-[#d4af37] rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Filter size={24} className="text-[#722f3f]" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#722f3f] rounded-full animate-ping"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif italic text-[#2a2a2a]">Discover Your Perfect Read</h2>
            <p className="text-lg font-lora italic text-gray-500 max-w-2xl mx-auto">
              Curated content across wine education, lifestyle, and investment insights
            </p>
          </div>

          {/* Main Filter Container */}
          <div className="bg-white rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-2 border-[#e8e6e1] overflow-hidden">
            
            {/* Top Bar - Stats & Quick Actions */}
            <div className="bg-gradient-to-r from-[#722f3f] to-[#5a2532] px-8 py-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <BookMarked size={20} className="text-[#d4af37]" />
                  <div>
                    <p className="text-2xl font-serif text-white">{filteredArticles.length}</p>
                    <p className="text-[8px] uppercase tracking-wider text-white/70">Articles Found</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="flex items-center space-x-3">
                  <TrendingUp size={20} className="text-[#d4af37]" />
                  <div>
                    <p className="text-2xl font-serif text-white">247K</p>
                    <p className="text-[8px] uppercase tracking-wider text-white/70">Total Reads</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 rounded-sm text-white hover:bg-white/20 transition-all text-xs">
                  <Bookmark size={14} />
                  <span>Saved</span>
                </button>
                <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 rounded-sm text-white hover:bg-white/20 transition-all text-xs">
                  <Eye size={14} />
                  <span>Recent</span>
                </button>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="p-8 space-y-8">
              
              {/* Category Filter with Icons */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-[#722f3f] flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#faf8f5] border border-[#e8e6e1] flex items-center justify-center">
                      <Filter size={14} className="text-[#722f3f]" />
                    </div>
                    <span>Category Selection</span>
                  </h3>
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="text-xs text-[#722f3f] hover:text-[#d4af37] transition-colors underline underline-offset-4 font-bold"
                  >
                    Clear Filters
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {categories.map((category, idx) => {
                    const icons = [
                      <Globe key="all" size={20} />,
                      <BookOpen key="edu" size={20} />,
                      <Wine key="life" size={20} />,
                      <BookMarked key="guide" size={20} />,
                      <TrendingUp key="trend" size={20} />,
                      <Award key="invest" size={20} />
                    ];
                    
                    const counts = [articles.length, 2, 1, 1, 1, 2];
                    
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`group relative p-6 border-2 transition-all duration-300 rounded-sm ${
                          selectedCategory === category
                            ? 'bg-[#722f3f] border-[#722f3f] shadow-xl scale-105'
                            : 'bg-white border-[#e8e6e1] hover:border-[#d4af37] hover:shadow-lg'
                        }`}
                      >
                        {/* Shimmer Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ${selectedCategory === category ? 'hidden' : ''}`}></div>
                        
                        <div className="relative space-y-3 text-center">
                          <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                            selectedCategory === category
                              ? 'bg-white text-[#722f3f]'
                              : 'bg-[#faf8f5] text-[#722f3f] group-hover:bg-[#d4af37] group-hover:text-white'
                          }`}>
                            {icons[idx]}
                          </div>
                          <div>
                            <p className={`text-xs uppercase tracking-wider font-bold ${
                              selectedCategory === category ? 'text-white' : 'text-[#2a2a2a] group-hover:text-[#722f3f]'
                            }`}>
                              {category}
                            </p>
                            <p className={`text-[10px] font-lora italic mt-1 ${
                              selectedCategory === category ? 'text-white/80' : 'text-gray-400'
                            }`}>
                              {counts[idx]} {counts[idx] === 1 ? 'Article' : 'Articles'}
                            </p>
                          </div>
                        </div>

                        {/* Active Indicator */}
                        {selectedCategory === category && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center shadow-lg">
                            <ChevronRight size={14} className="text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Search & Sort Bar */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Search Input */}
                <div className="lg:col-span-2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#722f3f]/20 to-[#d4af37]/20 opacity-0 group-focus-within:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by title, author, or keyword..."
                      className="w-full bg-[#faf8f5] border-2 border-[#e8e6e1] py-5 px-16 outline-none focus:border-[#722f3f] focus:bg-white transition-all text-sm font-lora italic placeholder:text-gray-400 rounded-sm"
                    />
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#e8e6e1] flex items-center justify-center rounded-sm">
                      <Search size={18} className="text-[#722f3f]" />
                    </div>
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#722f3f] text-white px-6 py-3 text-[9px] uppercase tracking-wider font-bold hover:bg-[#d4af37] transition-all rounded-sm">
                      Search
                    </button>
                  </div>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select className="w-full appearance-none bg-white border-2 border-[#e8e6e1] py-5 px-6 pr-12 outline-none focus:border-[#722f3f] transition-all text-sm font-bold text-[#2a2a2a] cursor-pointer rounded-sm">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Longest Read</option>
                    <option>Shortest Read</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronRight size={18} className="text-[#722f3f] rotate-90" />
                  </div>
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="pt-6 border-t-2 border-[#e8e6e1]">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-sm uppercase tracking-wider font-bold text-[#722f3f] flex items-center space-x-2">
                      <Sparkles size={16} />
                      <span>Advanced Filters</span>
                    </span>
                    <ChevronRight size={18} className="text-[#722f3f] group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in slide-in-from-top duration-300">
                    
                    {/* Read Time Filter */}
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Read Time</label>
                      <div className="space-y-2">
                        {['< 5 min', '5-10 min', '10+ min'].map((time) => (
                          <label key={time} className="flex items-center space-x-3 cursor-pointer group/check">
                            <div className="w-5 h-5 border-2 border-[#e8e6e1] rounded-sm flex items-center justify-center group-hover/check:border-[#722f3f] transition-colors">
                              <div className="w-2 h-2 bg-[#722f3f] rounded-sm opacity-0 group-hover/check:opacity-100 transition-opacity"></div>
                            </div>
                            <span className="text-sm font-lora italic text-gray-600">{time}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Author Filter */}
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Featured Authors</label>
                      <div className="space-y-2">
                        {['Jean-Baptiste', 'Victoria', 'Marcus'].map((author) => (
                          <label key={author} className="flex items-center space-x-3 cursor-pointer group/check">
                            <div className="w-5 h-5 border-2 border-[#e8e6e1] rounded-sm flex items-center justify-center group-hover/check:border-[#722f3f] transition-colors">
                              <div className="w-2 h-2 bg-[#722f3f] rounded-sm opacity-0 group-hover/check:opacity-100 transition-opacity"></div>
                            </div>
                            <span className="text-sm font-lora italic text-gray-600">{author}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Date Range */}
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Date Range</label>
                      <select className="w-full appearance-none bg-[#faf8f5] border border-[#e8e6e1] py-3 px-4 outline-none focus:border-[#722f3f] transition-all text-sm font-lora italic rounded-sm">
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                        <option>Last 6 months</option>
                        <option>All time</option>
                      </select>
                    </div>
                  </div>
                </details>
              </div>

            </div>
          </div>

          {/* Quick Tags */}
          <div className="mt-12 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">Popular Topics</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Burgundy', 'Investment', 'Vintage', 'Pairing', 'Storage', 'Natural Wines', 'Champagne', 'Bordeaux'].map((tag) => (
                <button 
                  key={tag}
                  className="group px-4 py-2 bg-white border border-[#e8e6e1] hover:border-[#d4af37] text-[9px] uppercase tracking-wider font-bold text-gray-500 hover:text-[#722f3f] transition-all rounded-full relative overflow-hidden"
                >
                  <span className="relative z-10"># {tag}</span>
                  <div className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredArticles.map((article, i) => (
              <article 
                key={i} 
                className="group cursor-pointer bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#e8e6e1] hover:border-[#d4af37]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img 
                    src={article.image} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={article.title} 
                  />
                  {article.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-[#d4af37] text-white p-2 rounded-full">
                        <TrendingUp size={16} />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400">
                    <span className="text-[#722f3f]">{article.category}</span>
                    <div className="flex items-center space-x-2">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-serif text-[#2a2a2a] group-hover:text-[#722f3f] transition-colors leading-tight">
                    {article.title}
                  </h2>

                  <p className="text-sm font-lora italic text-gray-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#faf8f5] text-[8px] uppercase tracking-wider font-bold text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#faf8f5] flex items-center justify-center">
                        <Pen size={14} className="text-[#722f3f]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#2a2a2a]">{article.author}</p>
                        <p className="text-[8px] uppercase tracking-wider font-bold text-gray-400">{article.date}</p>
                      </div>
                    </div>

                    <button className="flex items-center space-x-2 text-[#722f3f] group-hover:text-[#d4af37] transition-colors">
                      <span className="text-[9px] font-bold uppercase tracking-widest">Read</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#722f3f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <div className="flex justify-center">
            <div className="w-16 h-16 border-2 border-[#d4af37] flex items-center justify-center rotate-45">
              <BookMarked size={28} className="text-[#d4af37] -rotate-45" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">
              The Connoisseur's Dispatch
            </h2>
            <p className="text-lg font-lora italic text-white/80 max-w-2xl mx-auto leading-relaxed">
              Receive our weekly journal of vintage reports, exclusive tastings, and sommelier insights delivered to your private inbox.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 backdrop-blur-md border-2 border-white/20 py-4 px-6 outline-none focus:border-[#d4af37] transition-colors text-white placeholder:text-white/50 font-lora italic"
              />
              <button className="bg-[#d4af37] text-[#722f3f] px-8 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white transition-all whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-[9px] uppercase tracking-widest text-white/50 mt-6">
              Join 15,000+ discerning readers worldwide
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
