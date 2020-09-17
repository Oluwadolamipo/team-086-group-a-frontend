import React from "react";
import { Route, Redirect } from "react-router-dom";
import { RegisteredMemberContextProvider } from "../Context/RegisteredMemberContext";

const ProtectedRoutes = (props) => {
  //checking for using token is session storage
  const isAuth = !!sessionStorage.getItem("Token") ? (
    <RegisteredMemberContextProvider>
      <Route {...props} />
    </RegisteredMemberContextProvider>
  ) : (
    <Redirect to="/team-086-group-a-frontend/signin" />
  );

  return <div>{isAuth}</div>;
};
export default ProtectedRoutes;
