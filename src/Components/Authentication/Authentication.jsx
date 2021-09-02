import React from "react";
import { Grid, Container, Divider,Segment } from "semantic-ui-react";
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  return (
    <Container  textAlign='center'>
      <Segment padded  compact placeholder>
        <Grid centered columns={2} relaxed="very" stackable>
          <Grid.Column>
           <Login />
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
           <Register />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </Container>
  );
};

export default Authentication;
