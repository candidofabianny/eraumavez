import React from "react";
import Image from "next/image";
import Link from "next/link";
import meninas from "public/assets/images/hero/asobre.png"
import setaUp from "public/assets/images/hero/seta_up.svg"

const About = () => {
  return (
    <section
    id="sobre"> 
      <div className="bg-[url('/assets/images/hero/bg_about.png')] bg-center flex flex-col min-h-[500px] w-full"> 
        <div className="hidden lg:block">
        <div className="flex items-center justify-center">
        <Link href="/" type="button" className="bg-transparent hover:scale-105 transition-all duration-[100]">
          <Image
            src={setaUp} width={58} height={58} alt="voltar para home" className="pt-20"/> 
          </Link> 
          </div>
          <div className="flex justify-center">
         <p className="pt-8 w-[60%] text-[1.5rem] text-darkpurple">
         Olhando atentamente para o dia a dia das crianças, percebemos o quanto é importante incentivar o gosto pela leitura. Queremos aumentar o número de histórias que elas conhecem, usando tecnologias digitais para isso.
         </p> </div>
          <Image
            src={meninas}
            width={180}
            height={180}
            alt="Alunas lendo"
            className="mx-auto pt-2 hover:scale-105 transition-all duration-[100]"/>  
          </div>
        
        <div className="lg:hidden mt-10">
        <div className="flex items-center justify-center">
        <Link href="/" type="button" className="bg-transparent hover:scale-105 transition-all duration-[100]">
          <Image
            src={setaUp} width={50} height={50} alt="voltar para home"/> 
          </Link> 
          </div>
          <div className="flex justify-center">
         <p className="pt-8 w-[75%] text-[1.12rem] md:text-[1.42rem] text-darkpurple">
         Olhando atentamente para o dia a dia das crianças, percebemos o quanto é importante incentivar o gosto pela leitura. Queremos aumentar o número de histórias que elas conhecem, usando tecnologias digitais para isso.
         </p> </div>
          <Image
            src={meninas}
            width={210}
            height={205}
            alt="Alunas lendo"
            className="mx-auto pt-2 hover:scale-105 transition-all duration-[100]"/>  
       </div>
      </div>
      </section>
  );
};

export default About;
