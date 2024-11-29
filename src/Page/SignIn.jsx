import React from "react";
import NavbarSignIn from "../Components/NavbarSignIn";

const SignIn = () => {
  return (
    <div className="bg-[url('assets/background-image.jpg')] bg-cover bg-no-repeat bg-center h-screen relative font-montserrat">
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar Sign In*/}
      <NavbarSignIn />

      {/* Form SignIn */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="items-center justify-center p-8 bg-black rounded-lg bg-opacity-70 w-96">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-center text-white">
              Sign In
            </h2>
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email or Mobile Number"
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="flex justify-center p-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-800">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
