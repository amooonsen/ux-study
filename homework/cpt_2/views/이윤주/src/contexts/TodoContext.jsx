import { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    // local storage에 있는지 확인
    localStorage.getItem('todos') 
    ? JSON.parse(localStorage.getItem('todos')) :
    {}
  );
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'active'

  // 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // 로컬 스토리지에 데이터 저장하기
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    // console.log(localStorage)
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'active') {
      return !todo.completed;
    }
    return true; // 'all'
  });

  return (
    <TodoContext.Provider value={{ filter, todos, addTodo, deleteTodo, toggleTodo, editTodo, filteredTodos, setFilter }}>
      {children}
    </TodoContext.Provider>
  );
};