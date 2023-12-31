import React from "react";
import Image from "next/image";
import menina from "public/assets/images/ler/aluna_home.png"

const HeroLer = () => {
  return (
    <section
      id="hero-ler"
      className="bg-[url('/assets/images/ler/bg_ler.png')] bg-cover bg-center flex flex-col justify-center min-h-[320px] w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-purple max-w-[75%] lg:max-w-[70%] pt-12 pb-4 md:pt-0 text-[2.4rem] md:text-[3.45rem]">
        Biblioteca Digital: Explore Nossas Histórias
        </h1>
      </div>
      <div className="md:hidden flex justify-center itens-end">
      <Image
            src={menina} width={210} height={180}
            alt="Menina lendo"/>
      </div>
    </section>    
  );
};

export default HeroLer;
