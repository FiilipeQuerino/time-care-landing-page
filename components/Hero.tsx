
import React from 'react';
import { ChevronRight, Sparkles, Play } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
  onViewDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onViewDemo }) => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/80 text-rose-600 font-semibold text-sm mb-6 animate-fade-in border border-rose-200">
            <Sparkles className="w-4 h-4" />
            O sistema #1 para profissionais de estética
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.05] mb-6">
            Sua agenda organizada, <br />
            <span className="text-rose-500 italic">seu tempo valorizado.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            O Time Care é a solução completa para gestão de clínicas e salões. Automatize seus agendamentos, controle seu financeiro e foque no cuidado que seus clientes merecem.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button 
              onClick={onStart}
              className="px-10 py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-rose-300 flex items-center justify-center gap-2 group"
            >
              Experimentar Grátis
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onViewDemo}
              className="px-10 py-5 bg-white border border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-200 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-rose-600" />
              Ver Vídeo Demo
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=timecare${i}`}
                  alt="Usuário satisfeito"
                  className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              <span className="font-bold text-slate-800 text-base block md:inline">+2.000 especialistas</span> já transformaram seus negócios
            </p>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute -z-10 -top-10 -right-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-rose-100/60 rounded-full blur-3xl"></div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-rose-400/10 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all -z-10"></div>
            <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl border border-rose-100/50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3]">
                {/* High-quality aesthetics clinic image */}
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200" 
                  alt="Estética de luxo e tecnologia" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Dashboard Inteligente</p>
                        <p className="text-sm text-slate-600">Gestão 360° para seu sucesso</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
