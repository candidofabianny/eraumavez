import React from "react";
const EtapaV = () => {
  return (
    <section
      id="etapaV"
      className="bg-[url('/assets/images/sobre/bg_eV.svg')] bg-center bg-cover flex flex-col min-h-[400px] w-full">
        <div className="flex flex-col justify-center items-center pb-16">
        <p className="md:hidden text-purple font-aclonica text-[1.5rem] max-w-[260px] py-8">ETAPA V: Apresentação do robô e do livro criado pelas crianças</p>
        <div className="md:hidden bg-red flex items-center justify-center border border-gray_smooth shadow-lg w-[80%] h-full rounded-2xl">
              <div className="flex px-6 py-6 lg:px-14">
                <p className="text-white text-[95%]">
                Iremos preparar um ambiente acolhedor e interativo, valorizando o protagonismo das crianças. Nosso robô contador de histórias visitará todas as turmas para narrar as histórias criadas pelas crianças e mostrar os livros. Após todas as etapas, exibiremos o robô e os livros feitos no projeto no Hall de entrada da unidade, para que a comunidade possa apreciar o trabalho das crianças. </p> 
                </div>
            </div>
          <div className="hidden md:block pt-4">
          <div className="grid grid-cols-2 gap-2">
          <p className="justify-self-center text-purple font-aclonica md:text-[1.6rem] lg:text-[1.8rem] max-w-[350px] py-12 pl-12">ETAPA V: Apresentação do robô e do livro criado pelas crianças</p>
          <div className="bg-red flex items-center justify-center border border-gray_smooth shadow-lg w-[90%] h-[90%] rounded-2xl">
              <div className="flex px-6 py-6">
                <p className="text-white text-[1rem] lg:text-[1.18rem]">
                Iremos preparar um ambiente acolhedor e interativo, valorizando o protagonismo das crianças. Nosso robô contador de histórias visitará todas as turmas para narrar as histórias criadas pelas crianças e mostrar os livros. Após todas as etapas, exibiremos o robô e os livros feitos no projeto no Hall de entrada da unidade, para que a comunidade possa apreciar o trabalho das crianças. </p> 
                </div>
            </div>
            </div>
          </div>
        </div>
    </section>    
  );
};

export default EtapaV;
