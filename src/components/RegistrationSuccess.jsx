import React from "react";
import sucess from "../assets/images/sucess.png";

const RegistrationSuccess = () => {
  return (
    <section className="flex items-center justify-center h-full px-16 text-base text-center text-white bg-zinc-800 sm:px-5">
      <article className="flex flex-col mt-20 max-w-full w-[682px] sm:mt-10">
        <img
          loading="lazy"
          src={sucess}
          alt="Registration successful"
          className="self-center max-w-full aspect-[0.92] w-[329px]"
        />
        <h2 className="mt-24 text-4xl font-bold tracking-wide capitalize sm:mt-10 sm:max-w-full">
          Success
        </h2>
        <p className="mt-2 leading-[150%] sm:max-w-full">
          Registered successfully. Please login to continue.
        </p>
        <div className="self-center mt-6 leading-6 tracking-widest text-blue-500">
          Go to{" "}
          <a
            href="/login"
            className="text-2xl font-bold tracking-widest text-blue-500"
          >
            login
          </a>
        </div>
      </article>
    </section>
  );
};

export default RegistrationSuccess;
