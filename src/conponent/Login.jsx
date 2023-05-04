import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
        console.log(loginUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log(errorMessage);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log(errorMessage);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const logUser = result.user;
        setUser(logUser);
        console.log(logUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log(error);
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="border rounded p-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onClick={(event) => event.stopPropagation()}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onClick={(event) => event.stopPropagation()}
                />
              </Form.Group>

              <Button variant="info" type="submit" className="w-100 mb-3">
                Login
              </Button>
            </Form>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {user && <Alert variant="success">Logged in successfully!</Alert>}
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <Button
            variant="primary"
            className="mr-2"
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </Button>
          <Button variant="primary" onClick={handleGithubLogin}>
            Sign in with GitHub
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <div className="text-center">
            <p>
              Are you new? <Link to="/register">Register here.</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
