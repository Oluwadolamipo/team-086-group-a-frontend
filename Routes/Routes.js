import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import SigninRegistrationPage from "../Pages/RegistrationPages/SigninRegistration";
import SignupRegistrationPage from "../Pages/RegistrationPages/RegistrationPages";
import UnProtectedRoutes from "./UnprotectedRoutes";
import ProtectedRoutes from "./ProtectRouted";
import NotFoundPage from "../Pages/NotFoundPages/NotFound";
import Routers from "../Components/Blogs/Routers";
const Routes = () => {
  return (
    <div>
      <Routers/>
      <Router>
        <Switch>
          <UnProtectedRoutes
            path="/team-086-group-a-frontend/"
            exact
            component={LandingPage}
          />

          <UnProtectedRoutes
            path="/team-086-group-a-frontend/home"
            // exact
            component={LandingPage}
          />

          <UnProtectedRoutes
            path="/team-086-group-a-frontend/signin"
            component={SigninRegistrationPage}
          />
          
          <UnProtectedRoutes
            path="/team-086-group-a-frontend/signup"
            // exact
            component={SignupRegistrationPage}
          />
          
          <UnProtectedRoutes
            path="/team-086-group-a-frontend/signin"
            // exact
            component={SigninRegistrationPage}
          />
          <ProtectedRoutes
            path="/team-086-group-a-frontend/dash"
            // exact={true}
            render={() => <h1>Am protected </h1>}
          />
          <Route render={NotFoundPage} />
        </Switch>
        
      </Router>
      {/* <Routers/> */}
    </div>
  );
};

export default Routes;
