import { sampleData } from "../../data/sampleData";
import ProjectCard from "../../components/ProjectCard";

export default function AllTextsPage() {
  return (
    <div className="">
      <h1 className="text-h1 font-sans mb-8">Teksty</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleData.texts.map((text) => (
          <ProjectCard
            key={text.id}
            title={text.title}
            category={text.category}
            description={text.content}
          />
        ))}
      </div>
    </div>
  );
}