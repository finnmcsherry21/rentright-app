import { useEffect, useState } from 'react';
import { db, auth } from '../src/firebase';
import { collection, addDoc, query, onSnapshot, orderBy, Timestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import useAuthProtection from '../src/hooks/useAuthProtection';

export default function LandlordChat() {
  useAuthProtection();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
    });

    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribeMessages = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => doc.data());
      setMessages(msgs);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeMessages();
    };
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !message.trim()) return;

    await addDoc(collection(db, 'messages'), {
      text: message,
      sender: user.email,
      timestamp: Timestamp.now(),
    });

    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4 mt-10">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">Landlord Chat</h1>

        <div className="border h-80 overflow-y-scroll mb-4 p-2 bg-white rounded shadow">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            className="flex-1 border p-2 rounded"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Send</button>
        </form>
      </div>
    </>
  );
}
