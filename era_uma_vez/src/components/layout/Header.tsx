"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/icons/logo.svg"
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-2 fixed top-0 bg-transparent">
    <nav className="w-full mx-auto flex items-center justify-center">
        {/* Desktop version */}
        <ul className="flex items-center gap-6 md:gap-8">
          <li>
          <button type="button" className="bg-transparent hover:scale-105 transition-all duration-[100]">
            <Image
            src={logo}
            width={50}
            height={82}
            alt="site logo"
            className=""/>    
            </button>     
          </li>
          <li>
            <Link href="/ler" className="text-purple hover:text-yellow transition-all duration-300 ease-in-out text-[1rem] lg:text-[1.25rem]">
              Ler
            </Link>
          </li>
          <li>
            <Link href="/assistir" className="text-purple hover:text-yellow transition-all duration-300 ease-in-out text-[1rem] lg:text-[1.25rem]">
              Assistir
            </Link>
          </li>
          <li>
            <Link href="/sobre_nós" className="font-aclonica text-purple hover:text-yellow transition-all duration-300 ease-in-out text-[1rem] lg:text-[1.18rem]">
              Sobre Nós
            </Link>
          </li>
          <li>
          <Link href="/ouvir" className="text-purple hover:text-yellow transition-all duration-300 ease-in-out text-[1rem] lg:text-[1.25rem]">
              Ouvir
            </Link>
          </li>
        </ul>      
    </nav>
    </header>
  );
};

export default Header;
