// App.js
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          To-Do List
        </h1>

        {/* Add Task Section */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled
          />
          <button
            className="bg-purple-600 text-white px-6 rounded-r-lg hover:bg-purple-700 transition-all"
            disabled
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-4">
          <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all">
            <span className="flex-1 text-lg text-gray-700">Sample Task 1</span>
            <div className="flex space-x-4">
              <button className="text-yellow-500 hover:text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button className="text-red-500 hover:text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <input
                type="checkbox"
                checked
                className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                disabled
              />
            </div>
          </li>
          <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all">
            <span className="flex-1 text-lg line-through text-gray-400">
              Sample Task 2
            </span>
            <div className="flex space-x-4">
              <button className="text-yellow-500 hover:text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button className="text-red-500 hover:text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <input
                type="checkbox"
                checked
                className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                disabled
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
