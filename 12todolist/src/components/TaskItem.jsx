import React from "react";

function TaskItem({
  currId,
  currName,
  currIsCompleted,
  setInputTask,
  taskDeleteHandle,
  currIsTaskEditable,
  editableTaskInput,
  setEditableTaskInput,
}) {
  function itemCompleteHandler(id) {
    setInputTask((prev) =>
      prev.map((currItem) =>
        currItem.id === id
          ? { ...currItem, isCompleted: !currItem.isCompleted }
          : currItem
      )
    );
  }

  function saveEdit(id) {
    setInputTask((prev) =>
      prev.map((currTask) =>
        currTask.id === id
          ? { ...currTask, isTaskEditable: false, itemName: editableTaskInput }
          : currTask
      )
    );
  }

  function taskEditableHandler(id) {
    setInputTask((prev) =>
      prev.map((currTask) => {
        setEditableTaskInput(currTask.itemName);

        return currTask.id === id
          ? { ...currTask, isTaskEditable: !currTask.isTaskEditable }
          : currTask;
      })
    );
  }

  return (
    <>
      <li
        onClick={(e) => {
          itemCompleteHandler(currId);
        }}
        className={`flex justify-between items-center p-3 rounded-md ${
          currIsCompleted
            ? "bg-green-100 line-through text-gray-400"
            : "bg-gray-200 hover:bg-gray-300"
        } cursor-pointer`}
      >
        {currIsTaskEditable ? (
          <div className="flex w-full">
            <input
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => {
                setEditableTaskInput(e.target.value);
              }}
              type="text"
              value={editableTaskInput}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();

                saveEdit(currId);
              }}
              className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition ml-2"
            >
              Save
            </button>
          </div>
        ) : (
          <span className="flex-1">{currName}</span>
        )}
        {currIsCompleted && (
          <div className="flex items-center space-x-2">
            {currIsTaskEditable || (
              <button
                onClick={(e) => {
                  e.stopPropagation();

                  taskEditableHandler(currId);
                }}
                className="text-indigo-600 hover:text-indigo-800"
              >
                Edit
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                taskDeleteHandle(currId);
              }}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        )}
      </li>
    </>
  );
}

export default TaskItem;
