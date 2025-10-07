import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.length === 0 ? (
        <p>No tasks yet! Add one above.</p>
      ) : (
        tasks.map((task) => (
          <ToDoItem key={task.id} task={task} deleteTask={deleteTask} />
        ))
      )}
    </ul>
  );
}

export default ToDoList;
