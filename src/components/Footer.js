"use client";

import Link from "next/link";
import ContactBtn from "./ContactBtn";
import { sampleData } from "@/data/sampleData";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const showHomeButton = pathname !== "/";

  return (
    <footer className="bg-bg-main px-[100px] py-[25px]  flex justify-between items-center">
      {showHomeButton ? (
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block"
          >
            <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
          </svg>
          <p className="text-typo-secondary hover:text-btns-hover font-code text-btns uppercase">
            Strona główna
          </p>
        </Link>
      ) : (
        <div className="w-[160px]">
          {/* Keeps space for the button when hidden */}
        </div>
      )}
      <div className="flex gap-10">
        {sampleData.about.contact.map((contact) => (
          <ContactBtn
            key={contact.title}
            title={contact.title}
            url={contact.url}
          />
        ))}
      </div>
    </footer>
  );
}
