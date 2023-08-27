import React from "react";
import { useRef } from "react";
import Hero from "./Hero";


const Home = () => {
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
      <section className="w-full flex flex-col items-center gap-12 mb-16" ref={servicesRef}>
        <Hero />
      </section>
     </>
  );
};

export default Home;
