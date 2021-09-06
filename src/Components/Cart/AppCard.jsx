import React from "react";
//? React Semantic UI Components
import { Card, Image, Label, Button, Icon } from "semantic-ui-react";
//? Import React Router
import { Link } from "react-router-dom";

const AppCard = ({
  title,
  image,
  price,
  product_id,
  category,
  product,
  removeProduct,
}) => {
  return (
    <Card color="violet" style={{ marginTop: "2rem" }} centered>
      <Link to={`/product/${product_id}`}>
        <Image className="card-image" size="small" centered src={image} />
      </Link>
      <Card.Content textAlign="right">
        <Card.Header content={title.slice(0, 15)} />
        <Card.Meta>
          <span> category: {category}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Label content={price} floating color="red" />
        <Button
          color={"red"}
          size={"mini"}
          floated="right"
          children={<Icon name="trash" />}
          onClick={() => removeProduct(product)}
        />
      </Card.Content>
    </Card>
  );
};

export default AppCard;
