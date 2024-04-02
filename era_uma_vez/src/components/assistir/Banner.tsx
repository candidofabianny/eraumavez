import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section
      className="bg-[#9B90D3] flex flex-col justify-center items-center min-h-[150px] w-full">
      <div className="flex flex-col items-center justify-center text-center text-white p-4">
        <Link href="/assistir" className="text-[1.3rem] md:text-[1.6rem]">
        "Quando a gente se ajudam as peças se encaixam"
        </Link>
        <h1 className="pt-4 text-[0.9rem] md:text-[1.2rem]">
        Dia 02 de abril, dia mundial de conscientização do autismo.
        </h1>
      </div>
    </section>    
  );
};

export default Banner;
