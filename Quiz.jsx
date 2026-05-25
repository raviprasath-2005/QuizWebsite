import { useState } from "react";

const quizData = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { question: "Largest planet in our solar system?", options: ["Mars", "Saturn", "Jupiter", "Neptune"], answer: "Jupiter" },
  { question: "FIFA World Cup 2018 winner?", options: ["Brazil", "Germany", "France", "Argentina"], answer: "France" },
  { question: "Tallest mountain?", options: ["Mount Everest", "K2", "Makalu"], answer: "Mount Everest" },
  { question: "Largest ocean?", options: ["Indian", "Atlantic", "Pacific"], answer: "Pacific" },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selected === quizData[current].answer) {
      setScore(score + 1);
    }

    setSelected("");

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="result">
        <h2>You scored {score} out of {quizData.length}</h2>
        <button className="button" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="question">{quizData[current].question}</h2>

      {quizData[current].options.map((opt) => (
        <label className="option" key={opt}>
          <input
            type="radio"
            name="quiz"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          {opt}
        </label>
      ))}

      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
