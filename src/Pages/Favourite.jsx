import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { fetchWishlist, removeFromFavoriteAPI } from "../services/allAPI";


const Favourite = () => {

  // create a state to store wishlist 
  const [wishlist, setWishlist] = useState([])

  // function to fetch details

  const fetchFavourite = async () => {
    try {
      const response = await fetchWishlist();
      if (response.status >= 200 && response.status < 300) {
        setWishlist(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(()=>{
    
    fetchFavourite()

  },[])

  // function to remove from wishlist
  
  const removeFromFavorite = async (id) => {
    try {
      // Optimistically update the state to remove the item immediately
      setWishlist((prev) => prev.filter((item) => item.id !== id));
  
      // Make the API call to remove from favorites
      const response = await removeFromFavoriteAPI(id);
  
      if (response.status >= 200 && response.status < 300) {
        // Successfully deleted, no further action needed
        alert("Item successfully removed from favorites!")
      } else {
        console.log("Error deleting from favorites");
        // If deletion fails, refetch the wishlist to ensure data consistency
    
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
      // In case of an error, re-fetch the wishlist
      
    }
  };
  

 

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

        {
          wishlist?.length>0? (
            
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
                    onClick={()=>removeFromFavorite(item?.id)}
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
            ) : (
           
            <div className="text-center mt-5">
              <h5 className="text-muted">Your favorites list is empty.</h5>
              <p>Add items to your favorites to see them here.</p>
            </div>
           )
          
        }
      
          

        
        </Container>
      </div>
    </>
  );
};

export default Favourite;
