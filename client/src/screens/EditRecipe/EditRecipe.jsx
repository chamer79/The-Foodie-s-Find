import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditRecipe(props) {
  // const { update, user } = props;
  // console.log("update", update);
  const [formData, setFormData] = useState({
    name: "",
    prep_time: "",
    baking_cooking_time: "",
    servings: "",
    ingredients: "",
    directions: "",
    img_url: "",
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
  const { recipes, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefilledFormData = () => {
      const singleRecipe = recipes.find((recipe) => recipe.id === Number(id));
      setFormData({
        name: singleRecipe.name,
        prep_time: singleRecipe.prep_time,
        baking_cooking_time: singleRecipe.baking_cooking_time,
        servings: singleRecipe.servings,
        ingredients: singleRecipe.ingredients,
        directions: singleRecipe.directions,
        img_url: singleRecipe.img_url,
      });
    };
    if (recipes?.length) {
      prefilledFormData();
    }
  }, [recipes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="post-edit-container">
      <form
        className="post-edit-form"
        onSumbit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <input className="recipe-name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange} />
        <input className="prep-time"
          type="text"
          name="prep_time"
          value={prep_time}
          onChange={handleChange}
        />
        <input className="bake-cook-time"
          type="text"
          name="baking_cooking_time"
          value={baking_cooking_time}
          onChange={handleChange}
        />
        <input clasName="servings"
          type="text"
          name="servings"
          value={servings}
          onChange={handleChange}
        />
        <input className="ingredients"
          type="text"
          name="ingredients"
          value={ingredients}
          onChange={handleChange}
        />
        <input className="directions"
          type="text"
          name="directions"
          value={directions}
          onChange={handleChange}
        />
        <input className="img_url"
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
        />
        <button className="edit-post-button">Submit</button>
      </form>
    </div>
  );
}
