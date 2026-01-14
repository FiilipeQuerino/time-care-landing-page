
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const GeminiAIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateAIAssistance = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setResponse('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Você é um consultor especialista em marketing e gestão de clínicas de estética no Brasil. 
        O usuário quer ajuda com: "${prompt}". 
        Responda de forma profissional, elegante e prática, focada em clínicas de alto padrão (cores rosa e bege). 
        Dê dicas acionáveis e curtas.`,
      });

      setResponse(result.text || "Desculpe, não consegui processar seu pedido no momento.");
    } catch (error) {
      console.error("Gemini Error:", error);
      setResponse("Erro ao conectar com a IA. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-rose-100 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-rose-900">Assistente EstéticaPro AI</h3>
          <p className="text-sm text-stone-500 uppercase tracking-wider font-bold">Potencializado pelo Gemini 3</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">O que você deseja criar hoje?</label>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Crie um script de venda para Botox ou Dicas de posts para Instagram sobre Peeling"
              className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200 transition"
            />
            <button 
              onClick={generateAIAssistance}
              disabled={isLoading}
              className="bg-rose-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-rose-800 disabled:opacity-50 transition"
            >
              {isLoading ? 'Gerando...' : 'Gerar'}
            </button>
          </div>
        </div>

        {response && (
          <div className="mt-8 p-6 bg-rose-50 rounded-2xl border border-rose-100">
            <h4 className="font-bold text-rose-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-rose-500 rounded-full"></span> Sugestão da IA:
            </h4>
            <div className="text-stone-700 whitespace-pre-wrap leading-relaxed text-sm md:text-base italic">
              {response}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {['Roteiro de Vendas', 'Campanha WhatsApp', 'Sugestão de Preços', 'Dicas de Biossegurança'].map((tag) => (
            <button 
              key={tag}
              onClick={() => setPrompt(tag)}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-600 hover:bg-rose-100 hover:text-rose-600 transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
