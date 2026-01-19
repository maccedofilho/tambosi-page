import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-brand-dark text-white relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
             <circle cx="800" cy="0" r="400" stroke="white" strokeWidth="1" fill="none" />
             <circle cx="800" cy="0" r="350" stroke="white" strokeWidth="1" fill="none" />
             <circle cx="800" cy="0" r="300" stroke="white" strokeWidth="1" fill="none" />
          </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-5/12 space-y-12">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Contato</span>
              <h2 className="font-serif text-4xl mb-6">Agende sua Consulta</h2>
              <p className="font-sans text-brand-light/70 font-light leading-relaxed">
                Estamos à disposição para atender suas demandas com o sigilo e a atenção que elas requerem.
              </p>
            </div>

            <div className="space-y-8 font-light text-brand-light/80">
              <div className="flex items-start gap-6 group">
                <div className="p-3 border border-brand-gold/30 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 className="font-serif text-lg text-white mb-1">Escritório</h5>
                  <p className="text-sm">Rua do Príncipe, 330 - Sala 203<br />Centro - Joinville - SC<br />CEP: 89201-901</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="p-3 border border-brand-gold/30 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <h5 className="font-serif text-lg text-white mb-1">Telefone</h5>
                  <p className="text-sm">(47) 3202-5510</p>
                  <p className="text-sm">(47) 98802-8253</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-3 border border-brand-gold/30 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                   <h5 className="font-serif text-lg text-white mb-1">E-mail</h5>
                   <p className="text-sm">contato@tambosi.adv.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 bg-white/5 p-8 md:p-12 border border-white/5 backdrop-blur-sm shadow-2xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-brand-gray/30 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors font-sans font-light placeholder-transparent peer"
                    placeholder="Nome"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3 text-xs text-brand-gold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-gray/50 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-gold">Nome Completo</label>
                </div>
                <div className="group relative">
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    className="w-full bg-transparent border-b border-brand-gray/30 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors font-sans font-light placeholder-transparent peer"
                    placeholder="Telefone"
                  />
                  <label htmlFor="phone" className="absolute left-0 -top-3 text-xs text-brand-gold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-gray/50 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-gold">Telefone</label>
                </div>
              </div>

              <div className="group relative">
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-brand-gray/30 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors font-sans font-light placeholder-transparent peer"
                  placeholder="Email"
                />
                <label htmlFor="email" className="absolute left-0 -top-3 text-xs text-brand-gold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-gray/50 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-gold">E-mail</label>
              </div>

              <div className="group relative">
                <textarea 
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-brand-gray/30 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors font-sans font-light placeholder-transparent resize-none peer"
                  placeholder="Mensagem"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3 text-xs text-brand-gold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-gray/50 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-gold">Como podemos ajudar?</label>
              </div>

              <div className="pt-6 text-right">
                <button 
                  type="button" 
                  className="px-12 py-4 bg-transparent border border-brand-gold text-brand-gold font-sans uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-white transition-all duration-500"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;