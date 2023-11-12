import React from "react";
import { removeTodoById } from "../states/todos";

export function TodoList({ todos }) {
  return (
    <div>
      {todos.value.length < 1 ? (
        <div>No Item found</div>
      ) : (
        <ul>
          {todos.value.map((it, idx) => {
            return (
              <li key={it.id}>
                {it.body}
                <input
                  type="checkbox"
                  checked={it.complete}
                  onChange={() => {
                    it.complete = !it.complete;
                    todos.value = [...todos.value];
                  }}
                />
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    removeTodoById(it.id);
                  }}
                >
                  ❌
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
