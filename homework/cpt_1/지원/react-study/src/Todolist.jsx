import React, { useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); //

  const handleAddTodo = () => {  //할일 추가하는 함수
    if (newTodo.trim() !== '') {  //todo 상태값이 비어있지않을때 
      setTodo([...todo, newTodo]); // todo배열에 추가, newtodo 상태 초기화
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => { //할일 제거하는 함수 
    const updatedTodo = todo.filter((todo, i) => i !== index); //삭제한거 제외하고 새로운배열, todo상태업데이트
    setTodo(updatedTodo);
  };

  return (
    <div>
    <h3>나의할일</h3>
      <input
        type="text" 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="입력해보셔요"
      />
      <button onClick={handleAddTodo} disabled={newTodo.trim() === ''}>
        추가하기
      </button>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>삭제하기</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;