import "./Landing.css";
import { Link } from "react-router-dom";
import React from 'react';

export default function Landing() {
  return (
    <main>
      <Link to="/recipes">
        <div className="landing-content">
          <img className="logo" src="http://i.imgur.com/LaPp5S9.png"
            alt="logo"
          />
          <h3><span>S</span>WEET <span>S</span>AVORY <span>L</span>IBATIONS</h3>
          <p>Here, at The Foodie's Find, we cut the fat. Whatr does that mean?
            We cut out the long novel-like descriptions just t</p>
        </div>
        <h3>Landing Page</h3>
        <div className="landing-img">
          <img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="kneading dough"
          />
        </div>
      </Link>
    </main>
   
  )
}
