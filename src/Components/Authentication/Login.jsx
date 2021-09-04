import React from "react";
import { Form, Button, Header, Input } from "semantic-ui-react";

const Login = () => {
  return (
    <div>
      <Form >
        <Header content="Login" />
        <Form.Field>
          <label>Email:</label>
          <input type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input type='password' placeholder="password" />
        </Form.Field>
        <Button content="Login" size="medium" color="vk" />
      </Form>
    </div>
  );
};

export default Login;
