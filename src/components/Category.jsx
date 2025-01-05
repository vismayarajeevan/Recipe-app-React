import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';



const Category = () => {

  // state to show modal
    const [show, setShow] = useState(false);
   // function to show and close modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

   <>
     

      <button onClick={handleShow} className='d-flex align-items-center justify-content-between gap-2 p-2 rounded'  style={{backgroundColor:'#ed8c1f', color:'white', border:'none'}}><PlusCircle />Add Category </button>


    

        {/* ********************modal********************** */}
  
          <Modal centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              <Modal.Title>Add Category</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form.Group controlId="formImage" className="mb-3">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter category name"/>   
                  </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                 <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                 <Button style={{backgroundColor: '#ed8c1f',border:'none'}} onClick={handleClose}>Add</Button>
              </Modal.Footer>
          </Modal>
   </>

  )
}

export default Category