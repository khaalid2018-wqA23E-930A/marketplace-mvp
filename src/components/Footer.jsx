export default function Footer() {
    return (
        <footer className="mt-16 border-t">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500 flex items-center justify-between">
                <p>© {new Date().getFullYear()} AminTrends. All rights reserved.</p>
                <div className="flex gap-4">
                    <a className="hover:underline" href="#">About</a>
                    <a className="hover:underline" href="#">Contact</a>
                    <a className="hover:underline" href="#">Policy</a>
                </div>
            </div>
        </footer>
    );
}
