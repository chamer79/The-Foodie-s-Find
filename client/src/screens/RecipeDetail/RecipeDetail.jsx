import "./RecipeDetail.css";
import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router";
import { getOneRecipe, deleteRecipe } from "../../services/recipes";

export default function RecipeDetail(props) {
  const [recipeItem, setRecipeItem] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeItem = await getOneRecipe(id);
      setRecipeItem(recipeItem);
      setLoaded(true);
    };
    fetchRecipe();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }




  return (
    <div className="receipe-card-container">
      <h3>Recipe Detail Page</h3>
  
      <div className="img-container">
        <img className="recipe-img" src={`/recieps/:id/${recipeItem?.img_url}`} />
      </div>
      <div className="recipe-content">
        <div className="recipe-title">
          <h3>{recipeItem?.name}</h3>
        </div>
        <div className="reciep-info">
          <p>Prep Time: {`recipes.${recipeItem?.prep_time}`}</p>
          <p>Baking/Cooking Time: {recipeItem?.baking_cooking_time}</p>
          <p>Servings: {recipeItem?.servings}</p>
        </div>
        <div className="recipe-instructions">
          <p>Ingredients: {recipeItem?.ingredients} </p>
        </div>
        <div className="recipe-directions">
          <p>Directions: {recipeItem?.directions} </p>
        </div>
      </div>

    </div>
  )
}
