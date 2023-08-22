import '@/styles/global.scss';
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import Script from 'next/script';

import Navbar from '@/components/Navbar';

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: '600' 
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Navbar />
        {children}
        <Script src='https://kit.fontawesome.com/0c08249450.js' crossOrigin='anonymous'></Script>
      </body>
    </html>
  )
}
