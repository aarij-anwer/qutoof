import { type Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/next';

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Qutoof Academy',
    default: 'Qutoof Academy',
  },
  description: 'Bringing the fruits of the Qur&apos;an closer.',
  openGraph: {
    title: 'Qutoof Academy',
    description: 'Bringing the fruits of the Qur&apos;an closer.',
    url: 'https://www.qutoofacademy.com',
    siteName: 'Qutoof Academy',
    images: [
      {
        url: '/qutoof logo.png',
        width: 640,
        height: 640,
        alt: 'Qutoof Academy banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
