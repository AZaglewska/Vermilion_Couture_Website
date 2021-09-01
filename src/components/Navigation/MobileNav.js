import React, { useState, useEffect } from "react";
import IconArrowUp from "../IconComponents/IconArrowUp/IconArrowUp";
import IconArrowDown from "../IconComponents/IconArrowDown/IconArrowDown.js";
import flagIconPL from "../../assets/icons/poland.svg";
import flagIconEN from "../../assets/icons/united-states.svg";
import IconList from "../IconComponents/IconList/IconList";
import Button from "../../atoms/Button";
import LogoIcon from "../IconComponents/LogoIcon/LogoIcon";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { navbarLanguages } from "../../languages/languagesTypes";
import { connect } from "react-redux";
import { setCurrentLanguage } from "../../actions";
import {
  MobileNavContent,
  MobileIconContent,
  MobileIconWrapper,
  MobileDropdown,
  MobileButtonWrapper,
  MobileDropbtn,
  MobileDropbtnLink,
  MobileDropdownContent,
  MobileDropdownContentLink,
  MobileFooter,
} from "./navigationStyles/MobileNavbarStyles";

const MobileNav = ({
  hamburgerMenuOpen,
  toggleHamburgerMenuOpen,
  currentLanguage,
  setEngLanguage,
  setPlLanguage,
}) => {
  const [navLanguage, setNavLanguage] = useState([...navbarLanguages.PL]);

  useEffect(() => {
    setNavLanguage([...navbarLanguages[currentLanguage]]);
  }, [currentLanguage]);

  const toggleNavLanguageItemOpen = (itemMain) => {
    const mappedNavLanguage = navLanguage.map((item) => {
      return item.main === itemMain
        ? {
            ...item,
            isOpen: !item.isOpen,
          }
        : item;
    });

    setNavLanguage([...mappedNavLanguage]);
  };

  return (
    <MobileNavContent hamburgerMenuOpen={hamburgerMenuOpen}>
      <MobileIconContent>
        <MobileIconWrapper flag>
          <Link to={routes.home}>
            <Button onClickFn={setPlLanguage} flagIcon={flagIconPL} />
          </Link>
          <Link to={routes.home}>
            <Button onClickFn={setEngLanguage} flagIcon={flagIconEN} />
          </Link>
        </MobileIconWrapper>
        <MobileIconWrapper>
          <Link to={routes.home} onClick={toggleHamburgerMenuOpen}>
            <LogoIcon />
          </Link>
        </MobileIconWrapper>
      </MobileIconContent>
      <MobileDropdown>
        {navLanguage.map(({ dropDown, main, isOpen, route }, index) => {
          return (
            <li key={index}>
              {dropDown.length !== 0 ? (
                <>
                  <MobileButtonWrapper dropdownOpen={isOpen}>
                    <MobileDropbtn
                      dropdownOpen={isOpen}
                      onClick={() => toggleNavLanguageItemOpen(main)}
                    >
                      {main}
                    </MobileDropbtn>
                    <IconArrowDown
                      dropdownOpen={isOpen.toString()}
                      size={16}
                      onClick={() => toggleNavLanguageItemOpen(main)}
                    />
                    <IconArrowUp
                      dropdownOpen={isOpen.toString()}
                      size={16}
                      onClick={() => toggleNavLanguageItemOpen(main)}
                    />
                  </MobileButtonWrapper>
                </>
              ) : (
                <MobileButtonWrapper>
                  <MobileDropbtn contact>
                    <MobileDropbtnLink
                      to={route}
                      onClick={toggleHamburgerMenuOpen}
                    >
                      {main}
                    </MobileDropbtnLink>
                  </MobileDropbtn>
                </MobileButtonWrapper>
              )}
              {dropDown.length !== 0 && (
                <MobileDropdownContent dropdownOpen={isOpen}>
                  {dropDown.map(({ name, route }) => {
                    return (
                      <MobileDropdownContentLink
                        to={route}
                        onClick={toggleHamburgerMenuOpen}
                        key={name}
                      >
                        {name}
                      </MobileDropdownContentLink>
                    );
                  })}
                </MobileDropdownContent>
              )}
            </li>
          );
        })}
      </MobileDropdown>
      <MobileFooter>
        <IconList />
      </MobileFooter>
    </MobileNavContent>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  setEngLanguage: () => dispatch(setCurrentLanguage("ENG")),
  setPlLanguage: () => dispatch(setCurrentLanguage("PL")),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);
