// import "./RecipeDetail.css";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getOneRecipe } from "../services/foods";

// export default function RecipeDetail(props) {
//   const [recipeItem, setRecipeItem] = useState(null);
//   const [recipeId, setRecipeId] = useState("");
//   const { id } = useParams();
  
//   useEffect(() => {
//     const fetchRecipeItem = async () => {
//       const recipeData = await getOneFood(id);
//       setRecipeItem(recipeData);
//     };
//     fetchRecipeItem();
//   }, [id]);

//   return (
//     <div className="receipe-card-container">
//       <h3>Recipe Detail Page</h3>
  
//       <div className="img-container">
//         <img className="recipe-img" scr={} />
//       </div>

//     </div>
//   )
// }
