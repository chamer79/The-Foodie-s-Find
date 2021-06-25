import { useState } from "react";

export default function PostRecipe(props) {
  console.log(props)
  const [formData, setFormData] = useState({
    name: "",
    prep_time: "",
    baking_cooking_time: "",
    servings: "",
    ingredients: "",
    directions: "",
    img_url: "",
  })

  const {
    name,
    prep_time,
    baking_cooking_time,
    servings,
    ingredients,
    directions,
    img_url } = formData;
  const { handleCreate } = props;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  return (
    <div>
      <h3>Post Page</h3>
      <div className="post-edit-container">
        <form
        className="post-edit-form"
        onSumbit={(e) => {
          e.preventDefault();
          handleCreate(formData);
          }}
        >
          <input className="recipe-name"
          type="text"
          name="name"
          value={name}
          placeholder="Recipe Name:"  
          onChange={handleChange} />
        <input className="prep-time"
          type="text"
          name="prep_time"
          value={prep_time}
          placeholder="Prep Time:"
          onChange={handleChange}
        />
        <input className="bake-cook-time"
          type="text"
          name="baking_cooking_time"
          value={baking_cooking_time}
          placeholder="Baking/Cooking Time:"  
          onChange={handleChange}
        />
        <input clasName="servings"
          type="text"
          name="servings"
          value={servings}
          placeholder="Servings:"
          onChange={handleChange}
        />
        <input className="ingredients"
          type="text"
          name="ingredients"
          value={ingredients}
          placeholder="Ingredients:"  
          onChange={handleChange}
        />
        <input className="directions"
          type="text"
          name="directions"
          value={directions}
          placeholder="Directions:"  
          onChange={handleChange}
        />
        <input className="img_url"
          type="text"
          name="img_url"
          value={img_url}
          placeholder="Image URL:"  
          onChange={handleChange}
        />
        <button className="edit-post-button">Submit</button>

        </form>

      </div>
    </div>
  )
}
