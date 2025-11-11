import Head from 'next/head';
import { CartProvider } from '../lib/cart';
import '../styles.css'; // optional (we’ll add below)

export default function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Head>
                <title>AminAmir Trends – Marketplace</title>
                <meta name="description" content="Shop fashion, beauty & home essentials." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </CartProvider>
    );
}
