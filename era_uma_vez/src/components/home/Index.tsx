import React from "react";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import MeetUs from "./MeetUs";
import CMEI from "./Cmei";

const Home = () => {
   return (
    <>
      <section className="w-full flex flex-col items-center">
      <link rel="shortcut icon" href="./assets/icons/logoaba.png" type="image/x-icon"></link>
        <Hero />
        <About />
        <Menu />
        <MeetUs />
        <CMEI />
      </section>
     </>
  );
};

export default Home;
