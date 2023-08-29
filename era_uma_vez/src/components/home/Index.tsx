import React from "react";
import { useRef } from "react";
import Hero from "./Hero";
import About from "./About";


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
      <section className="w-full flex flex-col items-center" ref={servicesRef}>
        <Hero />
        <About />
      </section>
     </>
  );
};

export default Home;
