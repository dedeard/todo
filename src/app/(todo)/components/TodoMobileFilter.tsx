import { Filter } from '@/stores/todo.store'
import React from 'react'
import TodoFilterBar from './TodoFilterBar'

interface TodoMobileFilterProps {
  filter: Filter
  setFilter: (filter: Filter) => void
}

const TodoMobileFilter: React.FC<TodoMobileFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="md:hidden mt-6 rounded-md shadow-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex justify-center">
        <TodoFilterBar filter={filter} setFilter={setFilter} />
      </div>
    </div>
  )
}

export default TodoMobileFilter
