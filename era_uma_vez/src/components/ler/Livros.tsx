"use client";

import Image from "next/image";
import 'swiper/css/bundle';
import joana from "public/assets/images/ler/joaninha.png";
import Milho from "public/assets/images/ler/espiga-de-milho.png";
import Cores from "public/assets/images/ler/rgb.png";
import Cesta from "public/assets/images/ler/cesta-de-piquenique.png";
import Arvore from "public/assets/images/ler/arvore.png";
import Flores from "public/assets/images/ler/lavanda.png";
import Grufalo from "public/assets/images/ler/monstro.png";
import Filho from "public/assets/images/ler/filho.png";
import Link from "next/link";

function Livros() {
  return (
    <section id="livros" className="flex flex-col bg-[url('/assets/images/ler/bg_livros.png')] bg-cover bg-center items-center w-full py-16 min-h-screen">
      <h2 className="text-[1.3rem] lg:text-[2rem] px-4 pb-12 text-center text-purple">
      Aqui se encontram PDF’s para baixar ou ler online
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-18 justify-items mx-4">
        <div className="bg-blue flex items-center justify-center border border-gray_smooth shadow-lg h-[190px] md:h-[220px] lg:md:h-[250px] w-[88px] md:w-[100px] lg:w-[118px] rounded-2xl">
          <Link href="/joaninha-que-perdeu-as-pintinhas">
          <h1 className="text-[#AAF7FF] text-[1.1rem] md:text-[1.2rem] text-center pt-4">
            A joaninha que perdeu as pintinhas
          </h1>
          <Image
            src={joana} width={50} height={50}
            alt="A Joaninha que perdeu as Pintinhas"
            className="hover:scale-125 transition-all duration-[100]"/>
          </Link>
           </div>
           <div className="bg-blue flex items-center justify-center border border-gray_smooth shadow-lg h-[190px] md:h-[220px] lg:md:h-[250px] w-[88px] md:w-[100px] lg:w-[118px] rounded-2xl">
          <Link href="/sanduiche-da-maricota">
          <h1 className="text-[#AAF7FF] text-[1.1rem] md:text-[1.2rem] text-center pt-4">
            O Sanduíche da Maricota
          </h1>
          <Image
            src={Milho} width={64} height={64}
            alt="O Sanduíche da Maricota"
            className="hover:scale-125 transition-all duration-[100]"/>
          </Link>
           </div>
           <div className="bg-blue flex items-center justify-center border border-gray_smooth shadow-lg h-[190px] md:h-[220px] lg:md:h-[250px] w-[88px] md:w-[100px] lg:w-[118px] rounded-2xl">
          <Link href="/cesta-da-dona-maricota">
          <h1 className="text-[#AAF7FF] text-[1.1rem] md:text-[1.2rem] text-center pt-4 pb-4">
            A Cesta da Dona Maricota
          </h1>
          <Image
            src={Cesta} width={64} height={64}
            alt="A Cesta da Dona Maricota"
            className="hover:scale-125 transition-all duration-[100]"/>
          </Link>
           </div>
           <div className="bg-blue flex items-center justify-center border border-gray_smooth shadow-lg h-[190px] md:h-[220px] lg:md:h-[250px] w-[88px] md:w-[100px] lg:w-[118px] rounded-2xl">
          <Link href="/o-monstro-das-cores">
          <h1 className="text-[#AAF7FF] text-[1.1rem] md:text-[1.2rem] text-center pt-4 pb-2">
            O Monstro das Cores
          </h1>
          <Image
            src={Cores} width={64} height={64}
            alt="O Monstro das Cores"
            className="hover:scale-125 transition-all duration-[100]"/>
          </Link>
           </div>
           <div className="bg-blue flex items-center justify-center border border-gray_smooth shadow-lg h-[190px] md:h-[220px] lg:md:h-[250px] w-[88px] md:w-[100px] lg:w-[118px] rounded-2xl">
          <Link href="/o-livro-da-familia">
          <h1 className="text-[#AAF7FF] text-[1.1rem] md:text-[1.2rem] text-center pt-4 pb-2">
            O Livro da Família
          </h1>
          <Image
            src={Arvore} width={64} height={64}
            alt="O Livro da Família"
            className="hover:scale-125 transition-all duration-[100]"/>
          </Link>
           </div>
           <div className="bg-blue flex items-center justify-center border border-gray_smooth shadow-lg h-[190px] md:h-[220px] lg:md:h-[250px] w-[88px] md:w-[100px] lg:w-[118px] rounded-2xl">
          <Link href="/cachinhos-conchinhas-flores-e-ninhos">
          <h1 className="text-[#AAF7FF] text-[1.1rem] md:text-[1.2rem] text-center pt-4 pb-2">
            Cachinhos, Conchinhas, Flores e Ninhos
          </h1>
          <Image
            src={Flores} width={64} height={64}
            alt="Cachinhos, Conchinhas, Flores e Ninhos"
            className="hover:scale-125 transition-all duration-[100]"/>
          </Link>
           </div>
           <div className="bg-blue flex items-center justify-center border border-gray_smooth shadow-lg h-[190px] md:h-[220px] lg:md:h-[250px] w-[88px] md:w-[100px] lg:w-[118px] rounded-2xl">
          <Link href="/o-grufalo">
          <h1 className="text-[#AAF7FF] text-[1.1rem] md:text-[1.2rem] text-center pt-4 pb-2">
            O Grúfalo
          </h1>
          <Image
            src={Grufalo} width={64} height={64}
            alt="O Grúfalo"
            className="hover:scale-125 transition-all duration-[100]"/>
          </Link>
           </div>
           <div className="bg-blue flex items-center justify-center border border-gray_smooth shadow-lg h-[190px] md:h-[220px] lg:md:h-[250px] w-[88px] md:w-[100px] lg:w-[118px] rounded-2xl">
          <Link href="/o-filho-do-grufalo">
          <h1 className="text-[#AAF7FF] text-[1.1rem] md:text-[1.2rem] text-center pt-4 pb-2">
            O Filho do Grúfalo
          </h1>
          <Image
            src={Filho} width={64} height={64}
            alt="O Filho do Grúfalo"
            className="hover:scale-125 transition-all duration-[100]"/>
          </Link>
           </div>
        
        
        
       
        
        
      </div>    
    </section>
  );
}

export default Livros;