import { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const addImage = (url, description) => {
    const newImage = { id: images.length + 1, url, description };
    setImages([...images, newImage]);
  };

  const deleteImage = (id) => {
    const filteredImages = images.filter((image) => image.id !== id);
    setImages(filteredImages);
  };

  const updateImage = (id, newDescription) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, description: newDescription } : image
    );
    setImages(updatedImages);
  };

  return (
    <ImageContext.Provider value={{ images, addImage, deleteImage, updateImage }}>
      {children}
    </ImageContext.Provider>
  );
};