import { useRef } from "react";
import HeroSobre from "./HeroSobre";
import Importancia from "./Importancia";
import Foco from "./Foco";

const SobreNos = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
      <section className="w-full flex flex-col items-center" ref={servicesRef}>
      <HeroSobre />
      <Importancia />
      <Foco />
      </section>
  );
};

export default SobreNos;
