'use client'

import './global.css'
import localFont from 'next/font/local'
import HeaderTop from '@/components/HeaderTop';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const iranSans = localFont({ src:'../assets/fonts/woff/IRANSansWeb(FaNum)_Light.woff' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl"  >
        <Provider store={store}>
          <HeaderTop />
          
          {children}
        </Provider>
        
      </body>
    </html>
  );
}
