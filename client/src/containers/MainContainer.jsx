import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import Recipes from "../screens/Recipes/Recipes.jsx";
import RecipeDetail from "../screens/RecipeDetail/RecipeDetail.jsx";
import PostRecipe from "../screens/PostRecipe/PostRecipe.jsx";
import EditRecipe from "../screens/EditRecipe/EditRecipe.jsx";

import {
  deleteRecipe,
  getAllRecipes,
  postRecipe,
  putRecipe,
} from "../services/recipes";

export default function MainContainer(props) {
  const [recipes, setRecipes] = useState([]);

  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeList = await getAllRecipes();
      setRecipes(recipeList);
    };
    fetchRecipes();
  }, []);

  const handleCreate = async (formData) => {
    const recipeItem = await postRecipe(formData);
    setRecipes((prevState) => [...prevState, recipeItem]);
    history.push("/recipes");
  };

  const handleUpdate = async (id, formData) => {
    const recipeItem = await putRecipe(id, formData);
    setRecipes((prevState) =>
      prevState.map((recipe) => {
        return recipe.id === Number(id) ? recipeItem : recipe;
      })
      );
      history.push("/recipes");
  };

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
    history.push("/recipes");
  };

  return (
    <div>
      <Switch>
        <Route path="/post-recipe">
          <PostRecipe currentUser={currentUser} handleCreate={handleCreate} />
        </Route>
        <Route path="/recipes/:id/update">
          <EditRecipe currentUser={currentUser} handleUpdate={handleUpdate} />
        </Route>
        <Route path="/recipes/:id">
          <RecipeDetail currentUser={currentUser} recipes={recipes} handleDelete={handleDelete} />
        </Route>
        <Route path="/recipes">
          <Recipes recipes={recipes} />
        </Route>
      </Switch>
    </div>
  );
}
