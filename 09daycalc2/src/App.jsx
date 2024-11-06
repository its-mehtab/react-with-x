import { useState } from "react";

function App() {
  const [step, setStep] = useState(5);
  const [count, setCount] = useState(5);

  const date = new Date(
    Date.now() + count * 24 * 60 * 60 * 1000
  ).toDateString();

  function stepHandler(e) {
    setStep(Number(e.target.value));
  }

  function countHandlerMinus(e) {
    e.preventDefault();
    setCount((curr) => curr - step);
  }
  function countHandlerPlus(e) {
    e.preventDefault();
    setCount((curr) => curr + step);
  }
  function countChangeHandler(e) {
    setCount(Number(e.target.value));
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>{step}</h2>
          <input
            onChange={stepHandler}
            value={step}
            type="range"
            min={1}
            max={100}
            style={{ width: "100%", marginTop: "10px" }}
          />
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button onClick={countHandlerMinus}>-</button>
            <input
              onChange={countChangeHandler}
              value={count}
              type="number"
              style={{ width: "100%", marginTop: "10px" }}
            />
            <button onClick={countHandlerPlus}>+</button>
          </div>
          <p>{`${Math.abs(count)} ${
            count === 0
              ? "Today is"
              : count > 1
              ? "Days from today is"
              : "Days ago was"
          }  ${date}`}</p>
        </div>
      </div>
    </>
  );
}

export default App;
