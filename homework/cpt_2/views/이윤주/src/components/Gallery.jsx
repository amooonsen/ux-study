import { useContext } from 'react';
import { ImageContext } from '../contexts/ImageContext';

export const Gallery = () => {
  const { images, deleteImage, updateImage } = useContext(ImageContext);

  const handleDelete = (id) => {
    deleteImage(id);
  };

  const handleUpdateDescription = (id, newDescription) => {
    updateImage(id, newDescription);
  };

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt={image.description} />
          <button onClick={() => handleDelete(image.id)}>Delete</button>
          <input
            type="text"
            defaultValue={image.description}
            onBlur={(e) => handleUpdateDescription(image.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};
