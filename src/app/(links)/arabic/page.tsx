import ArabicClasses from '@/components/ArabicClasses';
import { Footer } from '@/components/Footer';
import FreeClasses from '@/components/FreeClasses';
import { Header } from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arabic Classes',
  description:
    'Bespoke Arabic classes at Qutoof Academy. Learn Arabic with expert instructors in personalized sessions.',
  keywords: [
    'Arabic classes',
    'Arabic learning',
    'personalized Arabic instruction',
    'expert Arabic teachers',
    'online Arabic classes',
  ],
  alternates: {
    canonical: 'https://www.qutoofacademy.com/arabic',
  },
  openGraph: {
    title: 'Arabic Classes - Qutoof Academy',
    description:
      'Bespoke Arabic classes at Qutoof Academy. Learn Arabic with expert instructors in personalized sessions.',
    url: 'https://www.qutoofacademy.com/arabic',
  },
};

export default function Arabic() {
  return (
    <>
      <Header />
      <ArabicClasses />
      <Footer />
    </>
  );
}
