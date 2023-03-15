import classes from "./AnswerElement.module.css";
const AnswerElement = ({ answer, id, handleChange, yourAnswer }) => {
  return (
    <li className={classes.answer}>
      <label htmlFor={id}>
        <input
          type="radio"
          id={id}
          name="answer"
          className="answer"
          onChange={handleChange}
          checked={yourAnswer === id}
        />
        {answer}
      </label>
    </li>
  );
};

export default AnswerElement;
