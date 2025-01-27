import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

// export const metadata = {
//   title: 'My Website',
//   description: 'A website built with Next.js App Router',
// };

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
      <body className={`font-notoNastaliqUrdu sans-serif font-serif`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
