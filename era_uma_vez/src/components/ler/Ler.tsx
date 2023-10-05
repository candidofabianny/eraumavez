import { useRef } from "react";
import HeroLer from "./HeroLer";
import Livro from "./Livros";


const Ler = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
      <section className="w-full flex flex-col items-center" ref={servicesRef}>
      <HeroLer />
      <Livro />
      </section>
  );
};

export default Ler;
