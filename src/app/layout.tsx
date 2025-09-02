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
  description: "Making it easy to learn Qur'an and Arabic since 2014",
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
