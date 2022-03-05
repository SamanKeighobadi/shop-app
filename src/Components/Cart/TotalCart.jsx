import React from "react";
//? React Semantic UI Components
import { Segment, Header } from "semantic-ui-react";
//? Import Custom Hooks
import useTotalProduct from "../customHooks/useTotalProduct";
//? Prop Types
import PropTypes from 'prop-types'

const TotalCart = ({ totalProduct }) => {
  //* Custom Hook
  const { total } = useTotalProduct(totalProduct);

  return (
    <div>
      <Segment compact color='red' raised >
        <Header content={` Total Price: ${total}`} icon="dollar" />
      </Segment>
    </div>
  );
};

TotalCart.propTypes = {
  totalProduct:PropTypes.array
}

export default TotalCart;
