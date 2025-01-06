import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import AddRecipe from '../components/AddRecipe'

import Category from '../components/Category'
import { Card, Col, Container, Row } from 'react-bootstrap'
import DisplayCard from '../components/DisplayCard'
import CategoryDisplay from '../components/CategoryDisplay'

import { showCardAPI } from '../services/allAPI'





const Home = () => {

  
      // we need to display cards initially when it already added .so use useeffect
  
  useEffect(()=>{
      showCard()
    },[])
    
    
    
    
    // create a state to store data inside result
    
    const [allRecipe, setAllRecipe] =useState([])
    
    console.log(allRecipe);
    
       // call the function to display card
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
                 <AddRecipe/>
            </div >

            <Row xs={1} sm={2} md={2} lg={2} xl={2}  className='g-3'>
              {
                allRecipe?.length>0?(
                allRecipe.map((recipe)=>(
                  <Col key={recipe?.id} className='mb-3'>

                    {/* need to display cards details based on entered data. so use props to share data between components */}
                     <DisplayCard displayData={recipe} />
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
                 <Category />
            </div>

            <div>
             <Row className='g-4 mb-3'> 
              <Col>
                <CategoryDisplay /> 
              </Col>
             </Row>
             <Row className='g-4 mb-3'> 
              <Col>
                <CategoryDisplay /> 
              </Col>
             </Row>


            
              


              
              
            </div>
          </Card>
          </Col>

  
         </Row>
      </Container>
   </div>
    </>


    // <div style={{backgroundColor: '#f7f7f7',height:'auto'}}>
    //   <Header />

    //   <div className='container-fluid row' style={{padding:"100px"}}>
    //      <div> 
    //         <AddRecipe/>
    //         </div>
    //         <div className='container-fluid my-5 row'>
    //        <div className='col-lg-6'>
    //        <h1 style={{fontSize:'25px',fontWeight:'bolder', marginBottom:'50px'}}>My Recipes</h1>
    //        <View />
    //       </div>
    //       {/* <div className='col-lg-6'>
    //         <Category />
    //       </div> */}
        

    //    </div>

         
// {/*         


//        <div className='container-fluid my-5 row'>
//         <div className='col-lg-6'>
//            <h1 style={{fontSize:'30px', marginBottom:'50px'}}>My Recipes</h1>
//            <View />
//         </div>
//         <div className='col-lg-6'>
           
//         </div>
        

//        </div> */}
    //   </div>
    // </div>
  )
}

export default Home