import React from "react";
import { Form, Button, Header } from "semantic-ui-react";

const Register = () => {
  return (
    <div>
      <Form>
        <Header content="Register" />
        <Form.Input label="Fullname" placeholder="fullname" icon="users" />
        <Form.Input
          label="Email"
          icon="mail"
          placeholder="example@gmail.com"
          type="email"
        />
        <Form.Input
          label="Lock"
          icon="lock"
          placeholder="********"
          type="password"
        />
        <Button content="Register" color="vk" size="medium" />
      </Form>
    </div>
  );
};

export default Register;
