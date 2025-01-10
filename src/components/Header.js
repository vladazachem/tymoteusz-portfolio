"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-bg-main px-[100px] py-[25px] flex justify-center sm:justify-between items-center fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="hidden sm:inline-block">
        <h6 className="text-btns uppercase text-typo-secondary">
          [ Tymoteusz Piątek ]
        </h6>
      </Link>
      <nav className="flex gap-10">
        <button
          onMouseEnter={() => setMenuOpen(true)}
          className="flex items-center gap-2"
        >
          <p className="text-typo-main hover:text-btns-hover focus:outline-none font-code text-btns font-normal uppercase">
            Teksty
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`inline-block transform transition-transform duration-200 ${
              menuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="M13 17.586V4h-2v13.586l-6.293-6.293-1.414 1.414L12 21.414l8.707-8.707-1.414-1.414L13 17.586z" />
          </svg>
        </button>
        <Link
          href="/about"
          className="text-typo-main hover:text-btns-hover font-code text-btns uppercase"
        >
          O mnie
        </Link>
      </nav>

      {menuOpen && (
        <div
        onMouseLeave={() => {
          setTimeout(() => setMenuOpen(false), 200);
        }}
          className="absolute top-11 sm:right-[88px] bg-bg-main p-3 w-full text-center sm:w-[162px] sm:text-start z-10"
        >
          <ul className="divide-y divide-bg-img text-btns font-code uppercase">
            <li className="py-2">
              <Link
                href="/texts"
                className="block text-typo-secondary hover:text-btns-hover"
                onClick={() => setMenuOpen(false)}
              >
                Wszystko
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/texts/opowiadania"
                className="block text-typo-secondary hover:text-btns-hover"
                onClick={() => setMenuOpen(false)}
              >
                Opowiadania
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/texts/eseje"
                className="block text-typo-secondary hover:text-btns-hover"
                onClick={() => setMenuOpen(false)}
              >
                Eseje
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/texts/szkice"
                className="block text-typo-secondary hover:text-btns-hover"
                onClick={() => setMenuOpen(false)}
              >
                Szkice
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/texts/filmy"
                className="block text-typo-secondary hover:text-btns-hover"
                onClick={() => setMenuOpen(false)}
              >
                Filmy
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
