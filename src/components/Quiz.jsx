import { useEffect, useState } from "react";
import quizData from "../data/quizData";
import AnswerElement from "./AnswerElement/AnswerElement";
import ProgressBar from "./ProgressBar/ProgressBar";
import QuizContent from "./QuizContent/QuizContent";

const Quiz = () => {
  let [gameOver, setGameOVer] = useState(false);
  let [score, setScore] = useState(0);
  let [currentQuiz, setCurrentQuiz] = useState(0);
  let [answers, setAnswers] = useState([]);
  let [answer, setAnswer] = useState(undefined);
  let [currentQuizData, setCurrentQuizData] = useState({});

  useEffect(() => {
    loadQuiz();
  }, [currentQuiz]);

  const loadQuiz = () => {
    setAnswer(undefined);
    setCurrentQuizData({
      ...quizData[currentQuiz],
    });
    setAnswers({ ...quizData[currentQuiz].answers });
  };

  const handleChange = (e) => {
    setAnswer(e.target.id);
  };

  const answerTheQuestion = () => {
    if (answer) {
      if (currentQuizData.correct === answer) {
        setScore(score + 1);
      }
      if (currentQuiz === quizData.length - 1) {
        setGameOVer(true);
      } else {
        setCurrentQuiz(currentQuiz + 1);
      }
    }
  };

  const reloadQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setGameOVer(false);
  };

  return (
    <div className="quiz-container">
      {!gameOver && (
        <ProgressBar currentQuiz={currentQuiz} quizCount={quizData.length} />
      )}
      <QuizContent
        isGameOver={gameOver}
        question={currentQuizData.question}
        score={score}
        quizDataLength={quizData.length}
        answers={answers}
        answer={answer}
        handleChange={handleChange}
      />
      {gameOver ? (
        <button onClick={reloadQuiz}>Reload</button>
      ) : (
        <button onClick={answerTheQuestion} disabled={!answer}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Quiz;
