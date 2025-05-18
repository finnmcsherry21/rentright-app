import { useEffect, useState } from 'react';
import { db, auth } from '../src/firebase';
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  Timestamp,
  DocumentData,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import useAuthProtection from '../src/hooks/useAuthProtection';

interface Message extends DocumentData {
  text: string;
  sender: string;
  timestamp: Timestamp;
}

export default function LandlordChat() {
  useAuthProtection();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
    });

    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribeMessages = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => doc.data() as Message);
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
            <div key={index} className="mb-2 text-black">
              <div>
              <strong>{msg.sender}:</strong> {msg.text}
             </div>
              <div className="text-xs text-gray-500">
               {msg.timestamp?.toDate().toLocaleString()}
              </div>
            </div>

          ))}
        </div>

        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            className="flex-1 border p-2 rounded text-black" // fixes invisible typing
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
