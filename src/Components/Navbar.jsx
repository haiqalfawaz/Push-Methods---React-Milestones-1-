import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between p-4 bg-transparent">
      <div>
        <a href="#" className="text-3xl font-bold text-red-700">
          BASEMENT FILM
        </a>
      </div>
      <div className="text-white">
        <button className="p-2 mr-4 text-base font-normal bg-red-500 rounded-md font-montserrat">
          English
        </button>
        <Link to="/SignIn">
          <button className="p-2 mr-4 text-base font-normal bg-red-500 rounded-md font-montserrat">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
