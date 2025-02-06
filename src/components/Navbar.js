'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference for the sidebar

  // Close the sidebar if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close the menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold whitespace-nowrap">
          <Link href="/">Ulama Skills Online</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:space-x-6 md:space-x-reverse tracking-wider font-bold w-full" dir="rtl">
          <NavItem href="/" label="ہوم پیج" active={pathname === '/'} />
          <NavItem href="/about" label="تعارف" active={pathname === '/about'} />
          <NavItem href="/courses" label="کورسز" active={pathname === '/courses'} />
          <NavItem href="/course-form" label="رجسٹریشن فارم" active={pathname === '/course-form'} />
          <NavItem href="/submit" label="ممبرشپ فارم" active={pathname === '/submit'} />
        </ul>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        ref={sidebarRef} // Assign reference to the sidebar
        className={`fixed top-0 right-0 h-full w-2/3 bg-blue-600 text-white shadow-lg transform transition-transform duration-300 z-30 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 left-4 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Links */}
        <ul className="flex flex-col text-center mt-16 space-y-6 w-full font-bold tracking-wider" dir="rtl">
          <NavItem href="/" label="ہوم پیج" active={pathname === '/'} />
          <NavItem href="/about" label="تعارف" active={pathname === '/about'} />
          <NavItem href="/courses" label="کورسز" active={pathname === '/courses'} />
          <NavItem href="/course-form" label="رجسٹریشن فارم" active={pathname === '/course-form'} />
          <NavItem href="/submit" label="ممبرشپ فارم" active={pathname === '/submit'} />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ href, label, active }) {
  return (
    <li className="w-full md:w-auto">
      <Link
        href={href}
        className={`w-[95%] md:w-full mx-auto px-4 py-2 md:pb-3 md:pt-1 text-center rounded-lg transition-colors block ${
          active
            ? 'bg-white text-blue-600'
            : 'hover:bg-white hover:text-blue-600'
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
