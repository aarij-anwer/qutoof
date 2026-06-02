import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export function Hero() {
  return (
    <Container className="px-4 pt-10 pb-20 text-center sm:py-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Bringing the fruits of the{' '}
        <span className="relative whitespace-nowrap text-yellow-600">
          <span className="relative">Qur&apos;an</span>
        </span>{' '}
        closer.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        <span className="mx-2">قُطُوفُهَا دَانِيَةٌ</span>
        <span>Its fruits are hanging low and close; easy to pluck.</span>
        <span className="flex justify-center text-base">(69:23)</span>
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/free" variant="solid">
          Try a Qur&apos;an class for free!
        </Button>
        {/* <Button href="/tafsir" variant="outline">
          Join weekly Tafsir class
        </Button> */}
      </div>
    </Container>
  );
}
