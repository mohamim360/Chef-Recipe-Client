import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Chef = () => {
  return (
    <Container className='m-4 '>
      <h2>Meet Our Chefs</h2>
      <Row>
        <Col md={4}>
          <Image src="src/assets/11.jpg" fluid roundedCircle className='w-25' />
          <h4>Chef John Doe</h4>
          <p>With over 10 years of experience in French cuisine, Chef John is an expert in creating dishes that are both delicious and visually appealing.</p>
        </Col>
        <Col md={4}>
          <Image src="src/assets/download.jpeg" fluid roundedCircle className='w-25' />
          <h4>Chef Jane Smith</h4>
          <p>Chef Jane specializes in vegan and vegetarian cuisine, and has worked with some of the top restaurants in New York City.</p>
        </Col>
        <Col md={4}>
          <Image src="src/assets/download (1).jpeg" fluid roundedCircle className='w-25 m-4' />
          <h4>Chef Michael Lee</h4>
          <p>Chef Michael's passion for Asian cuisine has led him to create innovative dishes that combine traditional flavors with modern cooking techniques.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Chef;
