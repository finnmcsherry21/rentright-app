import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold tracking-wide hover:text-white/90 transition cursor-pointer">
            RentRight
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-lg font-medium">
          <Link href="/login">
            <span className="hover:font-bold hover:text-white/80 transition cursor-pointer">
              Login
            </span>
          </Link>
          <Link href="/landlord">
            <span className="hover:font-bold hover:text-white/80 transition cursor-pointer">
              Landlord
            </span>
          </Link>
          <Link href="/rent">
            <span className="hover:font-bold hover:text-white/80 transition cursor-pointer">
              Rent
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
