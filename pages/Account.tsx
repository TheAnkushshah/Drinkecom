
import React from 'react';
import { User, Package, Gift, Settings, LogOut, Star } from 'lucide-react';

const Account: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Sidebar */}
        <aside className="md:w-64 space-y-8">
          <div className="flex items-center space-x-4 pb-8 border-b border-[#e8e6e1]">
            <div className="w-12 h-12 bg-[#722f3f] rounded-full flex items-center justify-center text-white">
              <User size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl">Julian Vane</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Platinum Member</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            <button className="w-full flex items-center space-x-4 px-4 py-3 bg-[#e8e6e1]/50 rounded-sm text-[#722f3f] font-bold text-xs uppercase tracking-widest">
              <Package size={16} /> <span>Orders</span>
            </button>
            <button className="w-full flex items-center space-x-4 px-4 py-3 hover:bg-[#e8e6e1]/30 rounded-sm text-gray-500 font-bold text-xs uppercase tracking-widest transition-colors">
              <Gift size={16} /> <span>Loyalty Rewards</span>
            </button>
            <button className="w-full flex items-center space-x-4 px-4 py-3 hover:bg-[#e8e6e1]/30 rounded-sm text-gray-500 font-bold text-xs uppercase tracking-widest transition-colors">
              <Settings size={16} /> <span>Preferences</span>
            </button>
            <button className="w-full flex items-center space-x-4 px-4 py-3 hover:bg-red-50 rounded-sm text-red-400 font-bold text-xs uppercase tracking-widest transition-colors pt-12">
              <LogOut size={16} /> <span>Sign Out</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow space-y-12">
          {/* Rewards Card */}
          <div className="bg-[#722f3f] text-white p-10 rounded-sm relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-bold">G-Town Rewards</h4>
                <div className="flex items-end space-x-2">
                  <span className="text-6xl font-serif">4,250</span>
                  <span className="text-sm uppercase tracking-widest opacity-60 pb-2">Points Available</span>
                </div>
                <p className="text-sm font-lora italic opacity-80">You're only 750 points away from a complimentary Library Vintage.</p>
              </div>
              <button className="bg-[#d4af37] text-[#2a2a2a] px-8 py-4 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-white transition-colors">
                Redeem Rewards
              </button>
            </div>
            <Star className="absolute -right-12 -bottom-12 text-white opacity-5 w-64 h-64" />
          </div>

          {/* Recent Orders */}
          <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-[#e8e6e1] pb-4">
              <h3 className="text-2xl font-serif">Order History</h3>
              <button className="text-[10px] uppercase tracking-widest text-[#722f3f] font-bold">View All</button>
            </div>
            
            <div className="space-y-4">
              {[
                { id: '#GT-9842', date: 'Oct 12, 2024', status: 'Delivered', total: '$425.00' },
                { id: '#GT-9211', date: 'Aug 04, 2024', status: 'Delivered', total: '$185.00' }
              ].map(order => (
                <div key={order.id} className="flex justify-between items-center bg-white p-6 border border-[#e8e6e1] hover:border-[#722f3f] transition-colors group">
                  <div className="space-y-1">
                    <p className="font-bold text-sm">{order.id}</p>
                    <p className="text-xs text-gray-400 font-lora italic">{order.date}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-accent px-3 py-1 bg-accent/5 rounded-full">{order.status}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-bold text-sm">{order.total}</p>
                    <button className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-[#722f3f] font-bold transition-colors">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Account;
