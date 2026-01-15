import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E0DED9] opacity-50 -skew-x-12 transform translate-x-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Simone Maciel Tambosi"
                className="w-full h-full object-cover filter sepia-[0.1] hover:sepia-0 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 border-[1px] border-white/30 m-6"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border border-brand-gold/40 z-0"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <div className="h-[1px] w-12 bg-brand-gold"></div>
                 <h4 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">A Advogada</h4>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">Simone Maciel Tambosi</h2>
            </div>
            
            <p className="font-sans text-brand-dark/80 leading-loose font-light text-lg">
              Com uma trajetória marcada pela excelência e rigor técnico, Simone Maciel Tambosi construiu o <strong>Tambosi Advocacia</strong> sob os pilares da ética e do atendimento personalizado.
            </p>

            <p className="font-sans text-brand-dark/80 leading-loose font-light text-lg">
              Nosso escritório boutique se destaca pelos traços finos de uma advocacia artesanal, onde cada demanda é tratada com a exclusividade que merece. Atuamos com discrição e profundidade, garantindo segurança jurídica em momentos decisivos.
            </p>

            <div className="bg-brand-light border-l-2 border-brand-gold pl-8 py-2 my-8">
               <blockquote className="font-serif text-2xl text-brand-dark italic">
                "O direito, quando exercido com precisão e elegância, transforma vidas e perpetua legados."
              </blockquote>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-brand-gray/30">
               <div>
                  <span className="block font-serif text-brand-dark text-lg">Simone Maciel Tambosi</span>
                  <span className="block font-sans text-xs text-brand-gold tracking-widest mt-1">OAB/SC 47106</span>
               </div>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Assinatura" className="h-12 opacity-40 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;