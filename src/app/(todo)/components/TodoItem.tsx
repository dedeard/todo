import { CheckIcon, DeleteIcon } from '@/app/(todo)/components/Icons'
import { Todo, useTodoStore } from '@/stores/todo.store'
import cn from '@/utils/classNames'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const removeTodo = useTodoStore(state => state.removeTodo)

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: todo.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} className="flex items-center p-4 border-b group dark:border-gray-700 border-gray-200">
      <button
        title={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        className={cn('flex-shrink-0 w-6 h-6 rounded-full border mr-4', {
          'bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center': todo.completed,
          'dark:border-gray-600 border-gray-400': !todo.completed,
        })}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.completed && <CheckIcon />}
      </button>

      <span {...attributes} {...listeners} className="flex-1 cursor-grab active:cursor-grabbing dark:text-white text-gray-800">
        <span
          className={cn({
            'line-through dark:text-gray-500 text-gray-400': todo.completed,
            'dark:text-white text-gray-800': !todo.completed,
          })}
        >
          {todo.text}
        </span>
      </span>

      <button
        title="Delete todo"
        className="ml-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => removeTodo(todo.id)}
      >
        <DeleteIcon />
      </button>
    </div>
  )
}

export default TodoItem
