import React, { useState, useEffect } from "react";
import MainTemplate from "../templates/MainTemplate";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import EveningCollection from "../pages/EveningCollection";
import WeddingCollection from "../pages/WeddingCollection";
import UnderbustCollection from "../pages/UnderbustCollection";
import OverbustCollection from "../pages/OverbustCollection";
import MeshCollection from "../pages/MeshCollection";
import SilkCollection from "../pages/SilkCollection";
import OtherCollection from "../pages/OtherCollection";
import Couture from "../pages/Couture";
import Contact from "../pages/Contact";
import SingleProduct from "../pages/SingleProduct";
import AskedQuestionsPage from "../pages/AskedQuestionsPage";
import FabricsPage from "../pages/FabricsPage";
import MeasuringPage from "../pages/MeasuringPage";
import AboutCollectionPage from "../pages/AboutCollectionPage";
import PrivacyPolicyPL from "../components/MappedPages/PrivacyPolicyPL";
import PrivacyPolicyENG from "../components/MappedPages/PrivacyPolicyENG";
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
              <Route path={routes.about} component={AboutPage} />
              <Route path={routes.aboutENG} component={AboutPage} />
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
              <Route path={routes.meshCollection} component={MeshCollection} />
              <Route
                path={routes.meshCollectionENG}
                component={MeshCollection}
              />
              <Route path={routes.silkCollection} component={SilkCollection} />
              <Route
                path={routes.silkCollectionENG}
                component={SilkCollection}
              />
              <Route
                path={routes.otherCollection}
                component={OtherCollection}
              />
              <Route
                path={routes.otherCollectionENG}
                component={OtherCollection}
              />
              <Route path={routes.couture} component={Couture} />
              <Route path={routes.contact} component={Contact} />
              <Route path={routes.contactENG} component={Contact} />
              <Route path={routes.singleProduct} component={SingleProduct} />
              <Route
                path={routes.askedQuestions}
                component={AskedQuestionsPage}
              />
              <Route
                path={routes.askedQuestionsENG}
                component={AskedQuestionsPage}
              />
              <Route path={routes.fabrics} component={FabricsPage} />
              <Route path={routes.fabricsENG} component={FabricsPage} />
              <Route path={routes.measuring} component={MeasuringPage} />
              <Route path={routes.measuringENG} component={MeasuringPage} />
              <Route
                path={routes.aboutCollection}
                component={AboutCollectionPage}
              />
              <Route
                path={routes.aboutCollectionENG}
                component={AboutCollectionPage}
              />
              <Route
                path={routes.privacyPolicyPL}
                component={PrivacyPolicyPL}
              />
              <Route
                path={routes.privacyPolicyENG}
                component={PrivacyPolicyENG}
              />
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
