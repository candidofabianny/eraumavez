import React from "react";
import Image from "next/image";
import Link from "next/link";
import robo from "public/assets/images/hero/blue_robot.png"
import livro from "public/assets/images/hero/homebook.png"
import seta from "public/assets/images/hero/seta.svg"

const Hero = () => {
  return (
    <section id="home"
    className="bg-[url('/assets/images/hero/bg_hero.svg')] bg-center flex flex-col items-center justify-center min-h-[645px] w-full">       
        <div className="hidden lg:block columns-2 mt-4">
        <div>
        <h1 className="pt-36 px-16 text-[5.1rem] text-purple text-left">
          Era uma vez
        </h1>
        <p className="px-16 text-[1.5rem] text-purple text-left">
        Leitura e contação de histórias, utilizando tecnologia como aliada da educação
        </p>   
        <div className="flex items-end justify-end">
        <Image
            src={livro}
            width={290}
            height={197}
            alt="Home page book"
            className="py-6 hover:scale-105 transition-all duration-[100]"
          />   
        </div>
        </div>
        <Image
            src={robo}
            width={250}
            height={290}
            alt="Home page Robot"
            className="mx-auto pt-28 hover:scale-105 transition-all duration-[100]"
          />  
          <Link href="#sobre" className="bg-transparent pt-20 hover:scale-105 transition-all duration-[100]">
          <Image
            src={seta}
            width={60}
            height={57}
            alt="Home page button"
            className="hover:scale-105 mx-auto transition-all duration-[100]"
          /> 
          </Link>  
        </div>

        <div className="lg:hidden mt-32">
        <h1 className="text-[4.6rem] text-purple text-center">
          Era uma vez
        </h1>
        <p className="px-[5%] lg:px-[10%] xl:px-[20%] text-[1rem] text-purple text-center">
        Leitura e contação de histórias, utilizando tecnologia como aliada da educação
        </p>
        <Image
            src={robo}
            width={180}
            height={220}
            alt="Home page Robot"
            className="mx-auto py-6 hover:scale-105 transition-all duration-[100]"/>  
          <div className="flex items-center justify-center mb-6">
          <Link href="#sobre" type="button" className="bg-transparent py-2 hover:scale-105 transition-all duration-[100]">
          <Image
            src={seta}
            width={60}
            height={50}
            alt="Home page button"
            className="pb-8 hover:scale-105 transition-all duration-[100]"/> 
          </Link>  
          </div>      
         </div>
      </section>
  );
};

export default Hero;
