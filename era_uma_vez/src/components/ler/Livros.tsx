"use client";

import Image from "next/image";
import 'swiper/css/bundle';
import grufalo from "public/assets/images/ler/ogrufalo.png"
import Link from "next/link";

function Livros() {
  return (
    <section id="livros" className="flex flex-col items-center w-full py-24 bg-gradient-to-r from-[#D4FBFF] via-[#D4FBFF]/50 to-[#92F0F9]/50 min-h-screen">
      <h2 className="text-[1.3rem] lg:text-[2rem] px-4 pb-14 text-center text-purple">
      Aqui se encontram PDF’s para baixar ou ler online
        </h2>
      <div className="max-w-5xl grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items">
        <div className="flex flex-col items-center">
          <h1 className="font-aclonica text-darkpurple text-[1.4rem] pb-6">O Grúfalo</h1>
          <Link href="o-grufalo">
          <Image
            src={grufalo} width={205} height={205}
            alt="O Grúfalo"
            className="lg:w-[226px] lg:h-[260px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-aclonica text-darkpurple text-[1.4rem] pb-6">O Grúfalo</h1>
          <Link href="o-grufalo">
          <Image
            src={grufalo} width={205} height={205}
            alt="O Grúfalo"
            className="lg:w-[226px] lg:h-[260px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
        </div><div className="flex flex-col items-center">
          <h1 className="font-aclonica text-darkpurple text-[1.4rem] pb-6">O Grúfalo</h1>
          <Link href="o-grufalo">
          <Image
            src={grufalo} width={205} height={205}
            alt="O Grúfalo"
            className="lg:w-[226px] lg:h-[260px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
        </div><div className="flex flex-col items-center">
          <h1 className="font-aclonica text-darkpurple text-[1.4rem] pb-6">O Grúfalo</h1>
          <Link href="o-grufalo">
          <Image
            src={grufalo} width={205} height={205}
            alt="O Grúfalo"
            className="lg:w-[226px] lg:h-[260px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
        </div><div className="flex flex-col items-center">
          <h1 className="font-aclonica text-darkpurple text-[1.4rem] pb-6">O Grúfalo</h1>
          <Link href="o-grufalo">
          <Image
            src={grufalo} width={205} height={205}
            alt="O Grúfalo"
            className="lg:w-[226px] lg:h-[260px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
        </div><div className="flex flex-col items-center">
          <h1 className="font-aclonica text-darkpurple text-[1.4rem] pb-6">O Grúfalo</h1>
          <Link href="o-grufalo">
          <Image
            src={grufalo} width={205} height={205}
            alt="O Grúfalo"
            className="lg:w-[226px] lg:h-[260px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
        </div><div className="flex flex-col items-center">
          <h1 className="font-aclonica text-darkpurple text-[1.4rem] pb-6">O Grúfalo</h1>
          <Link href="o-grufalo">
          <Image
            src={grufalo} width={205} height={205}
            alt="O Grúfalo"
            className="lg:w-[226px] lg:h-[260px] hover:scale-105 transition-all duration-[100]"/>
          </Link>
        </div>
      </div>
     
     
    </section>
  );
}

export default Livros;