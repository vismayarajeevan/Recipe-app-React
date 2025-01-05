import React from 'react'
import {  Card, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const DisplayCard = () => {
  return (
    <>
       
        <Col>
        <Card className='bg-white rounded shadow-sm border-0'>
        <Link to={'/details'}><Image src="https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=pexels-pixabay-262897.jpg&fm=jpg"
          alt=""
          className="w-100 h-48 object-cover"
          fluid
        /></Link>
        <Card.Body>
           <Card.Title className='mb-3'>Recipe name</Card.Title>
          
           <div className='d-flex justify-content-between align items center'>
             <button style={{border:'none',background:'none'}}><i class="fa-regular fa-heart"></i></button>
             <button style={{border:'none',background:'none'}}><i class="fa-regular fa-trash-can"></i></button>
           </div>
           </Card.Body>
        </Card>
        </Col>

    </>
  )
}

export default DisplayCard