import React from 'react';
import { Link } from 'react-router-dom';
import AP from '../assets/andhra.png';
import scaler from '../assets/scaler.png';
import tiktok from '../assets/ticktock.png';
import UF from '../assets/uf.png';
import y from '../assets/y.png';
import founding_team from '../assets/founding_team.png';

const LandingPage = () => {
  return (
    <div className="landing-page px-4 md:px-8">
      <p className="text-3xl md:text-5xl text-center mt-6 md:mt-9 font-extrabold leading-loose">
        AISPIRATION - 1
      </p>

      <div className="hero-text flex flex-row justify-center items-center mt-6 md:mt-9 p-2">
        <div className="box border-4 border-black-600 rounded-sm p-4 text-center shadow-[10px_8px_0px_0px_rgba(0,0,0)] max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
          <p className="text-xl md:text-3xl">
            <span className="line-through text-black-400 font-bold">
              Boring Chatbots
            </span>
            <span className="block md:inline">&nbsp;&rarr;&nbsp;</span>
            <span>Smart AI Assistants</span>
          </p>
          <p className="text-lg md:text-xl text-black-600 mt-2 font-semibold">
            we excite, engage and elevate your customer experience
          </p>
        </div>
      </div>

      <div className="join-btn flex flex-row items-center justify-center gap-4 p-6 md:p-10">
  <Link to="/join-waitlist">
    <button className="px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition duration-300 shadow-md w-full md:w-auto">
      JOIN WAITLIST
    </button>
  </Link>
  <a
    href="https://calendly.com/aispirelabs/book-demo"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md w-full md:w-auto"
  >
    Book a Demo
  </a>
</div>



      <div className="core-team">
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-10 p-4 md:p-8 space-y-4 md:space-y-0">
          <div className="grid grid-cols-3 md:flex md:flex-row gap-4 items-center justify-center">
            <img
              src={founding_team}
              alt="Founding Team"
              className="w-16 md:w-[8%] h-auto"
            />
            <img src={scaler} alt="Scaler" className="w-16 md:w-[8%] h-auto" />
            <img src={AP} alt="AP" className="w-16 md:w-[8%] h-auto" />
            <img src={tiktok} alt="Tiktok" className="w-16 md:w-[8%] h-auto" />
            <img src={y} alt="Y" className="w-16 md:w-[8%] h-auto" />
            <img src={UF} alt="UF" className="w-16 md:w-[8%] h-auto" />
          </div>
        </div>
      </div>

      <div className="contact flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-15">
        <p className="copy-right">
          <span className="text-2xl">©</span>AISPIRE LABS
        </p>
        <p className="copy-right">Careers</p>
      </div>
    </div>
  );
};

export default LandingPage;
