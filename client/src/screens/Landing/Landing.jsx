import "./Landing.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Landing() {
  return (
    <main>
      <Link to="/recipes">
        <div className="landing-content">
          <div className="logo"></div>
          {/* <img  src="http://i.imgur.com/LaPp5S9.png"
            alt="logo"
          /> */}
          <div className="branding-container">
            <ul className="branding-list">
              <li className="branding-item">
                <h3>
                  <span>S</span>WEET
                </h3>
              </li>
              <li className="branding-item">
                <h3>
                  <span>S</span>AVORY
                </h3>
              </li>
              <li className="branding-item">
                <h3>
                  <span>L</span>IBATIONS
                </h3>
              </li>
            </ul>
          </div>
          {/* <h3><span>S</span>WEET <span>S</span>AVORY <span>L</span>IBATIONS</h3> */}
          <div className="intro-container">
            <p className="intro">
              Welcome to The Foodie's Find! We are a community where foodies can
              share some of their favorite recipes without having to sift
              through a long winded novel. Meaning, we cut out the fat!
            </p>
          </div>
        </div>
        <div className="landing-img">
          {/* <img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="kneading dough"
          /> */}
        </div>
      </Link>
    </main>
  );
}
