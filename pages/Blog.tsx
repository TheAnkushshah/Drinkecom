
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      title: "Understanding Vintage Variation",
      category: "Education",
      date: "Oct 15, 2024",
      image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1000",
      excerpt: "Why a 2018 Cabernet tastes fundamentally different from its 2019 counterpart, and what to look for in the glass."
    },
    {
      title: "The Art of the Holiday Pairing",
      category: "Lifestyle",
      date: "Oct 08, 2024",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000",
      excerpt: "From standing rib roast to delicate seafood, our Sommelier shares the secrets to festive food and wine harmony."
    },
    {
      title: "Cellaring 101: Humidity and Light",
      category: "Guides",
      date: "Sep 22, 2024",
      image: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=1000",
      excerpt: "Protect your investment. Learn the essential conditions required to age your fine wines for the next decade."
    }
  ];

  return (
    <div className="pt-32 pb-24 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-8">
          <BookOpen size={24} className="text-[#d4af37]" />
          <h1 className="text-4xl font-serif">G-Town Journal</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, i) => (
            <article key={i} className="group cursor-pointer space-y-6">
              <div className="aspect-video overflow-hidden rounded-sm bg-gray-100 shadow-lg">
                <img src={article.image} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={article.title} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="text-2xl font-serif group-hover:text-[#722f3f] transition-colors">{article.title}</h2>
                <p className="text-sm font-lora italic text-gray-500 leading-relaxed">{article.excerpt}</p>
                <button className="flex items-center space-x-2 text-[#722f3f] text-[10px] font-bold uppercase tracking-widest border-b border-[#722f3f] pb-1">
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
