import Navbar from '../components/Navbar';

export default function RentPage() {
  const rentAmount = 1500;
  const dueDate = new Date('2025-06-01');
  const today = new Date();
  const isOverdue = today > dueDate;

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded shadow">
        <h1 className="text-3xl font-bold mb-6 text-purple-800">Rent Summary</h1>

        <div className="text-lg mb-4">
          <span className="font-semibold">Amount Due:</span>{' '}
          <span className="text-green-600">${rentAmount.toFixed(2)}</span>
        </div>

        <div className="text-lg mb-4">
          <span className="font-semibold">Due Date:</span>{' '}
          <span className={isOverdue ? 'text-red-600' : 'text-blue-600'}>
            {dueDate.toLocaleDateString()}
          </span>
        </div>

        {isOverdue && (
          <div className="text-red-600 font-semibold">
            ⚠️ Your rent is overdue!
          </div>
        )}
      </div>
    </>
  );
}
