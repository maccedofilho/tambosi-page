import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green border-t border-brand-light/5 py-20 text-brand-light">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10 flex flex-col items-center justify-center opacity-90">
            <Logo width={50} height={45} className="mb-5 text-brand-light" />
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