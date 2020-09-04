import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { login } from "utility/functions";

const Login = (props) => {
  const { history } = props;

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{
                username: "admin",
                password: "Random12134$$",
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                login(values.username, values.password, history);
              }}
            >
              {({ isSubmitting, setFieldValue, resetForm }) => (
                <Form>
                  <Col>
                    <Field type="text" name="username" placeholder="Username" />
                  </Col>
                  <Col>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </Col>
                  <Col>
                    <Button type="submit">Submit</Button>
                  </Col>
                  <Col>
                    <Link to="/register">Register New Account</Link>
                  </Col>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
