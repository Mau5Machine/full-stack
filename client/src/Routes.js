import React from "react";
import { Switch } from "react-router-dom";

// ! Routes for layouts
import { RouteWithLayout, ProtectedRouteWithLayout } from "components";

// ! Layouts
import { Main as MainLayout, Protected as ProtectedLayout } from "layouts";

// ! Views
import {
  Login as LoginView,
  Dashboard as DashboardView,
  Register as RegisterView,
} from "views";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={LoginView}
        exact
        layout={MainLayout}
        path="/"
      />
      <RouteWithLayout
        component={RegisterView}
        exact
        layout={MainLayout}
        path="/register"
      />
      <ProtectedRouteWithLayout
        component={DashboardView}
        exact
        layout={ProtectedLayout}
        path="/dashboard"
      />
    </Switch>
  );
};

export default Routes;
