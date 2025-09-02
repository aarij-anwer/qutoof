import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import Team from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CallToAction />
        <Team />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </>
  );
}
