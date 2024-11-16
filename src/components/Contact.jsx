import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-8 md:py-12 px-4 md:px-8 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6 w-full max-w-4xl">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
          We would love to hear your feedback! Please fill out the form below
          and help us improve.
        </p>
        <div className="h-[60vh] md:h-[70vh]">
          <iframe
            title="Google Form"
            src="https://docs.google.com/forms/d/1wGBBneAmT6_OcZeAXK-kPBoDEv3dSgj4iv8CO5VDEp8/viewform?edit_requested=true/viewform?usp=sf_link/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-lg"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;