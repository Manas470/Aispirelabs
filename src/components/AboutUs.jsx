import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-3xl text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Our Product
        </h1>
        <div className="space-y-4 text-sm md:text-lg">
          <p className="text-justify mx-auto text-gray-600 p-4 md:p-[20px]">
            The world has gone mad with the launch of ChatGPT, fastest growing consumer app in internet history, in Nov'22. Everyone called it a "General Purpose Technology" and placed it next to world changing inventions like fire, electricity, internet etc. A(I)drenaline spread. Everywhere. Africa to Australia, Dubai to Delhi, San Fransisco to Singapore - almost every nook & corner of this world. Products disrupted, companies excited, GPUs exhausted, investors rushed, Billions of money poured, millions of workforce upskilled, thousands of companies created, hundreds of models launched. What next? A question arose in the minds of every software company- "Where am I in AI"?
          </p>
          <p className="text-justify mx-auto text-gray-600 p-4 md:p-[20px]">
            We believed building a great technology isn't building the great future. Apple Newton in 1987 (or) Google Glass in 2012 (or) Rabbit r1 in 2024 proved it. We, at AIspire Labs", are always excited by the applications/usecases of AI. We wanted to solve this multi-trillion-dollar enterprise question "Where am I in AI" and decided to shape ourselves into the AI product universe (like the marvel cinematic universe) by launching a series of products.
          </p>
          <p className="text-justify mx-auto text-gray-600 p-4 md:p-[20px]">
            Our 1st product & AISPIRATION-I, is to replace boring chatbots with smart AI Assistants that excite, engage and elevate the customer experience. Nothing More, Nothing Less.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;