import "./Recipes.css"
import { Link } from "react-router-dom";
import RecipeCards from "../../components/RecipeCards/RecipeCards.jsx";


export default function Recipes({recipes}) {
  return (
    <div className="recipes">
   
      <RecipeCards recipes={recipes} />  
      
        <Link to="recipes/1">
          <h3>Recipes Page</h3>
        </Link>
     
    </div>
  )
}
