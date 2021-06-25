import "./RecipeCards.css";
import { useState } from "react";
import Card from "../Card/Card.jsx";


export default function RecipeCards() {
  const [recipes, setRecipes] = useState([]);
  const CARDS = recipes
    .reverse()
    .map((recipe) =>
      <Card  key={recipe.id}
        // _id={recipe._id}
        name={recipe.name}
        prep_time={recipe.prep_time}
        baking_cooking_time={recipe.baking_cooking_time}
        servings={recipe.servings}
        ingredients={recipe.ingredients}
        directions={recipe.directions}
        img_url={recipe.img_url}
      />
  )
  
  return (
    <div className="recipe-cards">
      <div className="cards">{CARDS} </div>     
    </div>
  )
}
