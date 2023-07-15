import React from "react";

const FinishScreen = ({ maxPoints, points, highScore, dispatch }) => {
  const floatNum = (points / maxPoints) * 100;
  const resNumber = Math.ceil(floatNum);

  let emoji;
  if (resNumber === 100) emoji = "🥇";
  if (resNumber >= 80 && resNumber < 100) emoji = "🎉";
  if (resNumber >= 50 && resNumber < 80) emoji = "🙃";
  if (resNumber >= 0 && resNumber > 50) emoji = "😐";
  if (resNumber === 0) emoji = "🤦🏻‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> you need <strong>{resNumber}%</strong>
      </p>
      <p className="highscore">(highScore : {highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        reset
      </button>
    </>
  );
};

export default FinishScreen;
