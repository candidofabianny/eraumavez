import { useRef } from "react";
import HeroLer from "./HeroLer";

const Ler = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
      <section className="w-full flex flex-col items-center" ref={servicesRef}>
      <HeroLer />
      </section>
  );
};

export default Ler;
