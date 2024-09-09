"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateQuiz = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCreateQuiz = () => {
    alert(`Generating a quiz on: ${searchTerm}`);
  };

  const handleClose = () => {
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative px-4">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-8 text-2xl font-bold text-black hover:text-gray-500"
      >
        &times;
      </button>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-black">
        What would you like to learn today?
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-10">
        <input
          type="text"
          placeholder="Search for any topic"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Generate Quiz Button */}
      <button
        onClick={handleCreateQuiz}
        className="px-8 py-3 bg-black text-white font-bold rounded-full text-lg hover:bg-gray-800 transition-colors duration-150"
      >
        Generate Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
