import React, { ChangeEvent, FormEvent } from "react";
import { ReactComponent as PlusIcon } from "../assets/plus.svg"


export type AddTodoProps = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange,
}: AddTodoProps) => {
  return (
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
      <input className="flex-1 rounded shadow p-2 text-grey-dark mr-2" type="text" name="task" value={task} onChange={handleChange}></input>
      <button type="submit" aria-label="Add todo">
      <PlusIcon />
    </button>
    </form>
  );
};
