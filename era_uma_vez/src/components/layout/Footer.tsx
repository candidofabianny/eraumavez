import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const Logo = "/assets/icons/logo.svg";
  return (
    <footer className="w-full">
      <div className="flex flex-col gap-6 pl-[30px] mx-auto justify-between py-16 bg-[#9B90D3] md:flex-row md:pl-[48px] md:pr-[60px] lg:pr-[115px] lg:pl-[83px]">
        <div className="flex flex-col">
          <div className="hidden md:flex md:gap-2 md:mt-6">
            <Link href="/" className="">
              <Image
                src={Logo}
                alt="era uma vez icon"
                width={82}
                height={82}
              />
            </Link>
          </div>
        </div>
        <ul className="flex flex-col gap-3">
          <h3 className="block text-yellow font-aclonica lg:text-[1.5rem] text-[#9EA7AD] mb-2">
            literatura
          </h3>
          <li className="foot_link text-[1.5rem] md:text-base text-white">
            <Link href="/" className="hover:text-yellow">
              Ler
            </Link>
          </li>
          <li className="foot_link text-[1.5rem] md:text-base text-white">
            <Link href="/" className="hover:text-yellow">
              Assistir
            </Link>
          </li>
          <li className="foot_link text-[1.5rem] md:text-base text-white">
            <Link href="/" className="hover:text-yellow">
              Escutar
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <h3 className="block font-aclonica text-yellow lg:text-[1.5rem] text-[#9EA7AD] mb-2">
            links Importantes
          </h3>
          <li className="foot_link text-[1.5rem] md:text-base text-white hover:text-yellow">
              <Link href="/">Sobre Nós</Link>
          </li>
          <li className="foot_link text-[1.5rem] md:text-base text-white hover:text-yellow">
              <Link href="/">CMEI</Link>
          </li>
        </ul>
        <div className="md:hidden flex justify-center md:gap-2 md:mt-6">
            <Link href="/" className="">
              <Image
                src={Logo}
                alt="era uma vez icon"
                width={62}
                height={62}
              />
            </Link>
          </div>
      </div>
      
      <div className="hidden md:flex justify-between mx-auto gap-2 text-grey bg-[#6354AD] py-5">
        <p className="mx-20">2023 ©️ Era uma vez</p>
        <p className="mx-20">Desenvolvido por fc Global tech</p>
      </div>
      <div className="md:hidden flex justify-center mx-auto gap-2 text-grey bg-[#6354AD] py-5">
        <p className="mx-20">2023 ©️ Era uma vez</p>
      </div>      
    </footer>
  );
};

export default Footer;