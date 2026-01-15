
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Tudo o que seu negócio precisa para crescer
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Uma plataforma intuitiva desenhada especificamente para o fluxo de trabalho de profissionais da beleza e estética.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl border border-rose-100 bg-rose-50/30 hover:bg-rose-50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
