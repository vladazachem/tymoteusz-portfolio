import { sampleData } from "../../data/sampleData";

export default function About() {
  return (
    <div className="grid grid-cols-2">
      <h1 className="text-h1 font-sans col-start-1 row-start-1">O mnie</h1>
      <div className="text-p col-start-2 row-start-2">
        {sampleData.about.content.map((content) => (
        <p key={content} className="text-p">{content}</p>
      ))}
      </div>
    </div>
  );
}
