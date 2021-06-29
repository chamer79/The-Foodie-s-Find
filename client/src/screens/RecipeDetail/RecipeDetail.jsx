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
    <main className="background-img">
      <div className="receipe-card-container">
       <div className="img-button-container">
        <div className="img-container">
          <img className="recipe-img" src={`${recipeItem?.img_url}`} alt={`${recipeItem?.name}`} />
        </div>
      <div className="edit-delete-buttons">
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
          </div>
        <div className="recipe-content">
          <div className="recipe-title">
            <h3 className="title">{recipeItem?.name}</h3>
          </div>
          <div className="recipe-info">
            <p className="prep"><span className="recipe-prompt">Prep Time:</span> {`${recipeItem?.prep_time}`}</p>
            <p className="bake-cook"><span className="recipe-prompt">Baking/Cooking Time:</span> {recipeItem?.baking_cooking_time}</p>
            <p className="serving-amount"><span className="recipe-prompt">Servings:</span> {recipeItem?.servings}</p>
          </div>
          <div className="recipe-ingredients">
            <ul className="ingredient-list">
              <p className="ingredient-tag"><span className="recipe-prompt">Ingredients:</span></p>
              {recipeItem?.ingredients.split("\n").map((ingredient) => (
                <li className="ingredient-item" key={recipeItem?.ingredient}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="recipe-directions">
            <p className="direction-tag"><span className="recipe-prompt">Directions:</span></p>
            <ul className="direction-list">
              {recipeItem?.directions.split("\n").map((direction) => (
                <li className="direction-item" key={recipeItem?.direction}>
                  {direction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
