import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col md:flex-row md:px-14 lg:px-20 md:justify-between items-start gap-8 py-16 px-4"
    >
      <h2
        className="font-normal text-[43px] experience text-nowrap"
        style={{ lineHeight: "100%", letterSpacing: "-2%" }}
      >
        MY EXPERIENCE
      </h2>

      <div className="flex flex-col items-start gap-10 w-full md:w-2/5 lg:w-1/2">
        <div className="exp gap-3 flex flex-col items-start">
          <div className="exp-title flex flex-col md:flex-row md:w-full md:justify-between gap-3 text-start">
            <h5
              className="manrope font-medium text-[18px]"
              style={{ lineHeight: "130%" }}
            >
              Freelance Developer
            </h5>
            <p
              className="manrope font-normal text-[16px] text-nowrap"
              style={{ lineHeight: "160%" }}
            >
              Apr 2025 — Present
            </p>
          </div>

          <p
            className="text-[16px] manrope font-normal text-start"
            style={{ lineHeight: "160%" }}
          >
            Building and maintaining web applications for small businesses and
            personal clients. Focused on developing secure backends with
            Node.js, Express, and MongoDB, while also handling responsive
            frontends in React and Tailwind CSS. Projects include chat apps,
            Betahouse Housing website, and Order Manager API with features like
            authentication, dynamic content, and shareable UIs. Collaborating
            with clients to turn ideas into working solutions while improving
            performance and scalability.
          </p>
        </div>
        <div className="exp gap-3 flex flex-col items-start">
          <div className="flex flex-col items-start gap-1 md:w-full">
            <div className="exp-title flex flex-col md:flex-row md:w-full md:justify-between gap-3 text-start">
              <h5
                className="manrope font-medium text-[18px]"
                style={{ lineHeight: "130%" }}
              >
                Full-Stack Developer Trainee
              </h5>
              <p
                className="manrope font-normal text-[16px] text-nowrap"
                style={{ lineHeight: "160%" }}
              >
                Oct 2024 — Mar 2025
              </p>
            </div>

            <p
              className="manrope font-semibold text-[16px]"
              style={{ lineHeight: "160%", color: "#d3e97a" }}
            >
              TechStudio Academy
            </p>
          </div>

          <p
            className="text-[16px] manrope font-normal text-start"
            style={{ lineHeight: "160%" }}
          >
            Completed an intensive 6-month full-stack bootcamp covering
            JavaScript, React, Node.js, MongoDB, Git, and Postman. Worked on
            individual and collaborative projects, from building responsive
            portfolios to creating dynamic applications with APIs and
            authentication. Developed a strong foundation in debugging,
            problem-solving, and clean coding practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
