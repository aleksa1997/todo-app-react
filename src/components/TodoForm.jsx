import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleTodo} className="TodoForm">
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter a task"
        className="todo-input"
        value={value}
      />
      <button className="todo-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
