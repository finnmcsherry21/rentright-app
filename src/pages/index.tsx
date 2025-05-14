import Navbar from '../components/Navbar';
import useAuthProtection from '../hooks/useAuthProtection';

export default function Home() {
  useAuthProtection();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center px-6 py-16 space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-center">
          Welcome to <span className="underline decoration-white">RentRight</span>
        </h1>
        <p className="text-lg max-w-xl text-center text-white/90 leading-relaxed">
          Your all-in-one platform for managing rent, staying in touch with your landlord,
          and keeping your payments organized — beautifully.
        </p>
        <p className="text-md max-w-md text-center text-white/80">
          Use the navigation bar above to check messages or review your rent details.
        </p>
      </main>
    </>
  );
}
