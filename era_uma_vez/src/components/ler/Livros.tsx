import React from "react";
import Image from "next/image";
import setaUp from "public/assets/images/hero/seta_up.svg"

const Livros = () => {
  return (
    <section
      id="livros"
      className="bg-[url('/assets/images/ler/bg_livros.svg')] bg-center bg-cover flex flex-col justify-center min-h-[903px] w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-purple text-[1.2rem] md:text-[4.5rem] lg:text-[5rem]">
        Aqui se encontram PDFs para baixar ou ler online
        </h1>
      </div>
      <div className="flex flex-row gap-2">
      <div>
      <Image
            src={setaUp}
            width={60}
            height={57}
            alt="go back to home page button"
            className="hover:scale-105 transition-all duration-[100]"
          />
      </div>
      <div>hi</div>
      </div>
    </section>    
  );
};

export default Livros;
