import '@/styles/globals.scss';
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'

//--------------------- settings for fontawesome-------------------
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
//-----------------------------------------------------------------

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
        {children}
      </body>
    </html>
  )
}
