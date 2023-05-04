import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

const ChefRecipe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://chef-server-mohamim360.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4>Chef And Recipe</h4>
      <Row xs={1} md={2} lg={3}>
        {data.map((chef) => (
          <Col key={chef.id}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={chef.picture}
                style={{ width: "25%" }}
              />
              <Card.Body>
                <Card.Title>{chef.name}</Card.Title>
                <Card.Text>
                  Years of experience: {chef.years_of_experience}
                  <br />
                  Number of recipes: {chef.recipes.length}
                  <br />
                  Likes: {chef.likes}
                </Card.Text>
                <Link to={`/detail/${chef.id}`}>
                  <Button variant="primary">View Recipes</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChefRecipe;
