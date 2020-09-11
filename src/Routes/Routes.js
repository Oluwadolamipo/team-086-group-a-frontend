import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Common/Header.Component/Header";
import Footer from "../Common/Footer.component/Footer";
import UnProtectedRoutes from "./UnprotectedRoutes";
import ProtectedRoutes from "./ProtectRouted";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <UnProtectedRoutes />
        <ProtectedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
