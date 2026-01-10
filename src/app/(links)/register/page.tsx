import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Pricing from '@/components/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register for Classes',
  description:
    'Register for Qutoof Academy Quran classes. Choose from flexible pricing plans and start your journey to deeper Quranic understanding with our expert instructors.',
  keywords: [
    'register Quran classes',
    'Quran class enrollment',
    'sign up Quran academy',
    'Quran class registration',
    'Islamic education enrollment',
  ],
  alternates: {
    canonical: 'https://www.qutoofacademy.com/register',
  },
  openGraph: {
    title: 'Register for Classes - Qutoof Academy',
    description:
      'Register for Qutoof Academy Quran classes. Choose from flexible pricing plans and start your journey today.',
    url: 'https://www.qutoofacademy.com/register',
  },
};

export default function Register() {
  return (
    <>
      <Header />
      <Pricing />
      <Footer />
    </>
  );
}
