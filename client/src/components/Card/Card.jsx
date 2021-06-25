import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="recipe-card">
      <Link className="card" to={`/recipes/${props.id}`}>
        <img
          className="card-img"
          src="https://files.slack.com/files-pri/T0351JZQ0-F026DCM1UUR/img_1222.jpg"
          alt={props.name}
        />
        <div className="card-name-container">
          <p className="card-name">{props.name}</p>
        </div>
      </Link>
    </div>
  )
}
