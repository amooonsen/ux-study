import { useState, useEffect } from 'react';

function UserCheck() {
  // 사용자 상태 데이터를 저장할 상태 변수
  const [userStatus, setUserStatus] = useState([]);

  // API 호출을 위한 함수
  const fetchUserStatus = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/user/status');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUserStatus(data); // 데이터를 상태 변수에 저장
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  // 컴포넌트가 마운트될 때 API 호출 초기화
  useEffect(() => {
    fetchUserStatus();
  }, []); // 빈 배열을 두면 컴포넌트가 마운트될 때만 실행됩니다.

  return (
    <div>
      <h1>Realtime User Status</h1>
      <ul>
        {userStatus.map((status, index) => (
          <li key={index}>{status}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserCheck;