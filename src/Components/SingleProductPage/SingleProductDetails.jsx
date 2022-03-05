import React from "react";
//? React Semantci UI Component
import { Segment, Header, Statistic } from "semantic-ui-react";
//? Prop Types
import PropTypes from "prop-types";

const SingleProductDetails = ({ price, category, description }) => {
  return (
    <div>
      <Segment raised color="violet" textAlign="left">
        <Header content={`Category: ${category}`} size={"medium"} />
        <Header content={description} size="small" textAlign="left" />
        <Statistic label="Price" value={price} color="violet" />
      </Segment>
    </div>
  );
};

SingleProductDetails.propTypes = {
  price: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
};

export default SingleProductDetails;
