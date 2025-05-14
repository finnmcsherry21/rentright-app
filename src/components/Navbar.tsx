import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <header className="bg-purple-900 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold tracking-wide">🏠 RentRight</h1>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="/landlord" className="hover:text-purple-300 transition">Messages</Link>
          <button onClick={handleLogout} className="hover:text-purple-300 underline transition">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}
