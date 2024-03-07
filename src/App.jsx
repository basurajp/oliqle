import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import AccountNotRegistered from "./components/AccountNotRegister";
import ErrorMessage from "./components/ErrorMessage";
import LoginOtp from "./components/LoginOtp";
import PasswordResetForm from "./components/PasswordResetForm";
import RegistrationSuccess from "./components/RegistrationSuccess";
import SignupForm from "./components/SignUpForm";

const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/account-not-register", element: <AccountNotRegistered /> },
    { path: "/error-message", element: <ErrorMessage /> },
    { path: "/login-otp", element: <LoginOtp /> },
    { path: "/password-reset-form", element: <PasswordResetForm /> },
    { path: "/registration-success", element: <RegistrationSuccess /> },
    { path: "/signup-form", element: <SignupForm /> },
  ]);
  return (
    <div className="w-fu.ll h-screen ">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
