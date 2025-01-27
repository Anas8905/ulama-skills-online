import './globals.css';
import { Noto_Nastaliq_Urdu } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

// export const metadata = {
//   title: 'My Website',
//   description: 'A website built with Next.js App Router',
// };


const urduFont = Noto_Nastaliq_Urdu({
  weight: ['400'],
  subsets: ['arabic'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urduFont.className} font-notoNastaliqUrdu sans-serif font-serif`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
