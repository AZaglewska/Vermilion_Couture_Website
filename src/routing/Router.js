import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import { routes } from "../routes";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={routes.about} component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
