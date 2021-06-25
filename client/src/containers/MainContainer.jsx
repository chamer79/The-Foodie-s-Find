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
// import { verifyUser } from "../services/auth";

export default function MainContainer(props) {
  const [recipes, setRecipes] = useState([]);
  // const [cser, setUser] = useState(null);
  const { currentUser } = props
  console.log("currentuser", currentUser)
  const history = useHistory();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await verifyUser();
  //     user ? setUser(user) : setUser(null);
  //   };
  //   fetchUser();
  // }, []);

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
          {/* {currentUser ? ( */}
            <PostRecipe user={currentUser} handleCreate={handleCreate} />
          {/* ) : (
            <Redirect to="/signup" />
          )} */}
        </Route>
        <Route path="/recipes/:id/update">
          {/* {currentUser ? ( */}
            <EditRecipe user={currentUser} handleUpdate={handleUpdate} />
          {/* ) : (
            <Redirect to="/signup" />
          )} */}
        </Route>
        <Route path="/recipes/:id">
          <RecipeDetail recipes={recipes} handleDelete={handleDelete} />
        </Route>
       
          <Route path="/recipes">
            <Recipes recipes={recipes} />
          </Route>
      </Switch>
    </div>
  );
}
