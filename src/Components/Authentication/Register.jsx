import React from "react";
import { Form, Button, Header } from "semantic-ui-react";

const Register = () => {
  return (
    <div>
      <Form>
        <Header content="Register" />
        <Form.Field>
          <label>Fullname:</label>
          <input placeholder='fullname' />
        </Form.Field>
        <Form.Field>
          <label>Email:</label>
          <input type={'email'} placeholder='fullname' />
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input type='password' placeholder='fullname' />
        </Form.Field>
        <Button content="Register" color="vk" size="medium" />
      </Form>
    </div>
  );
};

export default Register;
