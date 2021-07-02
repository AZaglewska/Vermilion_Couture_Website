import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import About from "../pages/About";
import { routes } from "../routes";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <MainTemplate>
            <Route path={routes.about} component={About} />
          </MainTemplate>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
