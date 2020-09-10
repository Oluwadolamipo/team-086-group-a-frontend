import React from "react";
import { Switch, Route } from "react-router-dom";
import { RegisteredMemberContextProvider } from "../Context/RegisteredMemberContext";

const NotFound = () => {
  return <h2>pages not found</h2>;
};

const AuthenticationRoutes = () => {
  return (
    <div>
      {/* {sessionStorage.getItem("token") ? ( */}
      <div
        style={{
          display: "flex",
          backgroundColor: "#faf4f4",
          heigth: "100vh",
          justifyContent: "space-between",
        }}
      >
        <RegisteredMemberContextProvider>
          <Switch>
            <Route
              path="/team-086-group-a-frontend/dash"
              exact={true}
              component={NotFound}
            />
          </Switch>
        </RegisteredMemberContextProvider>
      </div>
      {/* ) : ( */}
      {/* window.location.replace("/team-086-group-a-frontend/") */}
      {/* )} */}
    </div>
  );
};
export default AuthenticationRoutes;
