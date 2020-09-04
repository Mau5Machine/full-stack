import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { createAccount } from "utility/functions";

const Register = (props) => {
  const { history } = props;

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{
                username: "",
                password: "",
                name: "",
                email: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                createAccount(values, history);
              }}
            >
              {({ isSubmitting, setFieldValue, resetForm }) => (
                <Form>
                  <Col>
                    <Field type="text" name="username" placeholder="Username" />
                  </Col>
                  <Col>
                    <Field type="text" name="name" placeholder="Name" />
                  </Col>
                  <Col>
                    <Field type="text" name="email" placeholder="Email" />
                  </Col>
                  <Col>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </Col>
                  <Col>
                    <Button type="submit">Register</Button>
                  </Col>
                  <Col>
                    <Link to="/">Login</Link>
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

export default Register;
