
import React, { useEffect, useRef, useState } from 'react';

const RevealPlan: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      {children}
    </div>
  );
};

const plans = [
  {
    name: "Essencial",
    price: "19",
    description: "Funcionalidades básicas para começar sem custo.",
    features: [
      "Agenda Inteligente",
      "Cadastro de Clientes",
      "Histórico Básico",
      "Suporte via E-mail"
    ],
    cta: "Testar grátis",
    popular: false
  },
  {
    name: "Básico",
    price: "25",
    description: "Agendamentos, clientes e relatórios para crescer.",
    features: [
      "Tudo do Essencial",
      "Relatórios de Faturamento",
      "Gestão Financeira",
      "Controle de Estoque",
      "Suporte via WhatsApp"
    ],
    cta: "Testar grátis",
    popular: true
  },
  {
    name: "Avançado",
    price: "50",
    description: "Recursos completos e suporte prioritário para equipes.",
    features: [
      "Tudo do Básico",
      "Multiusuário Ilimitado",
      "Relatórios Avançados",
      "Backup em Nuvem",
      "Treinamento VIP"
    ],
    cta: "Testar grátis",
    popular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4 font-display">Planos para cada fase da sua clínica</h2>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light">
          Escolha o investimento ideal para sua tranquilidade e profissionalismo.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <RevealPlan key={index} delay={index * 150}>
            <div 
              className={`h-full p-10 rounded-[3rem] bg-white border-2 transition-all ${
                plan.popular 
                ? 'border-rose-300 shadow-2xl md:scale-105 z-10' 
                : 'border-stone-50 shadow-sm'
              }`}
            >
              <h3 className="text-2xl font-bold text-stone-800 mb-2 font-display">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-stone-400 text-lg">R$</span>
                <span className="text-5xl font-bold text-stone-800 mx-1">{plan.price}</span>
                <span className="text-stone-400 text-sm">/mês</span>
              </div>
              <p className="text-stone-400 text-xs mb-8 uppercase tracking-widest font-bold">Por profissional</p>
              <p className="text-stone-500 mb-8 text-sm leading-relaxed">{plan.description}</p>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-stone-600 text-sm">
                    <svg className="w-4 h-4 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => window.location.href='https://time-care-web.vercel.app/'}
                className={`w-full py-4 rounded-full font-bold transition-all shadow-lg ${
                  plan.popular 
                  ? 'bg-rose-400 text-white hover:bg-rose-500 shadow-rose-100' 
                  : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </RevealPlan>
        ))}
      </div>
    </div>
  );
};
