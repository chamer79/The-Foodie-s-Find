import "./RecipeDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RecipeDetail(props) {
  // const [recipeItem, setrecipeItem] = useState()
  const { id } = useParams();


  return (
    <div className="receipe-card-container">
      <h3>Recipe Detail Page</h3>
  
      <div className="img-container">
        <img className="recipe-img" src={`/recieps/:id/${props.img_url}`} />
      </div>
      <div className="recipe-content">
        <div className="recipe-title">
          <h3>{props.name}</h3>
        </div>
        <div className="reciep-info">
          <p>Prep Time: {`recipes.${props.prep_time}`}</p>
          <p>Baking/Cooking Time: {props.baking_cooking_time}</p>
          <p>Servings: {props.servings}</p>
        </div>
        <div className="recipe-instructions">
          <p>Instructions: </p>
        </div>
        <div className="recipe-directions">
          <p>Directions: </p>
        </div>
      </div>

    </div>
  )
}
