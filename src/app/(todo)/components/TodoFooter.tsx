import { Filter } from '@/stores/todo.store'
import React from 'react'
import TodoFilterBar from './TodoFilterBar'

interface TodoFooterProps {
  remainingCount: number
  filter: Filter
  setFilter: (filter: Filter) => void
  clearCompleted: () => void
}

const TodoFooter: React.FC<TodoFooterProps> = ({ remainingCount, filter, setFilter, clearCompleted }) => {
  return (
    <div className="flex justify-between items-center p-4 text-sm text-gray-500">
      <span suppressHydrationWarning>{remainingCount} items left</span>

      <div className="hidden md:block">
        <TodoFilterBar filter={filter} setFilter={setFilter} />
      </div>

      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoFooter
