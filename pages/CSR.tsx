
import React from 'react';
// Added ArrowDown to the imports from lucide-react to fix the 'Cannot find name ArrowDown' error on line 116
import { ShieldCheck, Heart, Leaf, GraduationCap, Globe, Users, Award, Landmark, Zap, Sparkles, Scale, Building2, TrendingUp, Handshake, ArrowDown } from 'lucide-react';

const CSR: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-[#faf8f5] relative">
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Cinematic Hero Section */}
      <section className="h-[80vh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.4] contrast-125" 
            alt="Sustainability Heritage" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#faf8f5]" />
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-6">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 border border-[#d4af37]/30 flex items-center justify-center rotate-45 backdrop-blur-sm group hover:bg-[#d4af37]/10 transition-all duration-700">
              <Scale size={24} className="text-[#d4af37] -rotate-45" />
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] uppercase tracking-[1.2em] font-bold text-[#d4af37] animate-in slide-in-from-top-4 duration-700">The Social Covenant</h4>
            <h1 className="text-6xl md:text-[8rem] font-serif italic text-white tracking-tighter animate-in slide-in-from-bottom-4 duration-1000 leading-none">Legacy of <br />Principled Prosperity</h1>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Visionary Stewardship Section - Arun Malik */}
      <section className="py-56 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 text-[20vw] font-serif font-bold text-[#faf8f5] pointer-events-none select-none -translate-x-1/4 -translate-y-1/2 z-0">
          INTEGRITY
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            
            {/* Portrait Side (Simulated Cutout) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-[130%] aspect-square bg-[#722f3f]/5 rounded-full blur-[100px] opacity-60 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[520px] border border-[#d4af37]/20 -rotate-6 transition-transform duration-[4000ms] group-hover:rotate-0"></div>
              </div>

              <div className="relative group w-full max-w-md">
                <div className="absolute -top-12 -left-8 w-24 h-24 border-t-2 border-l-2 border-[#d4af37] opacity-60"></div>
                <div className="absolute -bottom-12 -right-8 w-24 h-24 border-b-2 border-r-2 border-[#d4af37] opacity-60"></div>

                <div className="relative overflow-visible aspect-[3/4] bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
                    alt="Arun Malik - Managing Director" 
                    className="w-full h-full object-cover drop-shadow-[0_50px_50px_rgba(0,0,0,0.2)] grayscale group-hover:grayscale-0 transition-all duration-[2000ms] ease-out relative z-20"
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full z-10"></div>
                </div>
                
                <div className="absolute -bottom-8 left-0 z-30 bg-[#722f3f] p-8 shadow-2xl border border-[#d4af37]/30">
                   <div className="flex items-center space-x-4">
                      <ShieldCheck size={20} className="text-[#d4af37]" />
                      <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white">The Stewardship Accord</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-16">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="h-px w-16 bg-[#722f3f]"></div>
                  <span className="text-[11px] uppercase tracking-[0.8em] font-bold text-[#d4af37]">A Message from the MD</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif italic text-[#2a2a2a] leading-[1.3] tracking-tight">
                  "A visionary steward of sustainable eminence, orchestrating growth through profound investments in <span className="text-[#722f3f]">education, environmental guardianship, and community elevation.</span>"
                </h2>
              </div>
              
              <div className="space-y-12 pr-10 border-r border-[#e8e6e1] text-right">
                <p className="text-2xl font-lora italic text-gray-500 leading-[1.7] max-w-2xl ml-auto">
                  "Ethical mastery and purposeful engagement forge unbreakable trust, perpetual success, and an immortal legacy of integrity."
                </p>
                <div className="flex items-center justify-end space-x-10">
                  <div className="h-16 w-px bg-gradient-to-b from-[#d4af37] to-transparent"></div>
                  <div className="space-y-1">
                    <h3 className="text-3xl font-serif font-bold text-[#722f3f] tracking-tight">Arun Malik</h3>
                    <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-gray-400">Managing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Covenant Section */}
      <section className="py-56 bg-[#faf8f5] relative border-y border-[#e8e6e1]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-20">
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[1.2em] font-bold text-[#722f3f]">Manifesto</h4>
            <h2 className="text-5xl md:text-8xl font-serif italic text-[#2a2a2a] tracking-tighter">Our Covenant of <br /><span className="text-[#d4af37]">Conscious Excellence</span></h2>
            <div className="h-px w-32 bg-[#722f3f] mx-auto mt-10"></div>
          </div>
          <p className="text-2xl md:text-4xl font-lora italic text-gray-600 leading-[1.6] px-10">
            At G-Town Wines, we transcend commerce to architect a brighter tomorrow for Delhi NCR. Our initiatives champion sustainable mastery, community empowerment, and equitable progress—through meticulous sourcing, enlightened waste stewardship, educational patronage, and resolute environmental advocacy.
          </p>
          <div className="pt-10 flex flex-col items-center space-y-6">
             <div className="w-12 h-12 border border-[#722f3f]/20 rounded-full flex items-center justify-center animate-bounce">
                <ArrowDown size={18} className="text-[#d4af37]" />
             </div>
             <p className="text-[11px] uppercase tracking-[0.6em] font-bold text-[#722f3f]">Fairness as Immutable Principle</p>
          </div>
        </div>
      </section>

      {/* Pillars of Principled Progress - 3x2 Luxury Grid */}
      <section className="py-56 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32 space-y-6">
            <h4 className="text-[#722f3f] uppercase tracking-[0.8em] font-bold text-[10px]">PHILANTHROPY</h4>
            <h2 className="text-4xl md:text-7xl font-serif italic text-[#2a2a2a]">Pillars of Principled Progress</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e6e1] border border-[#e8e6e1] shadow-2xl relative">
            {[
              { 
                icon: <TrendingUp size={32} strokeWidth={1} />, 
                title: "Decent Work & Economic Ascendancy", 
                desc: "Championing equitable remuneration, impeccable conditions, and boundless opportunity to fuel inclusive prosperity and vanquish disparity." 
              },
              { 
                icon: <Zap size={32} strokeWidth={1} />, 
                title: "Industry, Innovation & Infrastructure", 
                desc: "Pioneering resilient foundations through visionary infrastructure and boundary-defying innovation for sustainable opulence." 
              },
              { 
                icon: <Users size={32} strokeWidth={1} />, 
                title: "Inequality Abolished", 
                desc: "Equal access to resources and opportunity, irrespective of origin—bridging divides through fair wages and universal empowerment." 
              },
              { 
                icon: <Building2 size={32} strokeWidth={1} />, 
                title: "Sustainable Urban Masterpieces", 
                desc: "Crafting verdant, resilient cities where intelligent design harmonizes human aspiration with environmental sanctity." 
              },
              { 
                icon: <Leaf size={32} strokeWidth={1} />, 
                title: "Mindful Mastery of Resources", 
                desc: "Circular economy vanguard—ethical sourcing, waste transcendence, and enlightened consumption for generational stewardship." 
              },
              { 
                icon: <Globe size={32} strokeWidth={1} />, 
                title: "Global Alliances of Distinction", 
                desc: "Forging unbreakable partnerships across sectors to conquer poverty, disparity, and climate exigency through collective brilliance." 
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white p-20 space-y-10 hover:bg-[#faf8f5] transition-all duration-700 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-gray-50 font-serif font-bold text-5xl opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                <div className="text-[#d4af37] transform group-hover:scale-110 transition-transform duration-700">{pillar.icon}</div>
                <h4 className="text-2xl font-serif tracking-tight leading-tight min-h-[4rem] flex items-end">{pillar.title}</h4>
                <p className="text-sm font-lora italic text-gray-500 leading-relaxed">{pillar.desc}</p>
                <div className="h-0.5 w-0 bg-[#722f3f] group-hover:w-16 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pioneering Women's Empowerment - Editorial Layout */}
      <section className="py-56 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 contrast-150 grayscale">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Women Leaders" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
               <div className="space-y-6">
                 <h4 className="text-[#d4af37] text-[11px] uppercase tracking-[1em] font-bold">THE SANCTUM</h4>
                 <h2 className="text-5xl md:text-8xl font-serif italic leading-none">Pioneering <span className="text-[#d4af37] block mt-4 text-4xl md:text-7xl">Women's Empowerment</span></h2>
                 <div className="h-px w-32 bg-[#d4af37]/40 mt-10"></div>
               </div>
               
               <div className="space-y-10">
                  <div className="flex items-start space-x-6 group">
                     <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#d4af37]/10 transition-colors">
                        <Heart size={20} className="text-[#d4af37]" />
                     </div>
                     <div className="space-y-3">
                        <h3 className="text-2xl font-serif italic text-[#d4af37]">India's First Women-Friendly Liquor Sanctum</h3>
                        <p className="text-sm font-lora italic text-gray-400 leading-relaxed">Upholding "Be Original, Buy Original" as sacred doctrine, delivering NCR's safest haven of authenticity and wholesale prestige where women command extraordinary discovery.</p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                     <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#d4af37]/10 transition-colors">
                        <Sparkles size={20} className="text-[#d4af37]" />
                     </div>
                     <div className="space-y-3">
                        <h3 className="text-2xl font-serif italic text-[#d4af37]">India's First Alcobev Women Employment Vanguard</h3>
                        <p className="text-sm font-lora italic text-gray-400 leading-relaxed">Elevating celebrations through impeccable provenance, ensuring every revelry resonates with genuine distinction and flawless execution.</p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                     <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#d4af37]/10 transition-colors">
                        <Scale size={20} className="text-[#d4af37]" />
                     </div>
                     <div className="space-y-3">
                        <h3 className="text-2xl font-serif italic text-[#d4af37]">Equal Remuneration Covenant</h3>
                        <p className="text-sm font-lora italic text-gray-700 leading-relaxed">Fair compensation as immutable principle, nurturing an empowered collective where merit alone dictates destiny.</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-white/[0.03] backdrop-blur-md border border-white/10 p-12 space-y-12">
                 <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                       <TrendingUp size={24} className="text-[#d4af37]" />
                       <h3 className="text-2xl font-serif">Delhi NCR Economic Catalyst</h3>
                    </div>
                    <p className="text-sm font-lora italic text-gray-400 leading-relaxed">
                       Fueling regional ascendancy through authentic retail innovation, employment creation, and community symbiosis. Equal remuneration for all genders exemplifies our unyielding commitment to fairness.
                    </p>
                 </div>
                 
                 <div className="space-y-8 pt-8 border-t border-white/5">
                    <div className="flex items-center space-x-4">
                       <Landmark size={24} className="text-[#d4af37]" />
                       <h3 className="text-2xl font-serif">Tax Revenue Sovereign</h3>
                    </div>
                    <p className="text-sm font-lora italic text-gray-400 leading-relaxed">
                       Leading contributor to public grandeur, channeling ethical prosperity into infrastructure and collective advancement.
                    </p>
                 </div>

                 <div className="pt-12 text-center">
                    <p className="text-[10px] uppercase tracking-[0.8em] font-bold text-[#d4af37]">Collective Brilliance</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Invitation Section */}
      <section className="py-64 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#d4af37] via-[#d4af37]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-20 relative">
           <div className="space-y-8">
              <div className="flex justify-center">
                 <div className="p-4 border-2 border-[#d4af37]/20 rounded-full animate-pulse">
                    <Handshake size={40} className="text-[#d4af37] opacity-60" />
                 </div>
              </div>
              <h2 className="text-5xl md:text-[5rem] font-serif italic text-[#2a2a2a] tracking-tight">Responsible Luxury Shapes Eternity</h2>
           </div>
           <p className="text-3xl md:text-5xl font-lora italic text-gray-500 leading-[1.6] max-w-4xl mx-auto px-10">
             "Where ethical mastery and purposeful engagement forge an immortal legacy of integrity."
           </p>
           <div className="flex flex-col items-center space-y-10 pt-16">
              <p className="text-[12px] uppercase tracking-[1.2em] font-bold text-[#722f3f]">Excellence • Accountability • Evolution</p>
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
           </div>
        </div>
      </section>

      {/* Decorative Closing Section */}
      <section className="py-40 bg-[#0a0a0a] text-center space-y-16 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
         <div className="h-px w-32 bg-[#d4af37]/40 mx-auto"></div>
         <div className="space-y-4">
           <h3 className="text-4xl md:text-7xl font-serif italic text-white tracking-[0.3em] uppercase">G-Town Wines</h3>
           <p className="text-[11px] uppercase tracking-[1.2em] font-bold text-gray-500">Corporate Social Responsibility • Global Stewardship</p>
         </div>
         <div className="h-px w-32 bg-[#d4af37]/40 mx-auto"></div>
      </section>
    </div>
  );
};

export default CSR;
