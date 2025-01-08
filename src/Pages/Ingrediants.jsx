import React from "react";
import Header from "../components/Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";


const Ingrediants = () => {

  const location = useLocation()
  const {recipeDetails} = location.state || {}

  if(!recipeDetails){
    return <div className="m-2 fs-5"> No recipe details available......</div>;
  }
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
                  src={recipeDetails.youtubeLink}
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
                        <h1 className="fw-bold fs-2">{recipeDetails.name}</h1>
                      </Card.Title>
            
                      <div className="mb-4">
                        <h5 className ="fw-semibold">Ingredients</h5>
                        <ul className="text-secondary">
                          {
                            recipeDetails.ingredients.split(",").map((item, index)=>(
                              <li key={index}>{item.trim()}</li>
                            ))
                          }
                        </ul>
                      </div>
                      <div>
                        <h5 className ="fw-semibold">Instructions</h5>
                        <Card.Text className="text-muted">{recipeDetails.instructions}</Card.Text>
  
                   </div>
                      
                    </div>

                    <div style={{ flex: 1 , marginTop:'10px'}}>
              <img src={recipeDetails.image} alt="Featured" className="img-fluid rounded"
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
