
import React from 'react';
import { Calendar, DollarSign, Users, UserPlus, BarChart, Package } from 'lucide-react';
import { Plan } from './types';

export const PLANS: Plan[] = [
  {
    id: 'essencial',
    name: 'Plano Essencial',
    monthlyPrice: 19,
    annualPrice: 190, // 2 months free (19 * 10)
    description: 'Indicado para quem está começando e precisa do básico para organizar o dia a dia.',
    features: ['Agenda Inteligente', 'Cadastro de Clientes', 'Histórico Básico', 'Suporte via E-mail'],
    hasTrial: true
  },
  {
    id: 'basico',
    name: 'Plano Básico',
    monthlyPrice: 25,
    annualPrice: 250, // 2 months free (25 * 10)
    description: 'Ideal para profissionais que desejam crescer e ter mais controle do negócio.',
    features: [
      'Tudo do Essencial',
      'Relatórios de Faturamento',
      'Gestão Financeira',
      'Controle de Estoque',
      'Suporte via WhatsApp'
    ],
    hasTrial: true,
    isPopular: true
  },
  {
    id: 'avancado',
    name: 'Plano Avançado',
    monthlyPrice: 50,
    annualPrice: 500, // 2 months free (50 * 10)
    description: 'Voltado para equipes e clínicas que precisam de recursos completos e suporte prioritário.',
    features: [
      'Tudo do Básico',
      'Multiusuário Ilimitado',
      'Relatórios Avançados',
      'Backup em Nuvem',
      'Treinamento VIP'
    ],
    hasTrial: false
  }
];

export const FEATURES = [
  {
    title: 'Agenda Inteligente',
    description: 'Agende horários com rapidez, evite conflitos e mantenha sua rotina organizada com facilidade.',
    icon: <Calendar className="w-8 h-8 text-rose-500" />
  },
  {
    title: 'Gestão Financeira',
    description: 'Acompanhe receitas, despesas e relatórios em tempo real. Controle total das suas finanças.',
    icon: <DollarSign className="w-8 h-8 text-rose-500" />
  },
  {
    title: 'Cadastro de Clientes',
    description: 'Armazene histórico e preferências para um atendimento personalizado e de alto nível.',
    icon: <Users className="w-8 h-8 text-rose-500" />
  },
  {
    title: 'Multiusuário',
    description: 'Ideal para equipes. Cada profissional com sua própria conta e agenda individual.',
    icon: <UserPlus className="w-8 h-8 text-rose-500" />
  },
  {
    title: 'Relatórios Completos',
    description: 'Dados detalhados de atendimentos, faturamento e desempenho real da sua clínica.',
    icon: <BarChart className="w-8 h-8 text-rose-500" />
  },
  {
    title: 'Controle de Estoque',
    description: 'Gestão de produtos e insumos simplificada para nunca faltar o que você precisa.',
    icon: <Package className="w-8 h-8 text-rose-500" />
  }
];
