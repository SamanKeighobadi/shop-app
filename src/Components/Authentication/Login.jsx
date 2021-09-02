import React from "react";
import { Form, Button } from "semantic-ui-react";

const Login = () => {
  return (
    <div>
      <Form>
        <Form.Input
          label="Email"
          placeholder="example@gmail.com"
          icon="mail"
          iconPosition='left'
        />
        <Form.Input
          label="Password"
          placeholder="*******"
          icon="lock"
          type='password'
          iconPosition='left'
        />
        <Button content='Login' size='medium' primary />
      </Form>
    </div>
  );
};

export default Login;
