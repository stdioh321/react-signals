import React from "react";
import TodoItem from "./TodoItem";

export function TodoList({ todos }) {
  return (
    <div>
      {todos.value.length < 1 ? (
        <div className="text-red-400">No Item found</div>
      ) : (
        <ul className="list-none">
          {todos.value.map((it, idx) => {
            return <TodoItem key={it.id} todo={it} todos={todos} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
