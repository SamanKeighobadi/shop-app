import React from "react";
//? React Semantic UI Components
import { Segment, Header, Button } from "semantic-ui-react";
//? Import Custom Hooks
import useTotalProduct from "../customHooks/useTotalProduct";
//? Prop Types
import PropTypes from "prop-types";

const TotalCart = ({ totalProduct, purchesProduct }) => {
  //* Custom Hook
  const { total } = useTotalProduct(totalProduct);

  return (
    <div>
      <Segment compact color="red" raised>
        <Header content={` Total Price: ${total}`} icon="dollar" />
        <Button onClick={purchesProduct} color="green">
          Purches
        </Button>
      </Segment>
    </div>
  );
};

TotalCart.propTypes = {
  totalProduct: PropTypes.array,
  purchesProduct:PropTypes.func
};

export default TotalCart;
