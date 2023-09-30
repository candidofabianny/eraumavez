import React from "react";
const EtapaIII = () => {
  return (
    <section
      id="etapaIII"
      className="bg-[url('/assets/images/sobre/bg_eIII.svg')] bg-center bg-cover flex flex-col min-h-[288px] w-full">
        <div className="flex flex-col items-center pt-6">
        <div className="md:hidden bg-purple flex items-center justify-center border border-gray_smooth shadow-lg w-[80%] h-full rounded-2xl">
              <div className="flex px-6 py-6 lg:px-14">
                <p className="text-white text-[95%]">
                Visando a participação de toda unidade no projeto, iremos propor para que cada turma com suas determinadas professoras, criem uma história, a partir de relatos das crianças, e com os desenhos das mesmas. Posteriormente confeccionaremos um livro contendo todas as histórias criadas por cada turma. </p>
              </div>
            </div>
        <p className="md:hidden text-purple font-aclonica text-[1.5rem] max-w-[260px] py-8">ETAPA III: Envolvimento de toda unidade educacional</p>
          <div className="hidden md:block">
          <div className="grid grid-cols-2 pl-20">
          <p className="justify-self-center text-purple font-aclonica md:text-[1.6rem] lg:text-[1.8rem] max-w-[350px] pt-8">ETAPA III: Envolvimento de toda unidade educacional</p>
          <div className="bg-purple flex items-center justify-center border border-gray_smooth shadow-lg w-[95%] h-full rounded-2xl">
              <div className="flex px-6 py-6">
                <p className="text-white text-[1rem] lg:text-[1.18rem]">
                Visando a participação de toda unidade no projeto, iremos propor para que cada turma com suas determinadas professoras, criem uma história, a partir de relatos das crianças, e com os desenhos das mesmas. Posteriormente confeccionaremos um livro contendo todas as histórias criadas por cada turma.
                 </p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>    
  );
};

export default EtapaIII;
