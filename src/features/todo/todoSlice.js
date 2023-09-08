import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  todoUpdate: {},
  toggleTodo: true,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    clearTodoList: (state) => {
      state.todoList = [];
    },
    updateTodo: (state, action) => {
      state.todoList.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
      });
      state.toggleTodo = !state.toggleTodo;
    },
    toggleTodo: (state, action) => {
      state.toggleTodo = !state.toggleTodo;
      state.todoUpdate = { ...state.todoUpdate, ...action.payload };
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export const { addTodo, clearTodoList, deleteTodo, toggleTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
