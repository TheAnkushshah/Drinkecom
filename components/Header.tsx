import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, User, Shield, Heart, Bell, MapPin } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string, params?: any) => void;
  cartCount: number;
  wishlistCount: number;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, wishlistCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasNotifications, setHasNotifications] = useState(true);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('shop', { search: searchQuery.trim() });
      setIsSearchExpanded(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e6e1]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation - Left */}
        <nav className="hidden md:flex items-center space-x-8 text-[10px] font-bold tracking-[0.2em] uppercase">
          <button onClick={() => onNavigate('shop')} className="hover:text-[#722f3f] transition-colors">Shop</button>
          <button onClick={() => onNavigate('stores')} className="hover:text-[#722f3f] transition-colors">Stores</button>
          <button onClick={() => onNavigate('club')} className="hover:text-[#722f3f] transition-colors">Club</button>
          <button onClick={() => onNavigate('tastings')} className="hover:text-[#722f3f] transition-colors">Tastings</button>
          <button onClick={() => onNavigate('education')} className="hover:text-[#722f3f] transition-colors">Education</button>
          <button onClick={() => onNavigate('about')} className="hover:text-[#722f3f] transition-colors">Story</button>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#722f3f] transition-colors">Contact</button>
        </nav>

        {/* Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          className="cursor-pointer flex items-center"
        >
          <img 
            src="/Logo.png" 
            alt="G-Town Wines" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>

        {/* Action Icons - Right */}
        <div className="flex items-center space-x-4">
          {/* Expandable Search */}
          <div className={`relative flex items-center transition-all duration-300 ${isSearchExpanded ? 'w-48 md:w-64' : 'w-10'}`}>
            <form onSubmit={handleSearchSubmit} className="w-full flex items-center">
              <input
                type="text"
                placeholder="Search vintages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => !searchQuery && setIsSearchExpanded(false)}
                className={`w-full bg-white/50 border border-[#e8e6e1] rounded-full py-1.5 pl-4 pr-10 text-xs font-lora italic outline-none focus:border-[#722f3f] transition-all ${isSearchExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
              />
              <button 
                type="button"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className="absolute right-0 p-2 text-[#2a2a2a] hover:text-[#722f3f] transition-colors"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          <button onClick={() => onNavigate('admin')} className="p-2 text-gray-400 hover:text-[#722f3f] transition-colors" title="Admin">
            <Shield size={18} />
          </button>
          
          <button onClick={() => { setHasNotifications(false); alert('Inner Sanctum Updates: 2 New Estate Allocations Available.'); }} className="p-2 relative text-[#2a2a2a] hover:text-[#722f3f] transition-colors" title="Notifications">
            <Bell size={20} />
            {hasNotifications && (
              <span className="absolute top-2 right-2 bg-[#d4af37] w-2 h-2 rounded-full border border-white"></span>
            )}
          </button>

          <button onClick={() => onNavigate('account')} className="p-2 text-[#2a2a2a] hover:text-[#722f3f] transition-colors">
            <User size={20} />
          </button>
          
          <button onClick={() => onNavigate('wishlist')} className="p-2 relative text-[#2a2a2a] hover:text-[#722f3f] transition-colors">
            <Heart size={20} className={wishlistCount > 0 ? 'fill-[#722f3f]' : ''} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#d4af37] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>

          <button onClick={() => onNavigate('cart')} className="p-2 relative text-[#2a2a2a] hover:text-[#722f3f] transition-colors">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#722f3f] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-t border-[#e8e6e1] absolute top-20 left-0 right-0 py-8 px-6 space-y-6 flex flex-col items-center shadow-2xl animate-in slide-in-from-top duration-300">
          <button onClick={() => { onNavigate('shop'); setIsMenuOpen(false); }} className="text-xl font-serif">The Collection</button>
          <button onClick={() => { onNavigate('stores'); setIsMenuOpen(false); }} className="text-xl font-serif">Locate Stores</button>
          <button onClick={() => { onNavigate('club'); setIsMenuOpen(false); }} className="text-xl font-serif">Club</button>
          <button onClick={() => { onNavigate('tastings'); setIsMenuOpen(false); }} className="text-xl font-serif">Tastings</button>
          <button onClick={() => { onNavigate('education'); setIsMenuOpen(false); }} className="text-xl font-serif">Education</button>
          <button onClick={() => { onNavigate('about'); setIsMenuOpen(false); }} className="text-xl font-serif">Our Story</button>
          <button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="text-xl font-serif">Contact Us</button>
          <button onClick={() => { onNavigate('wishlist'); setIsMenuOpen(false); }} className="text-xl font-serif">Wishlist</button>
          <button onClick={() => { onNavigate('account'); setIsMenuOpen(false); }} className="text-xl font-serif">My Account</button>
        </div>
      )}
    </header>
  );
};

export default Header;
