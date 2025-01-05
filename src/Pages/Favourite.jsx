import React from "react";
import Header from "../components/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";


const Favourite = () => {
  return (
    <>
      <Header />

      <div style={{ backgroundColor: "#f7f7f7", height: "100vh" }}>
      <Container>
        <div className="d-flex align-items-center pt-5 pb-5 gap-3">
          <i
            class="fa-regular fa-heart fa-2xl"
            style={{ color: "#ed8c1f" }}
          ></i>
          <h3 style={{ fontWeight: "bold" }}>My Favorites</h3>
        </div>

      
          <Row xs={1} sm={2} md={3} lg={4} xl={4}>
            {/* repeat ol for cards */}
            <Col>
              <Card className="border-0 shadow-sm rounded overflow-hidden transition-transform hover-scale" style={{ width: "100%" }} >
                <div className="position-relative">
                  <Card.Img
                    src="https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake.jpg"
                    alt=""
                    style={{ height: "12rem", objectFit: "cover" }}
                  />
                  <Button
                    variant="light"
                    className="position-absolute top-0 end-0 m-3 p-2 rounded-circle shadow-sm"
                    style={{ backgroundColor: "#fff"}}
                  >
                    {/* <Heart className="text-danger" /> */}
                    <i className="fa-solid fa-heart text-danger fa-lg"></i>
                  </Button>
                </div>

                <Card.Body>
                  <Card.Title className="mb-2 text-dark">Cake</Card.Title>
                  <Card.Text className="text-muted mb-3">Cuisine</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>

           

          </Row>
        </Container>
      </div>
    </>
  );
};

export default Favourite;
