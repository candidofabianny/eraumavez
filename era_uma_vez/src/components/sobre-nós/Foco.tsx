import React from "react";
import Image from "next/image";
import cmei from "public/assets/images/sobre/cmei_foco.png"
const Foco = () => {
  return (
    <section
      id="foco"
      className="bg-[url('/assets/images/sobre/bg_foco.svg')] bg-center bg-cover flex flex-col justify-center min-h-[615px] w-full">
      <div className="lg:hidden flex justify-center mt-10">
      <Image
            src={cmei}
            width={210}
            height={200}
            alt="Home page book"
            className="hover:scale-105 transition-all duration-[100]"/>
      </div>
      <div className="flex items-center justify-center mt-10 mb-12">
        <p className="text-purple mx-8 md:mx-6 max-w-[680px] lg:max-w-[550px] text-[1.12rem] lg:text-[1.4rem] text-center lg:text-left">
        O foco é responder à pergunta: como a tecnologia pode estimular a leitura nas crianças? Realizaremos o projeto com 24 alunos da nossa unidade educacional, buscando estimular a expressão oral, a imaginação e o desenvolvimento infantil, promovendo assim o gosto pela leitura desde cedo.
        </p>
        <Image
            src={cmei}
            width={260}
            height={220}
            alt="Home page book"
            className="hidden lg:block py-6"/>
      </div>
    </section>    
  );
};

export default Foco;
