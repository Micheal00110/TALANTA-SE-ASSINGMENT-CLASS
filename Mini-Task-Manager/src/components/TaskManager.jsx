import React, { useState, useEffect, useRef, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { value: action.payload, isDirty: true };
    case "RESET":
      return { value: "", isDirty: false };
    default:
      return state;
  }
};

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [uptime, setUptime] = useState(0);

  const inputRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, { value: "", isDirty: false });

  // Autofocus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Uptime counter
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Load tasks from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!state.value.trim()) return;
    setTasks([...tasks, state.value]);
    dispatch({ type: "RESET" });
    inputRef.current?.focus();
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Mini Task Manager</h1>

      <div className="flex gap-2 mb-3">
        <input
          ref={inputRef}
          type="text"
          value={state.value}
          onChange={(e) => dispatch({ type: "CHANGE", payload: e.target.value })}
          className="border p-2 flex-1 rounded"
          placeholder="Enter a task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {state.isDirty && (
        <p className="text-yellow-500 mb-2">⚠️ You have unsaved changes</p>
      )}

      <ul className="list-disc pl-5 mb-4">
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <button
          onClick={clearAll}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Clear All Tasks
        </button>
      )}

      <p className="mt-4 text-gray-500">⏱ App Uptime: {uptime}s</p>
    </div>
  );
};

export default TaskManager;
