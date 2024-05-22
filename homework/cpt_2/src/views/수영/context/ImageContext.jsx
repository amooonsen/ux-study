
import { createContext, useContext, useState } from "react";

const ImageContext = createContext(null);

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageDescription, setImageDescription] = useState('');
  
    const addImage = (image) => {
      setImages(prevImages => [...prevImages, image]);
    };
  
    const deleteImage = (id) => {
      setImages(prevImages => prevImages.filter(image => image.id !== id));
    };
  
    const updateImage = (updatedImage) => {
      setImages(prevImages =>
        prevImages.map(image =>
          image.id === updatedImage.id ? updatedImage : image
        )
      );
    };
  
    return (
      <ImageContext.Provider value={{ images, selectedImage, setSelectedImage, imageDescription, setImageDescription, addImage, deleteImage, updateImage }}>
        {children}
      </ImageContext.Provider>
    );
  };