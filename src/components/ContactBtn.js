import Link from "next/link";

export default function ContactBtn({ title, url }) {
  return (
    <div>
      <Link
        href={url}
        className="flex items-center gap-2"
      >
        <p
            className="text-typo-secondary hover:text-btns-hover font-code text-btns uppercase"
        >
            {title}
        </p>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block"
          >
            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
          </svg>
      </Link>
    </div>
  );
}
