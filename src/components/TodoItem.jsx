import { BsCheckSquare, BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todo/todoSlice";

const TodoItem = ({ id, name }) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between border-4 border-purple-400 bg-purple-100 py-2 rounded shadow">
      <div className="px-4">
        <h1 className={done ? "line-through" : ""}>{name}</h1>
      </div>
      <div className="px-4 space-x-4 flex">
        <BsCheckSquare
          onClick={() => setDone(!done)}
          className="cursor-pointer text-green-700"
          size={20}
        />
        <FaEdit onClick={() => dispatch(toggleTodo({id, name}))} className="cursor-pointer text-yellow-500" size={21} />
        <BsTrashFill
          onClick={() => dispatch(deleteTodo(id))}
          className="cursor-pointer text-red-500"
          size={20}
        />
      </div>
    </div>
  );
};

export default TodoItem;
