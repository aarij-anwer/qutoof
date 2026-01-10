import { type Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/next';

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.qutoofacademy.com'),
  title: {
    template: '%s - Qutoof Academy',
    default: 'Qutoof Academy - Learn Quran Online with Expert Instructors',
  },
  description:
    'Qutoof Academy offers expert Quran instruction and Islamic education online. Join our live classes to deepen your understanding and bring the fruits of the Quran closer to your daily life.',
  keywords: [
    'Quran classes',
    'online Quran learning',
    'Islamic education',
    'Quran academy',
    'learn Quran online',
    'Quranic studies',
    'Quran tafsir',
    'Islamic learning',
    'Quran instruction',
  ],
  authors: [{ name: 'Qutoof Academy' }],
  creator: 'Qutoof Academy',
  publisher: 'Qutoof Academy',
  alternates: {
    canonical: 'https://www.qutoofacademy.com',
  },
  openGraph: {
    title: 'Qutoof Academy - Learn Quran Online with Expert Instructors',
    description:
      'Join Qutoof Academy for expert Quran instruction and Islamic education. Live online classes to deepen your understanding and bring the fruits of the Quran closer.',
    url: 'https://www.qutoofacademy.com',
    siteName: 'Qutoof Academy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Qutoof Academy - Online Quran Learning Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qutoof Academy - Learn Quran Online',
    description:
      'Expert Quran instruction and Islamic education online. Join our live classes to deepen your understanding of the Quran.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Qutoof Academy',
    description:
      'Qutoof Academy offers expert Quran instruction and Islamic education online.',
    url: 'https://www.qutoofacademy.com',
    logo: 'https://www.qutoofacademy.com/logo.png',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
    offers: {
      '@type': 'Offer',
      category: 'Educational Services',
    },
  };

  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
