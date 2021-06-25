import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="recipe-card">
      <Link className="card" to={`/recipes/${props._id}`}>
        <img
          className="card-img"
          src={props.img_URL}
          alt={props.name}
        />
        <div className="card-name-container">
          <p className="card-name">{props.name}</p>
        </div>
      </Link>
    </div>
  )
}
