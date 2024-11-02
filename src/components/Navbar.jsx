import React from "react";
import { Link } from "react-router-dom";
import AIspireLabsLogo from "../assets/AIspireLabsLogo.png";
const Navbar = () => {
  return (
    <nav className="text-black p-4 mt-8">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex items-center space-x-2">
          <img src={AIspireLabsLogo} alt="Logo" className="h-12 w-12" />
          <Link to={"/"}>
            <span className=" text-5xl font-semibold">AISPIRE LABS</span>
          </Link>
        </div>

        <div className="flex space-x-6">
          <Link to={"/about"}>
            <p className=" text-2xl hover:text-gray-300 transition-colors font-bold">
              About
            </p>
          </Link>
          <Link to={"/use-cases"}>
            <p className="text-2xl hover:text-gray-300 transition-colors font-bold">
              UseCases
            </p>
          </Link>
          <Link to={"http://chat.aispirelabs.com/"}>
  <p className="text-2xl hover:text-gray-300 transition-colors font-bold join-btn flex flex-col bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 rounded">
    Try Now
  </p>
</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
