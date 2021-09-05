import React,{Fragment} from "react";
//? React Semantic UI Components
import {
  Form,
  Button,
  Container,
  Header,
  Segment,
  Checkbox,
} from "semantic-ui-react";
//? Import React Helmet
import {Helmet} from 'react-helmet'

const Login = () => {
  

  return (
    <Fragment>
    <Helmet>
        <title>Login Page</title>
    </Helmet>      
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

    </Fragment>    
  );
};

export default Login;
