import linkedIn from "../../src/assets/linkredIn.svg";
import github from "../../src/assets/github.svg";
import twitter from "../../src/assets/twitter.svg";
import instagram from "../../src/assets/intagram.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import LoaderComp from "./LoaderComp";
import { useForm, ValidationError } from "@formspree/react";

const Connect = () => {
  const [submit, handleSubmit] = useForm("mjkeggyb");
  // const [loading, setLoading] = useState(false);
  const [connectForm, setConnectForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  if (submit.succeeded) {
    return <p>Thanks for your comment!</p>;
  }

  const handleChangeInForm = function (e) {
    e.preventDefault();

    setConnectForm({ ...connectForm, [e.target.name]: e.target.value });
  };

  // const submitComment = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     const res = await axios.post(
  //       "https://portfolio-website-pzn1.onrender.com/api/v1/comment",
  //       connectForm
  //     );

  //     setConnectForm({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });

  //     if (res?.data?.success) {
  //       toast.success("Thank you for your comment.");
  //     }

  //     setLoading(false);
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message || "An Error occured.");
  //     setLoading(false);
  //   }
  // };

  return (
    <footer
      id="contact"
      // onSubmit={submitComment}
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

      <form
        className=" flex flex-col items-start gap-6 md:min-w-2/5 lg:min-w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 text-start w-full">
          <label htmlFor="">Name</label>
          <input
            className="w-full bg-[#1A1A1A] h-11 rounded-[4px] px-4 py-2.5"
            type="text"
            name="name"
            id="name"
            value={connectForm.name}
            onChange={handleChangeInForm}
          />
          <ValidationError prefix="Name" field="name" errors={submit.errors} />
        </div>
        <div className="flex flex-col gap-2 text-start w-full">
          <label htmlFor="email">Email</label>
          <input
            className="w-full bg-[#1A1A1A] h-11 rounded-[4px] px-4 py-2.5"
            id="email"
            type="email"
            name="email"
            value={connectForm.email}
            onChange={handleChangeInForm}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={submit.errors}
          />
        </div>
        <div className="flex flex-col gap-2 text-start w-full">
          <label htmlFor="">Subject</label>
          <input
            className="w-full bg-[#1A1A1A] h-11 rounded-[4px] px-4 py-2.5"
            id="subject"
            type="text"
            name="subject"
            value={connectForm.subject}
            onChange={handleChangeInForm}
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={submit.errors}
          />
        </div>
        <div className="flex flex-col gap-2 text-start w-full">
          <label htmlFor="">Message</label>
          <textarea
            className="w-full bg-[#1A1A1A] max-h-[148px] rounded-[4px] px-4 py-2.5"
            type="text"
            id="message"
            name="message"
            value={connectForm.message}
            onChange={handleChangeInForm}
            cols="30"
            rows="15"
            maxLength="400"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={submit.errors}
          />
        </div>
        <button
          type="submit"
          disabled={submit.submitting}
          className="manrope flex items-center gap-3 px-6 py-2 md:px-8 md:py-3 rounded-4xl cursor-pointer bg-[#D3E97A] border-0 text-[#0A0A0A]"
        >
          <p className=" font-bold text-[16px] " style={{ color: "#0A0A0A" }}>
            SUBMIT
          </p>
          {/* {loading && (
            <div>
              <LoaderComp />
            </div>
          )} */}
        </button>
      </form>

      <p className="md:hidden">© 2025 Tabuke Ezekiel</p>
    </footer>
  );
};

export default Connect;
