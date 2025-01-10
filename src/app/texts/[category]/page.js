"use client";

import { useParams } from "next/navigation";
import { sampleData } from "../../../data/sampleData";
import ProjectCard from "../../../components/ProjectCard";

export default function CategoryPage() {
  const params = useParams(); // Get dynamic route parameters
  const category = params.category.toLowerCase(); // Access and use 'category' after retrieval

  const filteredTexts = sampleData.texts.filter(
    (text) => text.category.toLowerCase() === category
  );

  return (
    <div className="flex flex-col w-full gap-10">
      <h1 className="text-h4 sm:text-h3 text-center font-sans font-medium capitalize">{category}</h1>
      {filteredTexts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTexts.map((text) => (
            <ProjectCard
              key={text.id}
              title={text.title}
              category={text.category}
              description={text.content}
            />
          ))}
        </div>
      ) : (
        <p className="text-typo-secondary text-p text-center">
          Brak dostępnej treści w tej kategorii.
        </p>
      )}
    </div>
  );
}
