import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DisplayCard from "./DisplayCard";



const CategoryDisplay = ({ getAllCategories, removeCategory }) => {

 

  return (
    <>

    {
      getAllCategories?.length>0? (
         getAllCategories.map((category, index)=>(
            <Row key={index} className="mb-4">
            <Col >
            <Card  className="bg-light p-4 rounded min-vh-200">
              <div className="d-flex justify-content-between align items center">
                <Card.Title as="h3" className="text-lg font-semibold mb-3">
                  {category.categoryName}
                </Card.Title>
                <button onClick={()=>removeCategory(category?.id)} style={{ border: "none", background: "none" }}>
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
    
              <Card.Body>
                <Row xs={1} sm={2} md={2}>
                   {/* Display associated recipes if available */}
                   {
                     category.allRecipes?.length>0? (
                        category.allRecipes.map((recipe, recipeIndex)=>(
                           <Col key={recipeIndex}>
                          <DisplayCard displayData={recipe} />
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
