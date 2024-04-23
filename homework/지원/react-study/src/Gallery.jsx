import React, { useState } from 'react';
import './Gallery.css'; 


export default function Practice02() {
  const images = [
    '/img/img01.jpg', 
    '/img/img02.jpg',
    '/img/img03.jpg',
    '/img/img04.jpg',
    '/img/img05.jpg',
    '/img/img06.jpg',
    '/img/img07.jpg',
    '/img/img08.jpg',
  ]; 
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='gallery-wrap'>
      <h2>갤러리만들기(클릭해보셔요)</h2>
      <ul>
        {images.map((image, index) => (
          <li key={index} onClick={() => openModal(image)}>
            <img src={image} alt={`Thumbnail ${index}`} />
          </li>
        ))}
      </ul>
      {selectedImage && (
        <div className="modal">
          <img src={selectedImage} alt="Selected Image"/>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}
