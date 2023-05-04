import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Recipe = () => {
  return (
    <Container className='m-4'>
      <h2>Popular Recipes</h2>
      <Row>
        <Col md={4}>
          <Image src="src/assets/download (2).jpeg" fluid className='w-25'/>
          <h4>Grilled Salmon with Mango Salsa</h4>
          <p>This delicious and healthy dish features grilled salmon topped with a refreshing mango salsa made with fresh mango, red onion, and lime juice.</p>
          <Button variant='primary' className='mt-3'>View Recipe</Button>
        </Col>
        <Col md={4}>
          <Image src="src/assets/Quinoa-Veggie-Stir-Fry-Sesame-Peanut-Sauce-3-683x1024-1.jpg" fluid className='w-25' />
          <h4>Quinoa and Vegetable Stir-Fry</h4>
          <p>This vegan dish is packed with flavor and nutrition, featuring quinoa, colorful vegetables, and a savory sauce made with soy sauce and ginger.</p>
          <Button variant='primary' className='mt-3'>View Recipe</Button>
        </Col>
        <Col md={4}>
          <Image src="src/assets/Grilled-chimichurri-chicken-8.jpg " fluid className='w-25'/>
          <h4>Grilled Chicken with Chimichurri Sauce</h4>
          <p>This classic dish gets a twist with a vibrant chimichurri sauce made with fresh herbs, garlic, and red wine vinegar.</p>
          <Button variant='primary' className='mt-3'>View Recipe</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Recipe;
