import { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    editTodo(todo.id)
  };

  const handleSave = () => {
    if (editText.trim() !== '') {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  return (
    <li>
      {
        isEditing ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={handleSave}>저장</button>
            <button onClick={handleCancel}>취소</button>
          </>
        ) :
        (
          <>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={handleEdit}>수정</button>
            <button onClick={() => toggleTodo(todo.id)}>{todo.completed ? '완료안한듯' : '완료'}</button>
            <button onClick={() => deleteTodo(todo.id)}>그냥 안할래요</button>
          </>
        )
      }
    </li>
  );
};