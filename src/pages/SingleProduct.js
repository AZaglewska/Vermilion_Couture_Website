import React, { useState, useEffect } from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Line from "../atoms/Line";
import BackIcon from "../components/IconComponents/BackIcon/BackIcon";
import MainButton from "../atoms/MainButton";
import HeartIcon from "../components/IconComponents/HeartIcon/HeartIcon";
import Lightbox from "react-image-lightbox";
import { connect } from "react-redux";
import {
  SingleProductContainer,
  SingleProductCarouselWrapper,
  SingleProductIcon,
  SingleProductCarousel,
  SingleProductElements,
  SingleProductTitleWrapper,
  SingleProductPrice,
  SingleProductText,
  SingleProductIconWrapper,
  SingleProductInfoWrapper,
} from "./pagesStyles/SingleProductStyles";
import "react-image-lightbox/style.css";

const SingleProduct = (props) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, state } = props;
  const { images, price, name, description } = currentProduct;
  const getProductByLink = () => {
    const productName = props.location.pathname.slice(
      9,
      props.location.pathname.length
    );

    const allProducts = [
      ...state.eveningCorset,
      ...state.meshCorset,
      ...state.otherCorset,
      ...state.overbustCorset,
      ...state.silkCorset,
      ...state.underbustCorset,
      ...state.weddingCorset,
    ];

    const singleProduct = allProducts.find(
      (product) => product.name.replace(/\s/g, "") === productName
    );

    setCurrentProduct(singleProduct);
  };

  useEffect(() => {
    getProductByLink();
  }, []);

  return (
    <>
      <SingleProductContainer>
        <SingleProductCarouselWrapper>
          <SingleProductIcon viewBox="0 0 512.005 512.005">
            <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667    S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6    c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z     M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z" />
          </SingleProductIcon>
          <SingleProductCarousel
            showIndicators={false}
            showStatus={false}
            dynamicHeight={false}
            onClickItem={() => {
              setIsOpen(true);
            }}
            onChange={(value) => setPhotoIndex(value)}
            selectedItem={photoIndex}
          >
            <img src={images && images[0]} alt={name} />
            <img src={images && images[1]} alt={name} />
          </SingleProductCarousel>
        </SingleProductCarouselWrapper>
        <SingleProductElements>
          <SingleProductTitleWrapper>
            <Title>{name}</Title>
          </SingleProductTitleWrapper>
          <Line />
          <SingleProductPrice>
            {currentLanguage === "PL" ? "Cena od" : "Prices from"}
            <span>{price}???</span>
          </SingleProductPrice>
          <SingleProductText>
            <Text>{description}</Text>
          </SingleProductText>
          <Line />
          <SingleProductIconWrapper>
            <MainButton />
            <BackIcon />
          </SingleProductIconWrapper>
          <SingleProductInfoWrapper>
            <HeartIcon />
          </SingleProductInfoWrapper>
        </SingleProductElements>
      </SingleProductContainer>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            setIsOpen(false);
          }}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % images.length);
          }}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
  state: state,
});

export default connect(mapStateToProps)(SingleProduct);
