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