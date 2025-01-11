import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DisplayCard from "./DisplayCard";
import { removeRecipeAPI, updateCategoryAPI } from "../services/allAPI";



const CategoryDisplay = ({ getAllCategories, removeCategory,setDeleteResponseFromCategory }) => {

// function to remove fault during drop function
const dragPreventFault =(e)=>{
  e.preventDefault()
}

//  function to drop details of card
const recipeCardDrop = async(e,categoryDropDetails)=>{
  e.preventDefault();
  
  // convert data to original form
  const getRecipeDetails= JSON.parse(e.dataTransfer.getData("recipeDetails"))
  console.log(getRecipeDetails);
  
  // update category by add recipe to allRecipes
  categoryDropDetails.allRecipes.push(getRecipeDetails)
  
  
  // to store data permanently, make api call- for update
  await updateCategoryAPI(categoryDropDetails)
  // to show in screen call the display category
  
  // to remove from my recipes, when it moves to category
  const result= await removeRecipeAPI(getRecipeDetails?.id)
  // to show effect ca
  setDeleteResponseFromCategory(result)
  
}





  return (
    <>

    {
      getAllCategories?.length>0? (
         getAllCategories.map((category, index)=>(
            <Row droppable="true" onDragOver={dragPreventFault}  onDrop={(e)=>recipeCardDrop(e,category)} key={index} className="mb-4">
            <Col >
            <Card  className="bg-light p-4 rounded min-vh-200 ">
              <div className="d-flex justify-content-between align items center">
                <Card.Title as="h3" className="text-lg font-semibold mb-3">
                  {category.categoryName}
                </Card.Title>
                <button onClick={()=>removeCategory(category?.id)} style={{ border: "none", background: "none" }}>
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
    
              <Card.Body>
                <Row  xs={1} sm={2} md={2}>
                   {/* Display associated recipes if available */}
                   {
                     category.allRecipes?.length>0? (
                        category.allRecipes.map((recipe, recipeIndex)=>(
                          // to drop card from my recipes, use event ondrop
                           <Col  key={recipeIndex} className="mb-5">
                          <DisplayCard displayData={recipe}  isInCategory={true}/>
                        </Col>
                        ))
                     ) : (
                        <div className="text-secondary">No recipes in this category!</div>
                     )
                   }
                 </Row>
               </Card.Body>
             </Card>
            </Col>
           </Row> 
         ))
      ) : (
         <div className="text-secondary">No categories found!</div>
      )

   }
     

    </>
  );
};

export default CategoryDisplay;
