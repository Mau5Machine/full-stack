import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Form, Field } from 'formik';
import { isLoggedInQuery } from 'graphql/queries/user';
import { loginMutation } from 'graphql/mutations/user';
import { history } from 'history.js';

const Login = () => {
  const [login] = useMutation(loginMutation, {
    refetchQueries: [{ query: isLoggedInQuery }],
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (err) => {
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
                username: '',
                password: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                login({ variables: { ...values } });
                history.push('/dashboard');
                console.log(values);
              }}
            >
              {({ isSubmitting, setFieldValue, resetForm }) => (
                <Form>
                  <Col>
                    <Field type='text' name='username' placeholder='Username' />
                  </Col>
                  <Col>
                    <Field
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                  </Col>
                  <Col>
                    <Button type='submit'>Submit</Button>
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
