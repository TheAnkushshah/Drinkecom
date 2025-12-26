
import React, { useState } from 'react';
import { MOCK_WINES } from '../constants';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Edit, 
  Plus, 
  MessageSquare, 
  CheckCircle, 
  XCircle, 
  Search,
  TrendingUp,
  CreditCard,
  Percent,
  ShoppingCart as CartIcon,
  Crown
} from 'lucide-react';

const Admin: React.FC = () => {
  const [wines, setWines] = useState(MOCK_WINES);
  const [activeTab, setActiveTab] = useState('Analytics');
  const [searchQuery, setSearchQuery] = useState('');

  const adminTabs = [
    { name: 'Analytics', icon: <BarChart3 size={16} /> },
    { name: 'Inventory', icon: <Package size={16} /> },
    { name: 'Orders', icon: <ShoppingCart size={16} /> },
    { name: 'Customers', icon: <Users size={16} /> },
    { name: 'Reviews', icon: <MessageSquare size={16} /> },
    { name: 'Subscriptions', icon: <Crown size={16} /> }
  ];

  const analyticsStats = [
    { label: 'Total Revenue', value: '$124,500', trend: '+12.5%', icon: <CreditCard size={14} className="text-blue-500" />, detail: 'Gross sales this month' },
    { label: 'Conversion Rate', value: '3.8%', trend: '+0.4%', icon: <Percent size={14} className="text-green-500" />, detail: 'Visits to purchases' },
    { label: 'Avg. Order Value', value: '$342.00', trend: '+8.2%', icon: <TrendingUp size={14} className="text-[#d4af37]" />, detail: 'Per customer spend' },
    { label: 'Cart Abandonment', value: '42%', trend: '-2.1%', icon: <CartIcon size={14} className="text-red-400" />, detail: 'Unfinished checkouts' }
  ];

  const topProducts = wines.slice(0, 3).map(w => ({ ...w, sales: Math.floor(Math.random() * 100) + 50 }));

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-[#722f3f] text-white rounded-sm shadow-lg">
            <LayoutDashboard size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-serif">Management Portal</h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Authenticated as: Master Sommelier (Admin)</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-white border border-[#e8e6e1] px-4 py-2 rounded-sm shadow-sm">
          <Search size={16} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Global search..." 
            className="bg-transparent outline-none text-sm w-48 font-lora"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Navigation */}
        <nav className="space-y-1">
          {adminTabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center space-x-4 px-6 py-4 rounded-sm text-[11px] uppercase tracking-[0.2em] font-bold transition-all border-l-4 ${
                activeTab === tab.name 
                ? 'bg-[#722f3f] text-white border-[#d4af37] shadow-lg translate-x-1' 
                : 'hover:bg-white text-gray-500 border-transparent hover:border-[#e8e6e1] hover:text-[#2a2a2a]'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>

        {/* Main Content Area */}
        <main className="lg:col-span-3 space-y-10">
          
          {/* Analytics Dashboard */}
          {activeTab === 'Analytics' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {analyticsStats.map(stat => (
                  <div key={stat.label} className="bg-white p-6 border border-[#e8e6e1] shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-[#faf8f5] rounded-full group-hover:bg-[#722f3f]/5 transition-colors">
                        {stat.icon}
                      </div>
                      <span className={`text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-400'}`}>
                        {stat.trend}
                      </span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{stat.label}</p>
                    <p className="text-3xl font-serif text-[#2a2a2a] mb-2">{stat.value}</p>
                    <p className="text-[10px] text-gray-400 italic font-lora">{stat.detail}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white border border-[#e8e6e1] p-8 space-y-6">
                  <h3 className="text-xl font-serif">Top Performing Vintages</h3>
                  <table className="w-full">
                    <thead className="text-[10px] uppercase tracking-widest text-gray-400 border-b border-[#e8e6e1]">
                      <tr>
                        <th className="pb-4 text-left">Wine</th>
                        <th className="pb-4 text-center">Sales (Units)</th>
                        <th className="pb-4 text-right">Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#faf8f5]">
                      {topProducts.map(p => (
                        <tr key={p.id} className="group">
                          <td className="py-4">
                            <div className="flex items-center space-x-3">
                              <img src={p.imageUrl} alt="" className="w-8 h-10 object-cover rounded-sm" />
                              <span className="font-bold text-sm group-hover:text-[#722f3f] transition-colors">{p.name} {p.vintage}</span>
                            </div>
                          </td>
                          <td className="py-4 text-center text-sm font-medium">{p.sales}</td>
                          <td className="py-4 text-right text-sm font-bold text-[#722f3f]">${(p.sales * p.price).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-[#722f3f] text-white p-8 flex flex-col justify-center items-center text-center space-y-6 shadow-2xl relative overflow-hidden">
                  <BarChart3 size={64} className="opacity-10 absolute -bottom-4 -right-4" />
                  <h3 className="text-2xl font-serif">Monthly Goal</h3>
                  <div className="relative w-32 h-32 flex items-center justify-center">
                     <svg className="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                        <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364" strokeDashoffset="50" className="text-[#d4af37]" />
                     </svg>
                     <span className="absolute text-xl font-bold">86%</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80">Revenue Target Progress</p>
                </div>
              </div>
            </div>
          )}

          {/* Inventory Management */}
          {activeTab === 'Inventory' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-serif">Inventory & Vintage Tracking</h2>
                <button className="bg-[#722f3f] text-white px-6 py-3 uppercase text-[10px] font-bold tracking-[0.2em] flex items-center space-x-3 hover:bg-[#5a2532] transition-colors shadow-md">
                  <Plus size={14} /> <span>Release New Vintage</span>
                </button>
              </div>

              <div className="bg-white border border-[#e8e6e1] rounded-sm shadow-sm overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-[#faf8f5] border-b border-[#e8e6e1] text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    <tr>
                      <th className="px-6 py-5">Product Details</th>
                      <th className="px-6 py-5">Region</th>
                      <th className="px-6 py-5">Stock</th>
                      <th className="px-6 py-5">Price</th>
                      <th className="px-6 py-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#faf8f5]">
                    {wines.map(wine => (
                      <tr key={wine.id} className="hover:bg-[#faf8f5] transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-14 bg-gray-50 flex-shrink-0">
                               <img src={wine.imageUrl} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                            </div>
                            <div>
                              <p className="font-bold text-sm text-[#2a2a2a]">{wine.name}</p>
                              <p className="text-[10px] uppercase text-gray-400 tracking-widest font-bold">{wine.vintage} Vintage • {wine.varietal}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-lora italic text-sm text-gray-500">{wine.region.split(',')[0]}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                             <div className={`w-2 h-2 rounded-full ${wine.stock < 20 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                             <span className={`text-xs font-bold ${wine.stock < 20 ? 'text-red-500' : 'text-gray-600'}`}>
                               {wine.stock} Units
                             </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-bold text-sm">${wine.price}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 text-gray-400 hover:text-[#722f3f] transition-colors"><Edit size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Orders Management */}
          {activeTab === 'Orders' && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-2xl font-serif">Recent Shipments</h2>
              <div className="bg-white border border-[#e8e6e1] rounded-sm shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-[#faf8f5] border-b border-[#e8e6e1] text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    <tr>
                      <th className="px-6 py-5">Order ID</th>
                      <th className="px-6 py-5">Customer</th>
                      <th className="px-6 py-5">Status</th>
                      <th className="px-6 py-5">Date</th>
                      <th className="px-6 py-5 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#faf8f5]">
                    {[
                      { id: '#GT-9842', customer: 'Julian Vane', status: 'Delivered', date: 'Oct 12, 2024', total: '$425.00' },
                      { id: '#GT-9843', customer: 'Sophia Reed', status: 'Processing', date: 'Oct 14, 2024', total: '$1,250.00' },
                      { id: '#GT-9844', customer: 'Marc Chen', status: 'In Transit', date: 'Oct 14, 2024', total: '$85.00' },
                    ].map(order => (
                      <tr key={order.id} className="text-sm">
                        <td className="px-6 py-5 font-bold">{order.id}</td>
                        <td className="px-6 py-5 font-lora italic">{order.customer}</td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-full ${
                            order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 
                            order.status === 'Processing' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-gray-400">{order.date}</td>
                        <td className="px-6 py-5 text-right font-bold">{order.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Reviews Moderation */}
          {activeTab === 'Reviews' && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-2xl font-serif">Review Moderation</h2>
              <div className="space-y-4">
                {[
                  { wine: 'Estate Cabernet', user: 'Eleanor P.', rating: 5, comment: 'Simply divine. The depth of dark fruit notes is unparalleled.', status: 'Pending' },
                  { wine: 'Reserve Chardonnay', user: 'Mark K.', rating: 2, comment: 'A bit too much oak for my preference. Expected more acidity.', status: 'Pending' }
                ].map((review, i) => (
                  <div key={i} className="bg-white border border-[#e8e6e1] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#722f3f] transition-colors">
                    <div className="flex-grow space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-sm">{review.user}</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">on {review.wine}</span>
                        <div className="flex text-[#d4af37]">
                          {[...Array(5)].map((_, i) => <TrendingUp key={i} size={10} className={i < review.rating ? 'fill-[#d4af37]' : 'text-gray-200'} />)}
                        </div>
                      </div>
                      <p className="text-sm font-lora italic text-gray-600 leading-relaxed">"{review.comment}"</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center space-x-2 px-4 py-2 border border-green-200 text-green-600 text-[10px] font-bold uppercase tracking-widest hover:bg-green-50 transition-colors">
                        <CheckCircle size={14} /> <span>Approve</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 border border-red-200 text-red-400 text-[10px] font-bold uppercase tracking-widest hover:bg-red-50 transition-colors">
                        <XCircle size={14} /> <span>Reject</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wine Club & Subscriptions */}
          {activeTab === 'Subscriptions' && (
            <div className="space-y-6 animate-in fade-in">
               <div className="flex justify-between items-center">
                <h2 className="text-2xl font-serif">Wine Club Members</h2>
                <div className="flex space-x-2">
                   {['Platinum', 'Gold', 'Silver'].map(t => (
                     <span key={t} className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 border border-[#e8e6e1] bg-white">{t}</span>
                   ))}
                </div>
              </div>
              <div className="bg-white border border-[#e8e6e1] rounded-sm shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-[#faf8f5] border-b border-[#e8e6e1] text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    <tr>
                      <th className="px-6 py-5">Member</th>
                      <th className="px-6 py-5">Tier</th>
                      <th className="px-6 py-5">Status</th>
                      <th className="px-6 py-5">Next Shipment</th>
                      <th className="px-6 py-5 text-right">LTV</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#faf8f5]">
                    {[
                      { name: 'Julian Vane', tier: 'Platinum', status: 'Active', next: 'Nov 01, 2024', ltv: '$12,450' },
                      { name: 'Sophia Reed', tier: 'Gold', status: 'Active', next: 'Nov 01, 2024', ltv: '$4,200' },
                      { name: 'David Chen', tier: 'Silver', status: 'Paused', next: 'TBD', ltv: '$850' },
                    ].map(member => (
                      <tr key={member.name} className="text-sm">
                        <td className="px-6 py-5 font-bold">{member.name}</td>
                        <td className="px-6 py-5">
                          <span className={`font-serif ${member.tier === 'Platinum' ? 'text-[#722f3f]' : 'text-gray-500'}`}>
                            {member.tier}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${member.status === 'Active' ? 'text-green-500' : 'text-gray-400'}`}>
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 font-lora italic text-gray-400">{member.next}</td>
                        <td className="px-6 py-5 text-right font-bold text-[#722f3f]">{member.ltv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'Customers' && (
            <div className="py-24 text-center border-2 border-dashed border-[#e8e6e1] rounded-sm">
              <Users size={48} className="mx-auto text-gray-200 mb-6" />
              <p className="text-gray-400 font-lora italic">Customer database sync in progress. Full lifecycle data will appear here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
