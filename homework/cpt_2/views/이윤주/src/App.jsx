import { useState } from 'react'

import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoProvider } from './contexts/TodoContext'
import { FilterButtons } from './components/FilterButtons'
import { TodoList } from './components/TodoList'


function App() {

  return (
    <TodoProvider>
      <h1>오늘 할 일</h1>
      <TodoForm/>
      <FilterButtons/>
      <h2>할일 목록</h2>
      <TodoList/>
    </TodoProvider>
  )
}

export default App
