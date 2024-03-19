import Header from '@/components/Header';
import './global.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" >
        <Header />
        {children}
      </body>
    </html>
  );
}
