import React from "react";
const EtapaIII = () => {
  return (
    <section
      id="etapaIII"
      className="bg-[url('/assets/images/sobre/bg_eIII.png')] bg-center bg-cover flex flex-col min-h-[288px] w-full">
        <div className="flex flex-col justify-center items-center">
        <p className="md:hidden text-purple font-aclonica text-[1.5rem] max-w-[260px] py-8">ETAPA III: Confecção do livro</p>
        <div className="md:hidden bg-purple flex items-center justify-center border border-gray_smooth shadow-lg w-[80%] h-full rounded-2xl">
              <div className="flex px-6 py-6 lg:px-14">
                <p className="text-white text-[95%]">
                Juntamente com as crianças iremos realizar a confecção de um livro, o qual irá contar a história do robô. Com ilustrações feitas pelas próprias crianças da turma.</p>
              </div>
            </div>
          <div className="hidden md:block pt-4">
          <div className="grid grid-cols-2 gap-2">
          <p className="justify-self-center text-purple font-aclonica md:text-[1.6rem] lg:text-[1.8rem] max-w-[350px] py-12 pl-12">ETAPA III: Confecção do livro</p>
          <div className="bg-purple flex items-center justify-center border border-gray_smooth shadow-lg w-[90%] h-[90%] rounded-2xl">
              <div className="flex px-6 py-6">
                <p className="text-white text-[1rem] lg:text-[1.18rem]">
                Juntamente com as crianças iremos realizar a confecção de um livro, o qual irá contar a história do robô. Com ilustrações feitas pelas próprias crianças da turma.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>    
  );
};

export default EtapaIII;
