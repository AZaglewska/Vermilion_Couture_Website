import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { ArrowUpIcon } from "./ArrowUpStyles";

const ArrowUp = () => {
  return (
    <div onClick={() => scroll.scrollToTop()}>
      <ArrowUpIcon viewBox="0 0 455 455">
        <path d="M0,0v455h455V0H0z M334.411,296.683L227.5,190.12L120.589,296.683l-21.179-21.248L227.5,147.763l128.089,127.672 L334.411,296.683z" />
      </ArrowUpIcon>
    </div>
  );
};

export default ArrowUp;
