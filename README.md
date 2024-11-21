# The Gyro Maker 3000

An interactive web game where you get to play chef and build the gyro of your dreams! Choose from a tasty selection of ingredients or create your own custom additions, then drag and drop them onto your pita masterpiece. Watch the calorie count add up in real-time as you stack each delicious layer. Can you create the ultimate balanced gyro?

## Goals
- **Interactive Gameplay**: Enable an intuitive drag-and-drop interface that encourages users to experiment.
- **Nutritional Awareness**: Display real-time calorie updates as ingredients are added, seamlessly blending health education into the game.
- **Customized Ingredients**: Provide a flexible menu with preset ingredients and the option to add new ones, allowing users to craft unique, personalized gyro recipes.

## How to Play

To use this application, you must run the local database and start a live server to interact with the website.
1. Run the local database server:
   ```sh
   json-server --watch db.json
2. Run the live server:
   ```sh
   live-server

## Tech Stack
- **Frontend**: JavaScript, HTML, CSS for interactive gameplay and user interface.
- **Backend**: JSON server for local ingredient storage and retrieval.

## Core Functionality
- **Event Listeners**: JavaScript handles click, submit, hover, and drag/drop events for smooth interactivity.
- **Functions**:
  - `addToIngredientMenu()`: Adds an ingredient to the menu with drag-and-drop enabled.
  - `displayIngredientDetails()`: Shows ingredient details on mouseover.
  - `displayGyroCalories()`: Calculates and displays the total calories of the assembled gyro.
  - `displayIngredients()`: Fetches and displays ingredients from the local database.

## Features
- **Ingredient Selection & Customization**: Users can select from preset ingredients or use the form to submit new ingredients to the menu.
- **Calorie Calculator**: Click "Complete Gyro" to display the total calorie count once your masterpiece is ready.
- **Interactive Ingredient Details**: Hover over any ingredient to instantly view details such as name, ingredient type, and calories.
- **Drag-and-Drop Assembly**: Move ingredients from the menu to pita bread or remove them with a simple drag-and-drop motion.

## How to use the webpage

- **Viewing Ingredients**: When the page first loads, you'll see a selection of ingredient images. Hover over an image to view the ingredient's details, including name, type, and calories.
  
- **Adding Your Own New Ingredients**: To add a new ingredient, fill out the provided form with the ingredient's details and click 'Submit'. The new ingredient will be added to the menu.
  
- **Managing Ingredients**: You can drag an ingredient from the menu to the starter plate or vice versa to put the ingredient back in the menu.

- **Calculating Total Calories**: Click the 'Complete Gyro' button to calculate and display the total calories of the ingredients on the starter plate, including the calories of the pita bread.
