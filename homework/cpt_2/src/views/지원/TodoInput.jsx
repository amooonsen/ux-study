import { useContext, useState, useRef, useEffect } from 'react'; // React 및 필요한 훅들을 import
import { TodoContext } from './TodoContext'; // TodoContext를 import

const TodoInput = () => {
  // TodoContext를 통해 addTodo 함수를 사용할 수 있게 함
  const { addTodo } = useContext(TodoContext);

  // 입력 필드의 값 상태를 관리하기 위한 useState 훅
  const [text, setText] = useState('');

  // 입력 필드에 대한 ref 생성. 이 ref는 나중에 컴포넌트가 마운트될 때 입력 필드에 자동으로 포커스를 설정하는 데 사용됩니다.
  const inputRef = useRef(null);

  // 컴포넌트가 마운트될 때 입력 필드에 자동으로 포커스를 설정
  useEffect(() => {
    inputRef.current.focus(); // 입력 필드에 포커스를 설정
  }, []); // 빈 배열을 두면 컴포넌트가 마운트될 때만 실행됩니다.

  // 입력 필드의 값이 변경될 때마다 호출되는 함수. 입력 필드의 값 상태를 업데이트
  const handleInputChange = (e) => {
    setText(e.target.value); // 입력 필드의 현재 값을 상태 변수에 저장
  };

  //새로운 투두리스트 항목을 추가하고 입력 필드를 초기화
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (text.trim()!== '') { // 입력 필드가 비어있지 않을 때만 추가
      addTodo(text); // TodoContext를 통해 addTodo 함수를 호출하여 새로운 투두리스트 항목을 추가
      setText(''); // 입력 필드의 값을 초기화합니다.
      inputRef.current.focus(); // "추가하기" 버튼을 누른 후에도 입력 필드에 포커스를 설정
    }
  };

  // 폼 요소들을 반환합니다.
  return (
    <form onSubmit={handleSubmit}>
      {/* 입력 필드 요소 */}
      <input
        name="text"
        type="text"
        placeholder="입력하기"
        value={text} // 입력 필드의 현재 값을 가져옴
        onChange={handleInputChange} // 입력 필드의 값이 변경될 때마다 handleInputChange 함수를 호출
        ref={inputRef} // 입력 필드에 ref를 연결
      />
      {/* 제출 버튼 요소 */}
      <button type="submit" disabled={text.trim() === ''}>추가하기</button>
    </form>
  );
};

export default TodoInput;