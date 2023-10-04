import React from "react";
const Processo = () => {
  return (
    <section
      id="processo"
      className="bg-[url('/assets/images/sobre/bg_processo.svg')] bg-center bg-cover flex flex-col justify-center min-h-[493px] w-full">
        <div className="flex flex-col justify-center items-center">
        <p className="text-purple text-[3.4rem] lg:text-[4rem] pt-6">Nosso Processo</p>
        <p className="md:hidden text-purple font-aclonica text-[1.5rem] max-w-[260px] py-8">ETAPA I: Leitura a partir do livro físico e mídias digitais</p>
        <div className="md:hidden bg-white flex items-center justify-center border border-gray_smooth shadow-lg w-[80%] h-full rounded-2xl">
              <div className="flex px-6 py-6 lg:px-14">
                <p className="text-darkpurple text-[95%]">
                  O projeto começará com uma &apos;Maleta Viajante&apos; contendo um caderno (onde a família pode escrever e desenhar) e um livro de histórias para enriquecer o repertório das crianças. Inspirado pelo livro &apos;LER E ESCREVER NA EDUCAÇÃO INFANTIL: Discutindo Práticas Pedagógicas&apos;, disponibilizaremos livros de literatura infantil para dar acesso a um valioso patrimônio cultural de diferentes culturas e épocas.
                 </p>
              </div>
            </div>
          <div className="hidden md:block pt-12">
          <div className="grid grid-cols-2 gap-2">
          <p className="justify-self-center text-purple font-aclonica md:text-[1.6rem] lg:text-[1.8rem] max-w-[350px] py-12 pl-12">ETAPA I: Leitura a partir do livro físico e mídias digitais</p>
          <div className="bg-white flex items-center justify-center border border-gray_smooth shadow-lg w-[90%] h-[90%] rounded-2xl">
              <div className="flex px-6 py-6">
                <p className="text-darkpurple text-[1rem] lg:text-[1.18rem]">
                  O projeto começará com uma &apos;Maleta Viajante&apos; contendo um caderno (onde a família pode escrever e desenhar) e um livro de histórias para enriquecer o repertório das crianças. Inspirado pelo livro &apos;LER E ESCREVER NA EDUCAÇÃO INFANTIL: Discutindo Práticas Pedagógicas&apos;, disponibilizaremos livros de literatura infantil para dar acesso a um valioso patrimônio cultural de diferentes culturas e épocas.
                 </p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>    
  );
};

export default Processo;
