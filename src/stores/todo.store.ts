import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Todo = {
  id: string
  text: string
  completed: boolean
}

export type Filter = 'all' | 'active' | 'completed'

interface TodoStore {
  todos: Todo[]
  filter: Filter
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
  clearCompleted: () => void
  setFilter: (filter: Filter) => void
  remainingCount: () => number
  setTodos: (todos: Todo[]) => void
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      filter: 'all',
      addTodo: text => {
        const trimmedText = text.trim()
        if (trimmedText) {
          set(state => ({
            todos: [
              ...state.todos,
              {
                id: Date.now().toString(),
                text: trimmedText,
                completed: false,
              },
            ],
          }))
        }
      },

      toggleTodo: id => {
        set(state => ({
          todos: state.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        }))
      },

      removeTodo: id => {
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
        }))
      },

      clearCompleted: () => {
        set(state => ({
          todos: state.todos.filter(todo => !todo.completed),
        }))
      },

      setFilter: filter => {
        set({ filter })
      },

      remainingCount: () => {
        const { todos } = get()
        return todos.filter(todo => !todo.completed).length
      },
      setTodos: todos => {
        set({ todos })
      },
    }),
    {
      name: 'todo-storage',
    }
  )
)
