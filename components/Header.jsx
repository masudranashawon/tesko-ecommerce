import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary py-4 text-white shadow">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tesko</h1>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
