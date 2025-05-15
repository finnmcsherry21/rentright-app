import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {/* Email */}
        <input
         type="email"             // ✅ allows normal text
         placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="..."
        />


        {/* Password */}
        <input
          type="password"          // ✅ hides text as dots
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="..."
/>


        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded font-semibold transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
