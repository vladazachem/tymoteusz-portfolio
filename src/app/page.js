import { sampleData } from "../data/sampleData";

export default function Home() {
  return (
    <div className="p-5 sm:p-10">
      <h1 className="text-h1 font-sans">Teksty</h1>
      <p className="text-p mt-4">{sampleData.about.content}</p>
    </div>
  );
}
