import "./Landing.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Landing() {
  return (
    <div className="landing-page">
      <div clsaaName="landing-container">
      <div className="split landing-content">
        <Link className="landing-link" to="/recipes">
          <div className="logo-box">
            <img className="landing-logo" src="http://i.imgur.com/LaPp5S9.png" alt="logo" />
            {/* <h1 className="landing-title">The FOODIE'S FIND</h1> */}
          </div>

          <h2 className="branding-slogan">
            <span className="branding-word">S</span>WEET <span className="word-divider">|</span>
            <span className="branding-word"> S</span>AVORY <span className="word-divider">|</span>{" "}
            <span className="branding-word"> L</span>IBATIONS
          </h2>
          <div className="intro-container">
            <p className="intro">
              Welcome to The Foodie's Find! We are a community where foodies can
              come and share some of their favorite recipes without having to sift
              through a long winded novel. Meaning, we cut out the fat!
            </p>
          </div>
        </Link>
      </div>
      <Link to="/recipes">
        <div className="split landing-img">
          <img
            className="bread"
            src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="kneading dough"
          />
        </div>
        </Link>
        </div>
    </div>
  );
}