import React from "react";
import capabilties from "/img8.jpg";
import large from "/img7.jpg";

const Capabilities = () => {
  return (
    <section className="capabilites py-15 px-4 md:px-14 xl:px-20 flex flex-col gap-6 md:gap-10 border-b-2 border-b-[#484848]">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={large}
          height="100%"
          width="100%"
        />
        <img
          src={capabilties}
          className="rounded-2xl max-h-[343px] md:max-h-[450px]"
          width="100%"
          height="343px"
          alt="my capabilites image"
        />
      </picture>
      <div className="capablities-main-con flex flex-col gap-4 md:flex-row md:justify-between items-start">
        <h2
          className="font-normal text-[43px] text-nowrap"
          style={{ lineHeight: "100%", letterSpacing: "-2%" }}
        >
          MY CAPABILITIES
        </h2>
        <div className="w-full text-start md:w-2/5 lg:w-1/2">
          <p className="font-normal text-[16px]" style={{ lineHeight: "160%" }}>
            I am always looking to add more skills.Morbi egestas neque eu
            blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
            purus faucibus tristique ut et dolor.
          </p>
          <ul className="flex flex-4 gap-4 pt-6 flex-wrap manrope">
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              HTML
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              CSS
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              JAVASCRIPT
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              JQUERY
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              ACCESSIBILITY
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-[16px] manrope font-bold">
              FIGMA
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-nowrap text-[16px] manrope font-bold">
              TAILWIND CSS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
