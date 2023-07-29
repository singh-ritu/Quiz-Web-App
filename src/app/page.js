"use client";

import { useState } from "react";
import { question } from "./utils";

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
    <div>
      <div className="left-container">
        <img src={"../assets/img1.jpg"}></img>
      </div>
      <div className="right-container">
        <div
          style={{
            backgroundColor: "rebeccapurple",
            padding: "16px ",
          }}
        >
          <h3>{"Question " + questionCounter + " / 5"}</h3>
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
