import React, { ChangeEvent, FormEvent, useState } from "react";
import { Row } from "./Row";
import { data } from "../todos";
import { v4 as uuidv4 } from "uuid";
import { AddTodo } from "./AddTodo";

type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
  edit: boolean;
  editing: boolean
  editingValue: string;
};

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState("");
  const [valor, setValor] = useState('')

  const todosLength = todos.length;
  const hasTodos = todos.length > 0;
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

  const handleAddTodo = (todo: Todo) => {
    const updateTodo = [...todos, todo];
    setValor(todo.task)
    setTodos(updateTodo);
    setTask("");
  };

  const handleDeleteTodo = (id: string) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleInputChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setValor(value)
  };


 

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    const sortedTodos = updatedTodos.sort((a, b) => {
      if (a.isCompleted === b.isCompleted) {
        return 0;
      }
      if (a.isCompleted === false && b.isCompleted === true) {
        return -1;
      }
      return 1;
    });
    setTodos(sortedTodos);
  };

  const handleEdit = (id: string) => {
      const editTodo = todos.map((todo) => {
        if(todo.id === id) {
          console.log(todo.edit)
          return {
            ...todo,
            edit: !todo.edit
          }
        }
        return todo
      })
      setTodos(editTodo)
  };


  const handleEditTodo = (id: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, editing: true, editingValue: todo.task  };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  const handleUpdateTodo = (id: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: valor, editing: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setValor('')
  };


  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
      edit: false,
      editing: false,
      editingValue: ''
    };

    task && handleAddTodo(todo);
    setTask('')
  };

  return (
    <section className="w-10/12 sm: w-10/11 lg:w-1/2 max-w-2xl flex flex-col items-center mt-10">
      <h1 className="h1 text-5xl mb-10 ">Todo List</h1>
      <AddTodo
        task={task}
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
      />
      <div className="h-10" />
      {todos.map((todo) => (
        <Row
          handleEdit={handleEdit}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
          handleInputChange={handleInputChange}
          handleEditTodo={handleEditTodo}
          handleUpdateTodo={handleUpdateTodo}
          valor={valor}
          key={todo.id}
          todo={todo}
        />
      ))}
      {hasTodos ? (
        <p className="mb-5 text-xl text-red-500 uppercase">{`[${remainingTodos} of ${todosLength}]`}</p>
      ) : (
        <p className="mb-5 text-xl text-red-500 ">Please add a todo</p>
      )}
    </section>
  );
};
