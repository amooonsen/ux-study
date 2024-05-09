import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
			<button onClick={() => toggleTodo(todo.id)}>{todo.completed ? '완료안한듯' : '완료'}</button>
      <button onClick={() => deleteTodo(todo.id)}>그냥 안할래요</button>
    </li>
  );
};