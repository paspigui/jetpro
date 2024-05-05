import "@/styles/globals.css"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

const App = ({ Component, pageProps }) => (
  <main className="flex flex-col">
    <Head>
      <title>The best places</title>
    </Head>
    <header className="border-b-2 border-b-stone-200 bg-stone-100">
      <div className="p-4 flex justify-between items-center">
        <Link
          href="/"
          className="no-underline hover:underline flex items-center gap-2"
        >
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={40}
            height={40}
            priority
            className="max-w-10 rounded-3xl"
          />
          <h1>The best places</h1>
        </Link>
        <nav>
          <ul className="flex gap-4 underline-offset-auto">
            <li>
              <Link
                href="/places/create"
                className="no-underline hover:underline"
              >
                Ajout
              </Link>
            </li>
            <li>
              <Link href="/places" className="no-underline hover:underline">
                Liste
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section>
      <div className="mx-auto max-w-5xl p-4">
        <Component {...pageProps} />
      </div>
    </section>
  </main>
)

export default App
