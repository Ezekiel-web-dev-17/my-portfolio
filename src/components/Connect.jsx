import linkedIn from "../../src/assets/linkredIn.svg";
import github from "../../src/assets/github.svg";
import twitter from "../../src/assets/twitter.svg";
import instagram from "../../src/assets/intagram.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  const [connectForm, setConnectForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChangeInForm = function (e) {
    e.preventDefault();

    setConnectForm({ ...connectForm, [e.target.name]: e.target.value });
  };
  return (
    <footer className="flex flex-col md:flex-row md:justify-between md:min-w-1/2 text-start border-t-2 border-t-[#484848] py-16 px-5 md:px-20 gap-y-20">
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-4xl font-normal">LET'S CONNECT</h2>

        <p className="text-start leading-10">
          Say hello at{" "}
          <a
            href="mailto:tabukeezekiel9@gmail.com"
            className="underline underline-offset-4 decoration-[#D3E97A]"
          >
            tabukeezekiel9@gmail.com
          </a>
          <br />
          For more info, here's my{" "}
          <a
            href=""
            className="underline underline-offset-4 decoration-[#D3E97A]"
          >
            resume
          </a>
        </p>

        <div className="social-connect gap-9 mt-7 flex items-center">
          <Link to="">
            <img src={linkedIn} alt="" />
          </Link>
          <Link to="https://github.com/Ezekiel-web-dev-17/">
            <img src={github} alt="github social icon" />
          </Link>
          <Link to="">
            <img src={twitter} alt="twitter social icon" />
          </Link>
          <Link to="">
            <img src={instagram} alt="instagram social icon" />
          </Link>
        </div>

        <p className="hidden md:block mt-72">© 2025 Tabuke Ezekiel</p>
      </div>

      <form className=" flex flex-col items-start gap-6 md:min-w-1/2">
        <div className="flex flex-col gap-2 text-start w-full">
          <label htmlFor="">Name</label>
          <input
            className="w-full bg-[#1A1A1A] h-11 rounded-[4px] px-4 py-2.5"
            type="text"
            name="name"
            value={connectForm.name}
            onChange={handleChangeInForm}
          />
        </div>
        <div className="flex flex-col gap-2 text-start w-full">
          <label htmlFor="">Email</label>
          <input
            className="w-full bg-[#1A1A1A] h-11 rounded-[4px] px-4 py-2.5"
            type="email"
            name="email"
            value={connectForm.email}
            onChange={handleChangeInForm}
          />
        </div>
        <div className="flex flex-col gap-2 text-start w-full">
          <label htmlFor="">Subject</label>
          <input
            className="w-full bg-[#1A1A1A] h-11 rounded-[4px] px-4 py-2.5"
            type="text"
            name="subject"
            value={connectForm.subject}
            onChange={handleChangeInForm}
          />
        </div>
        <div className="flex flex-col gap-2 text-start w-full">
          <label htmlFor="">Message</label>
          <textarea
            className="w-full bg-[#1A1A1A] max-h-[148px] rounded-[4px] px-4 py-2.5"
            type="text"
            name="message"
            value={connectForm.message}
            onChange={handleChangeInForm}
            cols="30"
            rows="15"
            maxLength="400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 md:px-10 md:py-5 rounded-4xl font-bold text-[16px] bg-[#D3E97A] border-0 text-[#0A0A0A]"
        >
          SUBMIT
        </button>
      </form>

      <p className="md:hidden">© 2025 Tabuke Ezekiel</p>
    </footer>
  );
};

export default Connect;
