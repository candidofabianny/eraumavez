import { useRef } from "react";
import HeroSobre from "./HeroSobre";
import Importancia from "./Importancia";
import Foco from "./Foco";
import Desafio from "./Desafio";
import Processo from "./Processo";

const SobreNos = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
      <section className="w-full flex flex-col items-center" ref={servicesRef}>
      <HeroSobre />
      <Importancia />
      <Foco />
      <Desafio />
      <Processo />
      </section>
  );
};

export default SobreNos;
