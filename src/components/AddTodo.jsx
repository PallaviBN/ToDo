import React, { useState, useEffect } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(todoValue.trim() === "") {
            alert("Please enter a todo");
          } else {
            dispatch(addTodo({ id: nanoid(), name: todoValue }));
          }
          setTodoValue("");
        }}
        className="flex space-x-3"
      >
        <input
          value={todoValue}
          type="text"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-green-500 shadow appearance-none "
          placeholder="Add Item To Your Todo List..."
          onChange={(e) => setTodoValue(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 py-2 px-10 rounded font-bold
        text-white focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodo;
