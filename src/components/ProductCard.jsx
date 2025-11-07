export default function ProductCard({ product }) {
    return (
        <article className="rounded-xl border bg-white overflow-hidden">
            <div className="aspect-video overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h3 className="font-semibold line-clamp-1">{product.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                    <span className="font-bold">${product.price}</span>
                    <a
                        href="/Checkout"
                        className="text-sm rounded-md px-3 py-1.5 bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Buy Now
                    </a>
                </div>
            </div>
        </article>
    );
}
