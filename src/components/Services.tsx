import React from 'react';
import { Scale, Users, Building2, FileText, HeartHandshake, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Família e Sucessões",
    description: "Planejamento patrimonial, inventários e divórcios com abordagem humanizada e técnica.",
    icon: <Users size={28} strokeWidth={1} />
  },
  {
    title: "Direito Civil",
    description: "Atuação estratégica em responsabilidade civil e proteção de direitos privados.",
    icon: <Scale size={28} strokeWidth={1} />
  },
  {
    title: "Direito Empresarial",
    description: "Assessoria consultiva e contenciosa para mitigação de riscos e segurança dos negócios.",
    icon: <Building2 size={28} strokeWidth={1} />
  },
  {
    title: "Contratos",
    description: "Elaboração e revisão minuciosa de instrumentos contratuais complexos.",
    icon: <FileText size={28} strokeWidth={1} />
  },
  {
    title: "Mediação",
    description: "Resolução de conflitos através de métodos adequados, prezando pela celeridade.",
    icon: <HeartHandshake size={28} strokeWidth={1} />
  },
  {
    title: "Consultoria Jurídica",
    description: "Pareceres e orientações preventivas para tomadas de decisão assertivas.",
    icon: <ShieldCheck size={28} strokeWidth={1} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="areas" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Especialidades</span>
          <h2 className="font-serif text-4xl text-brand-dark mb-6">Atuação Jurídica</h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-dark/70 font-light">
            Dedicação exclusiva às áreas do direito privado, com foco na proteção patrimonial e resolução de conflitos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-brand-gray/20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-12 border-b border-r border-brand-gray/20 hover:bg-brand-light transition-all duration-500 flex flex-col items-center text-center hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-gray/20 hover:z-10 relative"
            >
              <div className="text-brand-dark group-hover:text-brand-gold transition-colors duration-500 mb-6 p-4 rounded-full border border-brand-gray/20 group-hover:border-brand-gold/50">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-4">{service.title}</h3>
              <p className="font-sans text-brand-dark/60 font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;