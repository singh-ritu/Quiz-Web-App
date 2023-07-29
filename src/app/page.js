"use client";

import { useState } from "react";
import { question } from "./utils";
import { Image } from "next/image";
import { questions } from "./utils";

export default function Home() {
  const [questionCounter, setQuestionCounter] = useState(1);

  const handleNextQuestion = () => {
    if (questionCounter < 5) setQuestionCounter(questionCounter + 1);
    else alert("no more questions");
  };

  const handleLastQuestion = () => {
    if (questionCounter >= 2) setQuestionCounter(questionCounter - 1);
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
      </div>
      <div className="right-container">
        <div className="question-counter">
          <h3>{"Question " + questionCounter + " / 5"}</h3>
        </div>
        <div>
          {console.log(questions[questionCounter - 1])}
          <h1>{questions[questionCounter - 1].question}</h1>
          {questions[questionCounter - 1].options.map((option) => (
            <h3>{option}</h3>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            position: "fixed",
            right: "100px",
            bottom: "80px",
          }}
        >
          {questionCounter > 1 && (
            <button
              style={{
                backgroundColor: "lightgrey",
                padding: "16px 32px",
                borderRadius: "6px",
              }}
              onClick={handleLastQuestion}
            >
              <h2> LAST QUESTION</h2>
            </button>
          )}
          <button
            style={{
              backgroundColor: "rebeccapurple",
              padding: "16px 32px",
              borderRadius: "6px",
              marginLeft: "30px",
            }}
            onClick={handleNextQuestion}
          >
            <h3> {questionCounter === 5 ? "SUBMIT" : "NEXT QUESTION"} </h3>
          </button>
        </div>
      </div>
    </div>
  );
}
