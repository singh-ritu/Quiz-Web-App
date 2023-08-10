"use client";

import { useState } from "react";
import { QuizQs, question } from "./utils";
import { Image } from "next/image";
import { questions } from "./utils";

export default function Home() {
  const [questionCounter, setQuestionCounter] = useState(1);
  const [currentOption, setCurrentOption] = useState(-1);
  const [clickedOptions, setClickedOptions] = useState([]);

  const handleNextQuestion = () => {
    if (questionCounter < 5) setQuestionCounter(questionCounter + 1);
    else alert("no more questions");
    setCurrentOption(-1);
  };

  const handleLastQuestion = () => {
    if (questionCounter >= 2) setQuestionCounter(questionCounter - 1);
  };
  const currentQuestion = QuizQs[questionCounter - 1];

  const handleOptions = (index) => {
    console.log(index);
    const newvalues = [...clickedOptions];
    newvalues[questionCounter - 1] = index;
    setClickedOptions(newvalues);
    console.log(clickedOptions);
    setCurrentOption(index);
  };
  const selectedOptionStyle = {
    borderColor: "rgb(43, 211, 10) ",
    borderRadius: "4px",
  };

  return (
    <div className="parent-container">
      <div className="left-container">
        <img
          src="/assets/img1.jpg"
          width={500}
          height={500}
          alt="question"
        ></img>
        <div className="stepper ">
          {QuizQs.map((question, index) => (
            <div
              className={
                "stepbox" + " " + questionCounter - 1 === index ? "bar" : " "
              }
            ></div>
          ))}
        </div>
      </div>
      <div className="right-container">
        <div className="question-tag">
          <h3>{"Question" + questionCounter + " / 5"}</h3>
        </div>
        <div className="Quiz-Questions">
          <h1 className="Ques">{currentQuestion.question}</h1>
          {currentQuestion.options.map((option, index) => (
            <div
              className="option selected_option"
              onClick={() => handleOptions(index)}
              style={currentOption === index ? selectedOptionStyle : {}}
            >
              <h3 key={index}>{option}</h3>
            </div>
          ))}
        </div>
        <div className="button ">
          {questionCounter > 1 && (
            <button className="last-question-btn" onClick={handleLastQuestion}>
              <h2> LAST QUESTION</h2>
            </button>
          )}
          <button className="next-question-btn" onClick={handleNextQuestion}>
            <h3> {questionCounter === 5 ? "SUBMIT" : "NEXT QUESTION"} </h3>
          </button>
        </div>
      </div>
    </div>
  );
}
