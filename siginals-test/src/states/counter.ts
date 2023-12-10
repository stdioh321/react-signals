import {
  signal
} from "@preact/signals-react";

const initialCounterValue = parseInt(localStorage.getItem('counter') || '0')

export const counter = signal(initialCounterValue)

export const getCounter = () => counter.value

export const addCounter = (v = 1) => {
  updateCounter(v)
}

export const subCounter = (v = 1) => {
  updateCounter(-v)
}

export const updateCounter = (delta: number) => {
  counter.value += delta;
  localStorage.setItem('counter', `${counter.value}`);
};


// effect(() => {
//   console.log(getCounter());
// })