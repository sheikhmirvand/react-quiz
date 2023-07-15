import React from "react";

const Optoin = ({ questions, dispatch, answer }) => {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {questions.options.map((o, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={o}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {o}
        </button>
      ))}
    </div>
  );
};

export default Optoin;
