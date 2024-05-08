// TodoItem.js
import { useContext, useState } from 'react';
import { TodoContext } from './TodoContext'

// TodoItem 컴포넌트: 각 투두리스트 항목을 렌더링하고, 수정 및 삭제 기능을 제공
const TodoItem = ({ todo }) => {
  // TodoContext를 통해 삭제 및 수정 함수를 사용
  const { removeTodo, updateTodo } = useContext(TodoContext);

  // 수정 모드 상태 관리
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  // 수정 모드 진입
  const enterEditMode = () => {
    setIsEditing(true);
  };

  // 수정 모드에서 텍스트 변경
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 수정 완료
  const exitEditMode = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  // 투두리스트 항목 삭제
  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <div>
      {isEditing? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={exitEditMode}
        />
      ) : (
        <div>
          {todo.text}
          <button onClick={enterEditMode} type='button'>수정하기</button>
          <button onClick={handleDelete}>삭제하기</button>
        </div>
      )}
      {isEditing && (
        <button onClick={exitEditMode}>수정 완료</button> // 수정 완료 버튼
      )}
      
    </div>
  );
};

export default TodoItem;