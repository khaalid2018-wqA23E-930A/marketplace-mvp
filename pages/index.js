import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Welcome to My Marketplace</title>
                <meta name="description" content="AmiinAmiirshop - marketplace" />
            </Head>

            <main className="min-h-screen flex flex-col items-center justify-start text-center mt-10 px-4">
                <h1 className="text-5xl font-bold text-blue-600">Welcome to My Marketplace 🚀</h1>
                <p className="text-2xl text-gray-700 mt-4">Your website is working perfectly!</p>
            </main>
        </>
    )
}
