import React from "react";
import { Card, Image, Label, Button, Icon } from "semantic-ui-react";

const AppCard = ({ title, image, price, category, product, removeProduct }) => {
 

  return (
    <div>
      <Card color="violet" style={{ marginTop: "2rem" }} centered>
        <Image size="small" centered src={image} />
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
            content={<Icon name="trash" />}
            onClick={() => removeProduct(product)}
          />
        </Card.Content>
      </Card>
    </div>
  );
};

export default AppCard;
