import api from "./apiConfig.js"

export const getAllRecipes = async () => {
  try {
    const resp = await api.get("/recipes")
    return resp.data;
  }catch (error) {
    throw error;
  }
}

export const getOneRecipe = async (id) => {
  try {
    const resp = await api.get(`/recipes/${id}`);
    return resp.data;
  }catch (error) {
    throw error;
  }
}

export const postRecipe = async (recipeData) => {
  try {
    const resp = await api.post("/recipes/", { recipe: recipeData })
    return resp.data;
  }catch (error) {
    throw error;
  }
}

export const putRecipe = async (id, recipeData) => {
  try {
    const resp = await api.put(`/recipes/${id}`, { recipe: recipeData });
    return resp.data;
  }catch (error) {
    throw error;
  }
}

export const deleteRecipe = async (id) => {
  try {
    const resp = await api.delete(`/recipes/${id}`);
    return resp;
  }catch (error) {
    throw error;
  }
}

//==================
//  Category Info 
//==================
// export const changeCategory = async (recipeId, categoryId) => {
//   const resp = await api.put(`/categories/${categoryId}/recipes/${recipeId}`);
//   return resp.data;
// }

