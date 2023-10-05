import React from "react";
import Image from "next/image";
import Link from "next/link";
import Acesse from "public/assets/images/hero/cmei_book.png"

const CMEI = () => {
  return (
    <section
    id="acompanhe-cmei"
    className="bg-[url('/assets/images/hero/bg_cmei.svg')] bg-cover bg-center flex flex-col justify-center min-h-[690px] w-full">       
        <div className="flex items-center justify-center">
        <h1 className="font-aclonica text-purple mx-4 text-[1.5rem] md:text-[1.9rem] pb-14 max-w-[370px] md:max-w-[470px] lg:max-w-[550px] text-center">
        Acompanhe o projeto e as nossas publicações no site do CMEI
        </h1>
        </div>
        <div className="flex justify-center">
        <button className="bg-yellow border border-gray_smooth shadow-lg w-[226px] md:w-[252px] h-[226px] md:h-[252px] rounded-2xl">
        <div className="text-center pt-4">
                  <h2 className="text-[1.9rem] text-purple">
                    Acesse Aqui
                  </h2>
                </div>
                  <Link href="https://educacao.curitiba.pr.gov.br/noticias/unidade/moradias-iguacu-centro-municipal-de-educacao-infantil/18298" target="_blank" className="flex justify-center items-center">
                    <Image
                      src={Acesse}
                      alt="Botão acesse aqui"
                      width={206}
                      height={200}/>
                    </Link>
              </button>
              </div>
      </section>
  );
};

export default CMEI;
