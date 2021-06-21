##The Foodie's Find

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

_**The Foodie's Find** is a full stack app.  Incorporating Ruby on Rails for the back-end and React, JavaScript, and CSS on the front-end.  The app had CRUD capabilities in which the user, upon signing in/ signing up, can create, update, and delete recipes.

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

- Desktop / Tablet / Mobile

https://www.figma.com/file/bPOj7wsmeeFv1snToPGkhk/The-Foodie-s-Find



#### Component Tree

https://whimsical.com/the-foodie-s-find-component-tree-LWioSK9QaSEGYaMd4hSfPz@2Ux7TurymMo3c4j6dQpR


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
    |__apiCongig.js
    |__auth.js
    |__recipes.js
|__ screens/
    |__ EditRecipe/
        |__ EditRecipe.jsx
        |__ EditRecipe.css
    |__ Landing/
        |__ Landing.jsx
        |__ Landing.css
    |__ PostRecipe/
        |__ PostRecipe.jsx
        |__ PostRecipe.css
    |__ Recipes/
        |__ Recipes.jsx
        |__ Recipes.css
    |__ RecipeEdit/
        |__ RecipeEdit.jsx
        |__ RecipeEdit.css
    |__ SignIn/
        |__ SignIn.jsx
        |__ SignIn.css
    |__ SignUp/
        |__ SignUp.jsx
        |__ SignUp.css
      

```

#### Time Estimates

| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal Approval    |    MH    |     1 hrs      |      hrs      |      hrs    |
| Back-End Setup       |    H     |     1 hrs      |      hrs      |      hrs    |
| Back-End Auth        |    H     |    6.5 hrs     |      hrs      |      hrs    |
| Seeding the Database |    H     |    2.5 hrs     |      hrs      |      hrs    |
| Seeding the Database |    H     |    2.5 hrs     |      hrs      |      hrs    |
| Front-End Setup      |    H     |     1 hrs      |      hrs      |      hrs    |
| Front-End Setup      |    H     |     1 hrs      |      hrs      |      hrs    |
| Front-End Auth       |    H     |     5 hrs      |      hrs      |      hrs    |
| Front-End CRUD       |    H     |     5 hrs      |      hrs      |      hrs    |
| Building Remaining 
|  Components          |    H     |     6 hrs      |      hrs      |      hrs    |
| CSS                  |    H     |    10 hrs      |      hrs      |      hrs    |
| TOTAL                |          |     6 hrs      |      hrs      |      hrs    |


<br>

### Server (Back End)

#### ERD Model

https://app.diagrams.net/#G1VURrbqvj8uF0fdaRHs-p5umrYV3bJc6w
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
