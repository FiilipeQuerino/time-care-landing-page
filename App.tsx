
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CheckoutFlow from './components/CheckoutFlow';
import VideoModal from './components/VideoModal';
import { Plan, BillingCycle } from './types';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<{ plan: Plan; cycle: BillingCycle } | null>(null);
  const [showVideoDemo, setShowVideoDemo] = useState(false);

  const handleSelectPlan = (plan: Plan, cycle: BillingCycle) => {
    setSelectedPlan({ plan, cycle });
  };

  return (
    <div className="min-h-screen bg-rose-50 text-slate-900 overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      
      <main>
        <Hero 
          onStart={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
          onViewDemo={() => setShowVideoDemo(true)}
        />
        
        <Features />

        <section className="py-24 bg-rose-500 text-white relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12">
              Sua clínica merece o melhor cuidado
            </h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-32">
              <div className="text-center">
                <p className="text-4xl md:text-7xl font-bold mb-3">98%</p>
                <p className="text-rose-100 font-medium text-lg uppercase tracking-wide">De satisfação</p>
              </div>
              <div className="text-center border-x border-white/20 px-12 hidden md:block">
                <p className="text-4xl md:text-7xl font-bold mb-3">+10k</p>
                <p className="text-rose-100 font-medium text-lg uppercase tracking-wide">Agendamentos/dia</p>
              </div>
              <div className="text-center md:hidden">
                <p className="text-4xl md:text-7xl font-bold mb-3">+10k</p>
                <p className="text-rose-100 font-medium text-lg uppercase tracking-wide">Agendamentos/dia</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-7xl font-bold mb-3">30%</p>
                <p className="text-rose-100 font-medium text-lg uppercase tracking-wide">Mais produtividade</p>
              </div>
            </div>
          </div>
        </section>

        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-20 text-slate-900">
              O que dizem as especialistas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { name: 'Dra. Ana Souza', role: 'Dermatologista & Estética', text: 'O Time Care mudou a forma como gerencio minha clínica. A agenda inteligente é impecável e reduziu minhas faltas em 40%.' },
                { name: 'Clara Mendes', role: 'Proprietária Studio VIP', text: 'Finalmente consegui ter controle total do meu estoque e financeiro. É intuitivo e muito elegante, combina com meu espaço.' },
                { name: 'Bruna Oliveira', role: 'Esteticista Avançada', text: 'Meus clientes amam a facilidade de agendamento e o suporte via WhatsApp deles é simplesmente sensacional.' },
              ].map((t, idx) => (
                <div key={idx} className="bg-rose-50/50 p-10 rounded-[2.5rem] border border-rose-100 italic text-slate-700 relative hover:shadow-xl transition-all duration-300">
                   <div className="absolute -top-4 left-10 text-rose-500">
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.5693 13 5.017 13H3.017V21H5.017Z"/></svg>
                   </div>
                   <p className="text-lg leading-relaxed mb-8">"{t.text}"</p>
                   <div className="flex items-center gap-4 not-italic mt-auto border-t border-rose-100 pt-6">
                     <img src={`https://i.pravatar.cc/150?u=testim${idx}`} className="w-14 h-14 rounded-full border-2 border-rose-200 shadow-md" alt={t.name} />
                     <div>
                        <p className="font-bold text-slate-900 text-lg">{t.name}</p>
                        <p className="text-sm text-rose-500 font-semibold uppercase tracking-wider">{t.role}</p>
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16 border-b border-slate-800 pb-16">
            <div className="space-y-6">
              <span className="text-3xl font-serif font-bold text-white tracking-tight">Time Care</span>
              <p className="text-base leading-relaxed text-slate-400">
                Transformando a gestão de clínicas de estética através de tecnologia humanizada e design focado no cuidado.
              </p>
              <div className="flex gap-5">
                <Instagram className="w-6 h-6 hover:text-rose-400 cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 hover:text-rose-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8 text-lg">Links Rápidos</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-rose-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#features" className="hover:text-rose-400 transition-colors">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-rose-400 transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-lg">Suporte</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-rose-400 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Treinamento</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold mb-8 text-lg">Contato</h4>
              <div className="flex items-center gap-4 text-sm">
                <div className="p-2 bg-slate-800 rounded-lg"><Phone className="w-4 h-4 text-rose-500" /></div>
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="p-2 bg-slate-800 rounded-lg"><Mail className="w-4 h-4 text-rose-500" /></div>
                <span>contato@timecare.com.br</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="p-2 bg-slate-800 rounded-lg"><MapPin className="w-4 h-4 text-rose-500" /></div>
                <span>Av. Paulista, 1000 - SP</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Time Care. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3 text-sm font-medium">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>para o setor de estética</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Demo Modal */}
      {showVideoDemo && <VideoModal onClose={() => setShowVideoDemo(false)} />}

      {/* Conditional Checkout Modal */}
      {selectedPlan && (
        <CheckoutFlow 
          plan={selectedPlan.plan} 
          cycle={selectedPlan.cycle} 
          onClose={() => setSelectedPlan(null)} 
        />
      )}
    </div>
  );
};

export default App;
