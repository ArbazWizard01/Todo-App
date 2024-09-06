import React from "react";

const Todo = ({ todos, setTodos, todo, text }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el)=> el.id !== todo.id))
    }

  return (
    <div className="todo">
        <li className="todo-item">{text}</li>
      <button button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
