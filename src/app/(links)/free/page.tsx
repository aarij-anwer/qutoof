import { Footer } from '@/components/Footer';
import FreeClasses from '@/components/FreeClasses';
import { Header } from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Quran Classes',
  description:
    'Join our free Quran classes at Qutoof Academy. Experience quality Islamic education with no cost. Learn from expert instructors and deepen your understanding of the Quran.',
  keywords: [
    'free Quran classes',
    'free Islamic education',
    'free Quran learning',
    'complimentary Quran courses',
    'free online Quran classes',
  ],
  alternates: {
    canonical: 'https://www.qutoofacademy.com/free',
  },
  openGraph: {
    title: 'Free Quran Classes - Qutoof Academy',
    description:
      'Join our free Quran classes. Experience quality Islamic education with no cost at Qutoof Academy.',
    url: 'https://www.qutoofacademy.com/free',
  },
};

export default function Free() {
  return (
    <>
      <Header />
      <FreeClasses />
      <Footer />
    </>
  );
}
