import React from "react";
import About from "../components/About";
import Featured from "../components/Featured";
import HeroComp from "../components/HeroComp";

const Home = () => {
  return (
    <main>
      <HeroComp />
      <Featured />
      <About />
    </main>
  );
};

export default Home;
