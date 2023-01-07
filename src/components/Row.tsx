import { ChangeEvent, FormEvent, useState } from "react";
import { TodoProps } from "../types/types"



export const Row = ({
  
  todo: { id, task, isCompleted, editing, editingValue },
  handleCheckTodo,
  handleDeleteTodo,
  handleEdit,
  handleInputChange,
  handleUpdateTodo,
  handleEditTodo,
  valor,
  

}: TodoProps) => (

  <>
   {editing ? (
      <form onSubmit={() => handleUpdateTodo(id)} className="flex lg:w-full p-4 mb-2 justify-between items-center bg-white gap-x-5">
        <input
          type="text"
          onChange={handleInputChange}
          className=" ml-2 w-full text-xl font-sans font-medium text-gray-700"
          value={valor}
        />
        <div className="w-1/6 flex justify-between items-center mr-2 ">
          <button
            aria-label="Edit a todo"
            className="h-7 w-7 flex justify-center items-center bg-orange-400 hover:bg-orange-500 text-white font-bold rounded"
            onClick={() => handleUpdateTodo(id)}
          >
            ✏️
          </button>
        </div>
      </form>
    ) : (
      <div
        className={`
        flex w-full p-4 mb-2 justify-between items-center
       ${isCompleted ? "bg-gray-700 shadow-xl " : "bg-slate-100 shadow-xl"}
      `}
      >
        <p
          className={`
          ml-2 text-xl font-sans font-medium
          ${isCompleted ? "text-white line-through" : "text-gray-700"}
        `}
        >
          {task.length > 18 ? task.slice(0, 18) + "..." : task} 
        </p>

        <div className="w-1/6 flex justify-between items-center  gap-x-3 lg:gap-x-0 mr-10 lg:mr-0">
          <button
            aria-label="Edit a todo"
            className={`h-[30px] w-[30px] lg:h-7 lg:w-7 flex justify-center items-center  ${isCompleted ?  " bg-white" : "bg-orange-400 hover:bg-orange-500"} text-white font-bold  rounded`}
            onClick={() => handleEditTodo(id)}
          >
            ✏️
          </button>
          <button
            aria-label="Delete a todo"
            className={`h-[30px] w-[30px] lg:h-7 lg:w-7 flex justify-center items-center ${isCompleted ? " bg-white" : "bg-orange-400 hover:bg-orange-500"} text-white font-bold  rounded`}
            onClick={() => handleDeleteTodo(id)}
          >
            ❌
          </button>

          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => handleCheckTodo(id)}
            className="form-checkbox h-7 w-7"
          />
        </div>
      </div>
    )}
  </>
);