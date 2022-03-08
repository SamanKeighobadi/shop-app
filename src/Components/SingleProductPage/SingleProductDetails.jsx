import React from "react";
//? React Semantci UI Component
import { Segment, Header, Statistic } from "semantic-ui-react";
//? Prop Types
import PropTypes from "prop-types";
import ProductCardButton from "../Shop/ProductCardButton";

const SingleProductDetails = ({
  price,
  category,
  description,
  product,
  addToCart,
}) => {
  return (
    <div>
      <Segment raised color="violet" textAlign="left">
        <Header content={`Category: ${category}`} size={"medium"} />
        <Header content={description} size="small" textAlign="left" />
        <Statistic label="Price" value={price} color="violet" />
        <ProductCardButton addToCart={() => addToCart(product)} />
      </Segment>
    </div>
  );
};

SingleProductDetails.propTypes = {
  price: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  product:PropTypes.object,
  addToCart:PropTypes.func
};

export default SingleProductDetails;
