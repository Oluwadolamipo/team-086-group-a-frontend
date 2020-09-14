import React from "react";
import { Switch, Route } from "react-router-dom";
import { NonRegisteredMemberContextProvider } from "../Context/NonRegisteredMemberContext";
import LandingPage from "../Pages/LandingPage/LandingPage";
import RegistrationPages from "../Pages/RegistrationPages/RegistrationPages";
import SigninRegistrationPage from "../Pages/RegistrationPages/SigninRegistration";

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
            path="/team-086-group-a-frontend/signup"
            exact={true}
            component={RegistrationPages}
          />
          <Route
            path="/team-086-group-a-frontend/signin"
            exact={true}
            component={SigninRegistrationPage}
          />
        </Switch>
      </NonRegisteredMemberContextProvider>
    </div>
  );
};
export default UnProtectedRoutes;
