import React from "react";
import "./submitForm.css";

const SubmitForm = ({todos, setTodos, inputText, setInputText}) => {

    const readText = (e) => {
        setInputText(e.target.value);
        console.log(e.target.value);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
          ...todos,
          {
            id: Math.floor(Math.random() * 1000),
            text: inputText 
          }
        ]);
        setInputText(""); 
      };

  return (
    <form>
      <input className="input-todo" value={inputText} onChange={readText} />
      <button onClick={handleSubmit} type="submit" className="add-todo">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default SubmitForm;
