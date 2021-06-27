import "./RecipeDetail.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneRecipe } from "../../services/recipes";

export default function RecipeDetail(props) {
  const [recipeItem, setRecipeItem] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { currentUser, handleDelete } = props;

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
    <main>
      <div className="put-delete-buttons">
        {currentUser ? (
          <>
            <Link to={`/recipes/${recipeItem?.id}/update`}>
              <button className="edit-button">UPDATE</button>
            </Link>
            <button
              className="delete-button"
              onClick={() => handleDelete(recipeItem?.id)}
            >
              DELETE
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      <section className="receipe-card-container">
        <div className="img-container">
          <img className="recipe-img" src={`${recipeItem?.img_url}`} />
        </div>
        <div className="recipe-content">
          <div className="recipe-title">
            <h3>{recipeItem?.name}</h3>
          </div>
          <div className="reciep-info">
            <p><span clasName="recipe-props">Prep Time:</span> {`recipes.${recipeItem?.prep_time}`}</p>
            <p><span clasName="recipe-props">Baking/Cooking Time:</span> {recipeItem?.baking_cooking_time}</p>
            <p><span clasName="recipe-props">Servings:</span> {recipeItem?.servings}</p>
          </div>
          <div className="recipe-ingredients">
            <ul className="ingredient-list">
            <span clasName="recipe-props">Ingredients:</span>
              {recipeItem?.ingredients.split("\n").map((ingredient) => (
                <li className="ingredient-item" key={recipeItem?.ingredient}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="recipe-directions">
            <ul className="direction-list">
            <span clasName="recipe-props">Directions:</span>
              {recipeItem?.directions.split("\n").map((direction) => (
                <li className="direction-item" key={recipeItem?.direction}>
                  {direction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
