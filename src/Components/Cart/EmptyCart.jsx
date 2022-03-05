import React from "react";
//? React semantic UI Component
import { Header, Grid,Image,Container,Button } from "semantic-ui-react";
import {Link} from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
      <Grid textAlign="center" style={{ marginTop: "4rem" }}>
        <Grid.Column verticalAlign="middle">
        <Container >
        <Image src='https://static.thenounproject.com/png/538404-200.png'   alt='empty  cart'  centered 
        size='small' />
        <Header content='Your cart is empty' />
        <Header content='You can see more products by click on link blow' size='tiny' />
        <Link to='/shop'>
        <Button size='tiny'  color='violet' >Products</Button>
        </Link>
        <Link to={"/"}>
        <Button basic color='violet' size='tiny'>
          Home
        </Button>
        </Link>
        </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EmptyCart;
