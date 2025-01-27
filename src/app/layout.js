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
      <head>
        {/* Preload the font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-notoNastaliqUrdu ${urduFont.className} sans-serif font-serif`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
