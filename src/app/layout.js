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
      <body className={`sans-serif md:font-notoNastaliqUrdu`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
