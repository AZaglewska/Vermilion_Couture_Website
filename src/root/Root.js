import React from "react";
import Router from "../routing/Router";
import GlobalStyle from "../globalStyles/GlobalStyle";

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};

export default Root;
