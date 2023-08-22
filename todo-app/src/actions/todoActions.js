
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, REMOVE_TODO } from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  payload: {
    id,
    newText,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});
