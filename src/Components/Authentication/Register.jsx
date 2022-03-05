import React, { Fragment } from "react";
//? React Semantic UI Components
import { Form, Button, Header, Container, Segment } from "semantic-ui-react";
//? Import React Hemet
import { Helmet } from "react-helmet";

const options = [
  { key: "M", text: "Male", value: "male" },
  { key: "F", text: "Female", value: "female" },
];

const Register = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <Container style={{ marginTop: "4rem" }}>
        <Segment color="violet">
          <Form>
            <Header content="Register" size={"huge"} />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                required
                placeholder="First name"
              />
              <Form.Input
                fluid
                label="Last name"
                required
                placeholder="Last name"
              />
              <Form.Select
                fluid
                label="Gender"
                options={options}
                placeholder="Gender"
              />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Email"
                type="email"
                required
                placeholder="First name"
              />
              <Form.Input
                fluid
                label="Password"
                type="password"
                required
                placeholder="Last name"
              />
            </Form.Group>
          </Form>
          <Button content="Submit" color="vk" size={"small"} />
        </Segment>
      </Container>
    </Fragment>
  );
};

export default Register;
