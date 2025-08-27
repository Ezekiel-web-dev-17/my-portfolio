import React from "react";

const Experience = () => {
  return (
    <section className="flex flex-col md:flex-row md:px-14 lg:px-20 md:justify-between items-start gap-8 py-16 px-4">
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
              Nov 2023 — Present{" "}
            </p>
          </div>

          <p
            className="text-[16px] manrope font-normal text-start"
            style={{ lineHeight: "160%" }}
          >
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="exp gap-3 flex flex-col items-start">
          <div className="flex flex-col items-start gap-1 md:w-full">
            <div className="exp-title flex flex-col md:flex-row md:w-full md:justify-between gap-3 text-start">
              <h5
                className="manrope font-medium text-[18px]"
                style={{ lineHeight: "130%" }}
              >
                Front-End Intern
              </h5>
              <p
                className="manrope font-normal text-[16px] text-nowrap"
                style={{ lineHeight: "160%" }}
              >
                Sep 2023 — Nov 2023
              </p>
            </div>

            <p
              className="manrope font-semibold text-[16px]"
              style={{ lineHeight: "160%", color: "#d3e97a" }}
            >
              Roos Tech
            </p>
          </div>

          <p
            className="text-[16px] manrope font-normal text-start"
            style={{ lineHeight: "160%" }}
          >
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
