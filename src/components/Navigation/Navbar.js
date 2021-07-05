import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbarLanguages } from "../../languages/languagesTypes";
import VermilionLogo from "../../assets/logo/VermilionLogo.svg";
import Button from "../../atoms/Button";
import flagIconPL from "../../assets/icons/poland.svg";
import flagIconEN from "../../assets/icons/united-kingdom.svg";
import { routes } from "../../routes";
import {
  NavContainer,
  LogoContainer,
  NavLink,
  Dropdown,
  Dropbtn,
  DropdownContent,
  DropdownContentLink,
  StyledElementsConatainer,
  StyledButtonContainer,
  StyledIconContainer,
  IconArrowDown,
  IconArrowUp,
  DropdownLink,
} from "./navigationStyles/NavbarStyles.js";
import { connect } from "react-redux";
import { setCurrentLanguage } from "../../actions";
import IconSvg from "../IconSvg/IconSvg";
const Navbar = ({ currentLanguage, setEngLanguage, setPlLanguage }) => {
  const [navLanguage, setNavLanguage] = useState([...navbarLanguages.PL]);

  useEffect(() => {
    setNavLanguage([...navbarLanguages[currentLanguage]]);
  }, [currentLanguage]);

  return (
    <div>
      <StyledElementsConatainer>
        <StyledButtonContainer>
          <Link to={routes.home}>
            <Button onClickFn={setPlLanguage} flagIcon={flagIconPL} />
          </Link>
          <Link to={routes.home}>
            <Button onClickFn={setEngLanguage} flagIcon={flagIconEN} />
          </Link>
        </StyledButtonContainer>
        <LogoContainer>
          <Link to={routes.home}>
            <img src={VermilionLogo} />
          </Link>
        </LogoContainer>
        <StyledIconContainer>
          <IconSvg />
        </StyledIconContainer>
      </StyledElementsConatainer>
      <NavContainer>
        {navLanguage.map((item) => {
          return (
            <Dropdown>
              {item.dropDown.length !== 0 ? (
                <Dropbtn>
                  <DropdownLink>{item.main}</DropdownLink>
                  <IconArrowDown />
                  <IconArrowUp />
                </Dropbtn>
              ) : (
                <NavLink to={item.route}>{item.main}</NavLink>
              )}

              {item.dropDown.length !== 0 && (
                <DropdownContent>
                  {item.dropDown.map((item) => {
                    return (
                      <DropdownContentLink to={item.route}>
                        {item.name}
                      </DropdownContentLink>
                    );
                  })}
                </DropdownContent>
              )}
            </Dropdown>
          );
        })}
      </NavContainer>
    </div>
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
