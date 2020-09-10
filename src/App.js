import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AuthenticationRoutes from "./Routes/AuthenticationRoutes";
import Header from "./Common/Header.Component/Header";
import Footer from "./Common/Footer.component/Footer";
// import NonAuthencationRoutes from "./Routes/NonAuthenticationRoutes";

const App = () => (
  <div className="App">
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

export default App;
