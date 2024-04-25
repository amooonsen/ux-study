import { useState } from "react";
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

export default function Practice02() {
  return (
    <>
      <Assignment1 />
      <Assignment2 />
      <Assignment3 />
    </>
  );
}
