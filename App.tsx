
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AISommelier from './components/AISommelier';
import AgeVerification from './components/AgeVerification';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Admin from './pages/Admin';
import About from './pages/About';
import Blog from './pages/Blog';
import Wishlist from './pages/Wishlist';
import Contact from './pages/Contact';
import Tastings from './pages/Tastings';
import Stores from './pages/Stores';
import CSR from './pages/CSR'; // NEW IMPORT
import { Wine, CartItem } from './types';
import { Check, X as XIcon, Crown, Award, Star, Gem, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState<any>({});
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Wine[]>([]);
  const [toast, setToast] = useState<{ visible: boolean; message: string }>({ visible: false, message: '' });

  // Navigation logic
  const navigate = (page: string, params: any = {}) => {
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo(0, 0);
  };

  const showToast = (message: string) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: '' }), 3000);
  };

  const addToCart = (wine: Wine, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === wine.id);
      if (existing) {
        return prev.map(item => item.id === wine.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...wine, quantity }];
    });
    showToast(`${quantity} bottle(s) of ${wine.name} added to your cellar.`);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleWishlist = (wine: Wine) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === wine.id);
      if (exists) {
        showToast(`Removed ${wine.name} from wishlist.`);
        return prev.filter(item => item.id !== wine.id);
      } else {
        showToast(`Added ${wine.name} to wishlist.`);
        return [...prev, wine];
      }
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} onAddToCart={addToCart} />;
      case 'shop':
        return (
          <Shop 
            onNavigate={navigate} 
            onAddToCart={addToCart} 
            initialFilters={pageParams} 
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
          />
        );
      case 'product':
        return (
          <ProductDetail 
            id={pageParams.id} 
            onAddToCart={addToCart} 
            onNavigate={navigate} 
            onToggleWishlist={toggleWishlist}
            isInWishlist={wishlist.some(w => w.id === pageParams.id)}
          />
        );
      case 'cart':
        return (
          <Cart 
            items={cart} 
            onUpdateQuantity={updateCartQuantity} 
            onRemove={removeFromCart} 
            onCheckout={() => {
              showToast('Processing your selection... Redirecting to secure vault.');
            }}
            onNavigate={navigate}
          />
        );
      case 'wishlist':
        return (
          <Wishlist 
            items={wishlist} 
            onNavigate={navigate} 
            onAddToCart={addToCart} 
            onToggleWishlist={toggleWishlist} 
          />
        );
      case 'contact':
        return <Contact onNavigate={navigate} onShowToast={showToast} />;
      case 'tastings':
        return <Tastings onNavigate={navigate} onShowToast={showToast} />;
      case 'stores':
        return <Stores />;
      case 'csr': // NEW ROUTE
        return <CSR />;
      case 'account':
        return <Account />;
      case 'admin':
        return <Admin />;
      case 'about':
        return <About />;
      case 'education':
        return <Blog />;
      case 'club':
        return (
          <div className="pt-48 pb-32 bg-[#722f3f] text-white animate-in zoom-in-95">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                <h4 className="text-[#d4af37] text-xs uppercase tracking-[0.5em] font-bold mb-6">Exclusive Allocations</h4>
                <h1 className="text-6xl md:text-7xl font-serif mb-8 italic">The G-Town Circle</h1>
                <p className="text-xl font-lora italic max-w-2xl mx-auto mb-16 opacity-80">Experience the exclusive benefits of G-Town membership. Private allocations, member-only events, and curated shipments designed for the discerning palate.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                  {[
                    { tier: 'Silver', price: '185', bottles: '6', icon: <Star size={24} className="text-gray-400" /> },
                    { tier: 'Gold', price: '350', bottles: '12', icon: <Crown size={24} className="text-[#d4af37]" /> },
                    { tier: 'Platinum', price: '650', bottles: '24', icon: <Gem size={24} className="text-white" /> }
                  ].map(item => (
                    <div key={item.tier} className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-sm space-y-8 hover:bg-white/10 transition-all cursor-pointer group flex flex-col items-center text-center">
                      <div className="p-4 bg-white/10 rounded-full mb-2">{item.icon}</div>
                      <h3 className="text-3xl font-serif text-[#d4af37] group-hover:scale-110 transition-transform">{item.tier}</h3>
                      <div className="space-y-1">
                        <p className="text-sm font-lora italic opacity-80">{item.bottles} Bottles / Semester</p>
                        <p className="text-[11px] uppercase tracking-widest font-bold">Starting at ${item.price}</p>
                      </div>
                      <ul className="text-[10px] uppercase tracking-[0.2em] space-y-4 font-bold border-t border-white/10 pt-8 w-full">
                        <li className="flex items-center justify-center"><Check size={14} className="mr-2 text-[#d4af37]" /> 15% Collection Discount</li>
                        <li className="flex items-center justify-center"><Check size={14} className="mr-2 text-[#d4af37]" /> Complimentary Shipping</li>
                        <li className="flex items-center justify-center"><Check size={14} className="mr-2 text-[#d4af37]" /> Library Access</li>
                      </ul>
                      <button onClick={() => showToast(`Welcome to the ${item.tier} Circle. Selection confirmed.`)} className="w-full bg-[#d4af37] text-[#2a2a2a] py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors mt-auto">Join {item.tier}</button>
                    </div>
                  ))}
                </div>

                {/* Plan Comparison Section */}
                <div className="space-y-16">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-serif">Plan Comparison</h2>
                    <div className="h-px w-24 bg-[#d4af37] mx-auto"></div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white/5 border border-white/10 rounded-sm">
                      <thead className="bg-white/5 text-[#d4af37] font-bold uppercase tracking-[0.2em] text-[10px]">
                        <tr>
                          <th className="px-8 py-6">Privilege Features</th>
                          <th className="px-8 py-6 text-center">Silver</th>
                          <th className="px-8 py-6 text-center">Gold</th>
                          <th className="px-8 py-6 text-center text-white">Platinum</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-[11px] uppercase tracking-widest font-bold">
                        {[
                          { feature: 'Annual Allocation', s: '6 Bottles', g: '12 Bottles', p: '24 Bottles' },
                          { feature: 'Cellar Discount', s: '10%', g: '15%', p: '20%' },
                          { feature: 'Exclusive Library Access', s: true, g: true, p: true },
                          { feature: 'Private Event Invitations', s: false, g: true, p: true },
                          { feature: 'Personal Sommelier Concierge', s: false, g: false, p: true },
                          { feature: 'Complimentary Estate Tastings', s: '2 / Year', g: '4 / Year', p: 'Unlimited' },
                          { feature: 'Temperature Controlled Shipping', s: 'Subsidized', g: 'Free', p: 'Priority Free' },
                          { feature: 'Pre-release Allocation', s: false, g: '48h Early', p: '7 Days Early' }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-white/5 transition-colors">
                            <td className="px-8 py-6 opacity-70">{row.feature}</td>
                            <td className="px-8 py-6 text-center">
                              {typeof row.s === 'boolean' ? (row.s ? <CheckCircle2 size={16} className="mx-auto text-[#d4af37]" /> : <XIcon size={16} className="mx-auto opacity-20" />) : row.s}
                            </td>
                            <td className="px-8 py-6 text-center">
                              {typeof row.g === 'boolean' ? (row.g ? <CheckCircle2 size={16} className="mx-auto text-[#d4af37]" /> : <XIcon size={16} className="mx-auto opacity-20" />) : row.g}
                            </td>
                            <td className="px-8 py-6 text-center text-white">
                              {typeof row.p === 'boolean' ? (row.p ? <CheckCircle2 size={16} className="mx-auto" /> : <XIcon size={16} className="mx-auto opacity-20" />) : row.p}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="pt-12">
                     <button onClick={() => navigate('contact')} className="text-[#d4af37] uppercase tracking-[0.4em] font-bold text-[10px] border-b border-[#d4af37] pb-2 hover:text-white hover:border-white transition-all">
                       Contact Curator for Corporate & Bespoke Memberships
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={navigate} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#722f3f] selection:text-white relative">
      {!isAgeVerified && <AgeVerification onVerify={() => setIsAgeVerified(true)} />}
      
      <Header 
        onNavigate={navigate} 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        wishlistCount={wishlist.length}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
      <AISommelier />

      {/* Luxury Toast Notification */}
      {toast.visible && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-[#2a2a2a] text-[#faf8f5] px-8 py-4 rounded-sm shadow-2xl flex items-center space-x-4 border border-white/10 animate-in slide-in-from-top-4 fade-in duration-500">
          <div className="bg-[#2d7a5e] p-1 rounded-full">
            <Check size={14} className="text-white" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{toast.message}</span>
        </div>
      )}
    </div>
  );
};

export default App;
