import "./EditRecipe.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { putRecipe } from "../../services/recipes";

export default function EditRecipe(props) {
  const [recipeItem, setRecipeItem] = useState();
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
    category_id,
  } = formData;

  const { recipes, categories, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefilledFormData = () => {
      const singleRecipe = recipes?.find((recipe) => recipe?.id === Number(id));
      setFormData({
        name: singleRecipe?.name,
        prep_time: singleRecipe?.prep_time,
        baking_cooking_time: singleRecipe?.baking_cooking_time,
        servings: singleRecipe?.servings,
        ingredients: singleRecipe?.ingredients,
        directions: singleRecipe?.directions,
        img_url: singleRecipe?.img_url,
        category_id: singleRecipe?.category_id,
      });
    };
    if (recipes?.length) {
      prefilledFormData();
    }
  }, [recipes]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipeItem = await putRecipe(id, categoryId);
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
    <main className="post-edit-img">
      <div className="post-edit-container">
      <form
        className="post-edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <form onSubmit={handleSubmit}>
          <select className="drop-down"
            name="category-id"
            defaultValue={`${category_id}`} onChange={handleChange}>
            <option disabled value="default">
              Select a Category
            </option>
            {categories?.map((category) => (
              <option value={category?.id} key={category?.id}>
                {category?.name}
              </option>
            ))}
          </select>
        </form>
          <input
            className="recipe-name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            className="prep-time"
            type="text"
            name="prep_time"
            value={prep_time}
            onChange={handleChange}
          />
            <input
              className="img-url"
              type="text"
              name="img_url"
              value={img_url}
              onChange={handleChange}
            />
          <input
            className="bake-cook-time"
            type="text"
            name="baking_cooking_time"
            value={baking_cooking_time}
            onChange={handleChange}
          />
          <input
            className="servings"
            type="text"
            name="servings"
            value={servings}
            onChange={handleChange}
          />
          <textarea
            className="ingredients"
            rows={10}
            columns={70}
            name="ingredients"
            value={ingredients}
            onChange={handleChange}
          />
          <textarea
            className="directions"
            rows={10}
            columns={70}
            name="directions"
            value={directions}
            onChange={handleChange}
          />
          <button className="post-edit-button">Submit</button>
        </form>
      </div>
    </main>
  );
}
