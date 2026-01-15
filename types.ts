
export type BillingCycle = 'monthly' | 'annual';

export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  hasTrial: boolean;
  isPopular?: boolean;
}

export interface RegistrationData {
  name: string;
  email: string;
  password?: string;
  businessName: string;
  phone: string;
}

export type PaymentMethod = 'credit_card' | 'pix';
