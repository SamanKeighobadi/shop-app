import React, { Fragment } from "react";
//? React Semantic UI Components
import { Form, Button, Header, Container, Segment } from "semantic-ui-react";
//? Import React Hemet
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import { registerSchema } from "./Validation/RegisterValidationSchema";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <Container style={{ marginTop: "4rem" }}>
        <Segment color="violet">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              rules: false,
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values));
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
                <Header content="Register" size={"huge"} />
                <Form.Group widths="equal">
                  <Form.Field
                    error={touched.firstname && errors.firstname ? true : false}
                  >
                    <lable>Firstname:</lable>
                    <input
                      type={"text"}
                      placeholder="First name"
                      name="firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                    />
                    {touched.firstname && errors.firstname ? (
                      <div style={{ color: "#9f3a38", padding: "4px 2px" }}>
                        {errors.firstname}
                      </div>
                    ) : null}
                  </Form.Field>
                  <Form.Field
                    error={touched.lastname && errors.lastname ? true : false}
                  >
                    <lable>Lastname:</lable>
                    <input
                      type={"text"}
                      placeholder="Last name"
                      name="lastname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                    />
                    {touched.lastname && errors.lastname ? (
                      <div style={{ color: "#9f3a38", padding: "4px 2px" }}>
                        {errors.lastname}
                      </div>
                    ) : null}
                  </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    error={touched.email && errors.email ? true : false}
                  >
                    <lable>Email:</lable>
                    <input
                      placeholder="emapmle@gmail.com"
                      type={"email"}
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {touched.email && errors.email ? (
                      <div style={{ color: "#9f3a38", padding: "4px 2px" }}>
                        {errors.email}
                      </div>
                    ) : null}
                  </Form.Field>
                  <Form.Field
                    error={touched.password && errors.password ? true : false}
                  >
                    <lable>password:</lable>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="First name"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {touched.password && errors.password ? (
                      <div style={{ color: "#9f3a38", padding: "4px 2px" }}>
                        {errors.password}
                      </div>
                    ) : null}
                  </Form.Field>
                </Form.Group>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label>I agree to the Terms and Conditions</label>
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.rules}
                      name="rules"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "12px",
                    }}
                  >
                    <lable>Show Password</lable>
                    <input type={"checkbox"} onClick={handleShowPassword} />
                  </div>
                </div>
                {touched.rules && errors.rules ? (
                  <div style={{ color: "#9f3a38", padding: "4px 2px" }}>
                    {errors.rules}
                  </div>
                ) : null}
                <a href="/login" >
                  already have an account ?
                </a>
                <br />
                <Button content="Submit" color="vk" size={"small"} />
              </Form>
            )}
          </Formik>
        </Segment>
      </Container>
    </Fragment>
  );
};

export default Register;
