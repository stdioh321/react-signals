import React from "react";
import { removeTodoById } from "../states/todos";

export function TodoList({ todos }) {
  return (
    <div>
      {todos.value.length < 1 ? (
        <div className="text-red-400">No Item found</div>
      ) : (
        <ul className="list-none">
          {todos.value.map((it, idx) => {
            return (
              <li
                key={it.id}
                className="flex w-full justify-between border border-b-black py-1"
              >
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={it.complete}
                    onChange={() => {
                      it.complete = !it.complete;
                      todos.value = [...todos.value];
                    }}
                  />
                  <span
                    className={`font-bold ${
                      it.complete ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {it.body}
                  </span>
                </div>
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
