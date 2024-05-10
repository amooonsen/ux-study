import { useState, useContext } from 'react';
import { ImageContext } from '../contexts/ImageContext';

export const ImageUpload = () => { // 이미지 업로드 기능
	const { addImage } = useContext(ImageContext);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
			//파일을 이미지 url로 바꿔주기
      const reader = new FileReader();
      reader.onloadend = () => {
				// setSelectedFile(e.target?.result)
				addImage(reader.result)
        // onImageUpload(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};