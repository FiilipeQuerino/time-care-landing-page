
import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GeminiAIAssistant } from './components/GeminiAIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>

        {/* AI Assistant Integration */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-rose-900 mb-4 font-display">Inovação com IA</h2>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light">
                Potencialize sua clínica com nosso assistente inteligente. Crie scripts, campanhas e conteúdos em segundos.
              </p>
            </div>
            <GeminiAIAssistant />
          </div>
        </section>
        
        <section id="funcionalidades" className="py-20 bg-white">
          <Features />
        </section>

        <section id="sobre" className="py-20 bg-[#FDF0EE]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-rose-900 mb-6">Por que escolher o Time-Care?</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Nascemos da necessidade de devolver ao profissional de estética o seu bem mais precioso: o tempo. Nosso sistema é focado em eliminar a burocracia e organizar cada minuto do seu dia para que você foque apenas na beleza e bem-estar dos seus clientes.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <span className="block text-3xl mb-2">⏱️</span>
                  <h4 className="font-bold text-rose-900 mb-2">Agilidade</h4>
                  <p className="text-sm text-stone-500">Agendamentos realizados em menos de 10 segundos.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <span className="block text-3xl mb-2">🎯</span>
                  <h4 className="font-bold text-rose-900 mb-2">Precisão</h4>
                  <p className="text-sm text-stone-500">Controle financeiro rigoroso sem erros manuais.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <span className="block text-3xl mb-2">💎</span>
                  <h4 className="font-bold text-rose-900 mb-2">Elegância</h4>
                  <p className="text-sm text-stone-500">Interface intuitiva que combina com seu ambiente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="py-20 bg-[#FAF7F2]">
          <Pricing />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
