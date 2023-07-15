import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>welcome to the react quiz</h2>
      <h3>{numQuestions} questions to start react mastery </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start", payload: "active" })}
      >
        let's start
      </button>
    </div>
  );
};

export default StartScreen;
