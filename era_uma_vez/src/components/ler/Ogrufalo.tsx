"use client";

import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Link from "next/link";

const OGrufalo = () => {
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
          fileUrl="assets\pdf\ogrufalo.pdf"
          plugins={[defaultLayoutPluginInstance]}/>
        </Worker>
        </div>
          <div className="w-3/4">
          <h1 className="text-purple mx-10 text-[2.8rem]">
            O Grúfalo
          </h1>
          <p className="mx-10 text-[1.1rem] py-4 underline">
          Julia Donaldson / Axel Scheffler
          </p>
          <p className="text-purple mx-10 lg:max-w-[900px] text-left text-[1.15rem]">
          Usando de astúcia e imaginação, um ratinho vai criando um monstro terrível e assustador, o grúfalo, e diverte-se espantando seus predadores. Mas qual não é o seu espanto ao ver sua imaginação personificada à sua frente. "O Grúfalo", de Julia Donaldson, é uma divertida fábula sobre os poderes da nossa imaginação. </p>
          <Link href="/ler">
           <div className="bg-yellow flex items-center justify-center border border-gray_smooth shadow-lg h-[50px] w-[120px] rounded-2xl">
             Voltar
           </div>
          </Link>
          </div>
          </div>
        </div>
        <div className="lg:hidden pb-8">
          <h1 className="text-purple mx-10 md:mx-14 pt-6 text-[2rem] md:text-[2.4rem]">
            O Grúfalo
          </h1>
          <p className="mx-10 md:mx-14 text-[0.9rem] md:text-[1.1rem] py-4 underline">
          Julia Donaldson / Axel Scheffler
          </p>
          <p className="text-purple mx-10 md:mx-14 text-[0.9rem] md:text-[1.1rem]">
          Usando de astúcia e imaginação, um ratinho vai criando um monstro terrível e assustador, o grúfalo, e diverte-se espantando seus predadores. Mas qual não é o seu espanto ao ver sua imaginação personificada à sua frente. "O Grúfalo", de Julia Donaldson, é uma divertida fábula sobre os poderes da nossa imaginação.</p>
        <div className="flex items-center justify-center pb-8">
        <div style={{
            height: '430px',
            width: '94%',}} className="px-4 pt-6">
        <Viewer
          fileUrl="assets\pdf\ogrufalo.pdf"
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

export default OGrufalo;
