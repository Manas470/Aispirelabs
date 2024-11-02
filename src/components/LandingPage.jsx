// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import AP from "../assets/andhra.png";
import scaler from "../assets/scaler.png";
import tiktok from "../assets/ticktock.png";
import UF from "../assets/uf.png";
import y from "../assets/y.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <p className="text-5xl text-center  mt-9 font-extrabold leading-loose">
        AISPIRATION - 1
      </p>

      <div className="hero-text flex flex-row justify-center items-center mt-9 p-2">
        <div className="box border-4 border-black-600 rounded-sm p-4 text-center shadow-[10px_8px_0px_0px_rgba(0,0,0)] ">
          <p className="text-3xl">
            <span className="line-through text-black-400 font-bold">
              Boring Chatbots
            </span>
            &nbsp;&rarr;&nbsp;
            <span>Smart AI Assistants</span>
          </p>
          <p className="text-xl text-black-600 mt-2 font-semibold">
            we excite, engage and elevate your customer experience
          </p>
        </div>
      </div>
      
      <div className="join-btn flex flex-col items-center justify-center p-10">
        <Link to={"/contact"}>
          {" "}
          <button className="mt-8 px-6 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition duration-300">
            JOIN WAITLIST
          </button>
        </Link>
      </div>
      <div className="core-team">
        <div className="flex flex-row justify-center items-center mt-10 p-8">
          <p className="text-4xl font-bold shadow-md">Founding Team </p>
          <img src={scaler} alt="Scaler" className="w-[8%] h-1/4" />
          <img src={AP} alt="Scaler" className="w-[8%] h-1/4" />
          <img src={tiktok} alt="Tiktok" className="w-[8%] h-1/4" />
          <img src={y} alt="Scaler" className="w-[8%] h-1/4" />
          <img src={UF} alt="Scaler" className="w-[8%] h-1/4" />

        </div>
      </div>
      <div className="contact flex flex-row justify-center items-center p-6">
        <p className="copy-right">
          <span className="text-2xl">©</span>AISPIRE LABS
        </p>
        
        <p className="copy-right">Careers</p>
      </div>
    </div>
  );
};

export default LandingPage;
