import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const featured = [
    {
        id: 1,
        title: 'Minimal Tee — Black',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
        description: 'Classic everyday tee. Soft cotton, unisex sizing.',
    },
    {
        id: 2,
        title: 'Signature Perfume',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
        description: 'Long-lasting fragrance with warm notes.',
    },
    {
        id: 3,
        title: 'Elegant Watch — Gold',
        price: 89.0,
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
        description: 'Stainless steel case, water resistant.',
    },
];

export default function Home() {
    return (
        <>
            <Head>
                <title>AminTrends — Marketplace</title>
                <meta name="description" content="Buy & sell items with our community." />
            </Head>

            <Navbar />

            {/* HERO */}
            <section className="bg-gradient-to-b from-white to-blue-50">
                <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            Welcome to <span className="text-blue-600">AminTrends</span>
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Buy and sell items with our community. Launch your first listing in minutes.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a
                                href="/CreateListing"
                                className="rounded-md px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700"
                            >
                                Sell an Item
                            </a>
                            <a
                                href="/ProductList"
                                className="rounded-md px-4 py-2 border font-medium hover:bg-white"
                            >
                                Browse Products
                            </a>
                        </div>
                    </div>

                    <div className="aspect-video rounded-xl border bg-white/60 backdrop-blur-sm overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop"
                            alt="Marketplace hero"
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>

            {/* FEATURED */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <div className="flex items-end justify-between">
                    <h2 className="text-2xl font-bold">Featured Products</h2>
                    <a href="/ProductList" className="text-sm text-blue-600 hover:underline">
                        View all →
                    </a>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
