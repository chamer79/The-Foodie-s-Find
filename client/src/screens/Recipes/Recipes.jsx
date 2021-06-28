import "./Recipes.css";
import RecipeCards from "../../components/RecipeCards/RecipeCards.jsx";

export default function Recipes({ recipes }) {
  return (
    <main className="receips-background-img">
      <div className="recipes">
        <RecipeCards recipes={recipes} />
      </div>
    </main>
  );
}
