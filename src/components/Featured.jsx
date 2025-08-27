import React from "react";
import gitHub from "../../src/assets/github.svg";
import liveArrow from "../../src/assets/greenLiveArrow.svg";
import { Link } from "react-router-dom";
import projectImage from "/img7.jpg";

const projectDetails = [
  {
    image: projectImage,
    topic: "Promotional landing page for our favorite show",
    details:
      "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
    year: 2023,
    role: "Front-end Developer",
  },
  {
    image: projectImage,
    topic:
      "Betahouse Ecommerce website for making purchase of houses in Nigeria",
    details:
      "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
    year: 2025,
    role: "Fullstack Developer",
  },
  {
    image: projectImage,
    topic: "Space Tour",
    details: "A project from frontend mentor project.",
    year: 2024,
    role: "Front-end Developer",
  },
  {
    image: projectImage,
    topic: "Order Manager",
    details:
      "So the Admin can upload products, and view orders... User would pick what they want to buy, they checkout without payment but given some kind of reciept(with the unique no), to confirm their order in the database...(I can do the receipt). And they get a popup saying they would be contacted by the firm within 24hrs or if it urgent they should sent their reciept to the given contact infos",
    year: 2025,
    role: "Back-end Developer",
  },
  {
    image: projectImage,
    topic: "Url shortener Project",
    details:
      "A website for shorteneing Urls using TinyUrl api. A fully responsive website.",
    year: 2025,
    role: "Front-end Developer",
  },
];

const Featured = () => {
  return (
    <section
      id="work"
      className="px-4 md:px-14 lg:px-20 py-16 flex flex-col gap-16 border-y-2 border-y-[#484848]"
    >
      <div className="text-start gap-16 flex flex-col">
        <div className="gap-3 flex flex-col items-start">
          <h2
            className="text-4xl font-normal text-nowrap"
            style={{ letterSpacing: "-2%" }}
          >
            FEATURED PROJECTS
          </h2>
          <p
            className="md:w-1/2 text-[16px] font-normal"
            style={{ lineHeight: "160%" }}
          >
            Here are some of the selected projects that showcase my passion for
            full-stack web development.
          </p>
        </div>

        <div className="flex flex-col gap-30">
          {projectDetails.map((project, i) => (
            <div
              id={i}
              className="md:flex flex-row justify-between items-center gap-12 manrope"
            >
              <div className="md:min-w-1/2 rounded md:rounded-[12px] bg-[#424242] mb-7 py-12 px-6 md:px-14 md:py-36">
                <img
                  className="rounded md:rounded-[12px] max-h-[247px] md:max-h-[306px] w-full"
                  src={project.image}
                  alt="project image"
                />
              </div>
              <div className="flex flex-col gap-8 items-start md:w-1/2">
                <h3
                  className="font-medium text-2xl lg:text-3xl"
                  style={{ lineHeight: "140%" }}
                >
                  {project.topic}
                </h3>
                <p
                  className="text-[16px] font-normal"
                  style={{ lineHeight: "160%" }}
                >
                  {project.details}
                </p>

                <div className="project-info flex flex-col items-start w-full gap-3">
                  <div className=" pb-3">
                    <h4 className="font-semibold">PROJECT INFO</h4>
                  </div>
                  <div className="flex justify-between w-full py-3 border-y-2 border-y-[#484848] text-[16px] font-medium">
                    <h5>Year</h5>
                    <h5>{project.year}</h5>
                  </div>
                  <div className="flex justify-between w-full py-3 border-b-2 border-b-[#484848] text-[16px] font-medium">
                    <h5>Role</h5>
                    <h5>{project.role}</h5>
                  </div>
                </div>

                <div className="view-live flex gap-6 text-nowrap">
                  <Link
                    to=""
                    className="border-b-2 pb-1 border-b-[#D3E97A] flex gap-1"
                  >
                    <p style={{ color: "#D3E97A" }}>LIVE DEMO</p>
                    <img src={liveArrow} width="22px" alt="link to live demo" />
                  </Link>
                  <Link
                    to=""
                    className="border-b-2 pb-1 border-b-[#D3E97A] flex gap-1"
                  >
                    <p style={{ color: "#D3E97A" }}> SEE ON GITHUB</p>
                    <img src={gitHub} width="22px" alt="link to github" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
