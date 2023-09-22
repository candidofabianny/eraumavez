import React from "react";
import Image from "next/image";
import Link from "next/link";
import Acesse from "public/assets/images/hero/cmei_book.png"

const CMEI = () => {
  return (
    <section
    id="acompanhe-cmei"
    className="bg-[url('/assets/images/hero/bg_cmei.svg')] bg-cover bg-center flex flex-col justify-center min-h-[745px] w-full">       
        <div className="flex items-center justify-center lg:justify-start lg:ml-20">
        <h1 className="text-purple text-[2.125rem] md:text-[2.5rem] lg:text-[2.8rem] pb-16 max-w-[370px] md:max-w-[470px] lg:max-w-[600px] md:text-center lg:text-left">
        Acompanhe o projeto e as nossas publicações no site do CMEI
        </h1>
        </div>
        <div className="flex justify-center">
        <button className="bg-yellow border border-gray_smooth shadow-lg w-[290px] md:w-[330px] lg:w-[360px] h-[288px] md:h-[310px] lg:h-[340px] rounded-2xl py-3 px-1">
        <div className="text-center pt-4">
                      <h2 className="text-[2.1rem] md:text-[2.3rem] lg:text-[2.5rem] text-purple">
                        Acesse Aqui
                      </h2>
                </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={Acesse}
                      alt="olá"
                      width={280}
                      height={220}
                      className=""
                    />
                    </div>
              </button>
              </div>
      </section>
  );
};

export default CMEI;
