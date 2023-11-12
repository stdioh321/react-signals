import "./App.css";
import { addTodo, todos } from "./states/todos";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();
    if (!text) return;
    addTodo({ body: text });
    setText("");
  }
  return (
    <div className="App container px-32">
      <h1>Todo list: {todos.value.length}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onInput={(e) => {
              setText(e.target.value);
            }}
          />
        </form>
      </div>
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
