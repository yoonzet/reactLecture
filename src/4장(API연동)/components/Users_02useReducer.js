// 4장 2.useReducer로 상태관리

import axios from "axios";
import React, { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Users_useReducer() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, data: users, error } = state;

  if (loading) return <div>loading..</div>;
  if (error) return <div>ERROR!!</div>;
  if (!users) return null;

  return (
    <div>
      <hr />
      <h2>4-02. useReducer로 작업</h2>
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

export default Users_useReducer;
