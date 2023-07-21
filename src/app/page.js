import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    float: "right",
  };
  const [questionCounter, setQuestionCounter] = useState(1);

  return (
    <div style={styles}>
      <div
        style={{
          backgroundColor: "rebeccapurple",
          padding: "2rem",
        }}
      >
        <h1>{"Question " + questionCounter + " / 5"}</h1>
      </div>
    </div>
  );
}
