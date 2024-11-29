import React from "react";
import Navbar from "../Components/Navbar";
import GettingStarted from "../Components/GettingStarted";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-[url('assets/background-image.jpg')] bg-cover bg-no-repeat bg-center h-screen relative font-montserrat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Navbar */}
        <Navbar />

        {/* Getting Started */}
        <GettingStarted />
      </div>
    </div>
  );
};

export default LandingPage;
