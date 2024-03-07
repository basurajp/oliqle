import otpimg from "../assets/images/otpimg.png";

const SubmitButton = ({ text }) => (
  <button className="items-center justify-center px-16 py-3 mt-12 font-medium text-white rounded-lg whitespace-nowrap bg-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
    {text}
  </button>
);

const LoginOtp = () => {
  return (
    <div className="px-5 sm:px-16 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-base text-gray-500 mt-36 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-4xl font-bold tracking-wide capitalize text-slate-700 max-md:max-w-full">
              Hi Suman!
            </h1>
            <p className="mt-2 font-semibold leading-[150%] max-md:max-w-full">
              Please enter the OTP we have sent it on your Number “987654321”.
            </p>
            <input
              className="justify-center mt-8 text-6xl leading-6 text-center whitespace-nowrap rounded-lg border border-green-600 border-dashed tracking-[17.92px] max-md:px-5 max-md:max-w-1/2 max-md:text-4xl sm:w-1/2 w-full"
              placeholder="1234"
              maxLength="5"
            />

            <p className="mt-5 font-semibold leading-6 max-md:max-w-full">
              Note: <span>The OTP will expire in 10 minutes.</span>
            </p>
            <p className="leading-6 mt-9 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Viverra diam egestas velit risus sit magna auctor.
            </p>
            <SubmitButton text="Submit" />
          </div>
        </div>
        <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={otpimg}
            alt="OTP Verification"
            className="grow w-full aspect-[0.97] max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
