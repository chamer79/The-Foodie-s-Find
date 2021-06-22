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
- Rendedr data from Ruby on Rails API in designated components.    <br>
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

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | An open source front-end JavaScript library to build UI components. |
|   React Router   | A library for navigatig through components in React. |
|       CSS        | A style sheet language that is used to style the font end of an app / site. |
|  Ruby on Rails   | A server side application that has a Model View Controller framework. |
|    PostgreSQL    | An open source relational database management system.|

<br>

### Client (Front End)

#### Wireframes

- Desktop / Tablet / Mobile

https://www.figma.com/file/bPOj7wsmeeFv1snToPGkhk/The-Foodie-s-Find

![image](https://user-images.githubusercontent.com/59977555/122933829-fcefbb00-d33c-11eb-99e3-ec9c1e7b9a0b.png)

![image](https://user-images.githubusercontent.com/59977555/122934058-2dcff000-d33d-11eb-8e89-6adb04cc39dc.png)

![image](https://user-images.githubusercontent.com/59977555/122934264-61127f00-d33d-11eb-95da-7a7fc5f680d5.png)




#### Component Tree

https://whimsical.com/the-foodie-s-find-component-tree-LWioSK9QaSEGYaMd4hSfPz@2Ux7TurymMo3c4j6dQpR

![image](https://user-images.githubusercontent.com/59977555/122933111-55728880-d33c-11eb-9dad-7b471ec5588c.png)



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

| Task                       | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------       | :------: | :------------: | :-----------: | :---------: |
| Proposal Approval          |    MH    |     1 hrs      |      hrs      |      hrs    |
| Back-End Model Setup       |    H     |     3 hrs      |      hrs      |      hrs    |
| Back-End Auth              |    H     |     4 hrs      |      hrs      |      hrs    |
| Set & Clean Up Controllers |    H     |     4 hrs      |      hrs      |      hrs    |
| Seeding the Database       |    H     |     4 hrs      |      hrs      |      hrs    |
| CORS Set Up                |    H     |    .15 hrs     |      hrs      |      hrs    |
| Front-End Inital Setup     |    H     |     1 hrs      |      hrs      |      hrs    |
| Front-End Auth             |    H     |     6 hrs      |      hrs      |      hrs    |
| Front-End CRUD             |    H     |     6 hrs      |      hrs      |      hrs    |
| Build Remaining Components |    H     |     6 hrs      |      hrs      |      hrs    |
| CSS                        |    H     |    11 hrs      |      hrs      |      hrs    |
| TOTAL                      |          |   46.15 hrs    |      hrs      |      hrs    |


<br>

### Server (Back End)

#### ERD Model

https://app.diagrams.net/#G1VURrbqvj8uF0fdaRHs-p5umrYV3bJc6w
<br>
![image](https://user-images.githubusercontent.com/59977555/122933420-a4b8b900-d33c-11eb-9910-4998e181ffe9.png)


***

## Post-MVP

-Incoproate Testing In Both the Front & Back-End <br>
-Sort By Option <br>
-Search Bar <br>
-Like/Dislike Rating <br>
-Comment Section Incorporated Into The Recipe Detail Page <br>

***

## Code Showcase

TBD

## Code Issues & Resolutions

TBD
