
import React from 'react';
import { Wine } from '../types';
import { ShoppingBag, Star, Heart, Eye } from 'lucide-react';

interface WineCardProps {
  wine: Wine;
  onClick: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
  onQuickView?: (e: React.MouseEvent) => void;
  onToggleWishlist?: (e: React.MouseEvent) => void;
  isInWishlist?: boolean;
}

const WineCard: React.FC<WineCardProps> = ({ wine, onClick, onAddToCart, onQuickView, onToggleWishlist, isInWishlist }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-white overflow-hidden rounded-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#e8e6e1]"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={wine.imageUrl} 
          alt={wine.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
        
        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist?.(e);
          }}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all z-10 ${isInWishlist ? 'bg-[#722f3f] text-white shadow-lg' : 'bg-white/50 text-gray-800 hover:bg-white'}`}
        >
          <Heart size={16} className={isInWishlist ? 'fill-white' : ''} />
        </button>

        {/* Action Overlays */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col space-y-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onQuickView?.(e);
            }}
            className="w-full bg-white/90 backdrop-blur-md text-[#2a2a2a] py-3 flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest font-bold border border-[#e8e6e1] hover:bg-white transition-all"
          >
            <Eye size={14} />
            <span>Quick View</span>
          </button>
          <button 
            onClick={onAddToCart}
            className="w-full bg-[#722f3f] text-white py-3 flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest font-bold shadow-lg hover:bg-[#5a2532] transition-all"
          >
            <ShoppingBag size={14} />
            <span>Add to Cart</span>
          </button>
        </div>

        {/* Badge */}
        {wine.rating >= 95 && (
          <div className="absolute top-4 left-4 bg-[#d4af37] text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm">
            Platinum Reserve
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-2">
        <div className="flex justify-between items-start">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#722f3f] font-bold">{wine.varietal}</p>
          <div className="flex items-center text-[#d4af37] text-xs">
            <Star size={12} fill="#d4af37" className="mr-1" />
            <span>{wine.rating} pts</span>
          </div>
        </div>
        
        <h3 className="text-xl font-serif text-[#2a2a2a] group-hover:text-[#722f3f] transition-colors">
          {wine.name} {wine.vintage}
        </h3>
        
        <p className="text-xs text-gray-500 font-lora italic">{wine.region}</p>
        
        <div className="pt-4 flex items-center justify-between">
          <span className="text-lg font-medium">${wine.price}</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">{wine.body} Body</span>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
