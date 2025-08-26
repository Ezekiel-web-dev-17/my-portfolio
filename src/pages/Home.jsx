import React from "react";
import About from "../components/About";
import Featured from "../components/Featured";
import HeroComp from "../components/HeroComp";

const Home = () => {
  return (
    <div>
      <HeroComp />
      <Featured />
      <About />
    </div>
  );
};

export default Home;
