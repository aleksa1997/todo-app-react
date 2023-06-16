import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleTodo = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form onSubmit={handleTodo} className="TodoForm">
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Edit a task"
        className="todo-input"
        value={value}
      />
      <button className="todo-btn" type="submit">
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;
