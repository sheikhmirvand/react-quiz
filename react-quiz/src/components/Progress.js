import React from "react";

const Progress = ({ index, numQuestions, maxPoints, points }) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(!null)}>
        saal
      </progress>
      <p>
        Questions <strong>{index + 1}</strong>/{numQuestions}
      </p>

      <p>
        points{" "}
        <strong>
          {points} / {maxPoints}
        </strong>
      </p>
    </header>
  );
};

export default Progress;
