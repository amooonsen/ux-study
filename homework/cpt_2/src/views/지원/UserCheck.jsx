import { useState, useEffect } from "react";
import axios from "axios";

function UserCheck() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // JSONPlaceholder API에서 사용자 목록을 가져옴
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("에러용:", error);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <h1>안냐세요</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div className="user-details">
          <h2>{selectedUser.name}</h2>
          <p>{selectedUser.email}</p>
          <p>{selectedUser.phone}</p>
        </div>
      )}
    </div>
  );
}

export default UserCheck;
