import { useState } from 'react';

function ImageUpload() {
  // 선택된 이미지 파일을 저장할 상태 변수
  const [selectedImage, setSelectedImage] = useState(null);

  // 이미지 파일을 선택했을 때 호출되는 이벤트 핸들러
  const handleImageChange = (event) => {
    // 선택된 파일을 가져옵니다.
    const file = event.target.files[0];

    const reader = new FileReader();

    // 파일을 읽을 때마다 호출
    reader.onloadend = () => {
      // 파일 읽기가 완료되면, 파일의 내용을 상태 변수에 저장
      setSelectedImage(reader.result);
    };

    // 파일의 내용을 문자열로 변환
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h3>이미지 업로드</h3>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <img src={selectedImage} alt="선택된 이미지" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
}

export default ImageUpload;