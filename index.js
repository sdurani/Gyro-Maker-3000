// GLOBAL SCOPE VARIABLES:
const starterPlate = document.getElementById('starter-plate')


// DISPLAY INGREDIENT MENU ITEMS:
function addToIngredientMenu(ingredient) {
    const ingredientMenu = document.getElementById('ingredient-menu')
    const imgElement = document.createElement('img')
    imgElement.src = ingredient.image
    imgElement.title = `${ingredient.name}`
    imgElement.setAttribute('class', 'ingredient-menu-image')
    imgElement.setAttribute('draggable', 'true')
    imgElement.setAttribute('calories', ingredient.calories);
    
    ingredientMenu.appendChild(imgElement)
    
    // MOUSEOVER EVENT LISTENER:
    imgElement.addEventListener('mouseover', () => displayIngredientDetails(ingredient))

    // DRAG AND DROP EVENT LISTENERS:
    let images = document.getElementsByClassName('ingredient-menu-image')
    for(let image of images){
        imgElement.addEventListener("dragstart", (e) => {
            let selected = e.target

            // FROM INGREDIENT MENU -->
            starterPlate.addEventListener("dragover", (e)=> {
                e.preventDefault()
            })
            starterPlate.addEventListener("drop", (e) =>{
                starterPlate.appendChild(selected)
                selected = null
            })

            // FROM STARTER PLATE -->
            ingredientMenu.addEventListener("dragover", (e)=> {
                e.preventDefault()
            })
            ingredientMenu.addEventListener("drop", (e) =>{
                ingredientMenu.appendChild(selected)
                selected = null
            })
        })
    }
}


// DISPLAY SELECTED INGREDIENT DETAILS (NAME, TYPE, AND CALORIES):
function displayIngredientDetails(ingredient) {
     // select ingredient details div element:
     const ingredientDetailDiv = document.querySelector("#ingredient-detail")
    
     // display ingredient name:
     const ingredientDetailNameElement = document.querySelector(".ingredient-name")
     ingredientDetailNameElement.textContent = `Ingredient: ${ingredient.name}`
 
     // display ingredient type:
     const ingredientDetailTypeElement = document.querySelector(".ingredient-type")
     ingredientDetailTypeElement.textContent = `Type: ${ingredient.type}`
 
     // display ingredient calories:
     const ingredientDetailCaloriesElement = document.querySelector(".ingredient-calories")
     ingredientDetailCaloriesElement.textContent = `Calories: ${ingredient.calories}`
 
 
     // append the ingredient properties to the detail div box:
     ingredientDetailDiv.appendChild(ingredientDetailNameElement)
     ingredientDetailDiv.appendChild(ingredientDetailTypeElement)
     ingredientDetailDiv.appendChild(ingredientDetailCaloriesElement)
}


// DISPLAY TOTAL GYRO CALORIES AFTER GYRO IS COMPLETED:
function displayGyroCalories() {
    const gyroImages = starterPlate.querySelectorAll('img')
    let totalCalories = 170
    
    gyroImages.forEach(gyroImage => {
        const calories = parseInt(gyroImage.getAttribute('calories'), 10)
        totalCalories += calories
    })

    const gyroCaloriesElements = document.getElementsByClassName('gyro-calories');
    [...gyroCaloriesElements].forEach(gyroCaloriesElement => {
        gyroCaloriesElement.textContent = `Total Gyro Calories: ${totalCalories}`
    })

    const newGyroDetailCard = document.getElementById('new-gyro-detail');
    // make the card visible:
    newGyroDetailCard.style.display = 'block'; 
}

// (CLICK EVENT LISTENER) GYRO IS COMPLETED BUTTON:
function addCompleteButtonListener() {
    const completeGyroButton = document.getElementById('complete-button')
    completeGyroButton.addEventListener('click', displayGyroCalories)
}

// (SUBMIT FORM LISTENER) ALLOW USER TO SUBMIT A NEW INGREDIENT AND COLLECT USER INPUT:
const addSubmitListener = () => {
    const addNewIngredientForm = document.getElementById('new-ingredient-form')
    addNewIngredientForm.addEventListener('submit', (event) => {
        event.preventDefault() 
      
      // collect/store the data from the user's input to variables
      const newName = document.getElementById('new-ingredient-name')
      const newType = document.getElementById('new-ingredient-type')
      const newImage = document.getElementById('new-ingredient-image')
      const newCalories = document.getElementById('new-ingredient-calories')

      // create a new object to have the same ingredient array keys pairs
      const newIngredient = {
        name: newName.value,
        calories: parseInt(newCalories.value, 10),
        image: newImage.value,
        type: newType.value,
      }

      // add the new ingredient input to the menu using the callback function
      addToIngredientMenu(newIngredient)
      // use .reset() function to clear the input within the form after submitted
      addNewIngredientForm.reset() 
    })
}



function displayIngredients() {
    fetch ('http://localhost:3000/ingredients') // making a GET request
    .then(response => response.json()) 
    .then(ingredients => ingredients.forEach(ingredient => addToIngredientMenu(ingredient))) 
}


displayIngredients()
addSubmitListener()
addCompleteButtonListener()