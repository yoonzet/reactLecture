import axios from "axios";
import React, { useState } from "react";
import useAsync from "./useAsync";
import User from "./User";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function Users_customHook() {
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsync(getUsers, [], true);

  const { loading, data: users, error } = state;

  if (loading) return <div>loading..</div>;
  if (error) return <div>ERROR!!</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;
  return (
    <div>
      <hr />
      <h2>커스텀 훅으로 작업</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username}
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={refetch}>불러오기</button>
      {userId && <User id={userId} />}
    </div>
  );
}

export default Users_customHook;
