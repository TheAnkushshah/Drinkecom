
import React from 'react';
import { CartItem } from '../types';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
  onNavigate: (page: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemove, onCheckout, onNavigate }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="pt-48 pb-32 max-w-7xl mx-auto px-6 text-center space-y-8 animate-in fade-in duration-700">
        <div className="flex justify-center">
          <ShoppingBag size={64} className="text-gray-200" />
        </div>
        <h2 className="text-4xl font-serif">Your cellar is empty</h2>
        <p className="text-gray-500 font-lora italic max-w-sm mx-auto">It seems you haven't selected any bottles yet. Start your journey in our shop.</p>
        <button 
          onClick={() => onNavigate('shop')}
          className="bg-[#722f3f] text-white px-10 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#5a2532] transition-all"
        >
          Explore the Collection
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 animate-in fade-in duration-700">
      <h1 className="text-4xl font-serif mb-12">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Items List */}
        <div className="lg:col-span-2 space-y-8">
          {items.map(item => (
            <div key={item.id} className="flex space-x-6 pb-8 border-b border-[#e8e6e1]">
              <div className="w-32 aspect-[3/4] bg-white rounded-sm overflow-hidden flex-shrink-0 shadow-md">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif">{item.name} {item.vintage}</h3>
                    <p className="text-xs text-[#722f3f] font-bold uppercase tracking-widest">{item.varietal}</p>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <div className="flex justify-between items-end pt-4">
                  <div className="flex items-center border border-[#e8e6e1] rounded-sm">
                    <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-3 py-1 hover:text-[#722f3f]">-</button>
                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-3 py-1 hover:text-[#722f3f]">+</button>
                  </div>
                  <p className="text-lg font-medium">${item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div className="space-y-8">
          <div className="bg-[#faf8f5] border border-[#e8e6e1] p-8 rounded-sm space-y-6">
            <h3 className="text-lg font-serif border-b border-[#e8e6e1] pb-4">Order Summary</h3>
            
            <div className="space-y-4 text-sm font-lora italic text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#e8e6e1] flex justify-between items-end">
              <span className="text-sm font-bold uppercase tracking-widest">Total</span>
              <span className="text-2xl font-medium text-[#722f3f]">${total.toFixed(2)}</span>
            </div>

            <button 
              onClick={onCheckout}
              className="w-full bg-[#722f3f] text-white py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#5a2532] transition-all flex items-center justify-center space-x-3"
            >
              <span>Secure Checkout</span>
              <ArrowRight size={16} />
            </button>
            
            <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest pt-4">
              All deliveries require 21+ signature
            </p>
          </div>
          
          <div className="bg-[#e8e6e1]/30 p-6 rounded-sm text-center">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Wine Club Member?</h4>
            <p className="text-xs font-lora italic text-gray-500 mb-4">Log in to receive your 15% discount and complimentary shipping.</p>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="text-[#722f3f] text-[10px] uppercase tracking-widest font-bold border-b border-[#722f3f]"
            >
              Log In Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
