export default function Checkout() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold mb-4">Checkout 💳</h1>
            <p className="mb-6 text-gray-700">Complete your purchase securely.</p>

            <form className="space-y-4 max-w-md w-full">
                <input type="text" placeholder="Full Name" className="border p-2 w-full rounded" />
                <input type="email" placeholder="Email Address" className="border p-2 w-full rounded" />
                <input type="text" placeholder="Card Number (demo)" className="border p-2 w-full rounded" />
                <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="MM/YY" className="border p-2 rounded" />
                    <input type="text" placeholder="CVC" className="border p-2 rounded" />
                </div>
                <button type="button" className="bg-blue-600 text-white p-3 w-full rounded hover:bg-blue-700">
                    Pay Now (demo)
                </button>
            </form>
        </div>
    );
}
