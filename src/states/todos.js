import {
  effect,
  signal,
  computed
} from "@preact/signals-react";

export const todos = signal([])

export const todosComplete = computed(() => {
  return todos.value.filter(t => t.complete)
})

effect(() => {
  console.log({
    todos: todos.value
  });
})

export function getTodos() {
  return todos;
}

export function addTodo(todo) {
  const {
    body
  } = todo
  todos.value = [...todos.value, {
    id: crypto.randomUUID(),
    body,
    complete: false
  }]
}

export function removeTodoById(id) {
  const newTodos = todos.value.filter(todo => todo.id !== id);
  console.log({
    newTodos
  });
  todos.value = newTodos;
}

export function clearTodos() {
  todos.value = [];
}
