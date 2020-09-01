import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Form, Field } from "formik";
import { isLoggedInQuery } from "graphql/queries/user";
import { loginMutation } from "graphql/mutations/user";
import { history } from "history.js";

const Login = () => {
  const [login] = useMutation(loginMutation, {
    refetchQueries: [{ query: isLoggedInQuery }],
    onCompleted: (data) => {
      history.push("/dashboard");
    },
    onError: (err) => {
      alert(err.graphQLErrors[0].message);
      console.log(err);
    },
  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                login({ variables: { ...values } });
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
