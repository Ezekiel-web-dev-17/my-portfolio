import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import LoaderComp from "./LoaderComp";

const FormSpree = () => {
  const [submit, handleSubmit] = useForm("mjkeggyb");

  if (submit.succeeded) {
    return <p>Thanks for your comment!</p>;
  }

  return (
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
        />
        <ValidationError prefix="Email" field="email" errors={submit.errors} />
      </div>
      <div className="flex flex-col gap-2 text-start w-full">
        <label htmlFor="">Subject</label>
        <input
          className="w-full bg-[#1A1A1A] h-11 rounded-[4px] px-4 py-2.5"
          id="subject"
          type="text"
          name="subject"
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
        {submit.submitting && (
          <div>
            <LoaderComp />
          </div>
        )}
      </button>
    </form>
  );
};

export default FormSpree;
