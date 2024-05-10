import { useState } from 'react';

export const ImageUpload = ({ onImageUpload }) => { // 이미지 업로드 기능
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
			//파일을 이미지 url로 바꿔주기
      const reader = new FileReader();
      reader.onloadend = (e) => {
				setSelectedFile(e.target?.result)
        // onImageUpload(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
			{
				selectedFile &&
					<img src={selectedFile}/>
			}
    </div>
  );
};