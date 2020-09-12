import React from "react";
import { Switch, Route } from "react-router-dom";
import { NonRegisteredMemberContextProvider } from "../Context/NonRegisteredMemberContext";
import LandingPage from "../Pages/LandingPage/LandingPage";
import RegistrationPages from "../Pages/RegistrationPages/RegistrationPages";

const UnProtectedRoutes = () => {
  return (
    <div>
      <NonRegisteredMemberContextProvider>
        <Switch>
          <Route
            path="/team-086-group-a-frontend/"
            exact={true}
            component={LandingPage}
          />
          <Route
            path="/team-086-group-a-frontend/registration"
            exact={true}
            component={RegistrationPages}
          />
        </Switch>
      </NonRegisteredMemberContextProvider>
    </div>
  );
};
export default UnProtectedRoutes;
