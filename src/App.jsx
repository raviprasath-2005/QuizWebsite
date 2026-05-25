import { useState } from "react";
import QuizForm from "./QuizForm";
import Quiz from "./Quiz";

export default function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="container">
      {!startQuiz ? (
        <QuizForm onStart={() => setStartQuiz(true)} />
      ) : (
        <Quiz />
      )}
    </div>
  );
}
