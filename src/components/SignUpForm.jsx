import React from "react";
import loginimg from "../assets/images/loginimg.png";

const InputField = ({ label, value }) => (
  <div className="mt-5">
    <label className="text-sm leading-5">{label}</label>
    <div className="flex flex-col justify-center px-3.5 py-2.5 mt-2 text-gray-500 whitespace-nowrap rounded-lg border border-gray-300 border-solid">
      <input className="outline-none input" type="text" placeholder={value} />
    </div>
  </div>
);

const SignupForm = () => {
  const inputFields = [
    { label: "Full name*", value: "Suman Shah" },
    { label: "Email*", value: "suman.12@example.com" },
    { label: "Company name*", value: "Openturf" },
  ];

  return (
    <div className="px-5 mt-10 sm:px-10 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[34%] max-md:w-full">
          <div className="text-base font-medium grow text-zinc-800 max-md:mt-10">
            <h1 className="text-4xl font-bold tracking-wide capitalize">
              Sign-up
            </h1>
            <p className="mt-2 text-gray-500 leading-[150%]">
              Please fill your contact details.
            </p>

            {inputFields.map((field, index) => (
              <InputField key={index} {...field} />
            ))}

            <div className="flex gap-2 mt-5 text-sm leading-5 text-blue-500">
              <input
                type="checkbox"
                className="w-4 h-4 my-auto border border-gray-300 border-solid rounded shrink-0"
              />{" "}
              <p className="flex-auto">
                I agree to <span className="text-blue-500">terms</span> and{" "}
                <span className="text-blue-500">policy statement</span>
              </p>
            </div>
            <button className="px-16 py-3 mt-8 text-white rounded-lg bg-zinc-800 max-md:px-5">
              Submit
            </button>
            <p className="self-center mt-8 text-sm leading-5 text-center text-blue-500">
              Already have an account{" "}
              <span className="text-blue-500">Sign-in</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:w-full">
          <img
            loading="lazy"
            src={loginimg}
            alt="side image"
            className="self-stretch my-auto w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
