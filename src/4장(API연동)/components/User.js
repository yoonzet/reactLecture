import React, { useEffect } from "react";
import {
  getUser,
  useUsersDispatch,
  useUsersState,
} from "./05.context/UsersContext_05";

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { data: user, loading, error } = state.user;

  if (loading) return <div>loading..</div>;
  if (error) return <div>ERROR..</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default User;
