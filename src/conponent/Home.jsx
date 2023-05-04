import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Chef from './Chef';
import Recipe from './Recipe';
import ChefRecipe from './ChefRecipe';

const Home = () => {
  return (
    <Container>
      <Row className=' m-2'>
        <Col md={8} className=''>
          <h1>Welcome to our website!</h1>
          <p>We are a team of professional chefs dedicated to creating delicious and healthy meals for our clients.</p>
        </Col>
        <Col md={4} >
          <Image src="src/assets/quarantine-reopen-cafe-restaurant-welcoming-info-vector-illustration-reopening-covid-coronavirus-pandemic-chef-cook-183172097.jpg" fluid />
        </Col>
      </Row>
      <ChefRecipe></ChefRecipe>
      <Chef></Chef>
      <Recipe></Recipe>
    </Container>
  );
};

export default Home;
