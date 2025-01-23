'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Ulama Skills Online</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 space-x-reverse" dir='rtl'>
          <NavItem href="/" label="ہوم پیج" active={pathname === '/'} />
          <NavItem href="/about" label="تعارف" active={pathname === '/about'} />
          <NavItem href="/courses" label="کورسز" active={pathname === '/courses'} />
          <NavItem href="/submit" label="شامل ہوں" active={pathname === '/submit'} />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ href, label, active }) {
  return (
    <li>
      <Link
        href={href}
        className={`px-4 pt-0 pb-1 rounded-lg transition-colors ${
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
