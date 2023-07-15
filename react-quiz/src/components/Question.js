import React from "react";
import Optoin from "./Optoin";
import NextButton from "./NextButton";

const Question = ({ questions, dispatch, answer, index, numQuestions }) => {
  return (
    <div>
      <h3>{questions.question}</h3>
      <Optoin questions={questions} dispatch={dispatch} answer={answer} />
      <NextButton
        answer={answer}
        dispatch={dispatch}
        index={index}
        numQuestions={numQuestions}
      />
    </div>
  );
};

export default Question;
