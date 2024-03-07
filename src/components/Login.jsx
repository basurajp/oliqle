import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import loginimg from "../assets/images/loginimg.png";

function Login() {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  return isLoggedIn ? (
    <div className="flex items-center justify-center px-4 py-12 md:px-5 max-md:px-5">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-col w-[34%] max-md:w-full">
          <form className="flex flex-col self-stretch my-auto text-base font-medium max-md:mt-10">
            <h1 className="text-4xl font-bold tracking-wide capitalize text-slate-700">
              Login
            </h1>
            <p className="mt-2 font-semibold text-gray-500 leading-[150%]">
              Let’s login to your Qliqle account.
            </p>
            <label
              htmlFor="emailInput"
              className="mt-8 text-sm leading-5 text-slate-700"
            >
              Email
            </label>
            <div className="flex flex-col justify-center mt-2 w-full text-gray-500  whitespace-nowrap rounded-lg border border-gray-300 border-solid leading-[150%]">
              <input
                id="emailInput"
                type="email"
                placeholder="debra.holt@example.com"
                className="w-full h-full px-1.5 py-1  outline-none"
              />
            </div>
            <button
              type="submit"
              className="items-center justify-center px-4 md:px-5 py-1.5 text-white rounded-lg mt-3.5 whitespace-nowrap bg-zinc-800 max-md:px-5 max-md:mt-10"
            >
              Submit
            </button>
            <div className="mt-1.75 leading-5 text-blue-500 whitespace-nowrap">
              <span className="text-sm leading-6 text-slate-700">
                Don’t have an account?
              </span>{" "}
              <span
                onClick={() => setisLoggedIn(!isLoggedIn)}
                className="text-sm text-blue-500"
              >
                Sign up
              </span>
            </div>
          </form>
        </div>
        <div className="flex flex-col ml-1.25 w-[66%] max-md:w-full">
          <img
            loading="lazy"
            src={loginimg}
            alt="Login visual representation"
            className="grow w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  ) : (
    <SignUpForm />
  );
}

export default Login;
