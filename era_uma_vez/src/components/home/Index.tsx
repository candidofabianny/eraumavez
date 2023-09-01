import React from "react";
import { useRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import MeetUs from "./MeetUs";


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
        <Menu />
        <MeetUs />
      </section>
     </>
  );
};

export default Home;
