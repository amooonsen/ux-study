import { useContext, useRef } from 'react';
import { TodoContext } from '../contexts/TodoContext.jsx';

export const TodoForm = () => {
	const { addTodo } = useContext(TodoContext);
  const todoInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = todoInputRef.current.value.trim();
    if (text !== '') {
      addTodo(text);
      todoInputRef.current.value = '';
    }
  };

  return (
    <>
			<form onSubmit={handleSubmit}>
      <input type="text" ref={todoInputRef} placeholder="할 일 입력하세요" />
      <button type="submit" onClick={() => alert('추가용 ㅋㅋ')}>추가</button>
    </form>
		</>
  );
};