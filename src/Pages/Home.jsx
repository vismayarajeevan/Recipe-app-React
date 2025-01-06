import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import AddRecipe from '../components/AddRecipe'

import Category from '../components/Category'
import { Card, Col, Container, Row } from 'react-bootstrap'
import DisplayCard from '../components/DisplayCard'
import CategoryDisplay from '../components/CategoryDisplay'

import { showCardAPI } from '../services/allAPI'





const Home = () => {

 // state to get category
  const [getAllCategories, setGetAllCategories] = useState([])

// create state in parent and then we can use any other component through this state lifting
const [addResponse , setAddResponse] =useState("")

// create a state to delete recipecards
const [deleteRecipeCard, setdeleteRecipecard] =useState("")



  // we need to display cards initially when it already added .so use useeffect 
  useEffect(()=>{
      showCard()
    },[addResponse,deleteRecipeCard])
    
    
    
    
    // create a state to store data inside result
    
    const [allRecipe, setAllRecipe] =useState([])
    
    console.log(allRecipe);
    
  // create a function to display card
       const showCard = async()=>{
        try {
          const result = await showCardAPI()
          console.log(result);
          if(result.status>=20 && result.status<300){
            // update state with result data
            setAllRecipe(result.data);
            
          }else{
            console.log("API call failed");
            
          }
          
        } catch (error) {
          console.log(error);
          
        }
       }


  return (

   
    <>
       <Header />

       <div style={{backgroundColor: '#f7f7f7'}}>

        <Container className='py-5'>

         <Row className='g-4'>

          <Col lg={6}>
          <Card className='p-3 border-0 shadow-sm'>
            <div className='d-flex justify-content-between align-items-center mb-5'>
                 <h2>My Recipes</h2>
                 {/* updation done in add */}
                 <AddRecipe  setAddResponse={setAddResponse}/>
            </div >

            <Row xs={1} sm={2} md={2} lg={2} xl={2}  className='g-3'>
              {
                allRecipe?.length>0?(
                allRecipe.map((recipe)=>(
                  <Col key={recipe?.id} className='mb-3 p-4'>

                    {/* need to display cards details based on entered data. so use props to share data between components */}
                    {/* delete function update state pass here */}
                     <DisplayCard displayData={recipe} setdeleteRecipecard={setdeleteRecipecard}/>
                  </Col>
                ))
               ) :(
                <div className='text-secondary'>No recipes are uploaded!!</div>
              )}
            </Row > 
          </Card>
          </Col>


          <Col lg={6}>
          <Card className='p-3 border-0 shadow-sm'>
          <div className='d-flex justify-content-between align-items-center mb-3'>
                 <h2>Categories</h2>
                 <Category setGetAllCategories={setGetAllCategories} />
            </div>

            <div> 
              <Row className='g-4 mb-3'> 
              <Col>
                <CategoryDisplay getAllCategories={getAllCategories} /> 
              </Col>
             </Row>            
            </div>
          </Card>
          </Col>
         </Row>
         
      </Container>
   </div>
    </>
  )
}

export default Home