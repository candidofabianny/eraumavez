"use client";

import Image from "next/image";
import 'swiper/css/bundle';
import joana from "public/assets/images/ler/joaninha_book.png";
import Maricota from "public/assets/images/ler/vovozinha_book.png";
import Sanduiche from "public/assets/images/ler/galinha_book.png";
import Cachinhos from "public/assets/images/ler/cachinhos_book.png";
import Grufalo from "public/assets/images/ler/grufalo_cover.png";
import Filho from "public/assets/images/ler/filho_cover.png";
import Livro from "public/assets/images/ler/familia_book.png";
import Monstro from "public/assets/images/ler/monstro_book.png";
import Link from "next/link";

function Livros() {
  return (
    <section id="livros" className="flex flex-col bg-[url('/assets/images/ler/bg_livros.png')] bg-cover bg-center items-center w-full py-16 min-h-screen">
      <h2 className="text-[1.3rem] lg:text-[2rem] px-4 pb-12 text-center text-purple">
      Aqui se encontram PDF’s para baixar ou ler online
        </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-18 justify-items">
        <div className="flex flex-col items-center">
          <Link href="/joaninha-que-perdeu-pintinhas">
          <Image
            src={joana} width={75} height={300}
            alt="A Joaninha que perdeu as Pintinhas"
            className="md:w-[102px] md:h-[240px] lg:w-[118px] lg:h-[250px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
          <h1 className="font-aclonica text-darkpurple text-[0.75rem] text-center pt-4 max-w-[100px]">A Joaninha que perdeu as Pintinhas</h1>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/dona-maricota">
          <Image
            src={Maricota} width={75} height={305}
            alt="A Cesta de Dona Maricota"
            className="md:w-[102px] md:h-[240px] lg:w-[118px] lg:h-[250px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
          <h1 className="font-aclonica text-darkpurple text-[0.75rem] text-center pt-4 max-w-[100px]">A Cesta de Dona Maricota</h1>
        </div>
        <div className="flex flex-col items-center">
          <Link href="o-sanduiche-da-maricota">
          <Image
            src={Sanduiche} width={75} height={300}
            alt="O Sanduíche da Maricota"
            className="md:w-[102px] md:h-[240px] lg:w-[118px] lg:h-[250px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
          <h1 className="font-aclonica text-darkpurple text-[0.75rem] text-center pt-4 max-w-[100px]">O Sanduíche da Maricota</h1>
        </div>
        <div className="flex flex-col items-center">
          <Link href="cachinhos">
          <Image
            src={Cachinhos} width={75} height={300}
            alt="Cachinhos, conchinas, flores e ninhos"
            className="md:w-[102px] md:h-[240px] lg:w-[118px] lg:h-[250px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
          <h1 className="font-aclonica text-darkpurple text-[0.75rem] text-center pt-4 max-w-[120px]">Cachinhos, Conchinas, Flores e Ninhos</h1>
        </div>
        <div className="flex flex-col items-center">
          <Link href="o-grufalo">
          <Image
            src={Grufalo} width={75} height={300}
            alt="O Grúfalo"
            className="md:w-[102px] md:h-[240px] lg:w-[118px] lg:h-[250px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
          <h1 className="font-aclonica text-darkpurple text-[0.75rem] text-center pt-4 max-w-[120px]">O Grúfalo</h1>
        </div>
        <div className="flex flex-col items-center">
          <Link href="filho-grufalo">
          <Image
            src={Filho} width={75} height={300}
            alt="O Filho do Grúfalo"
            className="md:w-[102px] md:h-[240px] lg:w-[118px] lg:h-[250px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
          <h1 className="font-aclonica text-darkpurple text-[0.75rem] text-center pt-4 max-w-[120px]">O Filho do Grúfalo</h1>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/livro-familia">
          <Image
            src={Livro} width={75} height={300}
            alt="O Livro da Família"
            className="md:w-[102px] md:h-[240px] lg:w-[118px] lg:h-[250px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
          <h1 className="font-aclonica text-darkpurple text-[0.75rem] text-center pt-4 max-w-[120px]">O Livro da Família</h1>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/monstro-das-cores">
          <Image
            src={Monstro} width={75} height={300}
            alt="O Monstro das Cores"
            className="md:w-[102px] md:h-[240px] lg:w-[118px] lg:h-[250px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
          <h1 className="font-aclonica text-darkpurple text-[0.75rem] text-center pt-4 max-w-[120px]">O Monstro das Cores</h1>
        </div>
      </div>    
    </section>
  );
}

export default Livros;