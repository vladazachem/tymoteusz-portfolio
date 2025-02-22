"use client";

import { useParams } from "next/navigation";
import { sampleData } from "../../../../data/sampleData";
import Paragraph from "../../../../components/Paragraph";


export default function TextDetailsPage() {
  const params = useParams(); // Dynamically retrieve params
  const category = params?.category?.toLowerCase(); // Safely access category
  const id = decodeURIComponent(params?.id)?.toLowerCase(); // Decode and lowercase the id

  const text = sampleData.texts.find(
    (item) =>
      item.category.toLowerCase() === category &&
      item.title.toLowerCase() === id
  );

  if (!text) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-h2 sm:text-h1 font-sans">404</h1>
        <p className="text-p">Tekst, którego szukasz, nie istnieje.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col py-20 overflow-auto">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col w-fit gap-3 lg:gap-0">
          <h1 className="text-[40px] md:text-h4 lg:text-h2 font-sans font-medium text-center leading-tight">{text.title}</h1>
          <div className="flex items-center justify-between text-typo-secondary text-h6 lg:text-p">
            <span>{text.year}</span>
            <span>{text.category}</span>
          </div>
        </div>
        <div className="lg:w-8/12 md:w-9/12">
          {text.content.map((paragraph, index) => (
            <Paragraph key={index} paragraph={{ content: paragraph }} />
          ))}
        </div>
      </div>
    </div>
  );
}
