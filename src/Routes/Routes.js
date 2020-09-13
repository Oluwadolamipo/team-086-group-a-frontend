import React from "react";
import { BrowserRouter } from "react-router-dom";
import UnProtectedRoutes from "./UnprotectedRoutes";
import ProtectedRoutes from "./ProtectRouted";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <UnProtectedRoutes />
        <ProtectedRoutes />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
