import React from "react";
import {
  Form,
  Button,
  Container,
  Header,
  Segment,
  Checkbox,
} from "semantic-ui-react";

const Login = () => {
  

  return (
    

    <Container style={{ marginTop: "4rem" }}>
      <Segment color="violet">
        <Form>
          <Header content="Login" size={"huge"} />
          <Form.Field>
            <label>Email:</label>
            <input type="email"  placeholder="example@gmail.com" />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type="password" placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit" color='vk' size='small'>Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default Login;
