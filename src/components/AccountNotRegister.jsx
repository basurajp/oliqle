import React from "react";
import error from "../assets/images/error.png";

const AccountNotRegistered = () => {
  return (
    <div className="flex flex-col items-center h-full px-20 py-12 text-center text-white i bg-zinc-800 max-md:px-5">
      <img src={error} alt="this  is an error image " />

      <h2 className="mt-24 mr-5 text-4xl font-bold tracking-wide capitalize max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        Oops...
      </h2>
      <p className="mt-2 mr-5 text-base leading-6 max-md:mr-2.5 max-md:max-w-full ">
        Your account is not registered with us, please click on the below link
        to register!
      </p>
    </div>
  );
};

export default AccountNotRegistered;
