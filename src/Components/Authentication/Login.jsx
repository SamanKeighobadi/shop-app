import React from "react";
import { Form, Button, Header } from "semantic-ui-react";

const Login = () => {
  return (
    <div>
      <Form>
        <Header content="Login" />
        <Form.Input
          label="Email"
          placeholder="example@gmail.com"
          icon="mail"
          iconPosition="left"
        />
        <Form.Input
          label="Password"
          placeholder="*******"
          icon="lock"
          type="password"
          iconPosition="left"
        />
        <Button content="Login" size="medium" color="vk" />
      </Form>
    </div>
  );
};

export default Login;
