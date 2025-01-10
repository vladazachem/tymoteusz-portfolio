import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, category, description }) {
  return (
    <Link href={`/texts/${category.toLowerCase()}/${encodeURIComponent(title.toLowerCase())}`}>
      <div className="bg-bg-lines p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative w-full h-0 pb-[40%]">
          <Image
            src="/the-great-wave-off-kanagawa.jpg"
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <h2 className="text-h3 font-sans mt-4">{title}</h2>
        <p className="text-typo-secondary text-sm mt-1">{category}</p>
        <p className="line-clamp-3 leading-7">{description}</p>
      </div>
    </Link>
  );
}
