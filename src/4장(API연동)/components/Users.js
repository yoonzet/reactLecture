import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    // useEffect의 첫번째 인자로 async가 올수 없기때문에 내부에서 async를 선언해준다.
    try {
      setError(null);
      setUsers(null);
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>loading..</div>;
  if (error) return <div>error!</div>;
  if (!users) return null;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>불러오기</button>
    </div>
  );
}

export default Users;
