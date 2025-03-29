import React from 'react'

interface TodoInputProps {
  newTodo: string
  setNewTodo: (value: string) => void
  handleSubmit: (e: React.FormEvent) => void
  inputRef: React.RefObject<HTMLInputElement | null>
}

const TodoInput = ({ newTodo, setNewTodo, handleSubmit, inputRef }: TodoInputProps) => {
  return (
    <form className="rounded-md shadow-lg mb-6 bg-white dark:bg-gray-800" onSubmit={handleSubmit}>
      <div className="flex items-center p-4">
        <div className="w-6 h-6 rounded-full border dark:border-gray-600 border-gray-400 mr-4"></div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Create a new todo..."
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          className="flex-1 focus:outline-none bg-white dark:bg-gray-800 dark:text-white text-gray-800"
        />
      </div>
    </form>
  )
}

export default TodoInput
