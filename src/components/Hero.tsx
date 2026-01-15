import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
          alt="Escritório de Advocacia elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-10">
        <div className="animate-fade-in-up flex flex-col items-center">
          <div className="w-[1px] h-20 bg-brand-gold/80 mb-8"></div>
          
          <p className="text-brand-gold tracking-[0.4em] uppercase text-[0.65rem] md:text-xs mb-8 font-sans font-light">
            Assessoria Jurídica Premium
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-4 font-normal tracking-wide uppercase">
            Tambosi
          </h1>
          <span className="font-sans text-brand-gold/90 text-sm md:text-lg lg:text-xl tracking-[0.5em] uppercase font-light mb-12 block ml-2">
            Advocacia
          </span>

          <p className="text-brand-light/80 font-sans font-light text-lg max-w-xl mx-auto mb-16 leading-relaxed tracking-wide">
            Elegância, discrição e excelência técnica na defesa dos seus interesses.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="#contato"
              className="px-10 py-4 bg-brand-gold text-white font-sans uppercase tracking-[0.2em] text-[0.7rem] hover:bg-brand-sage transition-colors duration-500 min-w-[200px]"
            >
              Fale Conosco
            </a>
            <a
              href="#sobre"
              className="px-10 py-4 border border-white/30 text-white font-sans uppercase tracking-[0.2em] text-[0.7rem] hover:bg-white hover:text-brand-dark transition-all duration-500 backdrop-blur-sm min-w-[200px]"
            >
              O Escritório
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-pulse text-brand-gold/70">
        <ArrowDown size={24} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;