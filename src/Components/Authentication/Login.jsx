import React, { Fragment } from "react";
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
import { Helmet } from "react-helmet";
//? Formik
import { Formik } from "formik";
import { logniShcema } from "./Validation/LoginValidationSchema";

const Login = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Container style={{ marginTop: "4rem" }}>
        <Segment color="violet">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={logniShcema}
            onSubmit={(values) => {
              alert(JSON.stringify(values))
            }}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Header content="Login" size={"huge"} />
                <Form.Field error={touched.email && errors.email ? true:false}>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="example@gmail.com"
                    
                  />
                  {touched.email && errors.email ? (
                    <div style={{color:'#9f3a38',padding:'4px 2px'}}>{errors.email}</div>
                  ) : null}
                </Form.Field>
                <Form.Field error={touched.password && errors.password ? true:false}>
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                  />
                  {touched.password && errors.password ? (
                    <div style={{color:'#9f3a38',padding:'4px 2px'}}>{errors.password}</div>
                  ) : null}
                </Form.Field>
              
                <Button type="submit" color="vk" size="small">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Segment>
      </Container>
    </Fragment>
  );
};

export default Login;
