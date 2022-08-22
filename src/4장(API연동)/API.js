import React from "react";
import Users from "./components/Users";
import Users_customHook from "./components/Users_customHook";
import Users_useReducer from "./components/Users_useReducer";

function API() {
  return (
    <div>
      <Users />
      <Users_useReducer />
      <Users_customHook />
    </div>
  );
}
export default API;
