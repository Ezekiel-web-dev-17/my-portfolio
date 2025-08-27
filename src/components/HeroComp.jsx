import linkedIn from "../../src/assets/linkredIn.svg";
import gitHub from "../../src/assets/github.svg";
import circle from "../../src/assets/circle.svg";
import up from "../../src/assets/contactup.svg";
import { Link } from "react-router-dom";

const HeroComp = () => {
  return (
    <header className="px-4 md:px-14 lg:px-20 flex flex-col gap-12 items-center py-15 md:flex-row">
      <div className="flex flex-col gap-2 text-start text-white">
        <h1 className="font-normal text-6xl">
          HI, I AM <br />
          TABUKE EZEKIEL.
        </h1>

        <p className="font-normal text-[16px] pe-3">
          A Sydney based front-end developer passionate about building
          accessible and user friendly websites.
        </p>

        <div className="flex gap-4 mt-6 items-center">
          <a href="#contact">
            <button
              type="button"
              className="bg-[#D3E97A] pe-1 ps-4 py-0.5 font-bold text-black text-[16px] flex gap-3 rounded-4xl max-h-fit text-nowrap items-center cursor-pointer"
            >
              Contact me
              <img className="md:hidden" src={up} alt="Call me up." />
              <img className="hidden md:block" src={circle} alt="circle icon" />
            </button>
          </a>
          <Link
            to="/linkedIn"
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
      <div className="hero-img w-full h-[400px] rounded-2xl md:w-2/3 lg:h-[700px]"></div>
    </header>
  );
};

export default HeroComp;
