// TodoContext.js
import { createContext, useState, useEffect } from 'react';

// TodoContext 생성
export const TodoContext = createContext(); //, 컴포넌트 트리 내에서 깊숙히 위치한 컴포넌트에서도 사용할 수 있게 해줍

// TodoProvider 컴포넌트: 투두리스트의 상태를 관리하고, 로컬 스토리지에 데이터를 저장
export const TodoProvider = ({ children }) => {
  
  // 로컬 스토리지에서 투두리스트를 불러오거나 초기 상태를 설정
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos? JSON.parse(savedTodos) : [];
  });

  // 투두리스트가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 새로운 투두리스트 항목 추가
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text }; // id: 각 항목을 고유하게 식별하고, 상태 관리, 로컬 스토리지 저장, 리렌더링 최적화, 데이터베이스 연동 등 다양한 상황에서 중요한 역할
    setTodos([...todos, newTodo]);
  };

  // 투두리스트 항목 삭제
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id!== id));
  };

  // 투두리스트 항목 수정
  const updateTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id? {...todo, text: newText } : todo)));
  };

  // TodoProvider를 통해 상태를 제공
  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};