import React from "react";
import Image from "next/image";
import menina from "public/assets/images/ler/girlreading.png"

const HeroLer = () => {
  return (
    <section
      id="hero-sobre"
      className="bg-[url('/assets/images/ler/bg_ler.png')] bg-center bg-cover flex flex-col md:flex-row justify-end min-h-[450px] w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-purple max-w-[75%] pt-24 md:pt-1 text-[2.8rem] md:text-[4rem] lg:text-[4.8rem]">
        Biblioteca Digital: Explore Nossas Histórias
        </h1>
      </div>
      <div className="md:hidden flex justify-center itens-end">
      <Image
            src={menina}
            width={240}
            height={220}
            alt="Menina lendo"/>
      </div>
    </section>    
  );
};

export default HeroLer;
