import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [step, setStep] = useState(5);
  const [count, setCount] = useState(10);

  const time = new Date(
    Date.now() + count * 24 * 60 * 60 * 1000
  ).toDateString();

  function stepHandlerMinus() {
    setStep((curr) => (step > 1 ? curr - 1 : curr));
  }
  function stepHandlerPlus() {
    setStep((curr) => curr + 1);
  }

  function countHandlerMinus() {
    setCount((curr) => curr - step);
  }
  function countHandlerPlus() {
    setCount((curr) => curr + step);
  }

  return (
    <>
      <div className="text-center mt-10">
        <Input
          onHandlerMinus={stepHandlerMinus}
          onHandlerPlus={stepHandlerPlus}
        >
          Step: {step}
        </Input>
        <Input
          onHandlerMinus={countHandlerMinus}
          onHandlerPlus={countHandlerPlus}
        >
          Count: {count}
        </Input>
        <p>
          {count === 0 ? "today is " : `${Math.abs(count)} days `}
          {count < 0 ? "ago was " : count === 0 ? "" : "from today is "}
          {time}
        </p>
      </div>
    </>
  );
}

export default App;
