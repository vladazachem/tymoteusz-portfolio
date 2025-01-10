import { sampleData } from "../../data/sampleData";
import ProjectCard from "../../components/ProjectCard";

export default function AllTextsPage() {
  return (
    <div className="flex flex-col w-full gap-10">
      <h1 className="text-h3 text-center font-sans font-medium">Teksty</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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