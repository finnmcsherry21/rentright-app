import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Dummy user data (for testing only)
  const dummyUser = {
    email: 'test@example.com',
    password: 'password123',
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === dummyUser.email && password === dummyUser.password) {
      alert('Login successful!');
      router.push('/');
    } else {
      alert('Invalid email or password.');
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      alert('Signup successful! (Simulated)');
      router.push('/');
    } else {
      alert('Please enter an email and password to sign up.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">
      <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">Welcome to RentRight</h1>

        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handleLogin}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 transition py-2 rounded text-lg font-semibold"
          >
            Log In
          </button>
          <button
            onClick={handleSignup}
            className="flex-1 bg-green-600 hover:bg-green-700 transition py-2 rounded text-lg font-semibold"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
