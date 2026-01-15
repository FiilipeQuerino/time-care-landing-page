
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-rose-50/80 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold text-rose-600 tracking-tight">Time Care</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-rose-500 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-rose-200">
              Começar Agora
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-rose-100 absolute w-full transition-all">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-slate-600 hover:text-rose-500 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold">
              Começar Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
