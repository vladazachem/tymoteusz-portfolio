import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-bg-main p-6 flex justify-between items-center">
      <div className="text-h4 font-sans">[ Tymoteusz Piątek ]</div>
      <nav className="space-x-6">
        <Link href="/" className="text-typo-main hover:text-btns-hover">
          Home
        </Link>
        <Link href="/projects" className="text-typo-main hover:text-btns-hover">
          Projects
        </Link>
        <Link href="/about" className="text-typo-main hover:text-btns-hover">
          About
        </Link>
      </nav>
    </header>
  );
}