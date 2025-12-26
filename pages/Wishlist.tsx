
import React from 'react';
import { Wine } from '../types';
import WineCard from '../components/WineCard';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';

interface WishlistProps {
  items: Wine[];
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (wine: Wine) => void;
  onToggleWishlist: (wine: Wine) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ items, onNavigate, onAddToCart, onToggleWishlist }) => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-serif text-[#2a2a2a] mb-2">My Wishlist</h1>
          <p className="text-gray-500 font-lora italic">Vintages and spirits you've earmaked for your future cellar.</p>
        </div>
        <button 
          onClick={() => onNavigate('shop')}
          className="flex items-center space-x-2 text-[#722f3f] uppercase tracking-widest text-[10px] font-bold border-b border-[#722f3f] pb-1 hover:text-[#5a2532] transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Shop</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div className="py-40 text-center bg-[#faf8f5] rounded-sm border-2 border-dashed border-[#e8e6e1]">
          <div className="max-w-sm mx-auto space-y-6">
            <Heart size={48} className="mx-auto text-gray-200" />
            <h3 className="text-2xl font-serif">Your wishlist is empty</h3>
            <p className="text-gray-400 font-lora italic leading-relaxed">
              Find inspiration in our collection and add your favorite bottles to this list for future reference.
            </p>
            <button 
              onClick={() => onNavigate('shop')}
              className="bg-[#722f3f] text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#5a2532] transition-all shadow-xl"
            >
              Browse Collection
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map(wine => (
            <WineCard 
              key={wine.id} 
              wine={wine} 
              onClick={() => onNavigate('product', { id: wine.id })}
              onAddToCart={(e) => {
                e.stopPropagation();
                onAddToCart(wine);
              }}
              onToggleWishlist={(e) => {
                e.stopPropagation();
                onToggleWishlist(wine);
              }}
              isInWishlist={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
