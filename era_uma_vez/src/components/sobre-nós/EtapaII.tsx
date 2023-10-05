import React from "react";
const EtapaII = () => {
  return (
    <section
      id="etapaII"
      className="bg-[url('/assets/images/sobre/bg_eII.png')] bg-center bg-cover flex flex-col md:min-h-[284px] w-full">
        <div className="flex flex-col items-center pt-6">
        <p className="md:hidden text-purple font-aclonica text-[1.5rem] max-w-[260px] py-8">ETAPA II: Contação de histórias utilizando diferentes recursos</p>
        <div className="md:hidden bg-[#FCDB39] flex items-center justify-center border border-gray_smooth shadow-lg w-[80%] h-full rounded-2xl">
            <div className="flex px-6 py-6 lg:px-14">
              <p className="text-darkpurple text-[95%]">
                Nesta segunda etapa, usaremos recursos variados, como palitoches, fantoches, histórias na lata, tecidos e mais, para contar histórias de maneiras diferentes. Durante rodas de conversa, faremos perguntas às crianças sobre o que mais gostaram na história, seus personagens favoritos e outras questões.
               </p>
              </div>
            </div>
          <div className="hidden md:block">
          <div className="grid grid-cols-2 pl-20">
          <div className="bg-[#FCDB39] flex items-center justify-center border border-gray_smooth shadow-lg w-[95%] h-full rounded-2xl">
              <div className="flex px-6 py-6">
                <p className="text-[#2D2361] text-[1rem] lg:text-[1.18rem]">
                Nesta segunda etapa, usaremos recursos variados, como palitoches, fantoches, histórias na lata, tecidos e mais, para contar histórias de maneiras diferentes. Durante rodas de conversa, faremos perguntas às crianças sobre o que mais gostaram na história, seus personagens favoritos e outras questões.
                </p>
              </div>
            </div>
          <p className="justify-self-center text-purple font-aclonica md:text-[1.6rem] lg:text-[1.8rem] max-w-[350px] pt-8">ETAPA II: Contação de histórias utilizando diferentes recursos</p>
            </div>
          </div>
        </div>
    </section>    
  );
};

export default EtapaII;
