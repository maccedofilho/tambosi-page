import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green border-t border-brand-light/5 py-20 text-brand-light">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10 flex flex-col items-center justify-center opacity-90">
            <svg width="50" height="45" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5 text-brand-light">
                  <path d="M25 38V14C25 9 36 9 42 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M25 38V14C25 9 14 9 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M25 38V17" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 14C16 8 23 8 25 11" stroke="#C3B69B" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M40 14C34 8 27 8 25 11" stroke="#C3B69B" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <h2 className="font-serif text-3xl tracking-[0.2em] uppercase font-medium">Tambosi</h2>
            <span className="text-[0.65rem] uppercase tracking-[0.5em] text-brand-gold mt-2 font-light pl-1">Advocacia</span>
        </div>
        
        <div className="flex justify-center space-x-10 mb-12 text-brand-gold">
          <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><Linkedin size={22} strokeWidth={1} /></a>
          <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><Instagram size={22} strokeWidth={1} /></a>
          <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><Facebook size={22} strokeWidth={1} /></a>
        </div>

        <div className="h-[1px] w-12 mx-auto bg-brand-gold/30 mb-8"></div>

        <p className="font-sans text-xs text-brand-light/50 tracking-widest uppercase mb-2">
          &copy; {new Date().getFullYear()} Tambosi Advocacia. Todos os direitos reservados.
        </p>
        <p className="font-sans text-[10px] text-brand-gold/60 tracking-widest">
          OAB/SC 47106
        </p>
      </div>
    </footer>
  );
};

export default Footer;