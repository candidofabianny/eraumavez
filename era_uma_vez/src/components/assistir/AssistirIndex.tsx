import { useRef } from "react";

import VideosAcervo from "./Videos-Acervo";
import HeroAssistir from "./Hero-assistir";
import Banner from "./Banner";

const AssistirIndex = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
      <section className="w-full flex flex-col items-center" ref={servicesRef}>
      <HeroAssistir />
      <Banner />
      <VideosAcervo />
      </section>
  );
};

export default AssistirIndex;
