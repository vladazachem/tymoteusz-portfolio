"use client";

import { useParams } from "next/navigation";
import { sampleData } from "../../../data/sampleData";
import ProjectCard from "../../../components/ProjectCard";

export default function CategoryPage() {
  const params = useParams(); // Get the dynamic route parameter
  const { category } = params;

  const filteredTexts = sampleData.texts.filter(
    (text) => text.category.toLowerCase() === category
  );

  return (
    <div className="py-10 px-6 sm:px-12">
      <h1 className="text-h1 font-sans mb-8">{category}</h1>
      {filteredTexts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <p className="text-typo-secondary text-sm">
          No content available in this category.
        </p>
      )}
    </div>
  );
}
