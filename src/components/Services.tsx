import React from 'react';
import { Scale, Users, Building2, FileText, HeartHandshake, ShieldCheck, Briefcase, Landmark } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Direito Empresarial",
    description: "Consultoria para empresas, questões contratuais e litígios comerciais.",
    icon: <Building2 size={28} strokeWidth={1} />
  },
  {
    title: "Direito Civil",
    description: "Disputas familiares, contratos e responsabilidade civil.",
    icon: <Scale size={28} strokeWidth={1} />
  },
  {
    title: "Direito de Família",
    description: "Divórcio, guarda, pensão alimentícia e acordos pré-nupciais.",
    icon: <Users size={28} strokeWidth={1} />
  },
  {
    title: "Planejamento Patrimonial e Sucessório",
    description: "Holding - Planejamento Sucessório e Tributário.",
    icon: <FileText size={28} strokeWidth={1} />
  },
  {
    title: "Direito Trabalhista",
    description: "Relações trabalhistas, contratos, rescisões e litígios.",
    icon: <Briefcase size={28} strokeWidth={1} />
  },
  {
    title: "Direito Previdenciário",
    description: "Planejamento previdenciário, aposentadorias, benefícios por incapacidade, LOAS/BPC e defesas empresariais junto ao INSS.",
    icon: <ShieldCheck size={28} strokeWidth={1} />
  },
  {
    title: "Direito Administrativo",
    description: "Defesa nas relações entre cidadãos e o Estado.",
    icon: <Landmark size={28} strokeWidth={1} />
  },
  {
    title: "Mediação e Arbitragem",
    description: "Solução alternativa de conflitos fora dos tribunais.",
    icon: <HeartHandshake size={28} strokeWidth={1} />
  },
  {
    title: "Cobranças",
    description: "Atuação estratégica na recuperação de créditos e negociações.",
    icon: <FileText size={28} strokeWidth={1} />
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
            Atuação preventiva e judicial com excelência, ética e qualidade, agregando valor aos clientes com confiança, eficiência e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-brand-gray/20">
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