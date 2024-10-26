import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-row justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full h-screen">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We would love to hear your feedback! Please fill out the form below
          and help us improve.
        </p>
        <div className="h-full">
          <iframe
            title="Google Form"
            src="https://docs.google.com/forms/d/1wGBBneAmT6_OcZeAXK-kPBoDEv3dSgj4iv8CO5VDEp8/viewform?edit_requested=true/viewform?usp=sf_link/viewform?embedded=true"
            width="100%"
            height="210%"
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
