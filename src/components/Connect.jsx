import linkedIn from "../../src/assets/linkredIn.svg";
import github from "../../src/assets/github.svg";
import twitter from "../../src/assets/twitter.svg";
import instagram from "../../src/assets/intagram.svg";
import { Link } from "react-router-dom";
import FormSpree from "./FormSpree";

const Connect = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col md:flex-row md:justify-between md:min-w-1/2 text-start border-t-2 border-t-[#484848] py-16 px-5 md:px-14 lg:px-20 gap-y-20"
    >
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-4xl font-normal">LET'S CONNECT</h2>

        <p className="text-start leading-10">
          Say hello at{" "}
          <a
            href="mailto:tabukeezekiel9@gmail.com"
            className="underline underline-offset-4 decoration-[#D3E97A] cursor-pointer"
          >
            tabukeezekiel9@gmail.com
          </a>
          <br />
          For more info, here's my{" "}
          <a
            className="underline underline-offset-4 decoration-[#D3E97A] cursor-pointer"
            href="/Resume.docx"
            download="Ezekiel's RESUME"
          >
            resume
          </a>
        </p>

        <div className="social-connect gap-9 mt-7 flex items-center">
          <Link to="https://www.linkedin.com/in/tabuke-ezekiel-622792340">
            <img src={linkedIn} alt="linkedIn icon" />
          </Link>
          <Link to="https://github.com/Ezekiel-web-dev-17/">
            <img src={github} alt="github social icon" />
          </Link>
          <Link to="https://x.com/Ezekiel70993598?t=zGZMp67XH57krvqhsi9Qyg&s=09">
            <img src={twitter} alt="twitter social icon" />
          </Link>
          <Link to="https://www.instagram.com/sebastian_172001?utm_source=qr&igsh=dWVvNTBpamFuaXc4">
            <img src={instagram} alt="instagram social icon" />
          </Link>
        </div>

        <p className="hidden md:block mt-72">© 2025 Tabuke Ezekiel</p>
      </div>

      <FormSpree />

      <p className="md:hidden">© 2025 Tabuke Ezekiel</p>
    </footer>
  );
};

export default Connect;
