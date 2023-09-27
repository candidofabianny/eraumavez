import React from "react";
import Image from "next/image";
import cmei from "public/assets/images/sobre/cmei_foco.png"
const Foco = () => {
  return (
    <section
      id="hero-sobre"
      className="bg-[url('/assets/images/sobre/bg_foco.svg')] bg-center bg-cover flex flex-col justify-center min-h-[655px] w-full">
      <div className="md:hidden flex justify-center mt-10">
      <Image
            src={cmei}
            width={270}
            height={177}
            alt="Home page book"
            className="py-2 pr-12 hover:scale-105 transition-all duration-[100]"/>
      </div>
      <div className="flex items-center justify-center mt-10 mb-12">
        <p className="text-purple mx-10 md:max-w-[420px] text-[1.3rem] md:text-[1.4rem] text-center md:text-left">
        Hello foco é responder à pergunta: como a tecnologia pode estimular a leitura nas crianças? Realizaremos o projeto com 24 alunos da nossa unidade educacional, buscando estimular a expressão oral, a imaginação e o desenvolvimento infantil, promovendo assim o gosto pela leitura desde cedo.
        </p>
        <Image
            src={cmei}
            width={290}
            height={197}
            alt="Home page book"
            className="hidden md:block py-6"/>
      </div>
    </section>    
  );
};

export default Foco;
