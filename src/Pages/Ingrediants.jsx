import React from "react";
import Header from "../components/Header";
import { Card, Col, Container, Row } from "react-bootstrap";


const Ingrediants = () => {
  return (
    <>
      <Header />

      

      <div style={{ backgroundColor: "#f7f7f7", height: "90vh" }}>
        <Container style={{ paddingTop: "80px" }}>
          <Row className="gy-4">
            <Col lg={6}>
              <div className="ratio ratio-16x9">
                <iframe
                  width="100%"
                  height="360"
                  src="https://www.youtube.com/embed/DbUNJvXjpA8?autoplay=1"
                  title="How Millions of Cakes Are Made in a Factory | Automatic Cakes Factory Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="rounded"
                ></iframe>
              </div>
            </Col>
            <Col lg={6}>
            
              <Card className="border-0">
                
                  <Card.Body className="d-flex justify-content-between align-items-start">

                   <div style={{ flex: 2, paddingRight: "20px" }}>
                      <Card.Title className="mb-3">
                        <h1 className="fw-bold fs-2">Recipe name</h1>
                      </Card.Title>
            
                      <div className="mb-4">
                        <h5 className ="fw-semibold">Ingredients</h5>
                        <ul className="text-secondary">
                          <li>Ingredient one</li>
                          <li>Ingredient two</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className ="fw-semibold">Instructions</h5>
                        <Card.Text className="text-muted">Gather all ingredients. Preheat the oven to 350 degrees F (175 degrees C). Grease and flour a 9-inch square cake pan.

                        Cream sugar and butter together in a mixing bowl. Add eggs, one at a time, beating briefly after each addition. Mix in vanilla.Combine flour and baking powder in a separate bowl. Add to the wet ingredients and mix well. Add milk and stir until smooth.

                        Pour batter into the prepared cake pan.Bake in the preheated oven until the top springs back when lightly touched, 30 to 40 minutes.</Card.Text>
  
                   </div>
                      
                    </div>

                    <div style={{ flex: 1 , marginTop:'10px'}}>
              <img src="https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake.jpg" alt="Featured" className="img-fluid rounded"
              />
            </div>
                  </Card.Body>
                
              </Card>
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Ingrediants;
