
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#f9f5f2]/90 backdrop-blur-md border-b border-rose-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-rose-400 rounded-xl flex items-center justify-center shadow-lg shadow-rose-100">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-2xl font-bold text-stone-800 font-display tracking-tight">TimeCare</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-stone-600 font-medium">
          <a href="#inicio" className="hover:text-rose-400 transition text-sm uppercase tracking-widest">Início</a>
          <a href="#funcionalidades" className="hover:text-rose-400 transition text-sm uppercase tracking-widest">Funcionalidades</a>
          <a href="#planos" className="hover:text-rose-400 transition text-sm uppercase tracking-widest">Planos</a>
        </div>

        <button 
          onClick={() => window.location.href='https://time-care-web.vercel.app/'}
          className="bg-stone-800 text-white px-8 py-3 rounded-full font-bold hover:bg-stone-700 transition shadow-lg shadow-stone-200 text-sm tracking-wide"
        >
          Acessar Sistema
        </button>
      </div>
    </nav>
  );
};
