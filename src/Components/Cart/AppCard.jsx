import React from "react";
import {Card,Image} from 'semantic-ui-react'

const AppCard = ({title,image,price,category}) => {
  return (
    <div>
      <Card color="violet" centered>
        <Image size="small" centered src={image} />
        <Card.Content textAlign="right">
          <Card.Header content={title.slice(0, 15)} />
          <Card.Meta>
            <span> category: {category}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
                {price}          
        </Card.Content>
      </Card>
    </div>
  );
};

export default AppCard;
