import React from 'react'
import {  Card, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { removeRecipeAPI } from '../services/allAPI'



const DisplayCard = ({displayData, setdeleteRecipecard}) => {

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
               <button style={{border:'none',background:'none'}}><i class="fa-regular fa-heart"></i></button>
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