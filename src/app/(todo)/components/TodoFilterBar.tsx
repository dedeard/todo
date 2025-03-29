import { Filter } from '@/stores/todo.store'
import cn from '@/utils/classNames'

interface TodoFilterBarProps {
  filter: Filter
  setFilter: (filter: Filter) => void
}

const TodoFilterBar: React.FC<TodoFilterBarProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-4">
      <button
        className={cn({
          'text-blue-500': filter === 'all',
          'text-gray-500': filter !== 'all',
        })}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={cn({
          'text-blue-500': filter === 'active',
          'text-gray-500': filter !== 'active',
        })}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={cn({
          'text-blue-500': filter === 'completed',
          'text-gray-500': filter !== 'completed',
        })}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  )
}

export default TodoFilterBar
