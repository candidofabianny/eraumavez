import React from "react";
import Image from "next/image";
import Link from "next/link";
import menina from "public/assets/images/hero/aluna_vermelha.png"

const Menu = () => {
  return (
      <div className="bg-[url('/assets/images/hero/bg_menu.png')] bg-center flex flex-col items-center justify-center min-h-[620px] w-full"> 
        <div className="hidden md:block">  
          <div className="flex items-center justify-center">
        <p className="font-aclonica pt-16 px-32 text-[2.35rem] lg:text-[2.6rem] text-darkpurple text-left">
        Escolha o tipo
        </p>
          </div>
          <p className="font-aclonica pb-4 px-32 text-[2.35rem] lg:text-[2.6rem] text-darkpurple text-left">
        de literatura
        </p>
        <div className="flex justify-around">
        <Link href="/assistir">
          <button className="w-24 h-24 bg-purple rounded-full text-[2.1rem] text-grey hover:scale-105 transition-all duration-[100]">
            Assistir
          </button></Link> 
        <Link href="/ler">
          <button className="w-24 h-24 bg-purple rounded-full text-[2.1rem] text-grey hover:scale-105 transition-all duration-[100]">
            Ler
          </button> </Link> 
        <Link href="/escutar">
          <button className="w-24 h-24 bg-purple rounded-full text-[2rem] text-grey hover:scale-105 transition-all duration-[100]">
            Escutar
          </button> </Link> 
        </div>
        <Image
            src={menina} width={295} height={268} alt="Menino"
            className="mx-auto pt-6"/> 
          </div>
        
        <div className="md:hidden">
        <div className="flex items-center justify-center">
        <p className="font-aclonica pt-16 pb-8 px-20 text-[2rem] text-darkpurple text-left">
        Escolha o tipo de literatura
        </p>
          </div>
        <div className="flex justify-center gap-4">
          <Link href="/assistir">
          <button className="w-20 h-20 bg-purple rounded-full text-[1.8rem] text-grey hover:bg-blue">
            Assitir </button>
          </Link>
          <Link href="/ler">
          <button className="w-20 h-20 bg-purple rounded-full text-[1.8rem] text-grey hover:bg-red">
            Ler </button>
          </Link>
          <Link href="/escutar">
          <button className="w-20 h-20 bg-purple rounded-full text-[1.65rem] text-grey hover:bg-yellow">
            Escutar </button>
          </Link>
        </div>
        <div className="mt-10">
        <Image
            src={menina} width={270} height={258} alt="Menu menino"
            className="mx-auto"/> 
          </div>
       </div>
      </div>
  );
};

export default Menu;
