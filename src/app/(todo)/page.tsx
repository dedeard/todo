'use client'

import bgDesktopDark from '@/images/bg-desktop-dark.jpg'
import bgDesktopLight from '@/images/bg-desktop-light.jpg'
import bgMobileDark from '@/images/bg-mobile-dark.jpg'
import bgMobileLight from '@/images/bg-mobile-light.jpg'
import { useTodoStore } from '@/stores/todo.store'
import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useTheme } from 'next-themes'
import React, { useEffect, useRef, useState } from 'react'
import { MoonIcon, SunIcon } from './components/Icons'
import TodoFooter from './components/TodoFooter'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import TodoMobileFilter from './components/TodoMobileFilter'

export default function TodoPage() {
  const { todos, filter, addTodo, setFilter, setTodos, clearCompleted, remainingCount } = useTodoStore()
  const { theme, setTheme } = useTheme()

  const [newTodo, setNewTodo] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const isDarkMode = theme === 'dark'

  const toggleDarkMode = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      const oldIndex = todos.findIndex(todo => todo.id === active.id)
      const newIndex = todos.findIndex(todo => todo.id === over?.id)
      setTodos(arrayMove(todos, oldIndex, newIndex))
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (newTodo.trim()) {
      addTodo(newTodo)
      setNewTodo('')
    }
  }

  const bgDesktop = isDarkMode ? bgDesktopDark : bgDesktopLight
  const bgMobile = isDarkMode ? bgMobileDark : bgMobileLight

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="h-64 bg-cover bg-center hidden md:block" style={{ backgroundImage: `url(${bgDesktop.src})` }} />
      <div className="h-64 bg-cover bg-center md:hidden" style={{ backgroundImage: `url(${bgMobile.src})` }} />

      <div className="max-w-xl mx-auto px-4 -mt-40">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-widest text-white">TODO</h1>
          <button onClick={toggleDarkMode} className="text-white" aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleSubmit={handleSubmit} inputRef={inputRef} />

        <div className="rounded-md shadow-lg bg-white dark:bg-gray-800">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={filteredTodos.map(todo => todo.id)} strategy={verticalListSortingStrategy}>
              {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </SortableContext>
          </DndContext>

          <TodoFooter remainingCount={remainingCount()} filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />
        </div>

        <TodoMobileFilter filter={filter} setFilter={setFilter} />

        <p className="text-center text-gray-500 mt-8 mb-4">Drag and drop to reorder list</p>
      </div>
    </div>
  )
}
