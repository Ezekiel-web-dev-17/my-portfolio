import React from "react";
import capabilties from "/img8.jpg";
import large from "/img7.jpg";
import large2 from "/img8.jpg";

const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className="capabilites py-15 px-4 md:px-14 xl:px-20 flex flex-col gap-6 md:gap-10 border-b-2 border-b-[#484848]"
    >
      <div>
        <div className="hidden min-[380px]:flex items-center place-content-center gap-9 max-h-[400px] overflow-y-hidden w-full">
          <img src={large} className="rounded-2xl w-5/12" height="400px" />
          <img src={large2} className="rounded-2xl w-5/12" height="400px" />
        </div>
        <img
          src={capabilties}
          className="rounded-2xl max-h-[343px] min-[380px]:max-h-[470px] min-[380px]:hidden"
          width="100%"
          height="343px"
          alt="my capabilites image"
        />
      </div>
      <div className="capablities-main-con flex flex-col gap-4 md:flex-row md:justify-between items-start">
        <h2
          className="font-normal text-[43px] text-nowrap"
          style={{ lineHeight: "100%", letterSpacing: "-2%" }}
        >
          MY CAPABILITIES
        </h2>
        <div className="w-full text-start md:w-2/5 lg:w-1/2">
          <p className="font-normal text-[16px]" style={{ lineHeight: "160%" }}>
            I craft responsive and accessible interfaces with HTML, CSS,
            JavaScript, and React, turning designs into smooth, user-friendly
            experiences. On the back end, I work with Node.js and MongoDB to
            build APIs, manage authentication, and handle data securely. I
            prioritize clean, mobile-first layouts using tools like Tailwind CSS
            without sacrificing quality. Bugs don’t slow me down—I approach
            problems methodically and deliver lasting solutions. Always
            learning, I’m expanding my skills with TypeScript, AI integrations,
            and modern development practices to stay adaptable in real-world
            projects.
          </p>
          <ul className="flex flex-4 gap-4 pt-6 flex-wrap manrope">
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              HTML
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              CSS
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              JAVASCRIPT
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              TYPESCRIPT
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              REACT
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              PYTHON
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              BOOTSTRAP CSS
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-nowrap text-[16px] manrope font-bold">
              TAILWIND CSS
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-nowrap text-[16px] manrope font-bold">
              GIT
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-nowrap text-[16px] manrope font-bold">
              GITHUB
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-nowrap text-[16px] manrope font-bold">
              MONGODB
            </li>
            <li className="cursor-pointer rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-nowrap text-[16px] manrope font-bold">
              STRIPE
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
