import React from 'react'
import Header from '../components/Header'
import AddRecipe from '../components/AddRecipe'

import Category from '../components/Category'
import { Card, Col, Container, Row } from 'react-bootstrap'
import DisplayCard from '../components/DisplayCard'
import CategoryDisplay from '../components/CategoryDisplay'


const Home = () => {
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
              <Col className='mb-3'>
              <DisplayCard />
              </Col>
              <Col className='mb-3'>
              <DisplayCard />
              </Col>
              <Col>
              <DisplayCard />
              </Col>
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