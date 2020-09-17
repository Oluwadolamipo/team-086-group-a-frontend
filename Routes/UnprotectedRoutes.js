import React from "react";
import { Route } from "react-router-dom";
import { NonRegisteredMemberContextProvider } from "../Context/NonRegisteredMemberContext";

const UnProtectedRoutes = (props) => {
  return (
    <div>
      <NonRegisteredMemberContextProvider>
        <Route {...props} />
      </NonRegisteredMemberContextProvider>
    </div>
  );
};
export default UnProtectedRoutes;
