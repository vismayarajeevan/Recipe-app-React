import React, { useEffect, useState } from 'react'
import {  Card, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { removeRecipeAPI } from '../services/allAPI'



const DisplayCard = ({displayData, setdeleteRecipecard}) => {

  // // create a state to check the recipe is already in favourite or not
  const [isInWishlist, setIsInWishlist] = useState(false)

   
   useEffect(() => {
  //  take wishlist from localstorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
     // Check if the recipe is in the wishlist, by comparing id in wishlist with selected id of recipe
    setIsInWishlist(wishlist.some((item) => item.id === displayData.id));
    }, [displayData.id]);

    // function to add and remove from wishlist

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (isInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter((item) => item.id !== displayData.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } else {
      // Add to wishlist
      wishlist.push(displayData);
      // update the localstorage with added data
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
    setIsInWishlist(!isInWishlist);
  };



  // function to delete card

  const deleteRecipeCard = async(id)=>{
   try {
    const result = await removeRecipeAPI(id)
    setdeleteRecipecard(result)

   } catch (error) {
    console.log(error);
    
   }
  }
  return (
    <>
       <Row>
         
          <Col>
          <Card className='bg-white rounded shadow-sm border-0'  style={{ width: '100%', height: '100%' }}>
          <Link to="/details" state={{ recipeDetails: displayData }}>

          <div><img src={displayData?.image}
            alt=""
            className=" img-fluid object-cover"  style={{width:'100%', height:'250px'}}
            fluid
          /></div></Link>
          <Card.Body>
             <Card.Title className='mb-3'>{displayData?.name}</Card.Title>
            
             <div className='d-flex justify-content-between align items center'>
               <button onClick={toggleWishlist} style={{border:'none',background:'none'}}><i className={`fa-${isInWishlist ? 'solid' : 'regular'} fa-heart`}
                    style={{ color: isInWishlist ? 'red' : 'inherit' }}></i></button>
               <button onClick={()=>deleteRecipeCard(displayData?.id)} style={{border:'none',background:'none'}}><i class="fa-regular fa-trash-can"></i></button>
             </div>
             </Card.Body>
          </Card>
          </Col>
       </Row>

    </>
  )
}

export default DisplayCard