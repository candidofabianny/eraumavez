import React from "react";
import Image from "next/image";
import cmei from "public/assets/images/sobre/cmei_foco.png"
const Processo = () => {
  return (
    <section
      id="hero-sobre"
      className="bg-[url('/assets/images/sobre/bg_processo.svg')] bg-center bg-cover flex flex-col justify-center min-h-[500px] w-full">
        <div className="flex flex-col justify-center items-center">
        <p className="text-purple text-[2.85rem]">Nosso Processo</p>
        <p className="text-purple font-aclonica text-[1.5rem] max-w-[260px]">ETAPA I: Leitura a partir do livro físico e mídias digitais</p>
        </div>
    </section>    
  );
};

export default Processo;
