import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AP from '../assets/andhra.png';
import scaler from '../assets/scaler.png';
import tiktok from '../assets/ticktock.png';
import UF from '../assets/uf.png';
import y from '../assets/y.png';
import founding_team from '../assets/founding_team.png';
import logo1 from '../assets/logo 1.png';
import logo2 from '../assets/logo 2.png';
import logo3 from '../assets/logo 3.png';
import logo4 from '../assets/logo 4.png';
import logo5 from '../assets/logo 5.png';
import logo6 from '../assets/logo 6.png';
import logo7 from '../assets/logo 7.png';
import logo8 from '../assets/logo 8.png';
import logo9 from '../assets/logo 9.png';
import logo10 from '../assets/logo 10.png';

const LandingPage = () => {
  const customerLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 5; // Number of logos to display at once

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow >= customerLogos.length ? 0 : prevIndex + itemsToShow
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - itemsToShow < 0 ? customerLogos.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  return (
    <div className="landing-page px-4 md:px-8">
      <p className="text-3xl md:text-5xl text-center mt-6 md:mt-9 font-extrabold leading-loose">
        SARA - 1.0
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
      <div className="join-btn flex flex-row items-center justify-center gap-3 p-4">
  <Link to="/join-waitlist">
    <button className="px-4 py-2 bg-purple-600 text-white text-base font-medium rounded-md hover:bg-purple-700 transition duration-300 shadow-md whitespace-nowrap">
      JOIN WAITLIST
    </button>
  </Link>
  <a
    href="https://calendly.com/aispirelabs/book-demo"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md hover:bg-blue-700 transition duration-300 shadow-md whitespace-nowrap">
      BOOK A DEMO
    </button>
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
            <img src={scaler} alt="Scaler" className="w-16 md:w-[6%] h-auto" />
            <img src={AP} alt="AP" className="w-16 md:w-[6%] h-auto" />
            <img src={tiktok} alt="Tiktok" className="w-16 md:w-[6%] h-auto" />
            <img src={y} alt="Y" className="w-16 md:w-[6%] h-auto" />
            <img src={UF} alt="UF" className="w-16 md:w-[6%] h-auto" />
          </div>
        </div>
      </div>

      <div className="customer-logos mt-10 p-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg shadow-xl">
  <h2 className="text-lg md:text-2xl font-semibold text-center text-gray-800 mb-4 tracking-wide">
    Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Our Customers</span>
  </h2>
  <div className="relative flex items-center justify-center gap-4">
    {/* Previous Button */}
    <button
      onClick={handlePrev}
      className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 z-10"
    >
      &larr;
    </button>
    
    {/* Logos Section */}
    <div className="relative flex items-center gap-4 overflow-hidden w-full max-w-4xl rounded-md bg-white p-4 shadow-md">
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${startIndex * (100 / itemsToShow)}%)`,
          width: `${(customerLogos.length / itemsToShow) * 100}%`,
        }}
      >
        {customerLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(100%/5)] md:w-[calc(100%/itemsToShow)] lg:w-[calc(100%/itemsToShow)]"
          >
            <img
              src={logo}
              alt={`Customer ${index + 1}`}
              className="w-16 md:w-25 lg:w-24 h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
    
    {/* Next Button */}
    <button
      onClick={handleNext}
      className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 z-100"
    >
      &rarr;
    </button>
  </div>
</div>


      <div className="contact flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-15">
        <p className="copy-right">
          <span className="text-2xl">©</span>AISPIRE LABS
        </p>
        <hr></hr> <hr></hr> <hr></hr> <hr></hr> <hr></hr>
 <Link to={"https://tally.so/r/mV9VPN"}>
  <p className="copy-right text-center text-blue-600 font-semibold text-lg underline decoration-dotted decoration-blue-400 hover:decoration-solid transition-all duration-300 hover:text-blue-800 hover:scale-105">
    Work with us
  </p>
</Link>

      </div>
    </div>
  );
};

export default LandingPage;
