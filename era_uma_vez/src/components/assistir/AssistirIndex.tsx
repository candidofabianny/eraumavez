import { useRef } from "react";

import VideosAcervo from "./Videos-Acervo";
import HeroAssistir from "./Hero-assistir";

const AssistirIndex = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
      <section className="w-full flex flex-col items-center" ref={servicesRef}>
      <HeroAssistir />
      <VideosAcervo />
      </section>
  );
};

export default AssistirIndex;
