// TodoList.js
import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

// TodoList 컴포넌트: 투두리스트를 렌더링하고, 새로운 투두리스트 항목을 추가할 수 있게 함
const TodoList = () => {
  // TodoContext를 통해 투두리스트를 사용
  const { todos } = useContext(TodoContext);

  // 각 투두리스트 항목을 TodoItem 컴포넌트로 렌더링
  return (
    <div>
      <TodoInput />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;