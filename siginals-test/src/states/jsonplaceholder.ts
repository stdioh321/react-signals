import axios from "axios"
import {
  effect,
  signal,
  Signal,
} from "@preact/signals-react";

export class ApiJsonPlaceholder {
  static baseUrl = "https://jsonplaceholder.typicode.com"

  static async getTodoById(id: number) {
    const response = await axios.get(`${this.baseUrl}/todos/${id}`)
    return response.data as Todo
  }

  static async getAllTodos() {
    const response = await axios.get(`${this.baseUrl}/todos`)
    return response.data as Todo[]
  }
}

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todos: Signal<Todo[]> = signal([])


export function getTodos() {
  return todos.value
}

export async function loadTodos() {
  const result = await ApiJsonPlaceholder.getAllTodos();
  console.log({ result });

  return todos.value = [...result]
}

export function getTodoById(id: number) {
  return todos.value.find(it => it.id === id)
}



effect(() => {
  loadTodos()
})