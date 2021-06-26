import "./RecipeCards.css";
import Card from "../Card/Card.jsx";

export default function RecipeCards(props) {
  const { recipes } = props;

  
 const card = recipes?.map((recipe) => (
    <Card
      key={recipe?.id}
      id={recipe?.id}
      name={recipe?.name}
      img_url={recipe?.img_url}
      // prep_time={recipe?.prep_time}
      // baking_cooking_time={recipe?.baking_cooking_time}
      // servings={recipe?.servings}
      // ingredients={recipe?.ingredients}
      // directions={recipe?.directions}
    />
  ));

  return (
    <div className="recipe-cards">
      <div className="cards">{card} </div>
    </div>
  );
}
