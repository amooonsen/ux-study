import { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodoContext } from '../contexts/TodoContext';

export const TodoList = () => {
  const { filteredTodos, filter } = useContext(TodoContext);
  // console.log(filter)
  return (
    <>
      <h2>{filter}</h2>
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
