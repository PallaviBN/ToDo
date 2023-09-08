import React from "react";
import UpdateTodo from "./UpdateTodo";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../features/todo/todoSlice";

const Card = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const toggleTodo = useSelector((state) => state.todos.toggleTodo);
  const dispatch = useDispatch();
  return (
    <div
      className="w-1/2 h-3/4 min-h-max flex flex-col space-y-10 
        justify-between bg-teal-300 shadow-2xl rounded-lg p-2 items-center"
    >
      <div className="flex flex-col space-y-10 w-full h-3/4 min-h-max items-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-md">
          To-Do List
        </h1>
        <div className="w-3/4">{toggleTodo ? <AddTodo /> : <UpdateTodo />}</div>
        {!toggleTodo ? "Edit your todo Item" :<div className="w-3/4">
          {todoList.length === 0? "Enter your first todo item" : <ul className="w-full overflow-y-scroll max-h-72">
            {todoList.map((item) => {
              return (
                <li key={item.id} className="mb-3">
                  <TodoItem id={item.id} name={item.name} />
                </li>
              );
            })}
          </ul>}
        </div>}
      </div>
      <button
        className="bg-red-400 hover:bg-red-700 py-2 px-10 rounded font-bold
        text-white focus:outline-none focus:shadow-outline"
        onClick={(e) => {
          e.preventDefault();
          dispatch(clearTodoList());
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Card;
