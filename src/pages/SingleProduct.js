import React from "react";

const SingleProduct = (props) => {
  const { name, images, price, priceSecond, description } =
    props.location.state;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <h2>{priceSecond}</h2>
      <p>{description}</p>
      <img src={images[1]} />
      <img src={images[2]} />
    </div>
  );
};

export default SingleProduct;
