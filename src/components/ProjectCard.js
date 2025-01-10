import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, category, description }) {
  return (
    <Link
      href={`/texts/${category.toLowerCase()}/${encodeURIComponent(
        title.toLowerCase()
      )}`}
    >
      <div className="p-10 flex flex-col gap-4 border-solid border-[2px] border-gray-300 hover:border-gray-950 group transition-colors duration-300">
        <div className="relative w-full h-0 pb-[40%]">
          <Image
            src="/the-great-wave-off-kanagawa.jpg"
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-h3 font-sans font-medium">{title}</h2>
          <p className="text-typo-secondary text-h6 font-code font-medium">
            {category}
          </p>
        </div>
        <p className="line-clamp-3 leading-6 text-p">{description}</p>
      </div>
    </Link>
  );
}
