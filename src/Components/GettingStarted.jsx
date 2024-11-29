import React from "react";
import "../index.css";

const GettingStarted = () => {
  return (
    <div>
      <div className="relative z-10 items-center flex flex-col mt-[150px] justify-center">
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold text-shadow-yellow-glow">
            Watch your favourite Movies, Series and More here!
          </h1>
          <p className="mt-3 text-2xl font-normal text-shadow-yellow-glow">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>

        {/* email form */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-96">
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Email Address"
              className="items-center w-full p-2 text-center text-black rounded-lg"
            />
          </div>

          <div className="w-fit">
            <button className="p-2 text-white bg-red-600 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
