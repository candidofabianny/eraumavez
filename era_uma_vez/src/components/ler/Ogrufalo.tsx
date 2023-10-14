"use client";

import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const OGrufalo = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return ( 
    <section
      id="importancia"
      className="bg-[#D4FBFF]/50 flex flex-col justify-center min-h-[600px] w-full">
        <div className="grid grid-cols-2 items-center justify-center">
        <div
        style={{
            height: '450px',
            width: '450px',}} className="pl-8">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl="assets\pdf\ogrufalo.pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
        </Worker>
        </div>
          <div>
          <h1 className="text-purple mx-10 text-[2rem]">
            O Grúfalo
          </h1>
          <p className="text-purple mx-10 lg:max-w-[900px] text-center md:text-left text-[1rem] md:text-[1.15rem]">
          Com um olhar sensível para o cotidiano das crianças, reconhecemos a importância de promover o interesse pela leitura e enriquecer seu repertório de histórias. Este projeto utiliza tecnologias digitais para tornar a leitura e a contação de histórias mais envolventes, alinhando-se com a inovação educacional em Curitiba.
          </p>
          </div>
        </div>
      </section>
  );
};

export default OGrufalo;
function toolbarPlugin() {
  throw new Error("Function not implemented.");
}

