export default function Navbar() {
    return (
        <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
            <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
                <a href="/" className="font-extrabold text-xl tracking-tight">AminTrends</a>

                <div className="hidden sm:flex items-center gap-6 text-sm">
                    <a href="/ProductList" className="hover:text-blue-600">Products</a>
                    <a href="/CreateListing" className="hover:text-blue-600">Sell Item</a>
                    <a href="/Profile" className="hover:text-blue-600">Profile</a>
                </div>

                <a
                    href="/CreateListing"
                    className="rounded-md px-3 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
                >
                    Start Selling
                </a>
            </nav>
        </header>
    );
}
