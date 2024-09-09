"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleCreateQuiz = () => {
    router.push("/create-quiz"); // Redirect to Create Quiz page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-left w-full max-w-5xl">
        My quizzes
      </h1>

      {/* Quizzes List */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {/* Quiz Card */}
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Javascript</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-lg">Level 12</span>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-lg">Ranking 120</span>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-lg w-full">Start Quiz</button>
        </div>

        {/* Another Quiz Card */}
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">UX Design</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-lg">Level 12</span>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-lg">Ranking 120</span>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-lg w-full">Start Quiz</button>
        </div>

        {/* Another Quiz Card */}
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">World Wonders</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-lg">Level 12</span>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-lg">Ranking 120</span>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-lg w-full">Start Quiz</button>
        </div>

        {/* Another Quiz Card */}
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Digital Marketing</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-lg">Level 12</span>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-lg">Ranking 120</span>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-lg w-full">Start Quiz</button>
        </div>
      </div>

      {/* Create New Quiz Button */}
      <button
        onClick={handleCreateQuiz}
        className="px-6 py-3 bg-black text-white font-bold rounded-full text-lg hover:bg-gray-800 transition-colors duration-150"
      >
        Create a new quiz
      </button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 w-full flex justify-center">
        <div className="bg-gray-100 p-4 rounded-full flex space-x-8 shadow-md">
          <button className="text-black font-semibold">My quizzes</button>
          <button className="text-gray-500 hover:text-black" onClick={handleCreateQuiz}>
            New quiz
          </button>
          <button className="text-gray-500 hover:text-black">Ranking</button>
          <button className="text-gray-500 hover:text-black">Account</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

