import React, { useState } from "react";

const UseCaseCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const useCases = [
    {
      title: "Educational Institutions",
      description:
        "Let’s say a customer came to your university website to know more about the university. He/She is scrolling the application continuously, coming back, clicking another link over website only to get more confused and then leave it. Yuck! I just want a human level interaction with the website who’s smarter than me to know more about the specific department with the general questions like placements, professors, opportunities, fee details etc and all through the natural human conversational language. It will be super fun to clear the doubts and so get more powerful & strong leads for the companies thereby increasing their admission rates. Ed-Tech companies with their offerings and doubt resolution can also be done using this",
      icon: "🌟",
    },
    {
      title: "Government Departments",
      description:
        "It would be almost impossible for the governments to create an awareness about that particular scheme/ initiative among thousands of such schemes. It’s creating a huge divide between the government and people. Also, it would be a herculean task to scroll through the details in a pdf with hundreds of pages. It’s going to take a lot of time adopting the trainings to employees in creating awareness to the public & thus delaying the execution. Now, just imagine a conversational human agent right at the bottom on a government department website where you can just type in your requirements like “I’m a 25 year old founder of a company and what kind of schemes are available for me” or “a 35 year old woman in a village and schemes applicable to her” or “a farmer who wants to export his/her products and how govt can handhold them” etc. It’s knowledge base would be trained on the scheme documents/ websites/ FAQ’s etc",
      icon: "🚀",
    },
    {
      title: "D2C Brands",
      description:
        "They have their own website, but when a customer enters to buy any product through google/organic search (or) any redirects, they get confused and leave the website with abandoned carts. As a customer, I can definitely feel tired/vexed to find the information I needed. I can’t leave the website to go on WhatsApp to find the details or won’t be able to fill my details which are confidential before placing an order. We can introduce a conversational AI feature in their website where customers can use it for product discovery, suggestions, ratings, price comparisons, discounts, order tracking- all through natural conversations.",
      icon: "💡",
    },
    {
      title: "Media Companies",
      description:
        "Media companies like ET, YourStory, Inc42, Forbes etc contain hundreds of thousands of articles. The current search features allow singular search, which limits the scope for readers in finding the information they want. A conversational AI could allow readers to ask about summaries of tech news on a certain date, draw insights on particular topics, or find past, present, and future information on complex issues like Kashmir, or help in decision-making based on CEOs' speeches and articles.",
      icon: "💡",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 shadow-2xl shadow-blue-500/20">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-md rounded-lg p-6 max-w-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl">{useCase.icon}</span>
              <h2 className="ml-4 text-2xl font-semibold">{useCase.title}</h2>
            </div>
            <p className="text-gray-600">
              {expandedIndex === index
                ? useCase.description
                : `${useCase.description.substring(0, 100)}...`}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? "Show Less" : "Learn More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCaseCards;
