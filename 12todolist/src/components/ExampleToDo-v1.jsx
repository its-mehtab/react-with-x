import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

function ExampleToDo() {
  const [inputChange, setInputChange] = useState("");
  const [filteredTask, setFilteredTask] = useState("all");
  const [editableTaskInput, setEditableTaskInput] = useState("");
  const [inputTask, setInputTask] = useState(function () {
    const storedToDo = localStorage.getItem("toDoList");
    return JSON.parse(storedToDo);
  });

  let filterTaskTab = inputTask.filter((currTask) => {
    if (filteredTask === "active") return !currTask.isCompleted;
    if (filteredTask === "completed") return currTask.isCompleted;
    return true;
  });

  function taskDeleteHandle(id) {
    setInputTask((prevTasks) =>
      prevTasks.filter((currTask) => currTask.id !== id)
    );
  }

  function deleteCompletedHandle() {
    setInputTask((prevTasks) =>
      prevTasks.filter((currTask) => !currTask.isCompleted)
    );
  }

  function inputHandler(e) {
    setInputChange(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();

    const dataObj = {
      id: Date.now(),
      itemName: inputChange,
      isCompleted: false,
      isTaskEditable: false,
    };

    setInputTask((prevData) => [...prevData, dataObj]);

    setInputChange("");
  }

  useEffect(
    function () {
      localStorage.setItem("toDoList", JSON.stringify(inputTask));
    },
    [inputTask]
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          To-Do List
        </h1>

        {/* Add Task Input (Static) */}
        <form className="flex mb-4" onSubmit={formSubmitHandler}>
          <input
            onChange={inputHandler}
            value={inputChange}
            type="text"
            placeholder="Enter a task"
            className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="p-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </form>

        {/* Task Filters (Static) */}
        <div className="flex justify-between mb-4">
          <button
            onClick={() => {
              setFilteredTask("all");
            }}
            className={`px-4 py-2 rounded-md ${
              filteredTask === "all"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setFilteredTask("active");
            }}
            className={`px-4 py-2 rounded-md ${
              filteredTask === "active"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => {
              setFilteredTask("completed");
            }}
            className={`px-4 py-2 rounded-md ${
              filteredTask === "completed"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Clear Completed Button (Static) */}
        {inputTask.some((curr) => curr.isCompleted) && (
          <button
            onClick={deleteCompletedHandle}
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition mb-4"
          >
            Clear Completed Tasks
          </button>
        )}

        {/* Task List (Static) */}
        <ul className="space-y-2">
          {filterTaskTab.map((curr) => {
            return (
              <TaskItem
                currIsCompleted={curr.isCompleted}
                currIsTaskEditable={curr.isTaskEditable}
                setInputTask={setInputTask}
                currId={curr.id}
                currName={curr.itemName}
                key={curr.id}
                taskDeleteHandle={taskDeleteHandle}
                editableTaskInput={editableTaskInput}
                setEditableTaskInput={setEditableTaskInput}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ExampleToDo;
