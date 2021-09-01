import React, { useEffect, useState } from "react";
import flagIconPL from "../../assets/icons/poland.svg";
import LogoIcon from "../IconComponents/LogoIcon/LogoIcon";
import flagIconEN from "../../assets/icons/united-states.svg";
import IconArrowUp from "../IconComponents/IconArrowUp/IconArrowUp";
import IconArrowDown from "../IconComponents/IconArrowDown/IconArrowDown";
import Button from "../../atoms/Button";
import HamburgerMenu from "./HamburgerMenu";
import IconList from "../IconComponents/IconList/IconList";
import { Link } from "react-router-dom";
import { navbarLanguages } from "../../languages/languagesTypes";
import { connect } from "react-redux";
import { setCurrentLanguage } from "../../actions";
import { routes } from "../../routes";
import {
  NavIconContent,
  NavIconWrapper,
  NavDropdownContainer,
  NavDropdown,
  NavDropbtn,
  NavDropbtnLink,
  NavDropdownContent,
  NavDropdownContentLink,
  NavDropbtnLinkText,
} from "./navigationStyles/NavbarStyles.js";

const Navbar = ({ currentLanguage, setEngLanguage, setPlLanguage }) => {
  const [navLanguage, setNavLanguage] = useState([...navbarLanguages.PL]);

  useEffect(() => {
    setNavLanguage([...navbarLanguages[currentLanguage]]);
  }, [currentLanguage]);

  return (
    <>
      <NavIconContent>
        <NavIconWrapper flag>
          <Link to={routes.home}>
            <Button onClickFn={setPlLanguage} flagIcon={flagIconPL} />
          </Link>
          <Link to={routes.home}>
            <Button onClickFn={setEngLanguage} flagIcon={flagIconEN} />
          </Link>
        </NavIconWrapper>
        <NavIconWrapper>
          <Link to={routes.home}>
            <LogoIcon />
          </Link>
        </NavIconWrapper>
        <NavIconWrapper list="true">
          <IconList />
        </NavIconWrapper>
        <HamburgerMenu />
      </NavIconContent>
      <NavDropdownContainer>
        {navLanguage.map(({ dropDown, main, route }, index) => {
          return (
            <NavDropdown key={index}>
              {dropDown.length !== 0 ? (
                <NavDropbtn>
                  <NavDropbtnLinkText>{main}</NavDropbtnLinkText>
                  <IconArrowDown nav="true" />
                  <IconArrowUp />
                </NavDropbtn>
              ) : (
                <NavDropbtn>
                  <NavDropbtnLink to={route}>{main}</NavDropbtnLink>
                </NavDropbtn>
              )}
              {dropDown.length !== 0 && (
                <NavDropdownContent>
                  {dropDown.map(({ route, name }, index) => {
                    return (
                      <NavDropdownContentLink to={route} key={index}>
                        {name}
                      </NavDropdownContentLink>
                    );
                  })}
                </NavDropdownContent>
              )}
            </NavDropdown>
          );
        })}
      </NavDropdownContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  setEngLanguage: () => dispatch(setCurrentLanguage("ENG")),
  setPlLanguage: () => dispatch(setCurrentLanguage("PL")),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
