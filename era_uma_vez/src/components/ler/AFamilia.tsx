"use client";

import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Link from "next/link";

const AFamilia = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return ( 
    <section
      id="importancia"
      className="bg-[#D4FBFF]/50 flex flex-col justify-center min-h-[710px] w-full">
        <div className="hidden lg:block">
        <div className="flex items-center justify-center">
        <div
        style={{
            height: '590px',
            width: '90%',}} className="pl-10 py-6 w-1/4">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl="assets\pdf\o-livro-da-familia.pdf"
          plugins={[defaultLayoutPluginInstance]}/>
        </Worker>
        </div>
          <div className="w-3/4 mx-10">
          <h1 className="text-purple text-[2.8rem]">
          O Livro da Família
          </h1>
          <p className="text-[1.1rem] py-4 underline">
          Todd Parr
          </p>
          <p className="text-purple lg:max-w-[900px] text-left text-[1.15rem] pb-6">
          O livro da Família, de Todd Parr trabalha as diferenças das famílias, abordando assuntos de diferenças culturais e sociais. As cores fortes aproximam e chamam a atenção da criança. Parte dos direitos autorais e dos valores de venda deste livro é doada pelo autor Todd e pela Panda Books à Associação para crianças e adolescentes com câncer - TUCCA.</p>
          <Link href="/ler">
           <div className="bg-yellow flex items-center justify-center border border-gray_smooth shadow-lg h-[50px] w-[120px] rounded-2xl">
             Voltar
           </div>
          </Link>
          </div> 
          </div>
        </div>

        <div className="lg:hidden py-8">
          <h1 className="text-purple mx-10 md:mx-14 text-[2.2rem] md:text-[2.5rem]">
          O Livro da Família
          </h1>
          <p className="mx-10 md:mx-14 text-[1rem] md:text-[1.1rem] py-4 underline">
          Maurilo Andreas / Giselle Vargas
          </p>
          <p className="text-purple mx-10 md:mx-14 text-[1rem] md:text-[1.1rem]">
          O livro da Família, de Todd Parr trabalha as diferenças das famílias, abordando assuntos de diferenças culturais e sociais. As cores fortes aproximam e chamam a atenção da criança. Parte dos direitos autorais e dos valores de venda deste livro é doada pelo autor Todd e pela Panda Books à Associação para crianças e adolescentes com câncer - TUCCA.</p>
          <div className="flex items-center justify-center pb-8">
        <div style={{
            height: '430px',
            width: '94%',}} className="px-4 pt-6">
        <Viewer
          fileUrl="assets\pdf\o-livro-da-familia.pdf"
          plugins={[defaultLayoutPluginInstance]}/>
          <div className="py-8">
          <Link href="/ler">
           <div className="bg-yellow flex items-center justify-center border border-gray_smooth shadow-lg h-[50px] w-[120px] rounded-2xl">
             Voltar
           </div>
          </Link>
          </div>
        </div>
          </div>
        </div>
      </section>
  );
};

export default AFamilia;
