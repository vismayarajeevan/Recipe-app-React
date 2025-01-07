import { PlusCircle } from 'lucide-react';
import React, {  useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';





const Category = ({addCategory}) => {

  // state to hold the categories
  const [categoryName, setCategoryName] = useState("")


  // state to show modal
    const [show, setShow] = useState(false);
   // function to show and close modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // create a function to save category name
     const saveCategory =()=>{
      if(categoryName){
        // we need to save as object . create an object to store name and cards
         const categorydetails ={categoryName, allRecipes:[]}
         addCategory(categorydetails); // Call the parent function
         handleClose()
         
      }else{
        alert("Please provide category name!!")
      }
    }

  

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
                  {/* update state with entered value */}
                  <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Enter category name"/>   
                  </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                 <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                 <Button onClick={saveCategory} style={{backgroundColor: '#ed8c1f',border:'none'}}>Add</Button>
              </Modal.Footer>
          </Modal>

        


   </>

  )
}

export default Category