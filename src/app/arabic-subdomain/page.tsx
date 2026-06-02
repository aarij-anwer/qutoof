import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arabic | Qutoof Academy',
  description:
    'Arabic and Islamic Studies classes at Qutoof Academy. Learn Arabic with expert instructors in personalized sessions.',
  alternates: {
    canonical: 'https://arabic.qutoofacademy.com',
  },
  openGraph: {
    title: 'Arabic | Qutoof Academy',
    description:
      'Arabic and Islamic Studies classes at Qutoof Academy. Learn Arabic with expert instructors in personalized sessions.',
    url: 'https://arabic.qutoofacademy.com',
  },
};

export default function ArabicSubdomainHome() {
  return (
    <>
      <Header />
      <main>
        <Container className="px-4 pt-10 pb-20 text-center sm:py-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Understand the Shari&apos;ah and the{' '}
            <span className="relative whitespace-nowrap text-yellow-600">
              <span className="relative">Qur&apos;an</span>
            </span>{' '}
            deeper.
          </h1>
          <h2 className="mt-6 text-lg text-slate-700">
            Free resources for all.
          </h2>
          <div className="mt-6 flex justify-center gap-x-6">
            <Button
              href="https://arabic.qutoofacademy.com/classes"
              variant="solid"
            >
              Access recorded classes
            </Button>
            <Button
              href="https://ustadhmuhammadhelmi.wordpress.com/"
              variant="outline"
              target="_blank"
            >
              Join weekly Tafsir class
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
