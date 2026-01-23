import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 30;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? 'bg-brand-light/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleSmoothScroll(e, '#home')}
          className="group flex items-center gap-4"
        >
             <div className={`transition-colors duration-300 -mt-4 ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white'}`}>
                <Logo width={45} height={40} />
             </div>
             
             <div className="flex flex-col items-start justify-center pt-1">
                <h1 className={`font-serif text-xl md:text-2xl tracking-[0.2em] uppercase transition-colors duration-300 leading-none font-medium ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white'}`}>
                  Tambosi
                </h1>
                <span className={`block font-sans text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.45em] mt-1.5 font-light pl-[2px] ${isScrolled ? 'text-brand-gold' : 'text-brand-gold'}`}>
                  Advocacia
                </span>
             </div>
        </a>

        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`text-[0.7rem] tracking-[0.15em] uppercase font-sans font-light hover:text-brand-gold transition-colors duration-300 relative group/link ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover/link:w-full"></span>
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => handleSmoothScroll(e, '#contato')}
            className={`px-8 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300 text-[0.7rem] tracking-[0.2em] uppercase font-light ${!isScrolled && 'text-white border-white/50 hover:bg-white hover:text-brand-dark hover:border-white'}`}
          >
            Agendar
          </a>
        </div>

        <button
          className="md:hidden text-brand-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-brand-light z-40 flex flex-col items-center justify-center space-y-10 transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className="text-2xl font-serif text-brand-dark hover:text-brand-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contato"
          onClick={(e) => handleSmoothScroll(e, '#contato')}
          className="text-2xl font-serif text-brand-gold hover:text-brand-dark transition-colors"
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;