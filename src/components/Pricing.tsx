import { CheckIcon } from '@heroicons/react/20/solid';
import { TIERS as tiers } from '@/app/constants';
import { Button } from './Button';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-white px-4 pt-10 pb-20 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#FFF204] to-[#D18700] opacity-30 dark:opacity-20"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
        Choose from two options tailored to provide the right amount of
        high-quality 1:1 hours.{' '}
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative bg-gray-900 shadow-2xl dark:bg-gray-800 dark:shadow-none'
                : 'bg-white/60 sm:mx-8 lg:mx-0 dark:bg-white/2.5',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 dark:ring-white/10'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured
                  ? 'text-yellow-400'
                  : 'text-yellow-600 dark:text-indigo-400',
                'text-base/7 font-semibold'
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured
                    ? 'text-white'
                    : 'text-gray-900 dark:text-white',
                  'text-5xl font-semibold tracking-tight'
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured
                    ? 'text-gray-400'
                    : 'text-gray-500 dark:text-gray-400',
                  'text-base'
                )}
              >
                /month
              </span>
            </p>
            <p
              className={classNames(
                tier.featured
                  ? 'text-gray-300'
                  : 'text-gray-600 dark:text-gray-300',
                'mt-6 text-base/7'
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured
                  ? 'text-gray-300'
                  : 'text-gray-600 dark:text-gray-300',
                'mt-8 space-y-3 text-sm/6 sm:mt-10'
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={
                      'h-6 w-5 flex-none text-yellow-600 dark:text-yellow-400'
                    }
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {tier.featured && (
              <div className="mt-8 flex justify-center">
                <Button
                  variant="solid"
                  color="orange"
                  className="flex items-center justify-center"
                  href={tier.href}
                >
                  Sign up today!
                </Button>
              </div>
            )}
            {!tier.featured && (
              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  color="slate"
                  className="flex items-center justify-center"
                  href={tier.href}
                >
                  Get started today!
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 gap-1 text-center">
        By signing up, you are agreeing to our{' '}
        <a
          href="/policies"
          target="_blank"
          className="underline hover:no-underline"
        >
          policies
        </a>
        .
      </div>
    </div>
  );
}
