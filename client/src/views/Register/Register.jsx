import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Form, Field } from "formik";
import { isLoggedInQuery } from "graphql/queries/user";
import { createAccountMutation } from "graphql/mutations/user";

const Register = (props) => {
  const { history } = props;
  const [createUser] = useMutation(createAccountMutation, {
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
                name: "",
                email: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                createUser({ variables: { ...values } });
                console.log(values);
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
