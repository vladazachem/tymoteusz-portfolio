import Link from "next/link";

export default function Footer({ showHomeButton = true }) {
  return (
    <footer className="bg-bg-main p-4 flex justify-between items-center">
      {showHomeButton && (
        <Link href="/" className="text-typo-main hover:text-btns-hover">
            STRONA GŁÓWNA
        </Link>
      )}
      <div className="flex space-x-4">
        <Link href="https://instagram.com" className="text-typo-main hover:text-btns-hover">
            INSTAGRAM
        </Link>
        <Link href="/contact" className="text-typo-main hover:text-btns-hover">
            KONTAKT
        </Link>
      </div>
    </footer>
  );
}
