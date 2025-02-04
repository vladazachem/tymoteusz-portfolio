import TypeWriterBanner from "../components/TypeWriterBanner";

export default function Home() {
  return (
    <div className="flex flex-col gap-[65px] md:gap-28 lg:gap-[70px] font-sans font-medium text-h4 lg:text-h1 md:text-h2 px-6 sm:px-0 pt-44 md:pt-[195px]">
      <div className="text-typo-main flex flex-col leading-[0px] md:leading-tight gap-2 lg:gap-1">
        <h1 className="leading-loose md:leading-none lg:leading-[100px]">Tymoteusz</h1>
        <h1>Piątek/</h1>
      </div>
      <TypeWriterBanner />
    </div>
  );
}
