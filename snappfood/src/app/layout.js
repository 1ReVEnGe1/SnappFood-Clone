import './global.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" >{children}</body>
    </html>
  );
}
