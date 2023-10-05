import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const Logo = "/assets/icons/logo.svg";
  return (
    <footer className="w-full">
      <div className="hidden md:flex flex-col mx-auto justify-between py-6 bg-[#9B90D3] md:flex-row md:pl-[48px] md:pr-[60px] lg:pr-[115px] lg:pl-[83px]">
        <div className="flex flex-col w-1/3">
          <div className="flex md:gap-2 md:mt-6">
            <Link href="/" className="">
              <Image
                src={Logo}
                alt="era uma vez icon"
                width={82} height={82}/>
            </Link>
          </div>
        </div>
        <ul className="flex flex-col gap-3">
          <li className="block text-yellow font-aclonica text-[1.2rem] text-[#9EA7AD] mb-1">
            literatura
          </li>
          <li className="foot_link text-[1rem] text-white">
            <Link href="/ler" className="hover:text-yellow">
              Ler
            </Link>
          </li>
          <li className="foot_link text-[1rem] text-white">
            <Link href="/assistir" className="hover:text-yellow">
              Assistir
            </Link>
          </li>
          <li className="foot_link text-[1rem] text-white">
            <Link href="/escutar" className="hover:text-yellow">
              Escutar
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="block font-aclonica text-yellow text-[1.2rem] text-[#9EA7AD] mb-1">
            links Importantes
          </li>
          <li className="foot_link text-[1rem] text-white hover:text-yellow">
              <Link href="/sobre-nos">Sobre Nós</Link>
          </li>
          <li className="foot_link text-[1rem] text-white hover:text-yellow">
              <Link href="https://educacao.curitiba.pr.gov.br/noticias/unidade/moradias-iguacu-centro-municipal-de-educacao-infantil/18298" target="_blank">CMEI</Link>
          </li>
        </ul>
      </div>
      
      <div className="md:hidden flex flex-colum-2 pl-[18px] justify-around py-10 bg-[#9B90D3]">
        <ul className="flex flex-col gap-2">
          <li className="block text-yellow font-aclonica lg:text-[1.5rem] text-[#9EA7AD]">
            literatura
          </li>
          <li className="foot_link text-[1.5rem] text-white">
            <Link href="/ler" className="hover:text-yellow">
              Ler
            </Link>
          </li>
          <li className="foot_link text-[1.5rem] text-white">
            <Link href="/assistir" className="hover:text-yellow">
              Assistir
            </Link>
          </li>
          <li className="foot_link text-[1.5rem] text-white">
            <Link href="/escutar" className="hover:text-yellow">
              Escutar
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="block font-aclonica text-yellow lg:text-[1.5rem] text-[#9EA7AD] mb-1">
            links Importantes
          </li>
          <li className="foot_link text-[1.5rem] md:text-base text-white hover:text-yellow">
              <Link href="/sobre-nos">Sobre Nós</Link>
          </li>
          <li className="foot_link text-[1.5rem] md:text-base text-white hover:text-yellow">
              <Link href="https://educacao.curitiba.pr.gov.br/noticias/unidade/moradias-iguacu-centro-municipal-de-educacao-infantil/18298" target="_blank">CMEI</Link>
          </li>
        </ul>
      </div>
      
      <div className="hidden md:flex justify-between mx-auto gap-2 text-grey bg-[#6354AD] py-4">
        <p className="mx-20">2023 ©️ Era uma vez</p>
        <p className="mx-20">Desenvolvido por fc Global tech</p>
      </div>
      <div className="md:hidden flex justify-center mx-auto gap-2 text-grey bg-[#6354AD] py-4">
        <p className="mx-20">2023 ©️ Era uma vez</p>
      </div>      
    </footer>
  );
};

export default Footer;