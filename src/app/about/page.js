import { sampleData } from "../../data/sampleData";

export default function About() {
  return (
    <div className="p-5 sm:p-10">
      <h1 className="text-h1 font-sans">O mnie</h1>
      <p className="text-p mt-4 sm:mt-10">{sampleData.about.content}</p>
    </div>
  );
}
