"use client";

import { useEffect, useState } from "react";
import { QuizQs } from "./utils";
import DailogBox from "./Components/DailogBox";

export default function Home() {
  const [questionCounter, setQuestionCounter] = useState(1);
  const [currentOption, setCurrentOption] = useState(-1);
  const [clickedOptions, setClickedOptions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNextQuestion = () => {
    if (questionCounter < 5) setQuestionCounter(questionCounter + 1);
    else {
      setIsSubmitted(true);
      const submittedAnswers = QuizQs.map((question, index) => {
        if (question.answer === question.options[clickedOptions[index]]) {
          return true;
        } else return false;
      });
      console.log(submittedAnswers);
    }
    setCurrentOption(-1);
  };

  const handleLastQuestion = () => {
    if (questionCounter >= 2) setQuestionCounter(questionCounter - 1);
  };
  const currentQuestion = QuizQs[questionCounter - 1];

  const handleOptions = (index) => {
    // console.log(index);
    const newvalues = [...clickedOptions];
    newvalues[questionCounter - 1] = index;
    setClickedOptions(newvalues);
    setCurrentOption(index);
  };
  useEffect(() => {
    console.log(clickedOptions);
  }, [clickedOptions]);
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
              className={`stepbox ${
                questionCounter - 1 >= index ? "bar" : " "
              }`}
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
        <DailogBox submittedValue={isSubmitted} />
      </div>
    </div>
  );
}
