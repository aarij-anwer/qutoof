'use client';

import { useState } from 'react';
import { ArrowTurnDownRightIcon } from '@heroicons/react/20/solid';
import { ClientButton } from './ClientButton';
import Avatar from './Avatar';
import SubscribeModal from './SubscribeModal';
import { useRouter } from 'next/navigation';

type Tier = {
  name: string;
  img: string;
  id: string;
  paymentHref: string;
  paypalButtonId: string;
  price: { monthly: string; annually: string };
  description: string;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: 'Sh Muhammad Helmi',
    img: '/people/muhammad.png',
    id: 'tier-arabic-1',
    paymentHref: 'https://buy.stripe.com/eVa4iL9PI2gm3Mk3cl',
    paypalButtonId: 'PFY8QHFJ634VA',
    price: { monthly: '$19', annually: '$15' },
    description: 'Arabic instruction specializes in',
    features: [
      'Modern Standard Arabic',
      'Conversational skills',
      'Grammar fundamentals',
      'Cultural context',
    ],
  },
  {
    name: 'Sh Ibrahim Helmi',
    img: '/people/ibrahim.png',
    id: 'tier-arabic-2',
    paymentHref: 'https://www.paypal.com/ncp/payment/BV9VA3RB6LDHA',
    paypalButtonId: 'CY3NYXUAT46K4',
    price: { monthly: '$49', annually: '$39' },
    description: 'Arabic instruction specializes in',
    features: [
      'Quranic Arabic',
      'Advanced grammar',
      'Classical texts',
      'Linguistic depth',
    ],
  },
  {
    name: 'Ust Aisha Talat',
    img: '/people/woman.png',
    id: 'tier-arabic-3',
    paymentHref: 'https://www.paypal.com/ncp/payment/7FAE6DYP62XH8',
    paypalButtonId: 'T564DRWAE7T5G',
    price: { monthly: '$29', annually: '$25' },
    description: 'Arabic instruction specializes in',
    features: [
      'Beginner-friendly approach',
      'Interactive learning',
      'Daily vocabulary',
      'Language immersion',
    ],
  },
];

interface SubscribeModalState {
  isOpen: boolean;
  instructorName: string;
  paypalButtonId: string;
}

export default function ArabicClasses() {
  const router = useRouter();
  const [subscribeModal, setSubscribeModal] = useState<SubscribeModalState>({
    isOpen: false,
    instructorName: '',
    paypalButtonId: '',
  });

  const handleSubscribe = (tier: Tier) => {
    setSubscribeModal({
      isOpen: true,
      instructorName: tier.name,
      paypalButtonId: tier.paypalButtonId,
    });
  };

  const handleCloseSubscribeModal = () => {
    setSubscribeModal({
      isOpen: false,
      instructorName: '',
      paypalButtonId: '',
    });
  };

  return (
    <div className="bg-white pt-10 pb-20 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance dark:text-white">
            Learn Arabic with us
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
          Choose from our experienced Arabic instructors and start your learning
          journey today.
        </p>

        <div className="mt-20 flex justify-center">
          <div className="relative isolate -mt-16 grid max-w-6xl grid-cols-1 place-content-center gap-x-12 gap-y-4 sm:mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="pt-10 text-center lg:px-8 lg:pt-0 xl:px-10"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <Avatar src={tier.img} width={128} height={128} roundedFull />
                  <h3
                    id={tier.id}
                    className="text-2xl font-semibold text-gray-900 dark:text-white"
                  >
                    {tier.name}
                  </h3>
                </div>

                <div className="mt-5 flex flex-col justify-center gap-2">
                  <ClientButton
                    aria-describedby={tier.id}
                    variant="solid"
                    color="orange"
                    onClick={() => handleSubscribe(tier)}
                  >
                    Subscribe
                  </ClientButton>
                  <ClientButton
                    aria-describedby={tier.id}
                    variant="outline"
                    color="slate"
                    onClick={() => router.push(tier.paymentHref)}
                  >
                    One-time Payment
                  </ClientButton>
                </div>

                <p className="mt-10 text-left text-sm/6 font-semibold text-gray-900 dark:text-white">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm/6 text-gray-600 dark:text-gray-300"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <ArrowTurnDownRightIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-yellow-600 dark:text-yellow-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <SubscribeModal
          isOpen={subscribeModal.isOpen}
          onClose={handleCloseSubscribeModal}
          instructorName={subscribeModal.instructorName}
          paypalButtonId={subscribeModal.paypalButtonId}
        />
      </div>
    </div>
  );
}
