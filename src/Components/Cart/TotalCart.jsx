import React from "react";
//? React Semantic UI Components
import { Segment, Header } from "semantic-ui-react";
//? Import Custom Hooks
import useTotalProduct from "../customHooks/useTotalProduct";

const TotalCart = ({ totalProduct }) => {
  //* Custom Hook
  const { total } = useTotalProduct(totalProduct);

  return (
    <div>
      <Segment>
        <Header content={` Total Price: ${total}`} icon="dollar" />
      </Segment>
    </div>
  );
};

export default TotalCart;
