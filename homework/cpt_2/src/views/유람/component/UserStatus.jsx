import React, { useState, useEffect } from "react";
import axios from "axios";

const UserStatus = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    reader.readAsDataURL(uploadedImage);
  };

  const handleImageAdd = () => {
    if (selectedImage) {
      setImages((prevImages) => [...prevImages, selectedImage]);
      setSelectedImage(null);
    }
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((image, i) => i !== index));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h2>User Info</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Address: {userData.address.city}, {userData.address.street}</p>
      </div>
      <div>
        <h2>Image Upload</h2>
        <input type="file" onChange={handleImageUpload} accept="image/*" />
        {selectedImage && (
          <div>
            <h3>Preview</h3>
            <img src={selectedImage} alt="Preview" style={{ maxWidth: "200px" }} />
            <button onClick={handleImageAdd}>Add Image</button>
          </div>
        )}
      </div>
      <div>
        <h2>Image Gallery</h2>
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Image ${index}`} style={{ maxWidth: "200px" }} />
              <button onClick={() => handleImageDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStatus;