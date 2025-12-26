import React from 'react';
import { Wine } from '../types';
import { X, ShoppingBag, Star, Info, ArrowRight, Heart, Award, Headphones, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface QuickViewModalProps {
  wine: Wine;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (wine: Wine) => void;
  onNavigateToProduct: (id: string) => void;
  onToggleWishlist: (wine: Wine) => void;
  isInWishlist: boolean;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ 
  wine, 
  isOpen, 
  onClose, 
  onAddToCart, 
  onNavigateToProduct,
  onToggleWishlist,
  isInWishlist
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-[#faf8f5] w-full max-w-4xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300 rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-all text-[#2a2a2a]"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto relative bg-gray-100">
          <img 
            src={wine.imageUrl} 
            alt={wine.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5" />
          {wine.rating >= 95 && (
            <div className="absolute top-6 left-6 bg-[#d4af37] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">
              Platinum Selection
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
          <div className="space-y-6 flex-grow">
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-[#722f3f] font-bold tracking-[0.3em] uppercase text-[10px]">{wine.type}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-gray-400 font-medium tracking-widest uppercase text-[10px]">{wine.vintage} Vintage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2a2a2a] leading-tight">{wine.name}</h2>
              <div className="flex items-center justify-between">
                <p className="text-2xl text-[#722f3f] font-serif">${wine.price}</p>
                <div className="flex items-center text-[#d4af37]">
                  <Star size={14} fill="#d4af37" className="mr-1" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{wine.rating} Points</span>
                </div>
              </div>
            </div>

            <p className="text-sm font-lora text-gray-600 leading-relaxed italic">
              "{wine.description}"
            </p>

            <div className="relative grid grid-cols-2 gap-4 py-4">
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8e6e1] to-transparent" aria-hidden />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8e6e1] to-transparent" aria-hidden />
              <div className="space-y-1">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Varietal</p>
                <p className="text-xs font-serif font-bold">{wine.varietal}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Region</p>
                <p className="text-xs font-serif font-bold">{wine.region.split(',')[0]}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Body</p>
                <p className="text-xs font-serif font-bold">{wine.body}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">ABV</p>
                <p className="text-xs font-serif font-bold">{wine.abv}</p>
              </div>
            </div>

            {/* Quick Trust Row */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-1 group">
                <Award size={12} className="text-[#d4af37]" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-1 group">
                <Headphones size={12} className="text-[#d4af37]" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Expert Support</span>
              </div>
              <div className="flex items-center space-x-1 group">
                <Truck size={12} className="text-[#d4af37]" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Safe Shipping</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Aromatic Profile</p>
              <div className="flex flex-wrap gap-2">
                {wine.tastingNotes.map(note => (
                  <span key={note} className="px-2 py-1 bg-[#faf8f5] border border-[#e8e6e1] text-[10px] font-lora italic text-gray-600">
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <div className="flex space-x-3">
              <button 
                onClick={() => onAddToCart(wine)}
                className="flex-grow bg-[#722f3f] text-white py-4 uppercase tracking-[0.2em] font-bold text-[10px] hover:bg-[#5a2532] transition-all flex items-center justify-center space-x-3 shadow-xl"
              >
                <ShoppingBag size={14} />
                <span>Add to Cellar</span>
              </button>
              <button 
                onClick={() => onToggleWishlist(wine)}
                className={`w-14 border border-[#e8e6e1] flex items-center justify-center transition-all ${isInWishlist ? 'bg-[#722f3f] text-white' : 'bg-white hover:text-red-500'}`}
              >
                <Heart size={20} className={isInWishlist ? 'fill-white' : ''} />
              </button>
            </div>
            <button 
              onClick={() => {
                onClose();
                onNavigateToProduct(wine.id);
              }}
              className="w-full text-center py-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-[#722f3f] transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>View Full Details & Pairing Guide</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
