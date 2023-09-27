import React from "react";

const HeroSobre = () => {
  return (
    <section
      id="hero-sobre"
      className="bg-[url('/assets/images/sobre/bg_herosobre.svg')] bg-center bg-cover flex flex-col justify-center min-h-[515px] w-full">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-purple text-[5.4rem] md:text-[6.4rem] lg:text-[6.6rem]">
          Sobre Nós
        </h1>
        <p className="text-purple mx-10 text-[1.75rem] md:text-[1.9rem]">
          Conheça a necessidade do nosso projeto
        </p>
      </div>
    </section>    
  );
};

export default HeroSobre;
