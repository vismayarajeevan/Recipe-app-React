import React, { useEffect, useState } from 'react'
import {  Card, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { addToFavoriteAPI, fetchWishlist, removeFromFavoriteAPI, removeRecipeAPI } from '../services/allAPI'



const DisplayCard = ({displayData, setdeleteRecipecard,isInCategory}) => {

  // // create a state to check the recipe is already in favourite or not
  const [isInWishlist, setIsInWishlist] = useState(false)


  // function to check the item is already in wishlist or not

  const checkFavourite = async () => {
    try {
      const favorite = await fetchWishlist();
      if (favorite.status >= 200 && favorite.status < 300) {
        setIsInWishlist(favorite.data.some(item => item.id === displayData.id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // function to add or remove iyem from favorite
  const toggleFavorite = async () => {
    try {
      if (isInWishlist) {
        await removeFromFavoriteAPI(displayData.id);
        setIsInWishlist(false);
        alert("Recipe is removed from favourite")
      } else {
        await addToFavoriteAPI(displayData);
        setIsInWishlist(true);
        alert("Recipe is added to favourite")
        }
       
      } catch (error) {
      console.error(error);
    }
  };

  
   useEffect(() => {
    checkFavourite()
    }, [displayData.id, isInWishlist]);


  // function to delete card

  const deleteRecipeCard = async(id)=>{
   try {
    // Remove the recipe from the favorites first
    await removeFromFavoriteAPI(id);
    const result = await removeRecipeAPI(id)
    setdeleteRecipecard(result)
   

   } catch (error) {
    console.log(error);
    
   }
  }

  // function to drag card 
   const recipeCardStarted =(e, dragRecicpeDetails)=>{
      console.log("Inside recipeCardDragstarted with cardid:" + dragRecicpeDetails?.id);
      // pass video details to card
      // share data using event drag start
      // dragrecipe details is an object, we need to convert it to string. for that use json.stringify
      e.dataTransfer.setData("recipeDetails", JSON.stringify(dragRecicpeDetails))
      
   }




  return (
    <>
       <Row>
         
          <Col>
          {/* drag and drop */}
          <Card draggable={true} onDragStart={(e)=>recipeCardStarted(e,displayData)} className='bg-white rounded shadow-sm border-0'  style={{ width: '100%', height: '100%' }}>
          <Link to="/details" state={{ recipeDetails: displayData }}>

          <div><img src={displayData?.image}
            alt=""
            className=" img-fluid object-cover"  style={{width:'100%', height:'250px'}}
            fluid
          /></div></Link>
          <Card.Body>
             <Card.Title className='mb-3'>{displayData?.name}</Card.Title>
            
             <div className='d-flex justify-content-between align items center'>
               <button onClick={toggleFavorite} style={{border:'none',background:'none'}}><i className={`fa-${isInWishlist ? 'solid' : 'regular'} fa-heart`}
                    style={{ color: isInWishlist ? 'red' : 'inherit' }}></i></button>
                     {/* Conditionally render delete button */}
              {!isInCategory && (
                <button onClick={() => deleteRecipeCard(displayData.id)} style={{ border: 'none', background: 'none' }}>
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              )}
               
              
             </div>
             </Card.Body>
          </Card>
          </Col>
       </Row>

    </>
  )
}

export default DisplayCard