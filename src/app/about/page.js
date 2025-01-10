import { sampleData } from "../../data/sampleData";

export default function About() {
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2">
      <h1 className="text-h4 text-center sm:text-start sm:text-h2 font-medium font-sans col-start-1 sm:row-start-1">O mnie</h1>
      <div className="text-p pt-5 sm:pt-0 sm:col-start-2 sm:row-start-2">
        {sampleData.about.content.map((content) => (
        <p key={content} className="text-p">{content}</p>
      ))}
      </div>
    </div>
    </div>
  );
}
