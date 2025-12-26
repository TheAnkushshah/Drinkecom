
import React from 'react';
import { Quote, Award, Globe, ShieldCheck, Leaf, Landmark, ArrowDown, Sparkles, Crown, MapPin, Zap, Heart, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-[#faf8f5] relative">
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Cinematic Hero Section */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/965711/pexels-photo-965711.jpeg?cs=srgb&dl=pexels-george-desipris-965711.jpg&fm=jpg" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-50 contrast-125" 
            alt="Vintage Vineyard" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#faf8f5]" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent"></div>
        
        <div className="relative z-10 text-center space-y-8 px-6">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 border border-[#d4af37]/30 flex items-center justify-center rotate-45 backdrop-blur-sm group hover:bg-[#d4af37]/10 transition-all duration-700">
              <Landmark size={24} className="text-[#d4af37] -rotate-45" />
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] uppercase tracking-[1.2em] font-bold text-[#d4af37] animate-in slide-in-from-top-4 duration-700">Established 1984</h4>
            <h1 className="text-7xl md:text-[10rem] font-serif italic text-white tracking-tighter animate-in slide-in-from-bottom-4 duration-1000 leading-none">The Legacy</h1>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
            <p className="text-[10px] uppercase tracking-[0.8em] text-white/60 font-bold">G-Town Wines Signature Narrative</p>
          </div>
        </div>
      </section>

      {/* THE GRAND CHARTER (Vision & Mission) - Luxury Modular Block */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#d4af37]/0 to-[#d4af37]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#e8e6e1] border border-[#e8e6e1] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
            {/* Vision Box */}
            <div className="bg-white p-16 md:p-24 space-y-10 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-10 text-[12vw] font-serif font-bold text-[#faf8f5] pointer-events-none select-none -translate-y-1/3 translate-x-1/3">01</div>
              <div className="flex items-center space-x-6 relative z-10">
                <div className="w-12 h-px bg-[#d4af37]"></div>
                <h4 className="text-[11px] uppercase tracking-[0.7em] font-bold text-[#722f3f]">The Vision</h4>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif italic leading-[1.4] text-[#2a2a2a] relative z-10">
                Our vision is to stand as a globally revered house of fine spirits, celebrated for elevated craftsmanship, conscious sustainability, and boundary‑pushing innovation that transforms every occasion into an unforgettable experience.
              </h3>
              <div className="pt-10 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                <Sparkles size={32} className="text-[#d4af37]" />
              </div>
            </div>
            {/* Mission Box */}
            <div className="bg-[#111111] p-16 md:p-24 space-y-10 relative group overflow-hidden text-white">
              <div className="absolute top-0 right-0 p-10 text-[12vw] font-serif font-bold text-white/[0.03] pointer-events-none select-none -translate-y-1/3 translate-x-1/3">02</div>
              <div className="flex items-center space-x-6 relative z-10">
                <div className="w-12 h-px bg-[#d4af37]"></div>
                <h4 className="text-[11px] uppercase tracking-[0.7em] font-bold text-[#d4af37]">The Mission</h4>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif italic leading-[1.4] relative z-10">
                Our mission is to craft world‑class spirits that meet the highest standards of quality and taste, to weave sustainability into every stage of creation, and to relentlessly redefine what is possible in the world of luxury liquor.
              </h3>
              <div className="pt-10 opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-1000">
                <Zap size={32} className="text-[#d4af37]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Chairman Emeritus Section - High Prestige Cutout */}
      <section className="py-56 bg-[#faf8f5] relative overflow-hidden">
        {/* Background "Ghost Text" */}
        <div className="absolute top-1/2 left-0 text-[22vw] font-serif font-bold text-[#e8e6e1]/30 pointer-events-none select-none -translate-x-1/4 -translate-y-1/2 z-0">
          ORIGIN
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Cutout Image Side (Founder) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                {/* Radiant Origin Halo */}
                <div className="w-[130%] aspect-square bg-[#722f3f]/5 rounded-full blur-[100px] opacity-60 animate-pulse"></div>
                {/* Geometric Frame Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[520px] border border-[#d4af37]/20 -rotate-6 transition-transform duration-[4000ms] group-hover:rotate-0"></div>
              </div>

              <div className="absolute -right-16 top-0 h-full hidden xl:flex flex-col justify-between py-20">
                 <span className="text-[10px] font-bold uppercase tracking-[1em] text-gray-200 [writing-mode:vertical-rl]">FOUNDATION</span>
                 <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#d4af37]/40 [writing-mode:vertical-rl]">HERITAGE</span>
              </div>

              <div className="relative group w-full max-w-md">
                <div className="absolute -top-12 -left-8 w-24 h-24 border-t-2 border-l-2 border-[#d4af37] opacity-60"></div>
                <div className="absolute -bottom-12 -right-8 w-24 h-24 border-b-2 border-r-2 border-[#d4af37] opacity-60"></div>

                <div className="relative overflow-visible">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
                    alt="Vikramjeet Singh - Founder" 
                    className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.2)] grayscale group-hover:grayscale-0 transition-all duration-[2000ms] ease-out object-contain relative z-20"
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full z-10"></div>
                </div>
                
                <div className="absolute -bottom-8 left-0 z-30 bg-[#722f3f] p-8 shadow-2xl border border-[#d4af37]/30 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
                   <div className="flex items-center space-x-4">
                      <div className="p-2 border border-[#d4af37]/50">
                        <Crown size={18} className="text-[#d4af37]" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white">Founder & Chairman</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-16 animate-in slide-in-from-right duration-1000">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="h-px w-16 bg-[#722f3f]"></div>
                  <span className="text-[11px] uppercase tracking-[0.8em] font-bold text-[#d4af37]">The Foundation Speech</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-serif italic text-[#2a2a2a] leading-[1.2] tracking-tight">
                  "To build a legacy is to understand that we are merely <span className="text-[#722f3f]">stewards of time.</span>"
                </h2>
              </div>
              
              <div className="space-y-12 pr-10 border-r border-[#e8e6e1] text-right">
                <p className="text-2xl font-lora italic text-gray-500 leading-[1.7] max-w-2xl ml-auto">
                  "G-Town was born from a singular dream: to bring the world's most refined spirits to a landscape that deserves nothing less than perfection. Our journey began not with a business plan, but with a promise."
                </p>
                <div className="flex items-center justify-end space-x-10">
                  <div className="space-y-1 hidden sm:block">
                    <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-300">ESTABLISHED MCMLXXXIV</p>
                    <p className="text-[11px] font-serif italic text-gray-500">Global Spirits Ambassador</p>
                  </div>
                  <div className="h-16 w-px bg-gradient-to-b from-[#d4af37] to-transparent"></div>
                  <div className="space-y-1">
                    <h3 className="text-3xl font-serif font-bold text-[#722f3f] tracking-tight">Vikramjeet Singh</h3>
                    <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-gray-400">Chairman Emeritus</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE OBSESSION WITH DETAIL (Craftsmanship) - Editorial Layout */}
      <section className="py-56 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
          <div className="text-center space-y-16">
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-[1.2em] font-bold text-[#722f3f]">The Art of the Pour</h4>
              <div className="h-px w-24 bg-[#d4af37] mx-auto"></div>
            </div>
            <div className="relative inline-block px-12">
               <span className="absolute -top-10 -left-4 text-9xl font-serif italic text-[#faf8f5] pointer-events-none select-none">"</span>
               <h2 className="text-5xl md:text-8xl font-serif italic text-[#2a2a2a] leading-[1.2] tracking-tighter">
                  Our craftsmanship is defined by an <br />
                  <span className="text-[#722f3f] block mt-4">obsession with detail.</span>
               </h2>
            </div>
            <p className="text-2xl md:text-4xl font-lora italic text-gray-500 leading-[1.6] max-w-5xl mx-auto">
              Selecting only the finest ingredients, honoring time‑tested methods, and harmonizing them with modern innovation to create signatures of character and depth in every pour—from expressive whiskies and silken vodkas to opulent rums and refined gins.
            </p>
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-12 border border-[#722f3f]/20 rounded-full flex items-center justify-center animate-bounce">
                <ArrowDown size={18} className="text-[#d4af37]" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.5em] font-bold text-[#722f3f]">Uncompromising Perfection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Section - Redesigned Editorial Cutout */}
      <section className="py-56 bg-white relative overflow-hidden">
        {/* Background "Ghost Text" */}
        <div className="absolute top-1/3 right-0 text-[20vw] font-serif font-bold text-[#faf8f5] pointer-events-none select-none translate-x-1/3 z-0">
          LEGACY
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            
            {/* Quote Side */}
            <div className="lg:col-span-7 space-y-20 animate-in slide-in-from-left duration-1000">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="h-px w-16 bg-[#d4af37]"></div>
                  <span className="text-[11px] uppercase tracking-[0.8em] font-bold text-[#722f3f]">The Executive Manifesto</span>
                </div>
                <div className="relative">
                  <Quote size={80} className="text-[#d4af37] opacity-10 absolute -top-12 -left-12" />
                  <h2 className="text-4xl md:text-6xl font-serif italic text-[#2a2a2a] leading-[1.3] tracking-wide relative">
                    "A responsible visionary magnate cultivates <span className="text-[#722f3f]">enduring prosperity</span> by elevating education, championing environmental stewardship, and empowering communities."
                  </h2>
                </div>
              </div>
              
              <div className="space-y-12 pl-10 border-l-2 border-[#e8e6e1]">
                <p className="text-xl font-lora italic text-gray-500 leading-[1.8] max-w-2xl">
                  Through uncompromising ethics and meaningful social engagement, he forges trust, secures long-term growth, and etches a legacy defined by integrity and influence.
                </p>
                <div className="flex items-center space-x-10">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-serif font-bold text-[#722f3f] tracking-tight">Arun Malik</h3>
                    <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-gray-400">Managing Director & Visionary</p>
                  </div>
                  <div className="h-16 w-px bg-gradient-to-b from-[#d4af37] to-transparent"></div>
                  <div className="space-y-1 hidden sm:block">
                    <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-300">EST. 1984</p>
                    <p className="text-[11px] font-serif italic text-gray-500">Napa Valley • NCR Portfolio</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* MD Cutout Image Side */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                {/* Prestige Halo */}
                <div className="w-[130%] aspect-square bg-[#faf8f5] rounded-full blur-[120px] opacity-80 animate-pulse"></div>
                {/* Geometric Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] border border-[#d4af37]/20 rotate-12 group-hover:rotate-6 transition-transform duration-[3000ms]"></div>
              </div>

              <div className="absolute -left-20 top-0 h-full hidden xl:flex flex-col justify-between py-24">
                 <span className="text-[10px] font-bold uppercase tracking-[1em] text-gray-200 [writing-mode:vertical-rl]">UNCOMPROMISING</span>
                 <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#722f3f]/30 [writing-mode:vertical-rl]">EXCELLENCE</span>
              </div>

              <div className="relative group w-full max-w-md">
                <div className="absolute -top-12 -right-8 w-24 h-24 border-t-2 border-r-2 border-[#d4af37] opacity-60"></div>
                <div className="absolute -bottom-12 -left-8 w-24 h-24 border-b-2 border-l-2 border-[#d4af37] opacity-60"></div>

                <div className="relative overflow-visible">
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
                    alt="Arun Malik" 
                    className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.15)] grayscale group-hover:grayscale-0 transition-all duration-[2000ms] ease-out object-contain relative z-20"
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-black/10 blur-2xl rounded-full z-10"></div>
                </div>
                
                <div className="absolute -bottom-6 right-0 z-30 bg-white p-8 shadow-2xl border border-[#e8e6e1] animate-in slide-in-from-bottom-8 duration-1000 delay-500">
                   <div className="flex items-center space-x-4">
                      <ShieldCheck size={20} className="text-[#d4af37]" />
                      <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#2a2a2a]">Authentic Leadership</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE DELHI GENESIS & RESPONSIBILITY (Story 2005) - Archival Layout */}
      <section className="py-56 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 grayscale contrast-150">
          <img src="https://images.unsplash.com/photo-1510850478944-d5ec3ca2c5fe?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Delhi Heritage" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
               <div className="space-y-6">
                 <h4 className="text-[#d4af37] text-[11px] uppercase tracking-[1em] font-bold">The Strategic Genesis</h4>
                 <h2 className="text-5xl md:text-8xl font-serif italic text-white leading-none">Begun in <span className="text-[#d4af37] block mt-4">Delhi, 2005</span></h2>
                 <div className="h-px w-32 bg-[#d4af37]/40 mt-10"></div>
               </div>
               <p className="text-2xl font-lora italic text-gray-300 leading-relaxed max-w-xl">
                  "Our story traces a journey from a passionate local atelier to an internationally recognized emblem of modern refinement."
               </p>
               <div className="p-12 border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-sm group hover:border-[#d4af37] transition-all duration-700">
                  <div className="w-16 h-16 border border-[#d4af37]/30 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
                    <Leaf size={28} className="text-[#d4af37]" />
                  </div>
                  <h4 className="text-3xl font-serif text-white mb-6">Sustainability & Responsibility</h4>
                  <p className="text-base font-lora italic text-gray-400 leading-relaxed">
                    We honor the lands and communities that shape our spirits—embracing responsible sourcing, eco‑conscious packaging, carbon‑aware operations, and initiatives that advocate informed, responsible indulgence.
                  </p>
               </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border border-white/5 pointer-events-none"></div>
              <div className="aspect-[4/5] overflow-hidden border border-white/10 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)] relative group">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[3000ms]" alt="Process" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-12 left-12 text-white">
                   <div className="flex items-center space-x-4 mb-4">
                     <History size={16} className="text-[#d4af37]" />
                     <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#d4af37]">Heritage Archive</p>
                   </div>
                   <p className="text-3xl font-serif italic">A Legacy Defined by Integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Elevated Grid */}
      <section className="py-48 bg-[#faf8f5] relative border-y border-[#e8e6e1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32 space-y-8">
            <h4 className="text-[#722f3f] uppercase tracking-[1em] font-bold text-[11px]">THE CORE VALUES</h4>
            <h2 className="text-5xl md:text-8xl font-serif italic text-[#2a2a2a]">The G-Town Philosophy</h2>
            <div className="h-0.5 w-32 bg-[#d4af37] mx-auto mt-10"></div>
          </div>

          <div className="max-w-5xl mx-auto text-center mb-48">
            <p className="text-3xl md:text-5xl font-lora italic text-gray-600 leading-[1.5]">
              "We believe that a great wine is not made, but born. It is the result of a thousand small decisions made in harmony with the land."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
            {/* Terroir Feature */}
            <div className="group space-y-16">
              <div className="relative">
                <div className="aspect-[16/11] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)]">
                  <img src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1000" alt="Terroir" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                </div>
                <div className="absolute -bottom-12 -right-12 bg-[#722f3f] p-12 text-white shadow-2xl hidden md:block">
                  <Globe size={40} className="text-[#d4af37] mb-6" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.5em]">Environmental Spirit</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="h-px w-12 bg-[#722f3f]"></div>
                  <h3 className="text-[11px] uppercase tracking-[0.8em] font-bold text-[#722f3f]">The Terroir</h3>
                </div>
                <p className="text-xl font-lora text-gray-500 leading-loose italic">
                  Our estate vineyards are situated on a unique bench of limestone-rich soil, cooled by the morning fog of the Pacific and warmed by the intense afternoon sun.
                </p>
              </div>
            </div>

            {/* Craft Feature */}
            <div className="group space-y-16 lg:pt-48">
              <div className="relative">
                <div className="aspect-[16/11] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)]">
                  <img src="https://images.unsplash.com/photo-1510850478944-d5ec3ca2c5fe?auto=format&fit=crop&q=80&w=1000" alt="The Craft" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                </div>
                <div className="absolute -top-12 -left-12 bg-white p-12 border border-[#e8e6e1] shadow-2xl hidden md:block">
                  <ShieldCheck size={40} className="text-[#722f3f] mb-6" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-gray-400">Master Artistry</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="h-px w-12 bg-[#722f3f]"></div>
                  <h3 className="text-[11px] uppercase tracking-[0.8em] font-bold text-[#722f3f]">The Craft</h3>
                </div>
                <p className="text-xl font-lora text-gray-500 leading-loose italic">
                  Sustainability is at the core of everything we do. We use organic farming practices and minimal-intervention techniques to ensure character is never lost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Pillars Section - Museum Plaque Layout */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e6e1] border border-[#e8e6e1] shadow-2xl relative">
            {[
              { 
                icon: <Award size={40} strokeWidth={1} className="text-[#d4af37]" />, 
                title: "Ethics & Integrity", 
                desc: "Every initiative is an investment in shared progress, etched with uncompromising transparency." 
              },
              { 
                icon: <Leaf size={40} strokeWidth={1} className="text-[#d4af37]" />, 
                title: "Stewardship", 
                desc: "Championing environmental prosperity through organic farming and legacy conservation." 
              },
              { 
                icon: <Sparkles size={40} strokeWidth={1} className="text-[#d4af37]" />, 
                title: "Influence", 
                desc: "Forging trust and securing long-term growth for the world's most discerning communities." 
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white p-20 space-y-10 hover:bg-[#faf8f5] transition-all duration-700 group relative">
                <div className="absolute top-0 right-0 p-6 text-gray-50 font-serif font-bold text-4xl opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                <div className="transform group-hover:scale-110 transition-transform duration-700">{pillar.icon}</div>
                <h4 className="text-3xl font-serif tracking-tight">{pillar.title}</h4>
                <p className="text-base font-lora italic text-gray-500 leading-relaxed">{pillar.desc}</p>
                <div className="h-0.5 w-0 bg-[#d4af37] group-hover:w-16 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Gallery - High Fashion Editorial Grid */}
      <section className="py-56 bg-[#faf8f5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-32 relative">
            <div className="absolute -top-12 left-0 text-[10vw] font-serif font-bold text-[#e8e6e1] opacity-40 pointer-events-none select-none">MUSEUM</div>
            <div className="space-y-6 relative z-10">
              <h4 className="text-[11px] uppercase tracking-[1em] font-bold text-[#722f3f]">CHRONICLES</h4>
              <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter">Legacy in Motion</h2>
            </div>
            <div className="hidden md:block pb-4 relative z-10">
              <p className="text-[10px] uppercase tracking-[1em] font-bold text-gray-400">ESTABLISHED MCMLXXXIV</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1510850478944-d5ec3ca2c5fe?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1558001373-7b93ee48fffb?auto=format&fit=crop&q=80&w=800"
            ].map((img, i) => (
              <div key={i} className="aspect-[4/6] overflow-hidden shadow-2xl group relative bg-[#111111]">
                <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] opacity-80 group-hover:opacity-100" alt="Process" />
                <div className="absolute inset-0 bg-[#722f3f]/0 group-hover:bg-[#722f3f]/10 transition-colors duration-1000"></div>
                <div className="absolute bottom-12 left-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                   <div className="w-12 h-px bg-white mb-4"></div>
                   <p className="text-[11px] text-white font-bold uppercase tracking-[0.5em]">Archive {1984 + (i * 12)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SIGNATURE INVITATION - Royal Card Style */}
      <section className="py-64 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#d4af37] via-[#d4af37]/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 text-center space-y-20 relative">
           <div className="space-y-8">
              <div className="flex justify-center">
                 <div className="p-4 border-2 border-[#d4af37]/20 rounded-full animate-pulse">
                    <Heart size={40} className="text-[#d4af37] opacity-60" />
                 </div>
              </div>
              <h2 className="text-5xl md:text-8xl font-serif italic text-[#2a2a2a] tracking-tight">Join the Celebration</h2>
           </div>
           <p className="text-3xl md:text-5xl font-lora italic text-gray-500 leading-[1.6] max-w-4xl mx-auto px-10">
             "Whether toasting life’s grand moments or savoring a quiet evening, G‑Town Wines stands as your signature of elevated taste."
           </p>
           <div className="flex flex-col items-center space-y-10 pt-16">
              <p className="text-[12px] uppercase tracking-[1.2em] font-bold text-[#722f3f]">Excellence • Artistry • Legacy</p>
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
           <p className="text-[11px] uppercase tracking-[1.2em] font-bold text-gray-500">Authenticity • Exclusivity • Unrivaled Elegance</p>
         </div>
         <div className="h-px w-32 bg-[#d4af37]/40 mx-auto"></div>
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

export default About;
