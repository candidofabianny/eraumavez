import React from "react";
import Image from "next/image";
import Link from "next/link";
import menino from "public/assets/images/hero/choices_boy.png"

const Menu = () => {
  return (
      <div className="bg-[url('/assets/images/hero/bg_menu.png')] bg-center flex flex-col items-center justify-center min-h-[620px] w-full"> 
        <div className="hidden md:block">  
          <div className="flex items-center justify-center">
        <p className="font-aclonica pt-20 px-32 text-[2.5rem] lg:text-[2.6rem] text-darkpurple text-left">
        Escolha o tipo
        </p>
          </div>
          <p className="font-aclonica pb-6 px-32 text-[2.5rem] lg:text-[2.6rem] text-darkpurple text-left">
        de literatura
        </p>
        <div className="columns-3">
        <div className="flex pt-5">
          <button className="w-32 h-32 bg-purple rounded-full text-[2.2rem] text-grey hover:scale-105 transition-all duration-[100]">
            Assitir
          </button>
        </div>
        <div className="flex pl-3">
          <button className="w-32 h-32 bg-purple rounded-full text-[2.2rem] text-grey hover:scale-105 transition-all duration-[100]">
            Ler
          </button>
        </div> 
        <div className="flex pl-9">
          <button className="w-32 h-32 bg-purple rounded-full text-[2.2rem] text-grey hover:scale-105 transition-all duration-[100]">
            Escutar
          </button>
        </div> 
        </div>
        <Image
            src={menino}
            width={268}
            height={245}
            alt="Menu page boy"
            className="mx-auto hover:scale-75 transition-all duration-[100]"
          /> 
          </div>
        
        <div className="md:hidden sm:block">
        <div className="flex items-center justify-center">
        <p className="font-aclonica pt-16 pb-8 px-20 text-[2rem] text-darkpurple text-left">
        Escolha o tipo de literatura
        </p>
          </div>
        <div className="columns-3 items-center">
        <div className="flex pl-6 pt-2">
          <button className="w-20 h-20 bg-purple rounded-full text-[1.8rem] text-grey hover:scale-75 transition-all duration-[100]">
            Assitir
          </button>
        </div>
        <div className="flex">
          <button className="w-20 h-20 bg-purple rounded-full text-[1.8rem] text-grey hover:scale-75 transition-all duration-[100]">
            Ler
          </button>
        </div> 
          <button className="w-20 h-20 bg-purple rounded-full text-[1.65rem] text-grey hover:scale-75 transition-all duration-[100]">
            Escutar
          </button>
        </div>
        <Image
            src={menino}
            width={268}
            height={245}
            alt="Menu page boy"
            className="mx-auto hover:scale-75 transition-all duration-[100]"
          /> 
       </div>
      </div>
      
  );
};

export default Menu;
