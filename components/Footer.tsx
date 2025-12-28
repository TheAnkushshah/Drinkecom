
import React from 'react';
import {
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1a1a1a] text-[#faf8f5] pt-24 pb-12 border-t border-[#d4af37]/30 overflow-hidden relative">
      {/* GLOBAL FOOTER ANIMATIONS & TEXTURE */}
      <style>{`
        @keyframes ambient-glow {
          0% { opacity: 0.3; transform: translate(-10%, -10%) scale(1); }
          50% { opacity: 0.6; transform: translate(10%, 10%) scale(1.1); }
          100% { opacity: 0.3; transform: translate(-10%, -10%) scale(1); }
        }
        .footer-glow {
          animation: ambient-glow 15s ease-in-out infinite;
        }
        .social-box {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .social-box:hover {
          background: #d4af37;
          color: #1a1a1a;
          border-color: #d4af37;
          transform: translateY(-4px) rotate(4deg);
        }
      `}</style>

      {/* LUXURY VIDEO BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-30 brightness-[0.4] contrast-125"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-red-wine-into-a-glass-1200-large.mp4" type="video/mp4" />
          {/* Fallback Image */}
          <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2000" alt="Cellar" />
        </video>
        {/* Dynamic Gradient Overlays for Depth and Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-[#1a1a1a] opacity-40"></div>
      </div>

      {/* TEXTURE & GLOW OVERLAYS (NON-GEOMETRIC) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 pointer-events-none z-[1]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] footer-glow pointer-events-none z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#722f3f]/5 rounded-full blur-[150px] footer-glow pointer-events-none z-[1]" style={{ animationDelay: '-5s' }}></div>

      {/* Subtle Background Branding Overlay */}
      <div className="absolute text-[13vw] top-[1rem] left-[2rem] md:-top-20 md:left-10 md:text-[15vw] font-serif font-bold text-white/[0.02] pointer-events-none select-none z-[1]">
        EXPENSIVE
      </div>

      {/* ENTER THE INNER CIRCLE SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-xl border border-[#d4af37]/20 p-12 md:p-16 rounded-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]/40 group-hover:bg-[#d4af37] transition-colors duration-700"></div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="space-y-4 text-center lg:text-left">
              <h4 className="text-[#d4af37] uppercase tracking-[0.6em] font-bold text-[10px]">EXCLUSIVE G-TOWN WINES</h4>
              <h3 className="text-3xl md:text-5xl font-serif italic text-white leading-tight">Enter the Inner Circle</h3>
              <p className="text-sm md:text-base font-lora text-gray-400 italic max-w-xl leading-relaxed">
                First access to private allocations, harvest unveilings, and members-only masterpieces—reserved for the world's most discerning.
              </p>
            </div>
            <form className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch bg-white/5 border border-white/10 p-1 group/form focus-within:border-[#d4af37]/50 transition-all" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-mail Address"
                className="bg-transparent px-8 py-5 outline-none text-sm font-lora italic text-white min-w-[300px]"
              />
              <button className="bg-[#d4af37] text-[#1a1a1a] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center space-x-3 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <span>Join Vanguard</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAIN 4-COLUMN DOMINION */}
      <div className="w-full bg-[#1a1a1a] px-6 py-20 border-b border-[#d4af37]/10 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Column 1: Legacy & Heritage */}
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-[#d4af37] flex items-center">
              <span className="w-8 h-px bg-[#d4af37]/30 mr-4"></span> Legacy & Heritage
            </h3>
            <ul className="space-y-5 text-sm font-lora italic text-gray-400">
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Company Info</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Sustainability</button></li>
              <li><button onClick={() => onNavigate?.('contact')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Careers</button></li>
              <li><button onClick={() => onNavigate?.('csr')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all text-left">Corporate Social Responsibility</button></li>
            </ul>
          </div>

          {/* Column 2: Shop the Collection */}
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-[#d4af37] flex items-center">
              <span className="w-8 h-px bg-[#d4af37]/30 mr-4"></span> Shop the Collection
            </h3>
            <ul className="space-y-5 text-sm font-lora italic text-gray-400">
              <li><button onClick={() => onNavigate?.('shop')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Signature Portfolio</button></li>
              <li><button onClick={() => onNavigate?.('shop')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Rare Vintages</button></li>
              <li><button onClick={() => onNavigate?.('shop')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Brands</button></li>
              <li><button onClick={() => onNavigate?.('stores')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Locate Stores</button></li>
              <li><button onClick={() => onNavigate?.('shop')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Promotions</button></li>
            </ul>
          </div>

          {/* Column 3: Connoisseur Resources */}
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-[#d4af37] flex items-center">
              <span className="w-8 h-px bg-[#d4af37]/30 mr-4"></span> Connoisseur Resources
            </h3>
            <ul className="space-y-5 text-sm font-lora italic text-gray-400">
              <li><button onClick={() => onNavigate?.('education')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Education</button></li>
              <li><button onClick={() => onNavigate?.('education')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Guides</button></li>
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">Reviews</button></li>
              <li><button onClick={() => onNavigate?.('education')} className="hover:text-[#d4af37] hover:underline underline-offset-8 decoration-[#d4af37]/30 transition-all">News & Media</button></li>
            </ul>
          </div>

          {/* Column 4: Concierge Mastery */}
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-[#d4af37] flex items-center">
              <span className="w-8 h-px bg-[#d4af37]/30 mr-4"></span> Concierge Mastery
            </h3>
            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <Mail size={18} className="text-[#d4af37] mt-1 group-hover:scale-110 transition-transform" />
                <p className="font-lora text-gray-300 italic group-hover:text-white">concierge@gtownwines.com</p>
              </div>
              <div className="flex items-start space-x-4 group cursor-pointer">
                <Phone size={18} className="text-[#d4af37] mt-1 group-hover:scale-110 transition-transform" />
                <p className="font-serif text-lg text-white group-hover:text-[#d4af37]">+91-11-4000-WINE</p>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin size={18} className="text-[#d4af37] mt-1" />
                <p className="font-lora text-gray-400 italic leading-relaxed">
                  NCR Flagship: 35,000 sq. ft. <br />Palace of Prestige
                </p>
              </div>

              {/* SQUARE SOCIAL ICONS SECTION */}
              <div className="flex flex-wrap gap-3 pt-6">
                <div className="social-box group cursor-pointer">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="social-box group cursor-pointer">
                  <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="social-box group cursor-pointer">
                  <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="social-box group cursor-pointer">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="social-box group cursor-pointer">
                  <Youtube size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DOMINION NAVIGATION LINKS */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 relative z-10">
        {['Our Dominion', 'Signature Outlets', 'Curated Portfolio', 'Legacy of Excellence', 'In the Elite Spotlight', 'Connoisseur Codex'].map(link => (
          <button key={link} className="hover:text-white hover:text-[#d4af37] transition-colors duration-300" onClick={() => onNavigate?.(link.toLowerCase().includes('portfolio') || link.toLowerCase().includes('outlets') ? 'shop' : link.toLowerCase().includes('legacy') ? 'about' : link.toLowerCase().includes('spotlight') ? 'home' : 'shop')}>{link}</button>
        ))}
      </div>

      {/* REFINEMENT FOOTER */}
      <div className="w-full border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-2xl font-serif tracking-tighter text-white flex flex-col md:flex-row items-center md:space-x-4">
              <span className="uppercase text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">G-TOWN</span>
              <span className="text-[10px] tracking-[0.8em] font-medium text-gray-500 -mt-1 md:mt-1">WINES</span>
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500">
              &copy; 2025 G-TOWN WINES. ALL RIGHTS RESERVED. <br className="md:hidden" />
              Curating immortal vintages for those who command the artistry of winemaking.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-[9px] font-bold uppercase tracking-widest text-gray-400">
            <button onClick={() => onNavigate?.('shop')} className="hover:text-[#d4af37]">Shop All</button>
            <button onClick={() => onNavigate?.('club')} className="hover:text-[#d4af37]">Club</button>
            <button onClick={() => onNavigate?.('tastings')} className="hover:text-[#d4af37]">Tastings</button>
            <button onClick={() => onNavigate?.('education')} className="hover:text-[#d4af37]">Journal</button>
            <button onClick={() => onNavigate?.('about')} className="hover:text-[#d4af37]">Our Story</button>
            <button onClick={() => onNavigate?.('contact')} className="hover:text-[#d4af37]">Contact Us</button>
            <button onClick={() => onNavigate?.('contact')} className="hover:text-[#d4af37]">FAQ</button>
          </div>
        </div>
      </div>

      {/* DISCRETIONARY & LEGAL */}
      <div className="w-full mt-16 pt-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-8">

          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">
            <button className="hover:text-white transition-colors flex items-center">Privacy Sanctum</button>
            <button className="hover:text-white transition-colors flex items-center">Terms of Distinction</button>
            <button className="hover:text-white transition-colors flex items-center">Global Dispatch</button>
            <button className="hover:text-white transition-colors flex items-center">Returns of Refinement</button>
            <button className="hover:text-white transition-colors flex items-center">Responsible Indulgence</button>
          </div>

          <div className="max-w-4xl bg-black/40 p-8 border border-white/5 rounded-sm relative group overflow-hidden shadow-inner">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"></div>

            <div className="flex items-start space-x-6">
              <AlertTriangle
                size={24}
                className="text-[#d4af37]/50 group-hover:text-[#d4af37] transition-colors shrink-0"
              />
              <p className="text-[10px] text-gray-500 leading-relaxed font-lora italic text-left">
                <span className="text-[#d4af37] font-bold uppercase tracking-widest mr-2">
                  Discretionary Notice | Proposition 65:
                </span>
                Drinking distilled spirits, fine wines, and premium beverages may elevate certain health considerations.
                For comprehensive intelligence, visit
                <a
                  href="https://www.P65Warnings.ca.gov/alcohol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#d4af37] transition-colors ml-1"
                >
                  www.P65Warnings.ca.gov/alcohol
                </a>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
