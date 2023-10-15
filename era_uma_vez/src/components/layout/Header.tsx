"use client"

import Link from "next/link";
import Image from "next/image";
import Headroom from 'react-headroom';
import logo from "/public/assets/icons/logo.svg"
const Header = () => {
  return (
    <Headroom>
    <header className="w-full py-1 sticky z-index:100 top-0 bg-opacity-95 bg-grey">
    <nav className="w-full mx-auto flex items-center justify-center">
        <ul className="flex items-center gap-4 md:gap-7">
          <li>
          <Link href="/" type="button" className="bg-transparent hover:scale-105 transition-all duration-[100]">
            <Image
            src={logo} width={35} height={60} alt="site logo"/>    
            </Link>     
          </li>
          <li>
            <Link href="/ler" className="text-purple hover:text-red transition-all duration-300 ease-in-out text-[0.95rem] md:text[1.25rem] lg:text-[1.5rem]">
              Ler
            </Link>
          </li>
          <li>
            <Link href="/assistir" className="text-purple hover:text-red transition-all duration-300 ease-in-out text-[0.95rem] md:text[1.25rem] lg:text-[1.5rem]">
              Assistir
            </Link>
          </li>
          <li>
            <Link href="/sobre-nos" className="font-aclonica text-purple hover:text-red transition-all duration-300 ease-in-out text-[0.9rem] lg:text-[1.25rem]">
              Sobre Nós
            </Link>
          </li>
          <li>
          <Link href="/escutar" className="text-purple hover:text-red transition-all duration-300 ease-in-out text-[0.95rem] md:text[1.25rem] lg:text-[1.5rem]">
              Escutar
            </Link>
          </li>
        </ul>      
    </nav>
    </header>
    </Headroom>
  );
};

export default Header;
