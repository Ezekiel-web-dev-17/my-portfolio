import React from "react";
import Capabilities from "../components/Capabilities";
import Experience from "../components/Experience";
import linkedIn from "../../src/assets/linkredIn.svg";
import gitHub from "../../src/assets/github.svg";
import circle from "../../src/assets/circle.svg";
import download from "../../src/assets/download.svg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <main>
      <section
        id="about"
        className="lg:mb-20 flex flex-col items-start md:flex-row md:justify-between pt-25 px-5 md:px-14 xl:px-20 gap-4 lg:gap-24"
      >
        <h1
          className="font-normal text-6xl lg:text-[101px] text-nowrap"
          style={{ lineHeight: "90%", letterSpacing: "0%" }}
        >
          ABOUT ME
        </h1>
        <div className="text text-start flex flex-col gap-6 w-full md:w-1/2 lg:w-3/5">
          <div className="text-desk flex flex-col gap-4">
            <strong
              className="font-medium text-2xl md:text-[32px] pe-10 manrope"
              style={{ lineHeight: "140%" }}
            >
              “The Developer I’m Becoming”— I am a Fullstack developer based in
              Nigeria. Has Computer Science background.{" "}
            </strong>
            <p
              className="text-[16px] lg:text-[18px] font-normal"
              style={{
                lineHeight: `${window.innerWidth <= 1270 ? "150%" : "160%"}`,
              }}
            >
              Hey, I’m Ezekiel 👋—a full-stack developer who made the leap into
              tech to create, not just consume, the web. I work with modern
              tools like React, Node.js, and TypeScript to build responsive,
              accessible, and user-friendly applications. My background outside
              tech sharpened my persistence and problem-solving skills, which
              now help me write clean, reliable code and tackle challenges with
              patience. I’ve built projects ranging from chat apps to URL
              shorteners, always focused on usability and real-world impact.
              Beyond coding, I’m continually learning, experimenting, and
              pushing myself to grow into a developer ready to take on
              meaningful remote roles.
            </p>
          </div>
          <div className="flex max-lg:justify-between lg:gap-4 mt-6 items-center">
            <a href="/Resume.docx" download="Ezekiel's Resume">
              <button
                type="button"
                className="bg-[#D3E97A] manrope pe-1 ps-4 py-0.5 font-bold text-black text-[14px] lg:text-[16px] flex gap-3 rounded-4xl max-h-fit text-nowrap items-center cursor-pointer max-[321px]:text-wrap"
              >
                DOWNLOAD RESUME
                <img
                  className="md:hidden bg-[#0a0a0a] p-2.5 rounded-full place-content-center"
                  src={download}
                  alt="Dowload resume Icon."
                />
                <img
                  className="hidden md:block"
                  src={circle}
                  alt="circle icon"
                />
              </button>
            </a>
            <Link
              to="https://www.linkedin.com/in/tabuke-ezekiel-622792340"
              className="bg-[#222222] p-2.5 rounded-full place-content-center"
            >
              <img
                src={linkedIn}
                width="24px"
                className="aspect-square"
                alt="Link to LinkedIn profile."
              />
            </Link>
            <Link
              to="https://github.com/Ezekiel-web-dev-17/"
              className="bg-[#222222] p-2.5 rounded-full place-content-center"
            >
              <img
                src={gitHub}
                width="24px"
                className="aspect-square"
                alt="Link to GitHub profile."
              />
            </Link>
          </div>
        </div>
      </section>
      <Capabilities />
      <Experience />
    </main>
  );
};

export default AboutMe;
