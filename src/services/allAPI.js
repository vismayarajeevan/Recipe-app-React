// 3.file to hold all api calls

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


// 1.function to save recipe. - post method is used . Used by addrecipe component
  // we need to export it to use it somewhere 
 
export const saveRecipeAPI = async (recipeDetails)=>{
   return await commonAPI(`POST`,`${SERVERURL}/uploadRecipe`,recipeDetails)
} 


// 2.function to display card - get method is used . Used by home component
   // it will display initially  

export const showCardAPI = async()=>{
    return await commonAPI(`GET`,`${SERVERURL}/uploadRecipe`,"")
}

// 3. function to delete recipecard from home - delete method is used 
  // called by display card.Done by using id 
  
  export const removeRecipeAPI =async (id)=>{
   return await commonAPI(`DELETE`,`${SERVERURL}/uploadRecipe/${id}`,{})  //we need to delete that object so use {}
  }


// 4. Create and save new category - post method , called by category component
   // when user clicked on add button in modal
   
   // category stored as object -it includes {categoryName, recipecard}
   export const createAndSaveCategoryAPI = async(categoryDetails)=>{
      return await commonAPI('POST',`${SERVERURL}/categories`,categoryDetails)
   }


// 5.function to display category name. - get method is used
   // called by category component, when component loaded in browser

export const getCategoryAPI = async()=>{
   return await commonAPI('GET',`${SERVERURL}/categories`,{})
}

// 6. function to delete category from home - delete method is used 
  // called by category display component, when click on delete button.Done by using id 
  
  export const deleteCategoryAPI =async (id)=>{
   return await commonAPI(`DELETE`,`${SERVERURL}/categories/${id}`,{})  //we need to delete that object so use {}
  }

//7.   function to add to add to wishlist. first fetch the list , ie, fetch details - get method
// used by display card

export const fetchWishlist= async()=>{
   return await commonAPI('GET', `${SERVERURL}/favourites`,{})
}

// 8. function to add items to favorite- post method is used.
// used by displaycard

export const addToFavoriteAPI =async(item)=>{
   return await commonAPI('POST',`${SERVERURL}/favourites`,item)
}

// 9. function to remove item from cart - delete method
// used by favorite

export const removeFromFavoriteAPI = async (id)=>{
   return await commonAPI('DELETE',`${SERVERURL}/favourites/${id}`,{})
}

//10. update category - PUT method
// used by categorydisplay, when video dropover the category
export const updateCategoryAPI = async (categoryDetails)=>{
   return await commonAPI('PUT',`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}