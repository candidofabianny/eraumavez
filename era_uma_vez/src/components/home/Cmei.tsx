import React from "react";
import Image from "next/image";
import Link from "next/link";
import Acesse from "public/assets/images/hero/cmei_book.png"

const CMEI = () => {
  return (
    <section
    id="acompanhe-cmei"
    className="bg-[url('/assets/images/hero/bg_cmei.svg')] bg-cover bg-center flex flex-col justify-center min-h-[716px] w-full">       
        <div className="flex items-center justify-center lg:justify-start lg:ml-24">
        <h1 className="text-purple mx-4 text-[2rem] pb-14 max-w-[370px] md:max-w-[470px] lg:max-w-[550px] md:text-center lg:text-left">
        Acompanhe o projeto e as nossas publicações no site do CMEI
        </h1>
        </div>
        <div className="flex justify-center">
        <button className="bg-yellow border border-gray_smooth shadow-lg w-[280px] md:w-[300px] h-[278px] md:h-[280px] rounded-2xl">
        <div className="text-center pt-4">
                      <h2 className="text-[2rem] text-purple">
                        Acesse Aqui
                      </h2>
                </div>
                  <Link href="/" className="flex justify-center items-center">
                    <Image
                      src={Acesse}
                      alt="Botão acesse aqui"
                      width={260}
                      height={220}
                      className=""/>
                    </Link>
              </button>
              </div>
      </section>
  );
};

export default CMEI;
