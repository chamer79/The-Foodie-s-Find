import "./PostRecipe.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postRecipe } from "../../services/recipes";
// import Layout from "../../layouts/Layout.jsx";

export default function PostRecipe(props) {
  const [recipeItem, setRecipeItem] = useState(null);
  const [categoryId, setCategoryId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    prep_time: "",
    baking_cooking_time: "",
    servings: "",
    ingredients: "",
    directions: "",
    img_url: "",
    category_id: "",
  });

  const {
    name,
    prep_time,
    baking_cooking_time,
    servings,
    ingredients,
    directions,
    img_url,
  } = formData;

  const { categories, handleCreate } = props;
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipeItem = await postRecipe(id, categoryId);
    setRecipeItem(recipeItem);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    // <Layout>
    <main className="post-edit-img">
      <div></div>
      <div className="post-edit-container">
          <form
            className="post-edit-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleCreate(formData);
            }}
          >
        <form  onSubmit={handleSubmit}>
          <select className="drop-down"
            name="category-id"
            defaultValue="default"
            onChange={handleChange}
          >
            <option disabled value="default">
              Select a Category
            </option>
            {categories?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </form>
          <input
            className="recipe-name"
            type="text"
            name="name"
            value={name}
            placeholder="Recipe Name:"
            onChange={handleChange}
          />
            <input
              className="img-url"
              type="text"
              name="img_url"
              value={img_url}
              placeholder="Image URL:"
              onChange={handleChange}
            />
          <input
            className="prep-time"
            type="text"
            name="prep_time"
            value={prep_time}
            placeholder="Prep Time:"
            onChange={handleChange}
          />
          <input
            className="bake-cook-time"
            type="text"
            name="baking_cooking_time"
            value={baking_cooking_time}
            placeholder="Baking/Cooking Time:"
            onChange={handleChange}
          />
          <input
            className="servings"
            type="text"
            name="servings"
            value={servings}
            placeholder="Servings:"
            onChange={handleChange}
          />
          <textarea
            className="ingredients"
            rows={10}
            columns={70}
            name="ingredients"
            value={ingredients}
            placeholder="Ingredients:"
            onChange={handleChange}
          />
          <textarea
            className="directions"
            rows={10}
            columns={70}
            name="directions"
            value={directions}
            placeholder="Directions:"
            onChange={handleChange}
          />
          <button className="post-edit-button">Submit</button>
        </form>
      </div>
      </main>
      // </Layout>
  );
}
