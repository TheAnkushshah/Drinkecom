
import React, { useState } from 'react';
import { Calendar, Users, Wine, Clock, GlassWater, ArrowRight, Star } from 'lucide-react';

interface TastingsProps {
  onNavigate: (page: string) => void;
  onShowToast: (message: string) => void;
}

const Tastings: React.FC<TastingsProps> = ({ onNavigate, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    guests: '2',
    tier: 'Estate Flight'
  });

  const packages = [
    {
      name: "Estate Flight",
      price: "45",
      duration: "60 mins",
      desc: "A journey through our current seasonal releases and estate-grown varietals.",
      image: "https://images.unsplash.com/photo-1510850478944-d5ec3ca2c5fe?auto=format&fit=crop&q=80&w=800",
      features: ["5 Seasonal Wines", "Artisanal Cheese Pairing", "Vineyard Walkthrough"]
    },
    {
      name: "The Library Experience",
      price: "125",
      duration: "90 mins",
      desc: "An exclusive vertical tasting of our most celebrated library vintages, direct from the cellar archives.",
      image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800",
      features: ["Rare Library Vintages", "Private Cellar Tour", "Barrel Sample Tasting"]
    },
    {
      name: "Chef's Table Harmony",
      price: "250",
      duration: "3 hours",
      desc: "The ultimate culinary collaboration. A multi-course dinner paired perfectly with Platinum reserve selections.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
      features: ["7-Course Pairing", "Personal Sommelier", "Take-home Gift Bottle"]
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast(`Booking request for ${formData.tier} submitted. We will contact you shortly.`);
    setFormData({ name: '', date: '', guests: '2', tier: 'Estate Flight' });
  };

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="h-[75vh] relative overflow-hidden flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 animate-slow-zoom" 
          alt="Vineyard Tasting" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative z-10 text-center text-white space-y-8 px-6">
          <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#d4af37]">Sensory Journeys</h4>
          <h1 className="text-6xl md:text-8xl font-serif italic leading-tight">The Tasting Experience</h1>
          <p className="max-w-2xl mx-auto text-xl font-lora italic opacity-90 leading-relaxed">
            From the sun-drenched terrace to the intimate candlelit cellar, discover the soul of G-Town through a curated flight of our finest craft.
          </p>
          <div className="pt-8">
            <a href="#booking" className="bg-[#722f3f] text-white px-12 py-5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#5a2532] transition-all shadow-2xl">
              Reserve Your Table
            </a>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-32 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white border border-[#e8e6e1] rounded-full mb-4">
             <Wine size={32} className="text-[#722f3f]" />
          </div>
          <h2 className="text-4xl font-serif text-[#2a2a2a]">An Unforgettable Encounter</h2>
          <p className="text-xl font-lora italic text-gray-500 leading-relaxed">
            "A tasting at G-Town is more than just sampling wine; it is a dialogue between the taster and the terroir. Our educators guide you through the subtle nuances of each vintage, revealing the secrets held within the glass."
          </p>
          <div className="h-0.5 w-16 bg-[#d4af37] mx-auto"></div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-white border-y border-[#e8e6e1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-[#faf8f5] border border-[#e8e6e1] rounded-sm overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 group">
                <div className="h-64 overflow-hidden relative">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#722f3f]">
                    ${pkg.price} Per Guest
                  </div>
                </div>
                <div className="p-10 space-y-6 flex-grow flex flex-col">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-[#d4af37]">
                      <Clock size={12} />
                      <span>{pkg.duration}</span>
                    </div>
                    <h3 className="text-3xl font-serif">{pkg.name}</h3>
                  </div>
                  <p className="text-sm font-lora italic text-gray-500 leading-relaxed">
                    {pkg.desc}
                  </p>
                  <ul className="space-y-4 pt-4 flex-grow">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-[10px] uppercase tracking-widest font-bold text-[#2a2a2a]">
                        <Star size={12} className="mr-3 text-[#d4af37]" fill="#d4af37" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setFormData({ ...formData, tier: pkg.name })}
                    className="w-full mt-10 border border-[#722f3f] text-[#722f3f] py-4 uppercase tracking-widest text-[10px] font-bold hover:bg-[#722f3f] hover:text-white transition-all"
                  >
                    Select Experience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-32 bg-[#722f3f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grayscale pointer-events-none">
          <img src="https://www.transparenttextures.com/patterns/linen.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="text-white space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#d4af37]">Reservations</h4>
            <h2 className="text-5xl font-serif italic leading-tight">Secure Your Private Allocation</h2>
            <p className="text-lg font-lora italic opacity-80 leading-relaxed max-w-xl">
              Due to the intimate nature of our cellar and the limited production of our library vintages, we recommend booking your experience at least two weeks in advance.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-4">
                <Calendar size={20} className="text-[#d4af37]" />
                <p className="text-sm font-bold uppercase tracking-widest">Open Daily: 10:00 — 17:00</p>
              </div>
              <div className="flex items-center space-x-4">
                <Users size={20} className="text-[#d4af37]" />
                <p className="text-sm font-bold uppercase tracking-widest">Private groups up to 12 guests</p>
              </div>
              <div className="flex items-center space-x-4">
                <GlassWater size={20} className="text-[#d4af37]" />
                <p className="text-sm font-bold uppercase tracking-widest">Platinum Members receive priority booking</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 shadow-2xl rounded-sm">
            <form onSubmit={handleBooking} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Theodore Thorne"
                  className="w-full bg-[#faf8f5] border-b border-[#e8e6e1] py-4 outline-none focus:border-[#722f3f] transition-colors text-sm font-lora italic"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Date of Visit</label>
                  <input 
                    required
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-[#faf8f5] border-b border-[#e8e6e1] py-4 outline-none focus:border-[#722f3f] transition-colors text-sm font-lora"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Number of Guests</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-[#faf8f5] border-b border-[#e8e6e1] py-4 outline-none focus:border-[#722f3f] transition-colors text-sm font-serif"
                  >
                    {[1,2,3,4,5,6,8,10,12].map(n => (
                      <option key={n} value={n}>{n} Guests</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Experience Tier</label>
                <select 
                  value={formData.tier}
                  onChange={(e) => setFormData({...formData, tier: e.target.value})}
                  className="w-full bg-[#faf8f5] border-b border-[#e8e6e1] py-4 outline-none focus:border-[#722f3f] transition-colors text-sm font-serif"
                >
                  <option>Estate Flight</option>
                  <option>The Library Experience</option>
                  <option>Chef's Table Harmony</option>
                </select>
              </div>

              <button className="w-full bg-[#722f3f] text-white py-5 flex items-center justify-center space-x-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#5a2532] transition-all group">
                <span>Request Reservation</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#d4af37] mb-12">Shared Moments</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
               "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800",
               "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
               "https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80&w=800"
             ].map((img, i) => (
               <div key={i} className="aspect-square overflow-hidden bg-gray-100 rounded-sm">
                 <img src={img} alt="Tasting Experience" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer" />
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tastings;
