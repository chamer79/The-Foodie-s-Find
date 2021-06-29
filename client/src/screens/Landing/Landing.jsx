import "./Landing.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Landing() {
  return (
    <main>
      <div className="landing-page">
        <div className="landing-content">
          <Link to="/recipes">
            <div className="logo">
              <img src="http://i.imgur.com/LaPp5S9.png" alt="logo" />
            </div>
          </Link>
          <h3 className="branding-slogan">
            <span className="branding-word">S</span>WEET |
            <span className="branding-word"> S</span>AVORY |{" "}
            <span className="branding-word"> L</span>IBATIONS
          </h3>
          <div className="intro-container">
            <p className="intro">
              Welcome to The Foodie's Find! We are a community where foodies can
              share some of their favorite recipes without having to sift
              through a long winded novel. Meaning, we cut out the fat!
            </p>
          </div>
        </div>
        <Link to="/recipes">
          <div className="landing-img">
            <img
              className="bread"
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="kneading dough"
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
