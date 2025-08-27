import React from "react";
import { Link } from "react-router-dom";
import me from "/img8.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row md:py-15 gap-16 px-4 md:px-14 xl:px-20 mb-4 xl:items-start xl:flex-row xl:justify-between xl:pt-20 xl:mb-44"
    >
      <h2
        className="hidden xl:block font-normal text-[101px] text-nowrap"
        style={{ lineHeight: "90%" }}
      >
        ABOUT ME
      </h2>
      <div className="text text-start flex flex-col gap-6 xl:w-3/5 xl:ps-9 manrope">
        <div className="text-desk flex flex-col gap-4">
          <strong
            className="hidden xl:block font-medium text-[32px]"
            style={{ lineHeight: "140%" }}
          >
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.{" "}
          </strong>
          <p className="text-[18px] font-normal" style={{ lineHeight: "150%" }}>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing.{" "}
          </p>
        </div>
        <Link
          to="/about-me"
          className="underline underline-offset-4 decoration-2 decoration-[#d3e97a] text-[14px] font-bold"
        >
          <p style={{ color: "#d3e97a" }}>MORE ABOUT ME</p>
        </Link>
      </div>

      <img
        className="xl:hidden max-h-[400px] w-full rounded-xl"
        src={me}
        alt="about me image"
      />
    </section>
  );
};

export default About;
