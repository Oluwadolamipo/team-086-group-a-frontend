import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import AuthenticationRoutes from "./AuthenticationRoutes";
import Header from "../Common/Header.Component/Header";
import Footer from "../Common/Footer.component/Footer";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/team-086-group-a-frontend"
            component={LandingPage}
          />

          <AuthenticationRoutes />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
