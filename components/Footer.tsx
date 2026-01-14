
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-stone-600 py-20 border-t border-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-rose-400 rounded-xl flex items-center justify-center shadow-lg shadow-rose-100">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-stone-800 font-display">TimeCare</span>
            </div>
            <p className="text-sm leading-relaxed font-light">
              Organize sua clínica com tecnologia e facilidade. O tempo ao seu favor para você focar na beleza.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-stone-800 uppercase tracking-widest text-xs">Acesso</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-rose-400 transition">Entrar no Sistema</a></li>
              <li><a href="#" className="hover:text-rose-400 transition">Testar Grátis</a></li>
              <li><a href="#" className="hover:text-rose-400 transition">Funcionalidades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-stone-800 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="https://wa.me/5548996193227" className="flex items-center gap-2 hover:text-green-500 transition">
                  <span className="w-5 h-5 flex items-center justify-center bg-green-50 rounded-full text-green-500">☏</span>
                  WhatsApp Suporte
                </a>
              </li>
              <li><a href="mailto:contato@timecare.com.br" className="hover:text-rose-400 transition">contato@timecare.com.br</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-stone-800 uppercase tracking-widest text-xs">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 hover:bg-rose-400 hover:text-white transition">
                <span className="font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 hover:bg-rose-400 hover:text-white transition">
                <span className="font-bold">FB</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-50 text-center text-xs text-stone-400">
          <p>© 2025 TimeCare. Todos os direitos reservados. Design refinado para estética.</p>
        </div>
      </div>
    </footer>
  );
};
