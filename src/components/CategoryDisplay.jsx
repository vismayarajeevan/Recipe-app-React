import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import DisplayCard from './DisplayCard'

const CategoryDisplay = () => {
  return (
   <>
   <Card className='bg-light p-4 rounded min-vh-200'>
    <div className='d-flex justify-content-between align items center'>
         <Card.Title as="h3" className='text-lg font-semibold mb-3'>Desserts</Card.Title>
         <button style={{border:'none',background:'none'}}><i class="fa-regular fa-trash-can"></i></button>
         </div>

     <Card.Body>
        <Row xs={1} sm={2} md={2}>
           <Col>
           <DisplayCard/>
           </Col>
        </Row>
     </Card.Body>
   </Card>
   </>
  )
}

export default CategoryDisplay