import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";


const Favourite = () => {

  // create a state to store wishlist 
  const [wishlist, setWishlist] = useState([])

  useEffect(()=>{
    
  // need to take wishlist from localstorage
    const storeWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    // update wishlist with taken data
    setWishlist(storeWishlist)

  },[])

  // function to remove from wishlist
  const removeFromWishlist =(id)=>{
    const updatedWishlist = wishlist.filter(item=>item.id!==id)
    setWishlist(updatedWishlist)
    // update localstorage
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
  }

 

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
            {
              wishlist.map((item)=>(
                <Col key={item?.id}>
              <Card className="border-0 shadow-sm rounded overflow-hidden transition-transform hover-scale" style={{ width: "100%" }} >
                <div className="position-relative">
                  <Card.Img
                    src={item?.image}
                    alt=""
                    style={{ height: "12rem", objectFit: "cover" }}
                  />
                  <Button
                    onClick={()=>removeFromWishlist(item?.id)}
                    variant="light"
                    className="position-absolute top-0 end-0 m-3 p-2 rounded-circle shadow-sm"
                    style={{ backgroundColor: "#fff"}}
                  >
                    {/* <Heart className="text-danger" /> */}
                    <i className="fa-solid fa-heart text-danger fa-lg"></i>
                  </Button>
                </div>

                <Card.Body>
                  <Card.Title className="mb-2 text-dark">{item?.name}</Card.Title>
                  
                  
                </Card.Body>
              </Card>
            </Col>

              ))
            }
           

          </Row>
        </Container>
      </div>
    </>
  );
};

export default Favourite;
