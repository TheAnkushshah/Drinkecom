import React, { useState, useRef, useEffect, useMemo } from 'react';
import { X, Send, Wine, Sparkles, Loader2, RefreshCcw } from 'lucide-react';
import { createSommelierChat } from '../services/gemini';
import { GenerateContentResponse } from '@google/genai';

const AISommelier: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Welcome to G-Town Wines. I am your personal Sommelier. May I assist you in finding the perfect vintage for your evening?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isEnabled = Boolean(import.meta.env.VITE_GEMINI_API_KEY && import.meta.env.VITE_GEMINI_API_KEY !== 'your_actual_gemini_api_key_here');

  // Persistent chat session only if enabled
  const chatSession = useMemo(() => (isEnabled ? createSommelierChat() : null), [isEnabled]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    // If disabled, respond locally without streaming
    if (!chatSession) {
      setMessages(prev => [...prev, { role: 'ai', text: "AI Sommelier is temporarily unavailable. Browse 'Signature Releases' or use Shop filters for curated picks." }]);
      return;
    }

    // Add a placeholder for the AI response
    setMessages(prev => [...prev, { role: 'ai', text: '' }]);
    setIsLoading(true);

    try {
      const responseStream = await chatSession.sendMessageStream({ message: userMsg });
      
      let accumulatedText = "";
      for await (const chunk of responseStream) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text;
        if (textChunk) {
          accumulatedText += textChunk;
          setMessages(prev => {
            const newMessages = [...prev];
            const lastIndex = newMessages.length - 1;
            if (newMessages[lastIndex].role === 'ai') {
              newMessages[lastIndex] = { role: 'ai', text: accumulatedText };
            }
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Sommelier Error:", error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'ai', text: "I apologize, the cellar archives are temporarily unreachable. Perhaps we could try again in a moment?" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    window.location.reload(); // Simplest way to restart a chat session for a "world-class" feel
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#722f3f] text-[#faf8f5] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#5a2532] transition-all transform hover:scale-110 group relative"
        >
          <Wine size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 bg-[#d4af37] w-4 h-4 rounded-full animate-pulse shadow-sm"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-[#faf8f5] w-80 md:w-[400px] h-[600px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col border border-[#e8e6e1] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-[#722f3f] text-[#faf8f5] p-5 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-2.5 rounded-full backdrop-blur-sm border border-white/10">
                <Sparkles size={18} className="text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-serif text-base tracking-tight">Master Sommelier</h3>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-80">Online Expertise</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={resetChat} 
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                title="Reset Conversation"
              >
                <RefreshCcw size={16} />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 hover:bg-white/10 rounded-full transition-colors hover:rotate-90 transition-transform"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-5 space-y-6 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/linen.png')]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div 
                  className={`max-w-[88%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-[#722f3f] text-white rounded-br-none border border-white/10' 
                      : 'bg-white text-[#2a2a2a] rounded-bl-none font-lora italic border border-[#e8e6e1]'
                  }`}
                >
                  {m.text || (isLoading && i === messages.length - 1 && <Loader2 size={16} className="animate-spin text-[#d4af37]" />)}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-5 border-t border-[#e8e6e1] bg-white">
            <div className="relative flex items-center bg-[#faf8f5] border border-[#e8e6e1] rounded-full px-5 py-3 focus-within:border-[#722f3f] transition-all group shadow-sm">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about pairings or terroir..."
                className="flex-grow bg-transparent border-none text-[13px] outline-none placeholder:text-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="ml-2 text-[#722f3f] disabled:text-gray-300 hover:scale-110 active:scale-95 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="mt-3 text-[9px] text-center text-gray-400 uppercase tracking-widest font-bold">
              Powered by G-Town AI Sommelier
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISommelier;
