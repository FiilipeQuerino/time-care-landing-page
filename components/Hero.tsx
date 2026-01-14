
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const fullText = "TimeCare é a solução digital completa para organizar agendamentos, clientes e finanças, dando a você mais tempo para cuidar do que realmente importa.";

  // Efeito de Digitação
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    // Fix: Using 'any' for the timeout identifier to prevent "Namespace 'global.NodeJS' has no exported member 'Timeout'" error in browser environments.
    let timeoutId: any;

    const type = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
        
        // Pausa maior em pontuações para um ritmo mais humano
        const char = fullText[currentIndex - 1];
        const delay = char === ',' || char === '.' ? 400 : 35;
        
        timeoutId = setTimeout(type, delay);
      }
    };

    // Atraso inicial para começar a digitar após o carregamento da página
    const startTimeout = setTimeout(type, 800);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, []);

  // Efeito do Cursor Piscando
  useEffect(() => {
    const interval = setInterval(() => {
      setIsCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#f9f5f2] to-[#f8d6e0] pt-16 pb-20 md:pt-28 md:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-stone-800 leading-tight mb-8 font-display">
              O Software Inteligente que Faz Sua <span className="text-rose-400 italic">Clínica Crescer.</span>
            </h1>
            
            {/* Contêiner do texto com altura mínima para evitar pulos no layout */}
            <div className="min-h-[120px] md:min-h-[140px] relative">
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl inline">
                {typedText}
                <span 
                  className={`inline-block w-[3px] h-[1.2em] bg-rose-400 ml-1 align-middle transition-opacity duration-100 ${
                    isCursorVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <button 
                onClick={() => window.location.href='https://time-care-web.vercel.app/'}
                className="bg-rose-400 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-rose-500 transition-all transform hover:-translate-y-1 shadow-xl shadow-rose-200"
              >
                Comece Seu Teste Grátis Agora
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-stone-400 text-sm italic">
              <span className="flex items-center gap-1">✨ Simples</span>
              <span className="flex items-center gap-1">✨ Elegante</span>
              <span className="flex items-center gap-1">✨ Eficiente</span>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="bg-white/40 p-4 rounded-[3rem] backdrop-blur-sm shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <div className="relative overflow-hidden rounded-[2rem]">
                 <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full object-cover h-[350px] md:h-[500px]" 
                  alt="Interface TimeCare em um Tablet" 
                />
                {/* Overlay sutil para dar profundidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-200/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Badge flutuante otimizada */}
            <div className="absolute -bottom-8 -left-4 bg-white/95 backdrop-blur p-6 rounded-3xl shadow-2xl hidden md:block border border-rose-50 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center">
                  <span className="text-rose-400 text-xl font-bold">10s</span>
                </div>
                <div>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Agilidade TimeCare</p>
                  <p className="font-bold text-stone-800">Agendamento concluído</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorativo Refinado */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}} />
    </div>
  );
};
