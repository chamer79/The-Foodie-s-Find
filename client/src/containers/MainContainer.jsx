import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import Landing from "../screens/Landing/Landing.jsx";
import Recipes from "../screens/Recipes/Recipes.jsx";
import RecipeDetail from "../screens/RecipeDetail/RecipeDetail.jsx";
import PostRecipe from "../screens/PostRecipe/PostRecipe.jsx";
import EditRecipe from "../screens/EditRecipe/EditRecipe.jsx";

import { deleteRecipe, getAllRecipes, postRecipe, putRecipe } from "../services/recipes";
import { verifyUser } from "../services/auth";

export default function MainContainer() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeList = await getAllRecipes();
      setRecipes(recipeList);
    }
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
  }

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id))
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing user={user} />
        </Route>
        <Route exact path="/recipes">
          <Recipes recipes={recipes}/>
        </Route>
        <Route exact path="/recipes/:id">
          <RecipeDetail recipes={recipes} />
        </Route>
        <Route exact path="/recipes/post">
          {user ? <PostRecipe user={user} handleCreate={handleCreate} /> : <Redirect to="/signup" />}
        </Route>
        <Route exact path="/recipes/:id/update">
          {user ? <EditRecipe user={user} handleUpdate={handleUpdate} /> : <Redirect to="/signup" />}
        </Route>
        <Route exact path="/recipes/:id">
          <Recipes recipes={recipes} handleDelete={handleDelete} />
        </Route>
      </Switch>
    </div>
  )
}
