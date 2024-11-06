import React, { useEffect, useState } from "react";

function Accordion({
  currId,
  currTitle,
  currAnswer,
  currActive,
  setCurrActive,
}) {
  const isActive = currActive === currId;

  // function clickHandler() {
  //   isActive ? setCurrActive(null) : setCurrActive(currId);
  // }

  return (
    <>
      <div>
        <h2>
          <button
            onClick={() =>
              isActive ? setCurrActive(null) : setCurrActive(currId)
            }
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          >
            <span>{currTitle}</span>
            <svg
              className={`w-3 h-3 ${
                isActive ? "" : "rotate-180"
              } shrink-0 transition-all`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div className={!isActive ? "hidden" : ""}>
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {currAnswer}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
