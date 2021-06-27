import "./Recipes.css";
import RecipeCards from "../../components/RecipeCards/RecipeCards.jsx";

export default function Recipes({ recipes }) {
  return (
    <main>
      <div className="recipes">
        <RecipeCards recipes={recipes} />
      </div>
    </main>
  );
}
