import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbarLanguages } from "../../languages/languagesTypes";
import Button from "../../atoms/Button";
import flagIconPL from "../../assets/icons/poland.svg";
import LogoIcon from "../IconComponents/LogoIcon/LogoIcon";
import flagIconEN from "../../assets/icons/united-kingdom.svg";
import IconArrowUp from "../IconComponents/IconArrowUp/IconArrowUp";
import IconArrowDown from "../IconComponents/IconArrowDown/IconArrowDown";
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
} from "./navigationStyles/NavbarStyles.js";
import { connect } from "react-redux";
import { setCurrentLanguage } from "../../actions";
import HamburgerMenu from "./HamburgerMenu";
import IconList from "../IconComponents/IconList/IconList";

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
        <NavIconWrapper list>
          <IconList />
        </NavIconWrapper>
      </NavIconContent>
      <NavDropdownContainer>
        {navLanguage.map((item) => {
          return (
            <NavDropdown>
              {item.dropDown.length !== 0 ? (
                <NavDropbtn>
                  <NavDropbtnLink>{item.main}</NavDropbtnLink>
                  <IconArrowDown nav />
                  <IconArrowUp />
                </NavDropbtn>
              ) : (
                <NavDropbtn>
                  <NavDropbtnLink to={item.route}>{item.main}</NavDropbtnLink>
                </NavDropbtn>
              )}
              {item.dropDown.length !== 0 && (
                <NavDropdownContent>
                  {item.dropDown.map((item) => {
                    return (
                      <NavDropdownContentLink to={item.route}>
                        {item.name}
                      </NavDropdownContentLink>
                    );
                  })}
                </NavDropdownContent>
              )}
            </NavDropdown>
          );
        })}
      </NavDropdownContainer>
      <HamburgerMenu />
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
