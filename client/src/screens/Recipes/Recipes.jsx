import "./Recipes.css"
import { Link } from "react-router-dom";
import React from 'react'

export default function Recipes() {
  return (
    <div>
      <Link to="recipes/1">
        <h3>Recipes Page</h3>
      </Link> 
    </div>
  )
}
