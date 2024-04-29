import { React } from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="text-2xl">
        The best places
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/places">Places</Link>
        </li>
        <li>
          <Link href="/places/create">Ajouter une place</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
