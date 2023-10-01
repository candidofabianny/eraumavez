import { useRef } from "react";
import HeroSobre from "./HeroSobre";
import Importancia from "./Importancia";
import Foco from "./Foco";
import Desafio from "./Desafio";
import Processo from "./Processo";
import EtapaII from "./EtapaII";
import EtapaIII from "./EtapaIII";
import EtapaIV from "./EtapaIV";
import EtapaV from "./EtapaV";

const SobreNos = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
      <section className="w-full flex flex-col items-center" ref={servicesRef}>
      <HeroSobre />
      <Importancia />
      <Foco />
      <Desafio />
      <Processo />
      <EtapaII />
      <EtapaIII />
      <EtapaIV />
      <EtapaV />
      </section>
  );
};

export default SobreNos;
