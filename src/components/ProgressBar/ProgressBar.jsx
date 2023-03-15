import classes from "./ProgressBar.module.css";
const ProgressBar = ({ currentQuiz, quizCount }) => {
  const progressPercentage = (currentQuiz / quizCount) * 100;
  return (
    <div className={classes.progressBarContainer}>
      <div className={classes.progressText}>
        <span>{currentQuiz}</span> of <span>{quizCount}</span> answered
      </div>
      <div className={classes.bar}>
        <div style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
