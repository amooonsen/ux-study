

import UserTodo from './UserTodo';
import UserPulse from './UserPulse';
import UserGallery from './UserGallery';
import { ImageProvider } from './context/ImageContext';

const Waterzero = () => {
  return (
    <>
      {/* 과제 1: 중간 난이도 Todo 앱 만들기 */}
      <UserTodo />

      {/* 과제 2: 중간 난이도 실시간 사용자 상태 표시 앱 */}
      <UserPulse />

      {/* 과제 3: 중간 난이도 이미지 업로드 및 갤러리 앱 */}
      <ImageProvider>
        <UserGallery />
      </ImageProvider>
    </>
  );
};

export default Waterzero; 