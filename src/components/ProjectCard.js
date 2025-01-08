export default function ProjectCard({ title, category, description }) {
    return (
      <div className="bg-bg-lines p-5 rounded shadow-md">
        <h2 className="text-h3 font-sans">{title}</h2>
        <p className="text-typo-secondary text-sm mt-1">{category}</p>
        <p className="text-p mt-2">{description}</p>
      </div>
    );
  }
  