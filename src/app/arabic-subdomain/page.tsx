import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ARABIC_SITE_URL } from '@/app/constants';
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
        <Container className="mx-10 mb-32 flex flex-col gap-6 text-center">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Understand the Shari&apos;ah and the{' '}
            <span className="relative whitespace-nowrap text-yellow-600">
              <span className="relative">Qur&apos;an</span>
            </span>{' '}
            deeper.
          </h1>
          <h2 className="text-lg text-slate-700">Free resources for all.</h2>
          <div className="mx-auto flex flex-col justify-center gap-2 sm:flex-row">
            <Button
              href={`${ARABIC_SITE_URL}/classes`}
              variant="solid"
              className="px-6 py-4 text-base sm:px-8 sm:text-lg"
            >
              Access recorded classes
            </Button>
            <Button
              href="https://ustadhmuhammadhelmi.wordpress.com/"
              variant="outline"
              target="_blank"
              className="px-6 py-4 text-base sm:px-8 sm:text-lg"
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
