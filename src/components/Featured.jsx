import React from "react";
import gitHub from "../../src/assets/github.svg";
import liveArrow from "../../src/assets/greenLiveArrow.svg";
import betahouse3 from "/betahouse3.png";
import talkwebapp from "/talkwebapp.png";
import urlShortener from "/urlShortener.png";
import photographer from "/photographer.png";
import conference from "/conferenceticket.png";
import orderAPI from "/orderAPI.png";

const projectDetails = [
  {
    image: betahouse3,
    topic:
      "Betahouse Ecommerce website for making purchase of houses in Nigeria",
    details:
      "Built a sleek eCommerce platform from scratch, teaming up with a backend engineer to handle product management and payments. Shipped a mobile-first, fully responsive UI with real-time cart updates, boosting usability and conversions.",
    year: 2025,
    role: "Fullstack Developer",
    livelink: "https://betahouse3.vercel.app",
    gitHubLink: "https://github.com/Ezekiel-web-dev-17/betahouse3",
    extra: "Conceptual Work",
  },
  {
    image: talkwebapp,
    topic: "Talk chat app",
    details:
      "Built a real-time messaging app with authentication and instant message rendering—no refresh needed. Implemented JWT-based security, context-based state management, and Axios-powered API calls for smooth communication. Added routing and responsive UI to ensure seamless user experience across devices.",
    year: 2025,
    role: "Full-stack Developer",
    livelink: "https://talkwebapp.vercel.app",
    gitHubLink: "https://github.com/Ezekiel-web-dev-17/talkapp",
  },
  {
    image: orderAPI,
    topic: "Order Manager API",
    details:
      "The Orders API allows customers to place and manage their orders, while giving admins visibility and control over order tracking and updates. Each order is tied to one or more products, a receipt number, and customer details.",
    year: 2025,
    role: "Back-end Developer",
    livelink: "https://documenter.getpostman.com/view/41487666/2sB3BHmUu3",
    gitHubLink: "https://github.com/Ezekiel-web-dev-17/lasuGDG",
  },
  {
    image: urlShortener,
    topic: "Url shortener Project",
    details:
      "Developed a snappy URL shortener with a history feature, letting users track, copy, and manage their links with ease. Enhanced usability with toasts, confirmation dialogs, undo functionality, and slick animations. Designed the interface with TailwindCSS and React, blending performance with an intuitive, modern UI.",
    year: 2025,
    role: "Front-end Developer",
    livelink: "https://url-shortener-2-five.vercel.app",
    gitHubLink: "https://github.com/Ezekiel-web-dev-17/url-shortener-2",
  },
  {
    image: photographer,
    topic: "Photographer Portfolio Website",
    details:
      "Collaborated with a photographer to craft a modern portfolio site that showcased their work in the best light. Implemented smooth gallery transitions, lazy loading for performance, and a custom contact form for seamless client inquiries.",
    year: 2025,
    role: "Front-end Developer",
    livelink: "https://photographer-s-portfolio.vercel.app",
    gitHubLink:
      "https://github.com/Ezekiel-web-dev-17/photographer-s-portfolio",
  },
  {
    image: conference,
    topic: "Conference ticket generator",
    details:
      "Teamed up backend data with frontend design to deliver a dynamic ticket generator app. Pulled in attendee details (name, email, username) and rendered personalized tickets with responsive layouts. Integrated a shareable, print-ready design to create a professional, event-ready experience for users.",
    year: 2025,
    role: "Front-end Developer",
    livelink: "https://conference-ticket-generator-frontend.vercel.app",
    gitHubLink:
      "https://github.com/Ezekiel-web-dev-17/conference-ticket-generator-frontend",
    extra: "Challenge",
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
              className="md:flex flex-row justify-between items-center gap-12 manrope relative z-0"
            >
              {project.extra && (
                <div className="w-fit px-3 py-[6px] md:px-4 md:py-2 bg-[#0A0A0A] text-white font-medium text-xs md:text-[16px] absolute top-[10px] left-[10px] md:top-[16px] md:left-[16px] rounded-full z-10">
                  {project.extra}
                </div>
              )}
              <div className="md:min-w-1/2 rounded md:rounded-[12px] bg-[#424242] mb-7 py-12 px-6 md:px-14 md:py-36">
                <a href={project.livelink}>
                  <img
                    className="responsive rounded md:rounded-[12px] max-h-[247px] md:max-h-[306px] w-full cursor-pointer"
                    src={project.image}
                    alt="project image"
                  />
                </a>
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
                  <a
                    href={project.livelink}
                    className="border-b-2 pb-1 border-b-[#D3E97A] flex gap-1"
                  >
                    <p style={{ color: "#D3E97A" }}>LIVE DEMO</p>
                    <img src={liveArrow} width="22px" alt="link to live demo" />
                  </a>
                  <a
                    href={project.gitHubLink}
                    className="border-b-2 pb-1 border-b-[#D3E97A] flex gap-1"
                  >
                    <p style={{ color: "#D3E97A" }}> SEE ON GITHUB</p>
                    <img src={gitHub} width="22px" alt="link to github" />
                  </a>
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
