import React from "react";
import { removeTodoById } from "../states/todos";

export default function TodoItem({ todo, todos }) {
  return (
    <li className="flex w-full justify-between border border-b-black py-1">
      <label className="flex gap-2 cursor-pointer no-select">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            todo.complete = !todo.complete;
            todos.value = [...todos.value];
          }}
        />
        <span
          className={`font-bold ${
            todo.complete ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.body}
        </span>
      </label>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          removeTodoById(todo.id);
        }}
      >
        ❌
      </span>
    </li>
  );
}
