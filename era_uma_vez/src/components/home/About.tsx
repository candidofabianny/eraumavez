import React from "react";
import Image from "next/image";
import Link from "next/link";
import menino from "public/assets/images/hero/boy_about.png"
import livro from "public/assets/images/hero/homebook.png"
import setaUp from "public/assets/images/hero/seta_up.svg"

const About = () => {
  return (
      <div className="bg-[url('/assets/images/hero/bg_about.svg')] bg-center flex flex-col items-center justify-center min-h-[615px] w-full">
        <p className="hidden md:block pt-36 px-14 text-[1.75rem] lg:text-[2.125rem] text-darkpurple justify-center text-left">
        Olhando atentamente para o dia a dia das crianças, percebemos o quanto é importante incentivar o gosto pela leitura. Queremos aumentar o número de histórias que elas conhecem, usando tecnologias digitais para isso.
        </p>  
        <div className="hidden md:block columns-2">
        <Image
            src={menino}
            width={250}
            height={290}
            alt="Home page Robot"
            className="mx-auto pt-28 hover:scale-105 transition-all duration-[100]"
          />  
          <button type="button" className="bg-transparent pt-2 hover:scale-105 transition-all duration-[100]">
          <Image
            src={setaUp}
            width={60}
            height={57}
            alt="Home page button"
            className="pt-20 hover:scale-105 transition-all duration-[100]"
          /> 
          </button>  

        </div>
        <div className="md:hidden sm:block mt-28">
        <div className="flex items-center justify-center">
        <button type="button" className="bg-transparent hover:scale-105 transition-all duration-[100]">
          <Image
            src={setaUp}
            width={60}
            height={57}
            alt="go back to home page button"
            className="pt-2 hover:scale-105 transition-all duration-[100]"
          /> 
          </button> 
          </div>
        <p className="pt-24 px-20 lg:px-12 text-[1.25rem] lg:text-[5.125rem] text-purple text-left">
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
  );
};

export default About;
