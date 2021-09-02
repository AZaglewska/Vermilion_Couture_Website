import React from "react";
import Title from "../../atoms/Title";
import Line from "../../atoms/Line";
import sewingIcon from "../../assets/icons/sewing.svg";
import mannequinIcon from "../../assets/icons/mannequin.svg";
import needleThreadIcon from "../../assets/icons/needle-thread.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import corsetIcon from "../../assets/icons/corset.svg";
import fabricIcon from "../../assets/icons/fabric.svg";
import giftIcon from "../../assets/icons/gift-box.svg";
import measuringTapeIcon from "../../assets/icons/measuring-tape.svg";
import { connect } from "react-redux";
import {
  OfferCardWrapper,
  OfferCardLineWrapper,
  OfferCardElementsWrapper,
  OfferCardElements,
  OfferCardIcon,
} from "./OfferCardStyles.js";

const OfferCard = ({ currentLanguage }) => {
  return (
    <OfferCardWrapper>
      <Title styleType="card">
        {currentLanguage === "PL" ? "Nasza oferta" : "Our Offer"}
      </Title>
      <OfferCardLineWrapper>
        <Line styleType="card" />
      </OfferCardLineWrapper>
      <OfferCardElementsWrapper>
        <OfferCardElements>
          <OfferCardIcon src={sewingIcon} alt=" sewingIcon" />
          <p>
            {currentLanguage === "PL" ? "Uszyto w Polsce" : "Made in Poland"}
          </p>
        </OfferCardElements>
        <OfferCardElements>
          <OfferCardIcon src={mannequinIcon} alt="mannequinIcon" />

          <p>
            {currentLanguage === "PL"
              ? "Możliwość szycia na wymiar"
              : "Possibility of tailor-made sewing"}
          </p>
        </OfferCardElements>
        <OfferCardElements>
          <OfferCardIcon src={needleThreadIcon} alt="needleThreadIcon" />
          <p>
            {currentLanguage === "PL"
              ? "Dbałość o detale"
              : "Attention to detail"}
          </p>
        </OfferCardElements>
        <OfferCardElements>
          <OfferCardIcon src={calendarIcon} alt="calendarIcon" />
          <p>
            {currentLanguage === "PL"
              ? "Opcja ekspresowego szycia"
              : "Express sewing possibility"}
          </p>
        </OfferCardElements>
      </OfferCardElementsWrapper>
      <OfferCardElementsWrapper second>
        <OfferCardElements>
          <OfferCardIcon src={corsetIcon} alt="corsetIcon" />
          <p>
            {currentLanguage === "PL"
              ? " Oryginalne wzornictwo"
              : "Original design"}
          </p>
        </OfferCardElements>
        <OfferCardElements>
          <OfferCardIcon src={fabricIcon} alt="fabricIcon " />
          <p>
            {currentLanguage === "PL"
              ? "Bardzo dobra jakość tkanin i dodaków"
              : "Carefully selected quality fabrics and accessories"}
          </p>
        </OfferCardElements>
        <OfferCardElements>
          <OfferCardIcon src={giftIcon} alt="giftIcon" />
          <p>
            {currentLanguage === "PL"
              ? "Darmowe eleganckie pakowanie"
              : "Free exclusive packaging"}
          </p>
        </OfferCardElements>

        <OfferCardElements>
          <OfferCardIcon src={measuringTapeIcon} alt="measuringTapeIcon" />
          <p>
            {currentLanguage === "PL"
              ? "Pomoc w dobraniu rozmiaru"
              : "Assistance in sizing"}
          </p>
        </OfferCardElements>
      </OfferCardElementsWrapper>
      <OfferCardLineWrapper>
        <Line styleType="card" />
      </OfferCardLineWrapper>
    </OfferCardWrapper>
  );
};
const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(OfferCard);
