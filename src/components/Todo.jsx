import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <AiFillEdit className="edit-icon" onClick={() => editTodo(task.id)} />
        <AiFillDelete
          className="trash-icon"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
