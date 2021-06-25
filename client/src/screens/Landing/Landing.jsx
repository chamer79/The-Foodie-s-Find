import { Link } from "react-router-dom";
import React from 'react';

export default function Landing() {
  return (
    <div>
      <Link to="/recipes">
        <h3>Landing Page</h3>
      </Link>

    </div>
  )
}
