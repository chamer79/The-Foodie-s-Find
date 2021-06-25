import "./RecipeDetail.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getOneRecipe } from "../services/foods";


export default function RecipeDetail(props) {
  const [recipeItem, setRecipeItem] = useState(null);
  const [recipeId, setRecipeId] = useState("");
  const { id } = useParams();


  
  return (
    <div>
      
      <h3>Recipe Detail Page</h3>
    </div>
  )
}
