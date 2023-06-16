# MakanApa - WhatToEat
Bangkit Academy Capstone Project - C23-PS417
Created By :
(ML) M335DKX4214 - Mikael Aloysius Suselo - Universitas Sanata Dharma

(ML) M335DSX1298 - Herlambang Agung sukmono - Universitas Sanata Dharma

(MD) A223DSX1126 - Valentino Sas Henry - Universitas Kristen Immanuel

(MD) A335DSX1733  - Vincentius Fredy Agung - Universitas Sanata Dharma

(CC) C295DKX4102 - Hizkia Gerald Garibaldi - Universitas Padjadjaran

(CC) C132DSX0895  - Helmi Fachry Adamy - Universitas Airlangga

## Cloud Computing (CC)
This API is Created by :

(CC) C295DKX4102 - Hizkia Gerald Garibaldi - Universitas Padjadjaran

(CC) C132DSX0895  - Helmi Fachry Adamy - Universitas Airlangga

This API is used to handle Authentication and handle the Back-end such as searching and viewing recipe

API is developed using **NodeJS v14.17.1** and **NPM v6.14.13**

Database used for this App is **MongoDB**

## Main API Documentation
### /auth/register
Method (POST)
Used to register now user to be able so they can use the app

Post Body JSON format :
{
    
    "username" : "enter your username",
    
    "email" : "enter your email",
    
    "password" : "enter your password"
    
}

### /auth/login
Method (POST)
Used for login

Post Body JSON format :
{

    "username" : "enter your username",
    "password" : "enter your password"
    
}

### /recipe/createRecipe
Method (POST)
Used to create recipe and upload it to the server

Post Body JSON format :
{

      "menu" : "enter the title of the food name",
      cooking_time : "enter cooking time",
      kcal : "enter how much the calories in the food",
      category : "enter the food categories",
      ingredient : "enter the ingredient",
      recipe : "enter how to make the food"
      
}

### /recipe/search/:ingredient
Method (POST)
used to search the recipe using food ingredient as a search query

to use the API
replace ":ingredient" at the end of the end point with food ingredient 

### /recipe/:id
Method (GET)
Used to get recipe data

to use the API
replace ":id" at the end of the end point with recipe id 
