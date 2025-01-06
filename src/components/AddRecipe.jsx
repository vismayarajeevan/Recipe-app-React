import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Form, Modal} from 'react-bootstrap';
import { saveRecipeAPI } from '../services/allAPI';



const AddRecipe = ({setAddResponse}) => {
  

  // state to take values from modal

  const [recipeDetails, setRecipeDetails] = useState({
    name:'',
    image:'', 
    youtubeLink:'',
    ingredients:'',
    instructions:''
  })
  console.log(recipeDetails);


  
  // function to take text and textarea values from modal

  const handleChange =(e)=>{
    const {name,value}= e.target 
    setRecipeDetails((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }



  // state for invalid youtube link
  const [invalidyoutubeLink,setInvalidyoutubeLink ] =useState(false)

// function to take modal youtubelink field value

const extractEmbedLinkFromYoutube = (userInputYoutubeLink)=>{
       if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
        // only need last 11 character
          console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
         

          const videoId = userInputYoutubeLink.split("v=")[1].slice(0,11)
          setInvalidyoutubeLink(false)
          setRecipeDetails({...recipeDetails, youtubeLink:`https://www.youtube.com/embed/${videoId}`})  //convert youtube link to embedded code

       }else{
        //  make the invalid true it was inavalid
        setInvalidyoutubeLink(true)
        setRecipeDetails({...recipeDetails, youtubeLink:""}) 
       }
}

// function to upload recipe

 const uploadRecipe = async()=>{
  // object destructuring
  const {name, image , youtubeLink , ingredients , instructions} = recipeDetails
  if(name && image && youtubeLink && ingredients && instructions ){
    //  function call to save recipe
   try {
    
    const result = await saveRecipeAPI(recipeDetails)
    console.log(result);

    if(result.status >=200 && result.status<300){
  
      alert("Recipe added successfully!!!")
      handleClose()
      // pass the result
      setAddResponse(result)
    }else{
      console.log(result);
      
    }

   } catch (error) {
    console.log(error);
    
   }
  }else{
    alert("Please fill all the fields!!!")
  }
}


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

             <Form.Group controlId="formName" className="mb-2">
               <Form.Label>Recipe Name</Form.Label>
               <Form.Control onChange={handleChange} name='name' value={recipeDetails.name} type="text" placeholder="Enter recipe name"/>   
             </Form.Group>

             <Form.Group controlId="formImage" className="mb-2">
               <Form.Label>Upload Image</Form.Label>
               <Form.Control onChange={handleChange}  name='image'  type="url" />  
             </Form.Group>

             <Form.Group controlId="formYoutubeLink" className="mb-2">
               <Form.Label>Video Link</Form.Label>
               <Form.Control onChange={e=>extractEmbedLinkFromYoutube(e.target.value)} name='youtubelink' value={recipeDetails.youtubeLink}  type="url" placeholder="Ente video URL" />
             </Form.Group>

             {
              invalidyoutubeLink && 
              (<div className='text-danger'>Invalid Youtube link</div>
             )}

             <Form.Group className="mb-2" controlId="formRecipeIngredients">
                <Form.Label>Ingredients (comma-separated)</Form.Label>
                <Form.Control onChange={handleChange} name='ingredients' value={recipeDetails.ingrediants} as="textarea" rows={2} placeholder="e.g., 2 cups flour, 1 cup sugar, 3 eggs" required />
             </Form.Group>

             <Form.Group controlId="formDescription" className="mb-2">
               <Form.Label>Instructions</Form.Label>
               <Form.Control onChange={handleChange} name='instructions' value={recipeDetails.instructions} as="textarea" rows={3} placeholder="Enter recipe description"/>
             </Form.Group>

           </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button onClick={uploadRecipe} style={{backgroundColor:'#ed8c1f', border:'none'}}>Save</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddRecipe