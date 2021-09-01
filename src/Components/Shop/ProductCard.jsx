import React from "react";
import { Card, Image, Icon, Button, Grid } from "semantic-ui-react";

const ProductCard = ({ title, image, price, category }) => {
  return (
    <div>
      <Grid columns='3'>
        <Grid.Row>
          <Grid.Column >
            <Card color="violet">
              <Image size="small" src={image} wrapped ui={false} />
              <Card.Content>
                <Card.Header> {title} </Card.Header>
                <Card.Meta>
                  <span className="date">{category}</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="dollar" />
                  {price}
                </a>
                <Button color="violet">Shop</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ProductCard;
