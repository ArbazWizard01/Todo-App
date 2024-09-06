import "./App.css";
import { useState } from "react";
import SubmitForm from "./components/SubmitForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>MY TODO</header>
      <SubmitForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList 
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  );
}

export default App;
