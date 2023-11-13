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
    <div className="App container px-12">
      <div className="bg-gray-200 px-5 py-5">
        <h1 className="text-3xl flex justify-between">
          <span>Todo list</span>
          <span className="text-1xl">Total: {todos.value.length}</span>
        </h1>
        <div className="pt-10">
          <form onSubmit={handleSubmit}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Todo here...."
              type="text"
              value={text}
              onInput={(e) => {
                setText(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="mt-4">
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
