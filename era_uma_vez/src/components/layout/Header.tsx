"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/icons/logo.svg"
const Header = () => {
  return (
    <header className="w-full py-1 fixed top-0 bg-opacity-95 bg-grey">
    <nav className="w-full mx-auto flex items-center justify-center">
        <ul className="flex items-center gap-6 md:gap-7">
          <li>
          <Link href="/" type="button" className="bg-transparent hover:scale-105 transition-all duration-[100]">
            <Image
            src={logo}
            width={45}
            height={62}
            alt="site logo"
            className=""/>    
            </Link>     
          </li>
          <li>
            <Link href="/ler" className="text-purple hover:text-red transition-all duration-300 ease-in-out text-[1rem] md:text[1.25rem] lg:text-[1.5rem]">
              Ler
            </Link>
          </li>
          <li>
            <Link href="/assistir" className="text-purple hover:text-red transition-all duration-300 ease-in-out text-[1rem] md:text[1.25rem] lg:text-[1.5rem]">
              Assistir
            </Link>
          </li>
          <li>
            <Link href="/sobre-nos" className="font-aclonica text-purple hover:text-red transition-all duration-300 ease-in-out text-[1rem] lg:text-[1.25rem]">
              Sobre Nós
            </Link>
          </li>
          <li>
          <Link href="/ouvir" className="text-purple hover:text-red transition-all duration-300 ease-in-out text-[1rem] md:text[1.25rem] lg:text-[1.5rem]">
              Escutar
            </Link>
          </li>
        </ul>      
    </nav>
    </header>
  );
};

export default Header;
