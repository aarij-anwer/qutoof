import ContentSection from '@/components/ContentSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies',
  description:
    'Read Qutoof Academy policies including terms of service, privacy policy, and educational guidelines. Learn about our commitment to quality Islamic education.',
  alternates: {
    canonical: 'https://www.qutoofacademy.com/policies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Example() {
  return (
    <>
      <Header />
      <ContentSection />
      <Footer />
    </>
  );
}
