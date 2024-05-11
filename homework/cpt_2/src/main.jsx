import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './components/TodoList.jsx'
import UserState from './components/UserState.jsx'
import ImageUpload from './components/ImageUpload.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
    <UserState />
    <ImageUpload />
  </React.StrictMode>,
)
