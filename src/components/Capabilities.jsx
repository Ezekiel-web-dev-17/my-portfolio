import React from "react";
import capabilties from "/img8.jpg";
import large from "/img7.jpg";

const Capabilities = () => {
  return (
    <section className="capabilites py-15 px-4 xl:px-14 flex flex-col gap-6 xl:gap-10 border-b-2 border-b-[#484848]">
      <picture>
        <source
          media="(min-width: 1270px)"
          srcset={large}
          height="100%"
          width="100%"
        />
        <img
          src={capabilties}
          className="rounded-2xl max-h-[343px] xl:max-h-[450px]"
          width="100%"
          height="343px"
          alt="my capabilites image"
        />
      </picture>
      <div className="capablities-main-con flex flex-col gap-4 lg:flex-row lg:justify-between items-start">
        <h2
          className="font-normal text-[43px] text-nowrap"
          style={{ lineHeight: "100%", letterSpacing: "-2%" }}
        >
          MY CAPABILITIES
        </h2>
        <div className="w-full text-start lg:w-1/2">
          <p className="font-normal text-[16px]" style={{ lineHeight: "160%" }}>
            I am always looking to add more skills.Morbi egestas neque eu
            blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
            purus faucibus tristique ut et dolor.
          </p>
          <ul className="flex flex-4 gap-4 pt-6 flex-wrap">
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848]">
              HTML
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848]">
              CSS
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848]">
              JAVASCRIPT
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848]">
              JQUERY
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848]">
              ACCESSIBILITY
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848]">
              FIGMA
            </li>
            <li className="rounded-4xl px-4 py-2 max-h-fit border-1 border-[#484848] text-nowrap">
              TAILWIND CSS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
