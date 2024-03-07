import React from "react";

const Image = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const AccountNotRegistered = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8a7b94ae8cf1da50dd5ace2da6b647db2db631a1bf04ee89f1a2fae6a0d1a4c?apiKey=5f8c4fe300634568b94364c977f5430e&",
      alt: "Decorative Image",
      className: "mt-1.5 mr-5 w-8 aspect-square max-md:mr-2.5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8344fe91baf60a878463fda7b2069635073e1c928ef54bd68fd6982989f18faa?apiKey=5f8c4fe300634568b94364c977f5430e&",
      alt: "Account Registration Illustration",
      className:
        "self-center mt-16 max-w-full aspect-[0.98] w-[351px] max-md:mt-10",
    },
  ];

  return (
    <div className="flex flex-col items-center px-20 py-12 text-center text-white i bg-zinc-800 max-md:px-5">
      {images.map((image, index) => (
        <Image key={index} {...image} />
      ))}
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
