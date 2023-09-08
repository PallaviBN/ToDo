import React, { useState } from "react";
import { updateTodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const UpdateTodo = () => {
    const dispatch = useDispatch();
    const todoUpdate = useSelector((state) => state.todos.todoUpdate);
    const [todoValue, setTodoValue] = useState(todoUpdate.name);
  return (
    <>
      <form onSubmit={(e) => {
          e.preventDefault();
          if(todoValue.trim() === "") {
            alert("Please enter a todo");
          } else {
            dispatch(updateTodo({ id: todoUpdate.id, name: todoValue }));
          }
          setTodoValue("");
        }} className="flex space-x-3">
        <input
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          type="text"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-orange-500 shadow appearance-none "
          placeholder="Update Existing Item In Your Todo List..."
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 py-2 px-7 rounded font-bold
            text-white focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateTodo;
