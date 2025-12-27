import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface AgeVerificationProps {
  onVerify: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-[#1b0f12] via-[#12080b] to-[#2b1a1f] flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(114,47,63,0.12),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.05),transparent_35%)] pointer-events-none" />
      <div className="relative max-w-xl w-full bg-white/8 border border-white/10 backdrop-blur-2xl rounded-md shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] p-10 text-center text-white space-y-6">
        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 uppercase tracking-[0.4em] text-[10px] font-bold">
          <ShieldCheck size={14} className="text-[#d4af37]" />
          <span>Verified Access</span>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif text-white">G-Town Wines</h2>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          <h3 className="text-sm uppercase tracking-[0.5em] font-bold text-[#d4af37]">Age Verification</h3>
        </div>
        <p className="text-sm font-lora italic text-white/80 leading-relaxed">
          You must be of legal drinking age to access this site. By clicking "Experience", you confirm that you are 21 years of age or older.
        </p>
        <div className="space-y-3">
          <button
            onClick={onVerify}
            className="w-full py-4 px-8 text-xs font-bold uppercase tracking-[0.3em] text-white bg-gradient-to-r from-[#722f3f] via-[#8b3a4f] to-[#d4af37] hover:shadow-lg hover:shadow-[#722f3f]/40 transition-all rounded-sm border border-[#d4af37]/40"
          >
            Experience
          </button>
          <p className="text-[10px] text-white/60 uppercase tracking-[0.2em]">Please enjoy responsibly</p>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
