import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import AddRecipe from '../components/AddRecipe'

import Category from '../components/Category'
import { Card, Col, Container, Row } from 'react-bootstrap'
import DisplayCard from '../components/DisplayCard'
import CategoryDisplay from '../components/CategoryDisplay'

import { saveRecipeAPI, showCardAPI, updateCategoryAPI } from '../services/allAPI'
import { createAndSaveCategoryAPI  } from '../services/allAPI'
import { getCategoryAPI  } from '../services/allAPI'
import { deleteCategoryAPI  } from '../services/allAPI'





const Home = () => {

 // state to get category
  const [getAllCategories, setGetAllCategories] = useState([])

 // create state in parent and then we can use any other component through this state lifting
 const [addResponse , setAddResponse] =useState("")

 // create a state to delete recipecards
  const [deleteRecipeCard, setdeleteRecipecard] =useState("")

  // state to delete from my recipe
  const [deleteResponseFromCategory, setDeleteResponseFromCategory]=useState("")

  // create a state to remove card from categoryview
  const [deleteResponseFromCategoryView, setDeleteResponseFromCategoryView] = useState("")



  // we need to display cards initially when it already added .so use useeffect 
  useEffect(()=>{
      showCard();
      displayAllCategories()
    },[addResponse,deleteRecipeCard,deleteResponseFromCategory, deleteResponseFromCategoryView])
    
    
    
    
    // create a state to store data inside result
    
    const [allRecipe, setAllRecipe] =useState([])
    
    console.log(allRecipe);
    
  // create a function to display card
       const showCard = async()=>{
        try {
          const result = await showCardAPI()
          console.log(result);
          if(result.status>=200 && result.status<300){
            // update state with result data
            setAllRecipe(result.data);
            
          }else{
            console.log("API call failed");
            
          }
          
        } catch (error) {
          console.log(error);
          
        }
       }


       // create a function to show categories
       const displayAllCategories =async()=>{
        try {
          const result = await getCategoryAPI()
          if(result.status>=200 && result.status<300){
            // update the state
              setGetAllCategories(result.data)
          }
        } catch (error) {
          console.log(error);
          
        }
      }

        // create a function to add category name
           const addCategory =async(categorydetails)=>{
             
       
                try {
                 const result = await createAndSaveCategoryAPI(categorydetails)
                 if (result.status >= 200 && result.status < 300) {
                  await displayAllCategories(); // Refresh categories after adding
                  alert("Category created!");
                 }
                } catch (error) {
                 console.log(error);
                 
                }
            
           }

          //  function to delele category
           const removeCategory = async(id)=>{
                 try {
                    const result = await deleteCategoryAPI(id)
                    if (result.status >= 200 && result.status < 300) {
                      await displayAllCategories(); // Refresh categories after deleting
                      alert("Category deleted!");
                    }
                 } catch (error) {
                    console.log(error);
                    
                 }
              }

      //function to prevent fault during drop card
      const dragOverView=(e)=>{
        e.preventDefault()
      } 

      // function to drop card
      const categoryCardDragOverView =async(e)=>{
        console.log("Inside categoryCardDragOverView");
        // get data by convert it into original form.
        // we already know the keys , so we can directlt use the keys using destructuring
        const {recipe, category} = JSON.parse(e.dataTransfer.getData("dragData"))
        console.log(recipe, category);
        
        // 1.updating the category by delete video from category
         // to delete selected card only
         const updatedCategoryRecipeList = category?.allRecipes?.filter(item=>item.id!=recipe?.id)  
        //  update the category by removing the selected card
         const updateCategory = {...category,allRecipes:updatedCategoryRecipeList}
         console.log(updateCategory);
        //  make api call to save it permanently
        const result = await updateCategoryAPI(updateCategory)
         
        // use state lifting to communicate data from home to category
        setDeleteResponseFromCategoryView(result)

        // use api call to upload and save card
        await saveRecipeAPI(recipe)

        // call showcard 
        showCard()
        
        
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

            <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryCardDragOverView(e)} xs={1} sm={2} md={2} lg={2} xl={2}  className='g-3'>
              {
                allRecipe?.length>0?(
                allRecipe.map((recipe)=>(
                  <Col key={recipe?.id} className='mb-3 p-4'>

                    {/* need to display cards details based on entered data. so use props to share data between components */}
                    {/* delete function update state pass here */}
                     <DisplayCard displayData={recipe} setdeleteRecipecard={setdeleteRecipecard} />
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
                 <Category addCategory={addCategory} />
            </div>

            <div> 
              <Row className='g-4 mb-3'> 
              <Col>
                <CategoryDisplay  getAllCategories={getAllCategories} removeCategory={removeCategory} setDeleteResponseFromCategory={setDeleteResponseFromCategory} /> 
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