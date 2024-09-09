"use client";

import React, { useState } from "react";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(2); // Example for "Question 2 of 10"
  const [selectedOption, setSelectedOption] = useState("");

  const questions = [
    {
      id: 1,
      question: "Which of the following is the correct way to declare a variable in JavaScript?",
      options: [
        { label: "a", text: `var myVariable = "Hello";` },
        { label: "b", text: `variable myVariable = "Hello";` },
        { label: "c", text: `let = myVariable "Hello";` },
        { label: "d", text: `const: myVariable = "Hello";` },
      ],
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    alert("Proceeding to the next question");
    // Logic to proceed to the next question goes here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Quiz Header */}
      <div className="w-full max-w-5xl flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Javascript Quiz</h1>
        <div className="flex space-x-4">
          <span className="text-sm bg-gray-100 px-3 py-1 rounded-lg">Level 12</span>
          <span className="text-sm bg-gray-100 px-3 py-1 rounded-lg">Ranking 120</span>
        </div>
        <button className="text-lg">&times;</button>
      </div>

      {/* Quiz Content */}
      <div className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg">
        <p className="text-lg font-semibold mb-4">{`Question ${currentQuestion} of 10`}</p>
        <h2 className="text-3xl font-bold mb-8">
          {questions[0].question}
        </h2>

        {/* Quiz Options */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {questions[0].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option.label)}
              className={`w-full text-left p-4 border ${
                selectedOption === option.label
                  ? "border-black"
                  : "border-gray-300"
              } rounded-lg shadow-sm hover:border-black transition-colors duration-200`}
            >
              <span className="font-semibold">{option.label})</span> {option.text}
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-black text-white font-bold rounded-full text-lg hover:bg-gray-800 transition-colors duration-150"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
