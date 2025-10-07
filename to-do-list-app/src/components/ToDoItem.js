import React from "react";

function ToDoItem({ task, deleteTask }) {
  return (
    <li className="todo-item">
      {task.text}
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default ToDoItem;
