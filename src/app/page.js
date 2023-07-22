"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    float: "right",
  };
  const [questionCounter, setQuestionCounter] = useState(1);

  const handleNextQuestion = () => {
    if (questionCounter < 5) setQuestionCounter(questionCounter + 1);
    else alert("no more questions");
  };

  return (
    <div style={styles}>
      <div
        style={{
          backgroundColor: "rebeccapurple",
          padding: "16px",
        }}
      >
        <h1>{"Question " + questionCounter + " / 5"}</h1>
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
          <button>
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
          <h2> {questionCounter === 5 ? "SUBMIT" : "NEXT QUESTION"} </h2>
        </button>
      </div>
    </div>
  );
}
