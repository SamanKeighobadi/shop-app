import React from "react";
import {
  Form,
  Button,
  Header,
  Container,
  Segment,
} from "semantic-ui-react";

const options = [
  { key: "M", text: "Male", value: "male" },
  { key: "F", text: "Female", value: "female" },
];

const Register = () => {
  return (
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
            <Form.Input
              fluid
              label="Phone"
              type="number"
              required
              placeholder="Last name"
            />
          </Form.Group>
        </Form>
        <Button content="Submit" color="vk" size={"small"} />
      </Segment>
    </Container>
  );
};

export default Register;
