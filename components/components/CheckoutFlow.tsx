
import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CreditCard, Landmark, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Plan, BillingCycle, RegistrationData, PaymentMethod } from '../types';

interface CheckoutFlowProps {
  plan: Plan;
  cycle: BillingCycle;
  onClose: () => void;
}

type Step = 'registration' | 'payment_method' | 'processing' | 'success';

const CheckoutFlow: React.FC<CheckoutFlowProps> = ({ plan, cycle, onClose }) => {
  const [step, setStep] = useState<Step>('registration');
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    email: '',
    businessName: '',
    phone: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit_card');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'registration') setStep('payment_method');
    else if (step === 'payment_method') {
      setStep('processing');
      // Simulate API call
      setTimeout(() => setStep('success'), 2500);
    }
  };

  const total = cycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="p-8 border-b border-slate-100 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Finalizar Assinatura</h2>
            <p className="text-slate-500 text-sm mt-1">
              {plan.name} • {cycle === 'monthly' ? 'Mensal' : 'Anual'} (R$ {total.toFixed(2)})
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          {step === 'registration' && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Seu Nome</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Maria Silva"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Nome do seu Negócio</label>
                <input
                  required
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Ex: Studio Beauty Care"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">E-mail</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@exemplo.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Senha</label>
                <input
                  required
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-2xl font-bold text-lg mt-6 flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-200"
              >
                Próximo Passo
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}

          {step === 'payment_method' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <button 
                  onClick={() => setPaymentMethod('credit_card')}
                  className={`w-full p-6 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                    paymentMethod === 'credit_card' ? 'border-rose-400 bg-rose-50' : 'border-slate-100 hover:border-rose-200'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${paymentMethod === 'credit_card' ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900">Cartão de Crédito</p>
                    <p className="text-xs text-slate-500">Parcelamento em até 12x disponível</p>
                  </div>
                </button>

                <button 
                  onClick={() => setPaymentMethod('pix')}
                  className={`w-full p-6 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                    paymentMethod === 'pix' ? 'border-rose-400 bg-rose-50' : 'border-slate-100 hover:border-rose-200'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${paymentMethod === 'pix' ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900">PIX (Aprovação Imediata)</p>
                    <p className="text-xs text-slate-500">Pague com o código ou QR Code</p>
                  </div>
                </button>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setStep('registration')}
                  className="flex-1 border-2 border-slate-100 text-slate-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Voltar
                </button>
                <button 
                  onClick={handleNext}
                  className="flex-[2] bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-200"
                >
                  Finalizar Pagamento
                  <ShieldCheck className="w-5 h-5" />
                </button>
              </div>
              <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Pagamento 100% seguro e criptografado
              </p>
            </div>
          )}

          {step === 'processing' && (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 border-4 border-rose-100 border-t-rose-500 rounded-full animate-spin mb-6"></div>
              <h3 className="text-xl font-bold text-slate-900">Processando sua assinatura...</h3>
              <p className="text-slate-500 mt-2">Isso levará apenas alguns segundos.</p>
            </div>
          )}

          {step === 'success' && (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="p-4 bg-emerald-100 rounded-full mb-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Parabéns, {formData.name.split(' ')[0]}!</h3>
              <p className="text-slate-600 mt-2 max-w-xs mx-auto">
                Sua conta no Time Care foi criada com sucesso. Estamos preparando seu acesso.
              </p>
              
              <button 
                onClick={() => window.location.reload()}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg mt-8 transition-all hover:bg-slate-800"
              >
                Acessar Plataforma Agora
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutFlow;
