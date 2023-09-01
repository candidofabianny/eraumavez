import React from "react";
import Image from "next/image";
import Link from "next/link";
import menino from "public/assets/images/hero/boy_about.png"
import setaUp from "public/assets/images/hero/seta_up.svg"
import { Container } from "postcss";

const About = () => {
  return (
    <section
    id="aboutid"> 
      <div className="bg-[url('/assets/images/hero/bg_about.svg')] bg-center flex flex-col items-center justify-center min-h-[611px] w-full"> 
        <div className="hidden md:block">
        <div className="flex items-center justify-center pt-28">
        <Link href="#heroid" type="button" className="bg-transparent hover:scale-105 transition-all duration-[100]">
          <Image
            src={setaUp}
            width={60}
            height={57}
            alt="go back to home page button"
            className="hover:scale-105 transition-all duration-[100]"
          /> 
          </Link> 
          </div> 
        <p className="pt-12 px-14 text-[1.5rem] lg:text-[1.6rem] lg:px-48 text-darkpurple justify-center">
        Olhando atentamente para o dia a dia das crianças, percebemos o quanto é importante incentivar o gosto pela leitura. Queremos aumentar o número de histórias que elas conhecem, usando tecnologias digitais para isso.
        </p>     
        <div className="flex items-end justify-center">
          <Image
            src={menino}
            width={330}
            height={322}
            alt="About boy"
            className="hover:scale-105 transition-all duration-[100]"
          />
          </div>
          </div>
        
        <div className="md:hidden sm:block mt-24">
        <div className="flex items-center justify-center">
        <Link href="#heroid" type="button" className="bg-transparent hover:scale-105 transition-all duration-[100]">
          <Image
            src={setaUp}
            width={60}
            height={57}
            alt="go back to home page button"
            className="pt-2 hover:scale-105 transition-all duration-[100]"
          /> 
          </Link> 
          </div>
        <p className="pt-16 px-20 lg:px-12 text-[1.25rem] lg:text-[5.125rem] text-darkpurple text-left">
        Olhando atentamente para o dia a dia das crianças, percebemos o quanto é importante incentivar o gosto pela leitura. Queremos aumentar o número de histórias que elas conhecem, usando tecnologias digitais para isso.
        </p>  
        <Image
            src={menino}
            width={288}
            height={265}
            alt="Home page Robot"
            className="mx-auto pt-4 hover:scale-105 transition-all duration-[100]"
          />  
       </div>
      </div>
      </section>
  );
};

export default About;
