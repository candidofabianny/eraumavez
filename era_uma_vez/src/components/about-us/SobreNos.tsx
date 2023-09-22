import React from "react";
import { useRef } from "react";
import MeetUs from "../home/MeetUs";
import CMEI from "../home/Cmei";


const SobreNos = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <section className="w-full flex flex-col items-center" ref={servicesRef}>
        <MeetUs />
        <CMEI />
      </section>
     </>
  );
};

export default SobreNos;
