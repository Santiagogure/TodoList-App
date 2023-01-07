import { ChangeEvent, FormEvent } from "react"

export type Todo = {
  id: string
  task: string
  isCompleted: boolean
  editing: boolean
  edit: boolean
  editingValue: string
}

export type TodoProps = {
  todo: Todo
  valor: string
  handleCheckTodo: (id: string) => void
  handleDeleteTodo: (id: string) => void
  handleEdit: (id: string) => void
  handleInputChange: (e: ChangeEvent) => void
  handleEditTodo: (id: string) => void
  handleUpdateTodo: (id: string) => void
}

export type AddTodoProps = {
  task: string
  handleSubmitTodo: (e: FormEvent) => void
  handleChange: (e: ChangeEvent) => void
}