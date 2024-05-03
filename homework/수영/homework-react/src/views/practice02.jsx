
import { useState,useEffect,useRef } from "react";
import ToggleButton from '../component/button';
import '/public/styles/practice02.scss';

// 과제 1: 토글 스위치 만들기
function Assignment1() {
  const [prev, setPrev] = useState(false);
  const handleClick = () => setPrev((prev) => !prev);

  return (
    <div>
      <p>과제1</p>
      <ToggleButton handleClick={handleClick} />
      {prev ? <p>토글이활성화된 상태입니다.</p> : <p>토글이 비활성화된 상태입니다.</p>}
    </div>
  );
}

// 과제 2: 간단한 Todo 앱 만들기
function Assignment2() {
  const [inputValue, setInputValue] = useState('');
  const [lists, setList] = useState(['경문이 은영이랑 뽀뽀','초희 똥닦아주기','유람이 소스 못먹게 하기','지언이 그만드세요-0-;',]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    setList([...lists, inputValue]);
    setInputValue('');
  };

  const handleDeleteItem = (index) => {
    const newList = [...lists];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>
      <p>과제2</p>
      <p>To do List</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem} disabled={inputValue.trim() === ''}>Add</button>
      {lists.map((list, index) => (
        <div key={index}>
          {list}
          <button onClick={() => handleDeleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

// 과제 3: 이미지 갤러리 만들기
function Assignment3() {
  const images = ['url1.jpg', 'url2.jpg', 'url3.jpg'];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <p>과제 3</p>
      <ul className='gallery-wrap'>
        {images.map((image, index) => (
          <li key={index} onClick={() => handleImageClick(image)}>
            <img src={image} alt="" />
            <p>햄깅이,{image}</p>
          </li>
        ))}
      </ul>
      {selectedImage && (
        <div className='modal'>
          <p className='tit'>{selectedImage}</p>
          <img src={selectedImage} alt={selectedImage} />
          <button onClick={handleCloseModal}>닫기</button>
        </div>
      )}
    </div>
  );
}

// 과제 4: useRef를 사용한 입력 필드 자동 포커스 관리 예제
function Assignment4() {
  const inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus();
  })
  const clickButton = () =>{
    alert(`환영합니다 ${inputRef.current.value}님 !!!!! `)
  }
  return (
    <>
      <p>과제 4</p>
      <input ref={inputRef} type='text' placeholder='Click the button to focus me' />
      <button onClick={clickButton}>확인</button>
    </>
  )
}  
export default function Practice02() {
  return (
    <>
      <Assignment1 />
      <Assignment2 />
      <Assignment3 />
      <Assignment4 />
    </>
  );
}



// 과제 1: 토글 스위치 만들기
// 요구 사항:
// 토글 스위치 컴포넌트를 만들어 주세요. 이 토글은 활성화/비활성화 상태를 나타낼 수 있습니다.
// 토글이 활성화되면 ‘활성화 상태입니다‘라는 메시지가 화면에 표시되어야 합니다.
// 토글이 비활성화되면 ‘비활성화 상태입니다’라는 메시지가 화면에 표시되어야 합니다.
// 토글의 초기 상태는 비활성화로 설정합니다.

// 과제 2: 간단한 Todo 앱 만들기
// 요구 사항:
// 사용자는 새로운 할 일을 입력하고 추가 버튼을 클릭하여 리스트에 추가할 수 있어야 합니다.
// 리스트에 표시된 각 할 일 옆에는 삭제 버튼이 있어야 하며, 이를 클릭하면 해당 할 일이 목록에서 제거됩니다.
// 할 일이 비어 있을 경우 추가 버튼이 비활성화되어야 합니다.
// 힌트: input에서 onChange 함수를 사용해보세요. 이벤트 타겟의 value를 받아오면 됩니다.


// 과제 3: 이미지 갤러리 만들기
// 요구 사항:
// 여러 이미지를 배열에 저장하고, 이 배열을 사용하여 갤러리를 만드세요.
// 각 이미지는 썸네일 형태로 표시되어야 하며, 썸네일을 클릭하면 큰 이미지가 팝업 또는 모달 형태로 표시되어야 합니다.
// 이미지를 닫을 수 있는 닫기 버튼이 있어야 합니다.
// 힌트:
// 세팅 코드
// import { useState } from "react"

// export default function Practice02() {
// 	// 이미지 URL을 여기에 넣으세요.
//   const images = ['url1.jpg', 'url2.jpg', 'url3.jpg']; 
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
// 		<>
// 		</>
//   )
// }

// 과제 4(!!!): useRef를 사용한 입력 필드 자동 포커스 관리 예제
// 요구 사항:
// document.querySelector 등의 DOM 직접 선택 방식을 사용하지 않고,
// useRef를 사용하여 특정 입력 필드에 자동으로 포커스를 맞추는 기능을 구현해야 합니다.
// 4:20
// return (
//   <div>
//       <h1>인풋 포커스 예제</h1>
//       <input type=“text” placeholder=“Click the button to focus me” />
//       <button>버튼에 포커스 주기</button>
//   </div>
// );