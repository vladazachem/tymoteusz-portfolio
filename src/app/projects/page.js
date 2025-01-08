import { sampleData } from "../../data/sampleData";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const categories = ["Opowiadania", "Eseje", "Szkice"];

  return (
    <div className="p-5 sm:p-10">
      <h1 className="text-h1 font-sans">Projects</h1>
      {categories.map((category) => {
        const filteredProjects = sampleData.texts.filter(
          (project) => project.category === category
        );
        return (
          <section key={category} className="mt-10">
            <h2 className="text-h3 font-sans mb-5">{category}</h2>
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.content}
                  />
                ))}
              </div>
            ) : (
              <p className="text-typo-secondary text-sm">Brak treści w tej kategorii.</p>
            )}
          </section>
        );
      })}
    </div>
  );
}
