import React from "react";
import Users from "./components/Users_01";
import Users_customHook from "./components/Users_03customHook";
import Users_useReducer from "./components/Users_02useReducer";
import { UsersProvider } from "./components/05.context/UsersContext_05";
import Users_05context from "./components/05.context/Users_05context";

function API() {
  return (
    <div>
      <UsersProvider>
        <Users />
        <Users_useReducer />
        <Users_customHook />
        <Users_05context />
      </UsersProvider>
    </div>
  );
}
export default API;
