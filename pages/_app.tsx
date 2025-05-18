import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${outfit.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp; 