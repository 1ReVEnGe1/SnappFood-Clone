'use client'

import './global.css'
import localFont from 'next/font/local'
import HeaderTop from '@/components/HeaderTop';
import Layout from '@/components/Layout';

const iranSans = localFont({ src: '../assets/fonts/woff/IRANSansWeb(FaNum)_Light.woff' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" className={iranSans.className} >
        <Layout>

          
          {children}

        </Layout>
      </body>
    </html>
  );
}
