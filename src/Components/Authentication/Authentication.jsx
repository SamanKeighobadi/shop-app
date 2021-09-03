import React from "react";
import { Grid, Container, Divider, Segment } from "semantic-ui-react";
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  return (
    <Container textAlign="center" >
      <Segment size='huge'  color='violet'  stacked>
        <Grid centered columns={2} relaxed="very" stackable>
          <Grid.Row  verticalAlign='middle' centered>
            <Grid.Column verticalAlign="middle">
              <Login />
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Register />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider vertical horizontal>or</Divider>
      </Segment>
    </Container>
  );
};

export default Authentication;
