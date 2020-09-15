import React from "react";
import { Route, Redirect } from "react-router-dom";
import { RegisteredMemberContextProvider } from "../Context/RegisteredMemberContext";

const ProtectedRoutes = (props) => {
  const isAuth = localStorage.getItem("TodoItems") ? (
    <RegisteredMemberContextProvider>
      <Route {...props} />
    </RegisteredMemberContextProvider>
  ) : (
    <Redirect to="/team-086-group-a-frontend/signin" />
  );

  return <div>{isAuth}</div>;
};
export default ProtectedRoutes;
