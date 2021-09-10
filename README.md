# The Foodie's Find

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**The Foodie's Find** is a community app where foodies can share some of their favorite recipes without having to sift through a long winded novel. This full stack community app has Full CRUD capabilities in which the user can read recipes, and upon signing in/ signing up the user also has the choice to create, update, and/or delete recipes. The back-end of the app utilizes Ruby on Rails and PostgresSQL; while the fron-end utilizes React, JavaScript, and CSS.  

## MVP
- Thoroughly developed README.md    <br>

### Back-End:
- Build Ruby on Rails server.     <br>
- Build a database with at least 3 tables.     <br>
- Define models for database interaction through Rails.     <br>
- Full CRUD capability.  <br>
- Back-end authentication.

### Front-End:
- At least 8 seperate rendered components.    <br>
- Utilize state & props efficently.    <br>
- Utilize React Router for client side routing.
- Utilize functional or class React components.   <br>
- Full CRUD actions.    <br>
- CSS with Flexbox or Grid    <br>
- Responsive Design for three screens.    <br>

### Goals
- The back-end fully operational in 1 day. <br>
- The front-end fully operational within 2-3 days. <br>
- Spend 2 days on CSS. <br>
- On day 7, have a clean crisp tight fully operational (meaning no hiccups) app.

<br>

### Libraries and Dependencies

|   Technologies   |                Description                 |
| :--------------: | :----------------------------------------- |
|      React       | An open source front-end JavaScript library to build UI components. |
|   React Router   | A library for navigatig through components in React. |
|  Ruby on Rails   | A server side application that has a Model View Controller framework. |
|    PostgreSQL    | An open source relational database management system.|

<br>

### Client (Front End)

### Netlify Link

https://the-foodies-find.netlify.app/

#### Wireframes

- Desktop / Tablet / Mobile

https://www.figma.com/file/bPOj7wsmeeFv1snToPGkhk/The-Foodie-s-Find

![image](https://user-images.githubusercontent.com/59977555/122935811-a4212200-d33e-11eb-966d-03cb541981ac.png) <br>

![image](https://user-images.githubusercontent.com/59977555/122939376-8f925900-d341-11eb-9373-fdf45e7926da.png) <br>

![image](https://user-images.githubusercontent.com/59977555/122935937-c31fb400-d33e-11eb-8a6d-1b7a6b17f7d9.png)

#### Component Tree

https://whimsical.com/the-foodie-s-find-component-tree-LWioSK9QaSEGYaMd4hSfPz@2Ux7TurymMo3c4j6dQpR

![image](https://user-images.githubusercontent.com/59977555/122936472-2e698600-d33f-11eb-9f12-e35de18648d7.png)

#### Component Architecture

``` structure

src
|__ App.js
|__ components/
     |__ Card/
          |__Card.jsx
          |__Card.css
     |__ Recipe_Cards/
         |__Recipe_Card.jsx
         |__Recipe_Card.css 
|__ containers/  
    |__MainContainer.jsx   
    |__MainContainer.css
|__layouts/
    |__Layout.jsx
    |__Layout.css
|__ services/
    |__apiConfig.js
    |__auth.js
    |__recipes.js
|__ screens/ 
    |__ Landing/
        |__ Landing.jsx
        |__ Landing.css
    |__ Recipes/
        |__ Recipes.jsx
        |__ Recipes.css    
    |__ RecipeDetail/
        |__ RecipeDetail.jsx
        |__ RecipeDetail.css
    |__ PostRecipes/
        |__ PostRecipes.jsx
        |__ PostRecipes.css
    |__ EditRecipe/
        |__ EditRecipe.jsx
        |__ EditRecipe.css
    |__ Login/
        |__ Login.jsx
        |__ Login.css
    |__ SignUp/
        |__ SignUp.jsx
        |__ SignUp.css
      

```

#### Time Estimates

| Task                       | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------       | :------: | :------------: | :-----------: | :---------: |
| Proposal Approval          |    H     |     1 hrs      |     2.5 hrs   |    2.5 hrs  |
| Back-End Model Setup       |    H     |     3 hrs      |     2.5 hrs   |    2.5 hrs  |
| Back-End Auth & Testing    |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| Set & Clean Up Controllers |    H     |     4 hrs      |     1 hrs     |    1 hrs    |
| Seeding the Database       |    H     |     4 hrs      |    5.5 hrs    |   5.5 hrs   |
| CORS Set Up                |    H     |    .15 hrs     |    .05 hrs    |   .05 hrs   |
| Front-End Inital Setup     |    H     |     1 hrs      |    .15 hrs    |   .15 hrs   |
| Front-End Auth & Testing   |    H     |     6 hrs      |     5 hrs     |    5 hrs    |
| Front-End CRUD & Testing   |    H     |     6 hrs      |    10 hrs     |   10 hrs    |
| Build Remaining Components |    H     |     6 hrs      |    10 hrs     |  10 hrs     |
| CSS                        |    H     |    11 hrs      |   24 hrs      |   24 hrs    |
| TOTAL                      |          |   46.15 hrs    |   64.7 hrs    |  64.7 hrs   |


<br>

### Server (Back End)

#### ERD Model

https://app.diagrams.net/#G1VURrbqvj8uF0fdaRHs-p5umrYV3bJc6w
<br>
![image](https://user-images.githubusercontent.com/59977555/122994428-735cdf00-d376-11eb-920c-de9075d8e4fa.png)
***

## Post-MVP

-Incoproate Testing In Both the Front & Back-End <br>
-Sort By Option <br>
-Search Bar <br>
-Like/Dislike Rating <br>
-Comment Section Incorporated Into The Recipe Detail Page <br>

***

## Code Showcase

I wanted to have both the ingredients and directions to render with bullit point to help differentiate a new ingredient and/or direction step.

```
 <div className="recipe-ingredients">
            <ul>
              <p className="ingredient-tag">Ingredients:</p>
              {recipeItem?.ingredients.split("\n").map((ingredient) => (
                <li key={recipeItem?.ingredient}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="recipe-directions">
            <p className="direction-tag">Directions:</p>
            <ul>
              {recipeItem?.directions.split("\n").map((direction) => (
                <li key={recipeItem?.direction}>
                  {direction}
                </li>
              ))}
            </ul>
          </div>
        </div>
```

## Code Issues & Resolutions

- The MainContainer.jsx proved to be challenging for the mere fact that I am unfamiliar with the concept of raising state.  Throughout this project, I got a better understanding of raising state.  In saying that, I plan to incorporate raising state in my future projects to become more familiar and have a solid grasp on this particular concept.

-Found that CSS this time around was a bit more challenging than past projects.  Will need to solidify my CSS skill.
