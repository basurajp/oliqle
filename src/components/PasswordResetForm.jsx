import setpassword from "../assets/images/setpassword.png";

const PasswordRequirements = () => {
  return (
    <div className="flex gap-2 mt-2.5">
      <div className="flex flex-col items-center my-auto basis-0"></div>
      <div className="flex-auto text-xs font-light leading-6 text-gray-500">
        Min password length- 8<br />
        Include at least one uppercase letter (A-Z).
        <br />
        Include at least one lowercase letter (a-z).
        <br />
        Include at least one number (0-9).
        <br />
        Include at least one special character.
      </div>
    </div>
  );
};

const PasswordResetForm = () => (
  <div className="px-20 max-md:px-5">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div>
          <h1 className="text-4xl font-bold tracking-wide capitalize mt-36 text-slate-700 max-md:mt-10">
            Set password
          </h1>
        </div>
        <p className="mt-2 text-base font-semibold leading-6 text-gray-500">
          Please reset your password here.
        </p>
        <form>
          <fieldset>
            <legend className="sr-only">Password Information</legend>

            <label
              htmlFor="password"
              className="text-sm font-medium leading-5 mt-9 text-slate-700"
            >
              Password
            </label>
            <div className="flex gap-5 justify-between px-4 py-2.5 mt-2 text-base leading-6 text-gray-500 whitespace-nowrap rounded-lg border border-gray-300 border-solid">
              <input
                type="password"
                id="password"
                className="w-full px-2 outline-none flex-grow-1"
                placeholder="Enter your password"
              />
            </div>
            <PasswordRequirements />
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium leading-5 mt-9 text-slate-700"
            >
              Confirm password
            </label>
            <div className="flex gap-5 justify-between px-4 py-2.5 mt-2 text-base leading-6 text-gray-500 whitespace-nowrap rounded-lg border border-gray-300 border-solid">
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-2 outline-none flex-grow-1"
                placeholder="Confirm your password"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="items-center justify-center px-16 py-3 mt-8 text-base font-medium text-white rounded-lg bg-zinc-800 max-md:px-5"
          >
            Continue
          </button>
        </form>
      </div>
      <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={setpassword}
          alt="A visual representation of password security"
          className="self-stretch my-auto aspect-square max-md:mt-10 max-md:max-w-full h-[80%]"
        />
      </div>
    </div>
  </div>
);

export default PasswordResetForm;
