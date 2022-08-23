// 4장 5.Context와 함께 사용하기

import React, { useState } from "react";
import User from "../User";
import { getUsers, useUsersDispatch, useUsersState } from "./UsersContext_05";

function Users_05context() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;
  return (
    <>
      <h2>4-05. useContext로 작업</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users_05context;
