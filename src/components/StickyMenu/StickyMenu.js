import React, { useState } from "react";
import { connect } from "react-redux";
import { routes } from "../../routes";
import {
  StickyMenuContainer,
  StickyMenuElements,
  StickyMenuText,
  StickyMenuLink,
  StickyMenuButton,
} from "./StickyMenuStyles";

const StickyMenu = ({ currentLanguage }) => {
  const [menuClose, setMenuClose] = useState(false);

  const closeMenu = () => {
    setMenuClose(!menuClose);
  };

  return (
    <StickyMenuContainer menuClose={menuClose}>
      <StickyMenuElements>
        {currentLanguage === "PL" ? (
          <StickyMenuText>
            Strona korzysta z plików cookie w celu realizacji usług zgodnie z{" "}
            <StickyMenuLink to={routes.privacyPolicyPL}>
              Polityką Prywatności
            </StickyMenuLink>{" "}
            dotyczącą cookies
          </StickyMenuText>
        ) : (
          <StickyMenuText>
            Website uses cookies to provide services in accordance with the
            cookies{" "}
            <StickyMenuLink to={routes.privacyPolicyENG}>
              Privacy Policy
            </StickyMenuLink>
          </StickyMenuText>
        )}
        <StickyMenuButton onClick={() => closeMenu()}>
          {currentLanguage === "PL" ? "Rozumiem" : "Accept"}
        </StickyMenuButton>
      </StickyMenuElements>
    </StickyMenuContainer>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(StickyMenu);
