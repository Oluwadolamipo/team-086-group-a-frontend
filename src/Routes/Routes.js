import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UnProtectedRoutes from "./UnprotectedRoutes";
import LandingPage from "../Pages/LandingPage/LandingPage";
import SignupRegistrationPage from "../Pages/RegistrationPages/RegistrationPages";
import SigninRegistrationPage from "../Pages/RegistrationPages/SigninRegistration";
import ProtectedRoutes from "./ProtectRouted";
import NotFoundPage from "../Pages/NotFoundPages/NotFound";
const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <UnProtectedRoutes
            path="/team-086-group-a-frontend/"
            exact
            component={LandingPage}
          />
          <UnProtectedRoutes
            path="/team-086-group-a-frontend/signin"
            component={SigninRegistrationPage}
          />
          <UnProtectedRoutes
            path="/team-086-group-a-frontend/signup"
            // exact={true}
            component={SignupRegistrationPage}
          />
          <ProtectedRoutes
            path="/team-086-group-a-frontend/dash"
            // exact={true}
            render={() => <h1>Am protected </h1>}
          />
          <Route render={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
