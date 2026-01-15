
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PLANS } from '../constants';
import { BillingCycle, Plan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: Plan, cycle: BillingCycle) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  return (
    <section id="pricing" className="py-24 px-4 bg-rose-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Planos simples e transparentes
          </h2>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>Mensal</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="w-14 h-8 bg-rose-200 rounded-full relative p-1 transition-colors hover:bg-rose-300"
            >
              <div className={`w-6 h-6 bg-rose-600 rounded-full shadow-md transition-transform duration-300 ${billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}>Anual</span>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
                2 Meses Grátis
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : (plan.annualPrice / 12);
            const displayPrice = price.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

            return (
              <div 
                key={plan.id}
                className={`relative p-8 rounded-[2rem] flex flex-col transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-white shadow-2xl shadow-rose-200 border-2 border-rose-400 scale-105 z-10' 
                    : 'bg-white border border-rose-100 hover:shadow-xl'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Mais Escolhido
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-slate-500 text-lg font-medium">R$</span>
                    <span className="text-5xl font-bold text-slate-900 tracking-tight">{displayPrice}</span>
                    <span className="text-slate-500 font-medium">/mês</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    {billingCycle === 'annual' ? `Cobrado anualmente (R$ ${plan.annualPrice}/ano)` : 'Por profissional'}
                  </p>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 bg-rose-100 rounded-full">
                        <Check className="w-3.5 h-3.5 text-rose-600" />
                      </div>
                      <span className="text-sm text-slate-600 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => onSelectPlan(plan, billingCycle)}
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    plan.isPopular 
                      ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-200' 
                      : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                  }`}
                >
                  {plan.hasTrial ? 'Testar Grátis 7 Dias' : 'Assinar Agora'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
