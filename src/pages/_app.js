import "@/styles/globals.css";
import Link from "next/link";

const App = ({ Component, pageProps }) => (
  <main className="flex flex-col">
    <header className="border-b-2 border-b-stone-200 bg-stone-100">
      <div className="mx-auto max-w-5xl p-4 flex justify-between items-center">
        <Link href="/">
          <img className="max-w-10 rounded-3xl" src="logo.jpeg" />
        </Link>
        <nav>
          <ul className="flex gap-4 underline-offset-auto">
            <li>
              <Link href="add">Liste</Link>
            </li>
            <li>
              <Link href="list">Ajout</Link>
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
);

export default App;
