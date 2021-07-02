import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import About from "../pages/About";
import { routes } from "../routes";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../globalStyles/MainTheme";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <Switch>
            <MainTemplate>
              <Route path={routes.about} component={About} />
            </MainTemplate>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default Router;
