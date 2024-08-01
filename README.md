# The Gyro Maker 3000

This is an interactive gyro maker game where users can add ingredients to a menu or select the existing ones, add them to pita bread through drag-and-drop functionality, and view the total calories of their gyro meal.


## Usage

To use this application, you must run the local database and start a live server to interact with the website.

```Javascript
# Run the local database
json-server --watch db.json

# Run the live server
live-server
```

## Description
The following JavaScript was used to give the website functionality:

```Javascript
# eventListeners
'click' // Used to activate functionality on button clicks, such as completing the gyro.
'submit' // Used to handle the submission of new ingredient forms.
'mouseover' // Used to display ingredient details when hovering over an ingredient image.
'dragstart', 'dragover', 'drop' // Used to handle drag-and-drop functionality for moving ingredients between the menu and pita bread.
```

```Javascript
# functions
addToIngredientMenu() // Adds an ingredient image to the menu and sets up drag-and-drop functionality.
displayIngredientDetails() // Displays the details of an ingredient when hovered over.
displayGyroCalories() // Calculates and displays the total calories of ingredients in the starter plate.
addCompleteButtonListener() // Adds a click event listener to the complete button to show total calorie count.
addSubmitListener() // Handles the submission of new ingredients via a form.
displayIngredients() // Fetches ingredients from the local database and displays them in the menu.
```

## How to use the webpage

Viewing Ingredients: When the page first loads, you'll see a selection of ingredient images. Hover over an image to view the ingredient's details, including name, type, and calories.

Adding Your Own New Ingredients: To add a new ingredient, fill out the provided form with the ingredient's details and click 'Submit'. The new ingredient will be added to the menu.

Managing Ingredients: You can drag ingredients from the menu to the starter plate or vice versa to put the ingredient back in the menu.

Calculating Total Calories: Click the 'Complete Gyro' button to calculate and display the total calories of the ingredients on the starter plate, including the calories of the pita bread.