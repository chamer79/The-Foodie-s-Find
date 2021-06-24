import api from "./apiConfig.js"

export const getAllRecipes = async () => {
  const resp = await api.get("/recipes")
  return resp.data;
}

export const getOneRecipe = async (id) => {
  const resp = await api.get(`/recipes/${id}`);
  return resp.data;
}

export const postRecipe = async (recipeData) => {
  const resp = await api.post("/recipes", { recipe: recipeData })
  return resp.data;
}

export const putRecipe = async (id, recipeData) => {
  const resp = await api.put(`/recipes/${id}`, { recipe: recipeData });
  return resp.data;
}

export const deleteRecipe = async (id) => {
  const resp = await api.delete(`/recipes/${id}`);
  return resp;
}

//==================
//  Category Info 
//==================
// export const changeCategory = async (recipeId, categoryId) => {
//   const resp = await api.put(`/categories/${categoryId}/recipes/${recipeId}`);
//   return resp.data;
// }

