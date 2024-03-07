import React from "react";
import error from "../assets/images/error.png";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center h-full px-20 py-16 text-center text-white bg-zinc-800 sm:px-5">
      <img
        loading="lazy"
        src={error}
        className="mt-16 max-w-full aspect-[0.98] w-[351px] sm:mt-10"
        alt="error image "
      />
      <h1 className="mt-24 text-4xl font-bold tracking-wide capitalize sm:mt-10 sm:text-2xl">
        Oops...
      </h1>
      <p className="mt-2 text-base leading-6 sm:text-sm">
        Your account is not registered with us, please click on the below link
        to register!
      </p>
    </div>
  );
};

export default ErrorMessage;
