import React from "react";
import Image from "next/image";
import menina from "public/assets/images/ler/girlreading.png"

const HeroLer = () => {
  return (
    <section
      id="hero-sobre"
      className="bg-[url('/assets/images/ler/bg_ler.png')] bg-center bg-cover flex flex-col justify-end min-h-[773px] w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-purple max-w-[80%] lg:max-w-[70%] text-[3.4rem] md:text-[4.5rem] lg:text-[5rem]">
        Biblioteca Digital: Explore Nossas Histórias
        </h1>
      </div>
      <div className="flex justify-end">
      <Image
            src={menina}
            width={280}
            height={265}
            alt="Menina lendo"
            className="md:w-[375px] md:h-[372px] lg:w-[390px] lg:h-[390px]"/>
      </div>
    </section>    
  );
};

export default HeroLer;
