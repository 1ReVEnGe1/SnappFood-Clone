import Header from '@/components/Header';
import './global.css'
import localFont from 'next/font/local'
import HeaderTop from '@/components/HeaderTop';

export const iranSans = localFont({ src:'../assets/fonts/woff/IRANSansWeb(FaNum)_Light.woff' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" className={iranSans.className} >
        <HeaderTop />
        <Header />
        {children}
      </body>
    </html>
  );
}
