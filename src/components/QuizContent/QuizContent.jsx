import AnswerElement from "../AnswerElement/AnswerElement";
import classes from "./QuizContent.module.css";

const QuizContent = ({
  isGameOver,
  question,
  score,
  quizDataLength,
  answers,
  answer,
  handleChange,
}) => {
  return (
    <div className={classes.quizContent}>
      <h2>
        {!isGameOver
          ? question
          : `You answered correctly at ${score}/${quizDataLength} questions.`}
      </h2>
      <ul>
        {!isGameOver &&
          Object.entries(answers).map(([key, value]) => (
            <AnswerElement
              key={key}
              id={key}
              answer={value}
              handleChange={handleChange}
              yourAnswer={answer}
            />
          ))}
      </ul>
    </div>
  );
};
export default QuizContent;
