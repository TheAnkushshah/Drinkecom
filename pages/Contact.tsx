
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  ArrowRight, 
  Globe, 
  Building2, 
  UserCircle2, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  ChevronRight,
  Zap
} from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
  onShowToast: (message: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Inquiry',
    contactMethod: 'Email',
    message: '',
    interests: [] as string[]
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please authenticate your inquiry by sliding the verification bar.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onShowToast("Inquiry Transmitted. Our Master Sommelier will review your request shortly.");
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '', 
        subject: 'General Inquiry', 
        contactMethod: 'Email', 
        message: '', 
        interests: [] 
      });
      setIsSubmitting(false);
      setIsVerified(false);
      setSliderValue(0);
    }, 2000);
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const contactMethods = [
    {
      icon: <Smartphone size={24} className="text-[#d4af37]" />,
      title: "Concierge Private Line",
      detail: "+1 (800) G-TOWN-WINE",
      desc: "Priority support for Platinum members"
    },
    {
      icon: <Mail size={24} className="text-[#d4af37]" />,
      title: "Electronic Correspondence",
      detail: "concierge@gtownwines.com",
      desc: "Average response within 12 business hours"
    },
    {
      icon: <Building2 size={24} className="text-[#d4af37]" />,
      title: "Corporate Headquarters",
      detail: "1250 Vineyard Way, Napa Valley, CA",
      desc: "By appointment only"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-[#faf8f5]">
      {/* Luxury Hero Section */}
      <section className="h-[70vh] pt-20 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-50" 
            alt="Luxury Cellar" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-transparent to-[#faf8f5]" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent opacity-50"></div>

        <div className="relative z-10 text-center space-y-8 px-6">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center rotate-45 backdrop-blur-sm">
              <Globe size={20} className="text-[#d4af37] -rotate-45" />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.8em] font-bold text-[#d4af37] animate-in slide-in-from-top-4 duration-700">Global Concierge</h4>
            <h1 className="text-4xl md:text-8xl font-serif italic text-white tracking-tight animate-in slide-in-from-bottom-4 duration-1000">Establish Network</h1>
            <div className="h-px w-24 bg-[#d4af37] mx-auto"></div>
          </div>
          <p className="max-w-2xl mx-auto text-md md:text-xl font-lora italic text-white/90 leading-relaxed drop-shadow-lg">
            Our curators are standing by to assist with private acquisitions, membership inquiries, or event logistics.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Presence & Info */}
            <div className="lg:col-span-4 space-y-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif text-[#2a2a2a] leading-tight">The G-Town Presence</h2>
                <p className="text-lg font-lora italic text-gray-500 leading-relaxed">
                  Headquartered in the storied hills of the valley, our presence extends globally through a network of elite curators.
                </p>
              </div>

              <div className="space-y-12">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="flex space-x-8 group">
                    <div className="w-14 h-14 shrink-0 bg-white border border-[#e8e6e1] flex items-center justify-center group-hover:border-[#722f3f] group-hover:bg-[#722f3f] group-hover:text-white transition-all duration-700 shadow-sm relative overflow-hidden">
                      <div className="relative z-10">{method.icon}</div>
                      <div className="absolute inset-0 bg-[#722f3f] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#d4af37]">{method.title}</h3>
                      <p className="text-xl font-serif text-[#2a2a2a] group-hover:text-[#722f3f] transition-colors">{method.detail}</p>
                      <p className="text-xs font-lora text-gray-400 italic leading-relaxed">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Time Section */}
              <div className="p-10 bg-white border border-[#e8e6e1] rounded-sm space-y-8 relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#722f3f]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#d4af37]/10 transition-colors"></div>
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="p-2 bg-[#faf8f5] border border-[#e8e6e1] rounded-full">
                    <Clock size={20} className="text-[#722f3f]" />
                  </div>
                  <h4 className="text-sm font-serif font-bold tracking-widest text-[#2a2a2a]">Concierge Availability</h4>
                </div>
                <div className="space-y-4 relative z-10">
                  {[
                    { days: 'Mon - Fri', hours: '09:00 — 18:00', active: true },
                    { days: 'Saturday', hours: '10:00 — 16:00', active: true },
                    { days: 'Sunday', hours: 'By Invitation Only', active: false }
                  ].map((time, i) => (
                    <div key={i} className={`flex justify-between items-center text-sm font-lora italic pb-3 border-b border-gray-50 last:border-none ${time.active ? 'text-gray-600' : 'text-gray-300'}`}>
                      <span>{time.days}</span>
                      <span className="font-serif font-bold">{time.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Comprehensive Contact Form */}
            <div className="lg:col-span-8 bg-white p-10 md:p-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm border border-[#e8e6e1] relative overflow-hidden group/form">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#722f3f]"></div>
              
              <div className="space-y-8 mb-16">
                <div className="flex items-center space-x-4">
                  <UserCircle2 size={24} className="text-[#d4af37]" />
                  <h2 className="text-3xl md:text-4xl font-serif text-[#2a2a2a]">Inquiry Dossier</h2>
                </div>
                <p className="text-sm font-lora italic text-gray-500 leading-relaxed max-w-xl">
                  Please provide exhaustive details regarding your requirements. Our specialists utilize this information to prepare a bespoke response tailored to your profile.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Section 1: Identity */}
                <div className="space-y-8">
                  <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#722f3f] border-b border-[#e8e6e1] pb-2">01. Identity & Affiliation</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 relative group">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-[#722f3f] transition-colors">Full Name / Title</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Julian Vane, Esq."
                        className="w-full bg-[#faf8f5] border-b border-[#e8e6e1] py-4 outline-none focus:border-[#722f3f] transition-colors text-sm font-lora italic px-2"
                      />
                    </div>
                    <div className="space-y-2 relative group">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-[#722f3f] transition-colors">Organization (Optional)</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Corporate entity"
                        className="w-full bg-[#faf8f5] border-b border-[#e8e6e1] py-4 outline-none focus:border-[#722f3f] transition-colors text-sm font-lora italic px-2"
                      />
                    </div>
                    <div className="space-y-2 relative group">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-[#722f3f] transition-colors">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="correspondence@domain.com"
                        className="w-full bg-[#faf8f5] border-b border-[#e8e6e1] py-4 outline-none focus:border-[#722f3f] transition-colors text-sm font-lora italic px-2"
                      />
                    </div>
                    <div className="space-y-2 relative group">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-[#722f3f] transition-colors">Private Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#faf8f5] border-b border-[#e8e6e1] py-4 outline-none focus:border-[#722f3f] transition-colors text-sm font-lora italic px-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Inquiry Parameters */}
                <div className="space-y-8">
                  <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#722f3f] border-b border-[#e8e6e1] pb-2">02. Inquiry Parameters</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Nature of Inquiry</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-[#faf8f5] border-b border-[#e8e6e1] py-4 outline-none focus:border-[#722f3f] transition-colors text-sm font-serif cursor-pointer"
                      >
                        <option>General Concierge Inquiry</option>
                        <option>Platinum Circle Membership</option>
                        <option>Private Estate Tasting</option>
                        <option>Rare Allocation Access</option>
                        <option>Investment Cellar Advisory</option>
                        <option>Corporate Gifting Portfolio</option>
                        <option>Logistical Support</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Preferred Contact Method</label>
                      <div className="flex space-x-6 py-4">
                        {['Email', 'Phone', 'Digital Meeting'].map(method => (
                          <label key={method} className="flex items-center space-x-2 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="contactMethod" 
                              checked={formData.contactMethod === method}
                              onChange={() => setFormData({...formData, contactMethod: method})}
                              className="accent-[#722f3f] w-3 h-3"
                            />
                            <span className={`text-[10px] uppercase font-bold tracking-widest transition-colors ${formData.contactMethod === method ? 'text-[#722f3f]' : 'text-gray-400 group-hover:text-gray-600'}`}>{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Areas of Interest</label>
                    <div className="flex flex-wrap gap-3">
                      {['Library Vintages', 'Bespoke Curation', 'Global Logistics', 'Tasting Events', 'Sustainable Craft', 'Spirits Archive'].map(interest => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-4 py-2 text-[9px] uppercase tracking-[0.2em] font-bold border transition-all ${
                            formData.interests.includes(interest) 
                              ? 'bg-[#722f3f] text-white border-[#722f3f] shadow-md' 
                              : 'bg-white text-gray-400 border-[#e8e6e1] hover:border-[#722f3f] hover:text-[#722f3f]'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Details */}
                <div className="space-y-2 group">
                  <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#722f3f] border-b border-[#e8e6e1] pb-2 mb-8">03. Context & Requirements</h5>
                  <textarea 
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How may we assist you today? Please include any specific vintages or dates of interest."
                    className="w-full bg-[#faf8f5] border border-[#e8e6e1] p-6 outline-none focus:border-[#722f3f] transition-colors text-sm font-lora italic resize-none leading-relaxed shadow-inner"
                  ></textarea>
                </div>

                {/* Elegant Anti-Spam Feature: Connoisseur Verification Slider */}
                <div className="space-y-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ShieldCheck size={16} className="text-[#d4af37]" />
                      <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Connoisseur Verification</h5>
                    </div>
                    {isVerified && (
                      <div className="flex items-center space-x-2 text-green-600 animate-in fade-in slide-in-from-right-4">
                        <CheckCircle2 size={14} />
                        <span className="text-[9px] uppercase font-bold tracking-widest">Authenticated</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative h-14 bg-[#faf8f5] border border-[#e8e6e1] rounded-sm flex items-center px-2 group/slider">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-opacity duration-300 ${isVerified ? 'opacity-0' : 'opacity-30 group-hover/slider:opacity-50'}`}>
                        Slide to authenticate inquiry
                      </span>
                    </div>
                    <div 
                      className="absolute left-0 h-full bg-[#722f3f]/5 transition-all duration-300"
                      style={{ width: `${sliderValue}%` }}
                    ></div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={sliderValue}
                      disabled={isVerified}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setSliderValue(val);
                        if (val >= 98) {
                          setIsVerified(true);
                          setSliderValue(100);
                        }
                      }}
                      className={`relative z-10 w-full h-full opacity-0 cursor-pointer disabled:cursor-default`}
                    />
                    <div 
                      className={`absolute left-2 w-10 h-10 border flex items-center justify-center transition-all duration-300 pointer-events-none shadow-sm ${
                        isVerified ? 'bg-[#d4af37] border-[#d4af37] text-white' : 'bg-white border-[#e8e6e1] text-[#722f3f]'
                      }`}
                      style={{ left: `calc(${sliderValue}% - ${sliderValue * 0.4}px + 8px)`, transform: 'translateX(-50%)' }}
                    >
                      {isVerified ? <CheckCircle2 size={20} /> : <ChevronRight size={20} />}
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-8">
                  <button 
                    disabled={isSubmitting || !isVerified}
                    className="w-full bg-[#722f3f] text-white py-6 flex items-center justify-center space-x-6 uppercase tracking-[0.4em] text-[11px] font-bold hover:bg-[#5a2532] transition-all group disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_20px_40px_-10px_rgba(114,47,63,0.3)] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                    {isSubmitting ? (
                      <Clock size={20} className="animate-spin" />
                    ) : (
                      <>
                        <span className="relative z-10">Transmit Formal Inquiry</span>
                        <Send size={18} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest leading-relaxed mt-10">
                    Proprietary and Confidential. G-Town Wines adheres to strict <button type="button" className="text-[#722f3f] font-bold hover:underline">GDPR & CCPA</button> protocols.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stylized Google Maps Section */}
      <section className="h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000 border-y border-[#e8e6e1]">
        <div className="absolute inset-0 z-0 bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56111.75329423901!2d77.091903!3d28.480011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e14a98296b%3A0x7f3109494a3533d!2sG-Town%20Wines!5e0!3m2!1sen!2sin!4v1766414727963!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="G-Town Estate Map"
          ></iframe>
        </div>
        
        {/* Top Left Overlay Container: Pinned to corner */}
        <div className="absolute top-0 left-0 z-10 flex animate-in slide-in-from-top-left duration-1000">
          
          {/* NEW: G-Town Maps Element - High Prestige Branding Block */}
          <div className="bg-white/95 backdrop-blur-md p-8 border-r border-b border-[#d4af37]/30 shadow-2xl flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border border-[#d4af37] flex items-center justify-center rotate-45 mb-1 group hover:bg-[#722f3f] transition-all duration-500 cursor-pointer">
              <Globe size={20} className="text-[#722f3f] -rotate-45 group-hover:text-white transition-colors" />
            </div>
            <div className="text-center">
              <span className="text-[8px] uppercase tracking-[0.6em] font-bold text-gray-400 block mb-1">Explorer</span>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#722f3f]">G-Town Maps</span>
            </div>
            <div className="h-px w-8 bg-[#d4af37]/40"></div>
          </div>

          {/* Estate Coordinates Component - Adjacent Sibling */}
          <div className="bg-white/95 backdrop-blur-md p-8 border-r border-b border-[#d4af37]/30 shadow-2xl max-w-xs">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#722f3f]">
                <MapPin size={18} />
                <h4 className="text-[10px] uppercase tracking-widest font-bold">The Estate Coordinates</h4>
              </div>
              <p className="text-sm font-serif font-bold text-[#2a2a2a]">1250 Vineyard Way<br />St. Helena, CA 94574</p>
              <p className="text-xs font-lora italic text-gray-500">Accessible via private road. Security clearance required at the main gate.</p>
              <button className="flex items-center space-x-2 text-[#d4af37] text-[9px] uppercase font-bold tracking-widest hover:text-[#722f3f] transition-colors pt-2">
                <span>View Global Navigation</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Right Overlay: Prestige Network Indicator - Anchored to Corner */}
        <div className="absolute bottom-0 right-0 z-10 bg-white/95 backdrop-blur-md p-8 border-t border-l border-[#d4af37]/30 shadow-2xl max-w-xs animate-in slide-in-from-bottom-right duration-1000">
           <div className="space-y-6">
             <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[#722f3f]">
                   <Globe size={18} className="animate-[spin_10s_linear_infinite]" />
                   <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">The Prestige Network</h4>
                </div>
                <div className="flex items-center space-x-1.5">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                   <span className="text-[8px] uppercase font-bold text-green-600 tracking-tighter">Live Sync</span>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-8 border-y border-gray-100 py-4">
                <div className="space-y-1">
                   <p className="text-2xl font-serif text-[#722f3f] leading-none">18</p>
                   <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-gray-400">Secure Vaults</p>
                </div>
                <div className="space-y-1">
                   <p className="text-2xl font-serif text-[#722f3f] leading-none">72</p>
                   <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-gray-400">Territories</p>
                </div>
             </div>

             <div className="flex items-start space-x-3 group cursor-pointer">
                <Zap size={14} className="text-[#d4af37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="space-y-1">
                   <p className="text-[9px] uppercase font-bold tracking-widest text-[#2a2a2a]">Concierge Logistics Active</p>
                   <p className="text-[8px] font-lora italic text-gray-400 leading-relaxed">
                      Global climate-controlled dispatches monitored 24/7 via private encrypted link.
                   </p>
                </div>
             </div>
           </div>
        </div>

        {/* Gradients to blend map with site edges */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]"></div>
      </section>

      {/* Decorative Newsletter Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-10">
           <div className="relative">
              <MessageSquare size={48} className="text-[#d4af37] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-2 h-2 bg-[#722f3f] rounded-full animate-ping"></div>
              </div>
           </div>
           <div className="space-y-6">
             <h2 className="text-4xl md:text-5xl font-serif italic text-[#2a2a2a]">Join the Inner Circle</h2>
             <p className="text-gray-500 font-lora italic text-lg max-w-xl mx-auto leading-relaxed">
               Receive confidential dispatches regarding library releases, harvest reports, and private estate events.
             </p>
           </div>
           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full justify-center">
              <button 
                onClick={() => onNavigate('shop')}
                className="bg-[#722f3f] text-white px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#5a2532] transition-all flex items-center justify-center space-x-3 shadow-xl hover:scale-105"
              >
                <span>Browse The Collection</span>
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => onNavigate('club')}
                className="bg-white border border-[#722f3f] text-[#722f3f] px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#722f3f] hover:text-white transition-all hover:scale-105"
              >
                The Platinum Experience
              </button>
           </div>
        </div>
      </section>
      
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Contact;
