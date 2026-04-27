import React from 'react';
import { Home, Zap, ShoppingBag, Car, CreditCard, Wallet, Banknote } from 'lucide-react';

export const categories = [
  { name: 'Vivienda', amount: 1200, icon: <Home size={18} />, color: '#6366f1' },
  { name: 'Suministros', amount: 150, icon: <Zap size={18} />, color: '#fbbf24' },
  { name: 'Alimentación', amount: 450, icon: <ShoppingBag size={18} />, color: '#10b981' },
  { name: 'Transporte', amount: 200, icon: <Car size={18} />, color: '#3b82f6' },
];

export const properties = [
  { name: 'CALERA 43', expenses: 12 },
  { name: 'MALAGA', expenses: 5 },
  { name: 'LUCENA', expenses: 3 },
  { name: 'MIJAS', expenses: 8 },
  { name: 'CALERA 14', expenses: 4 },
  { name: 'TETUÁN 5', expenses: 6 },
  { name: 'SCENI', expenses: 2 },
];

export const cards = [
  { id: 'card-1', name: 'Visa Oro', total: 1250.40, icon: <CreditCard size={18} color="#fbbf24" /> },
  { id: 'card-2', name: 'Mastercard', total: 840.20, icon: <CreditCard size={18} color="#94a3b8" /> },
  { id: 'cash', name: 'Efectivo', total: 120.00, icon: <Wallet size={18} color="#10b981" /> },
];

export const recentExpenses = [
  { id: '1', title: 'Luz - Calera 43', amount: 85.20, property: 'Calera 43', date: 'Hoy', status: 'pending', isRecurring: true, paymentMethodId: 'card-1', receiptUrl: 'http://localhost:3001/uploads/demo-recibo.pdf' },
  { id: '2', title: 'Hipoteca - Málaga', amount: 850.00, property: 'Málaga', date: 'Ayer', status: 'paid', isRecurring: true, paymentMethodId: 'card-2', receiptUrl: null },
  { id: '3', title: 'Reparación Motor', amount: 450.00, property: 'Sceni', date: '22 Abr', status: 'paid', paymentMethodId: 'card-1', receiptUrl: 'http://localhost:3001/uploads/demo-taller.jpg' },
];
