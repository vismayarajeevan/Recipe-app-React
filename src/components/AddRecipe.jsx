import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Form, Modal} from 'react-bootstrap';




const AddRecipe = () => {
  
  // state to show modal
  const [show, setShow] = useState(false);
 // function to show and close modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
   
  
       <div > 
        <button onClick={handleShow} className='d-flex align-items-center justify-content-between gap-2 p-2 rounded'  style={{backgroundColor:'#ed8c1f', color:'white', border:'none'}}><PlusCircle />Add Recipe</button>
        </div>
      

     
    
    {/* modal */}
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Add New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-1'>

             <Form.Group controlId="formImage" className="mb-2">
               <Form.Label>Recipe Name</Form.Label>
               <Form.Control type="text" placeholder="Enter recipe name"/>   
             </Form.Group>

             <Form.Group controlId="formImage" className="mb-2">
               <Form.Label>Upload Image</Form.Label>
               <Form.Control type="file" accept="image/*"/>  
             </Form.Group>

             <Form.Group controlId="formYoutubeLink" className="mb-2">
               <Form.Label>Video Link</Form.Label>
               <Form.Control type="url" placeholder="Ente video URL" />
             </Form.Group>

             <Form.Group className="mb-2" controlId="formRecipeIngredients">
                <Form.Label>Ingredients (comma-separated)</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="e.g., 2 cups flour, 1 cup sugar, 3 eggs" required />
             </Form.Group>

             <Form.Group controlId="formDescription" className="mb-2">
               <Form.Label>Instructions</Form.Label>
               <Form.Control as="textarea" rows={3} placeholder="Enter recipe description"/>
             </Form.Group>

           </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} style={{backgroundColor:'#ed8c1f', border:'none'}}>Save</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddRecipe