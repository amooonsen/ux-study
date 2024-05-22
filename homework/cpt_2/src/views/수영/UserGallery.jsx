import React, { useState } from 'react';
import { useImageContext } from './context/ImageContext';
import './UserGallery.css'



  const UserGallery = () => {
    const { images, selectedImage, setSelectedImage, imageDescription, setImageDescription, addImage, deleteImage, updateImage } = useImageContext();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [filter, setFilter] = useState('');
  
    const handleImageUpload = (event) => {
      const files = Array.from(event.target.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const image = {
            id: Date.now().toString(),
            url: e.target.result,
            description: '',
          };
          addImage(image);
        };
        reader.readAsDataURL(file);
      });
    };
  
    const handleImageDescriptionChange = (e) => {
      setImageDescription(e.target.value);
    };
  
    const openModal = (image) => {
      setSelectedImage(image);
      setImageDescription(image.description);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
      setImageDescription('');
      setModalIsOpen(false);
    };
  
    const filterImages = (image) => {
      return image.description.toLowerCase().includes(filter.toLowerCase());
    };
  
    const saveImageDescription = () => {
      updateImage({ ...selectedImage, description: imageDescription });
      closeModal();
    };
  
    return (
      <div className="UserGallery">
        <h1>Image Gallery</h1>
        <label htmlFor="file-upload" className="custom-file-upload">
            이미지 업로드
        </label>
        <input id="file-upload" className="file" type="file" accept="image/*" onChange={handleImageUpload} multiple />
        <input className="search" type="text" placeholder="검색할 이미지를 입력하세요" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <div className="image-gallery">
          {images.filter(filterImages).map(image => (
            <div key={image.id} className="image-card">
              <img src={image.url} alt="Uploaded" className="image" />
              <p>{image.description}</p> {/* 이미지 설명을 표시 */}
              <div className="image-actions">
                <button onClick={() => deleteImage(image.id)}>삭제</button>
                <button onClick={() => openModal(image)}>편집</button>
              </div>
            </div>
          ))}
        </div>
        {modalIsOpen && (
            <div className="modal">
            <div className="modal-content">
                <h2>이미지 편집</h2>
                <img src={selectedImage?.url} alt="Selected" className="selected-image" />
                <textarea value={imageDescription} onChange={handleImageDescriptionChange} />
                <button onClick={saveImageDescription}>저장</button>
                <button onClick={closeModal}>닫기</button>
            </div>
            </div>
        )}
      </div>
    );
  };
  
  export default UserGallery;