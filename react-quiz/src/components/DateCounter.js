import { useReducer, useState } from "react";

function reduser(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };

    case "setStep":
      return { ...state, step: action.payload };
    case "resetStep":
      return { ...state, step: 1 };
    default:
      return state;
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const initState = {
    count: 0,
    step: 1,
  };

  const [state, dispatch] = useReducer(reduser, initState);

  // This mutates the date object
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({
      type: "dec",
      payload: 1,
    });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({
      type: "inc",
      payload: 1,
    });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({
      type: "setCount",
      payload: Number(e.target.value),
    });
  };

  const defineStep = function (e) {
    dispatch({
      type: "setStep",
      payload: Number(e.target.value),
    });
  };

  const reset = function () {
    // setCount(0);
    dispatch({ type: "resetStep" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
