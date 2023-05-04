import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { Form, Button, Alert, Col, Row } from 'react-bootstrap';
import app from '../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }

    if (email.trim() === '' || password.trim() === '') {
      setFormError('Please fill in all required fields');
    } else {
      setFormError('');
      
    }

  
   createUserWithEmailAndPassword(auth,email,password)
   .then(result =>{
    const logUser = result.user;
    console.log(logUser)
   })
   .catch(error =>{
    console.log(error)
   })


  };

  return (
    <div>
      <h1>Register</h1>
      {formError && <Alert variant="danger">{formError}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
        </Form.Group>
        <Form.Group controlId="formPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            value={photoUrl}
            onChange={(event) => setPhotoUrl(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>


      <Row
      className="justify-content-center mt-3">
        <Col md={6}>
          <div className="text-center">
            <p>
              already logged? <Link to="/login">log in here.</Link>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
