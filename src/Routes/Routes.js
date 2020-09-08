import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Common/Header.Component/Header.jsx";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Footer from "../Common/Footer.component/Footer";
const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
