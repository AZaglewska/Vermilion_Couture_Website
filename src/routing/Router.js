import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Home from "../pages/Home";
import About from "../pages/About";
import Publications from "../pages/Publications";
import EveningCollection from "../pages/EveningCollection";
import WeddingCollection from "../pages/WeddingCollection";
import UnderbustCollection from "../pages/UnderbustCollection";
import OverbustCollection from "../pages/OverbustCollection";
import Contact from "../pages/Contact";
import Couture from "../pages/Couture";
import SingleProduct from "../pages/SingleProduct";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
              <Route path={routes.home} component={Home} />
              <Route path={routes.about} component={About} />
              <Route path={routes.publications} component={Publications} />
              <Route
                path={routes.eveningCollection}
                component={EveningCollection}
              />
              <Route
                path={routes.weddingCollection}
                component={WeddingCollection}
              />
              <Route
                path={routes.underbustCollection}
                component={UnderbustCollection}
              />
              <Route
                path={routes.overbustCollection}
                component={OverbustCollection}
              />
              <Route path={routes.couture} component={Couture} />
              <Route path={routes.contact} component={Contact} />
              <Route path={routes.singleProduct} component={SingleProduct} />
            </MainTemplate>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default Router;
