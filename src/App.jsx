import { useState } from "react";
import "./App.css";
import { addTodo, clearTodos, todos, todosComplete } from "./states/todos";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();
    if (!text) return;
    addTodo({ body: text });
    setText("");
  }
  return (
    <div className="App container px-12 mx-auto">
      <div className="bg-gray-200 px-5 py-5">
        <div className="flex justify-between">
          <span className="text-2xl ">Todo list</span>
          <span className="">
            <div>Total: {todos.value.length}</div>
            <div>Total Complete: {todosComplete.value.length}</div>
          </span>
        </div>
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
        {todos.value.length > 0 ? (
          <div className="flex justify-end py-2">
            <button
              class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded transi duration-200 ease-in-out"
              onClick={clearTodos}
            >
              Clear
            </button>
          </div>
        ) : null}
        <div className="mt-4">
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
