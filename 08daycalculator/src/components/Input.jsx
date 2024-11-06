import React from "react";

function input({ children, onHandlerMinus, onHandlerPlus }) {
  return (
    <form className="flex items-center justify-center mt-4">
      <button
        onClick={(e) => {
          e.preventDefault();
          onHandlerMinus();
        }}
        className="w-5 h-5 rounded bg-slate-300 flex items-center justify-center mx-2"
      >
        -
      </button>
      <p>{children}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          onHandlerPlus();
        }}
        className="w-6 h-6 rounded bg-slate-300 flex items-center justify-center mx-2"
      >
        +
      </button>
    </form>
  );
}

export default input;
