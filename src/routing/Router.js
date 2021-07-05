import React, { useState, useEffect } from "react";
import MainTemplate from "../templates/MainTemplate";
import Home from "../pages/Home";
import About from "../pages/About";
import Publications from "../pages/Publications";
import EveningCollection from "../pages/EveningCollection";
import WeddingCollection from "../pages/WeddingCollection";
import UnderbustCollection from "../pages/UnderbustCollection";
import OverbustCollection from "../pages/OverbustCollection";
import Couture from "../pages/Couture";
import Contact from "../pages/Contact";
import SingleProduct from "../pages/SingleProduct";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../globalStyles/MainTheme";

const Router = ({ currentLanguage }) => {
  const [localLang, setLocalLang] = useState(currentLanguage);
  useEffect(() => {
    setLocalLang(currentLanguage);
  }, [currentLanguage]);

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <Switch>
            <MainTemplate>
              <Route exact path={routes.home} component={Home} />
              <Route path={routes.about} component={About} />
              <Route path={routes.aboutENG} component={About} />
              <Route path={routes.publications} component={Publications} />
              <Route path={routes.publicationsENG} component={Publications} />
              <Route
                path={routes.eveningCollection}
                component={EveningCollection}
              />
              <Route
                path={routes.eveningCollectionENG}
                component={EveningCollection}
              />
              <Route
                path={routes.weddingCollection}
                component={WeddingCollection}
              />
              <Route
                path={routes.weddingCollectionENG}
                component={WeddingCollection}
              />
              <Route
                path={routes.underbustCollection}
                component={UnderbustCollection}
              />
              <Route
                path={routes.underbustCollectionENG}
                component={UnderbustCollection}
              />

              <Route
                path={routes.overbustCollection}
                component={OverbustCollection}
              />
              <Route
                path={routes.overbustCollectionENG}
                component={OverbustCollection}
              />
              <Route path={routes.couture} component={Couture} />
              <Route path={routes.contact} component={Contact} />
              <Route path={routes.contactENG} component={Contact} />
              <Route path={routes.singleProduct} component={SingleProduct} />
            </MainTemplate>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(Router);
