import React from "react";
import { Grid, Container, Divider, Segment } from "semantic-ui-react";
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  return (
    <Segment  padded piled compact size="small" color="violet">
      <Grid  columns={2} >
        <Grid.Row stretched verticalAlign="middle">
          <Grid.Column className>
            <Login />
          </Grid.Column>

          <Grid.Column>
            <Register />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider vertical>or</Divider>
    </Segment>
  );
};

export default Authentication;
