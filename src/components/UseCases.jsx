import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UseCaseCard = ({ title, description, icon, isExpanded, onToggle }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out"
  >
    <div className="flex items-center mb-4">
      <motion.span
        className="text-4xl"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.span>
      <h2 className="ml-4 text-2xl font-semibold text-gray-800">{title}</h2>
    </div>
    <AnimatePresence initial={false}>
      <motion.p
        key={isExpanded ? 'expanded' : 'collapsed'}
        initial="collapsed"
        animate="expanded"
        exit="collapsed"
        variants={{
          expanded: { opacity: 1, height: 'auto' },
          collapsed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="text-gray-600"
      >
        {isExpanded ? description : `${description.substring(0, 100)}...`}
      </motion.p>
    </AnimatePresence>
    <motion.button
      className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out text-sm font-medium"
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isExpanded ? 'Show Less' : 'Learn More'}
    </motion.button>
  </motion.div>
);

const UseCaseCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const useCases = [
    {
      title: "Educational Institutions",
      description: "Enhance university websites with AI-powered conversational interfaces. These intelligent agents can provide personalized information about departments, placements, professors, opportunities, and fee details through natural language interactions. This approach improves user experience, clarifies doubts efficiently, and generates stronger leads, potentially increasing admission rates for educational institutions and Ed-Tech companies.",
      icon: "🎓",
    },
    {
      title: "Government Departments",
      description: "Implement conversational AI on government websites to bridge the information gap between authorities and citizens. This system can efficiently navigate through extensive scheme documents, providing tailored information based on individual circumstances (e.g., age, occupation, location). It simplifies access to government initiatives, accelerates public awareness, and streamlines the execution of various programs.",
      icon: "🏛️",
    },
    {
      title: "D2C Brands",
      description: "Integrate conversational AI features into D2C brand websites to enhance the customer journey. This AI assistant can aid in product discovery, provide suggestions, compare prices, inform about discounts, and track orders - all through natural conversations. It addresses customer queries instantly, reducing cart abandonment and improving overall user experience without compromising on privacy.",
      icon: "🛍️",
    },
    {
      title: "Media Companies",
      description: "Empower media platforms like ET, YourStory, Inc42, and Forbes with advanced AI-driven search capabilities. This system allows readers to request article summaries, gain insights on specific topics, or explore complex issues across different time frames. It enhances the reader's ability to extract valuable information from vast article databases, supporting better-informed decision-making.",
      icon: "📺",
    },
  ];

  const toggleExpand = useCallback((index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        > Discover Our AI-Powered Solutions
        </motion.h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              {...useCase}
              isExpanded={expandedIndex === index}
              onToggle={() => toggleExpand(index)}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UseCaseCards;
