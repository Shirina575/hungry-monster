const errorMessage = document.getElementById('error-message');
const meals = document.getElementById('show-meals');
const mealIngredients = document.getElementById('ingredients');
const findMeal = () => {
    let input = document.getElementById('input').value;
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
    if(input === ''){
        mealIngredients.style.display = 'none';
        meals.style.display = 'none';
        errorMessage.innerHTML = `<h3>You didn't search anything!!!`;
    }else{
        fetch(api)
        .then(res => res.json())
        .then(data => showMeal(data.meals)
        )
    }

}
const showMeal = input => {
    errorMessage.style.display = 'none';
    mealIngredients.style.display = 'none';
    if(input === null){
        meals.innerHTML = `<h3>No Meal Found!!!`;
    }else{
        meals.innerHTML = ``;
        input.forEach(meal => {
            const mealId = meal.idMeal;
            const div = document.createElement('div');
            div.setAttribute('class', 'each-meal');
            div.innerHTML = `
            <div onclick = "ingredients(${mealId})">
            <img class = "mealThumb" src = "${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            </div>`;
            meals.appendChild(div);
        });
    }
}

const ingredients = id =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => showIngredients(data.meals));
}

const showIngredients = ingredient => {
    mealIngredients.style.display = 'block';
    mealIngredients.innerHTML = `
        <img id="thumbnail" src="${ingredient[0].strMealThumb}" alt="">
        <h1 id="meal-name">${ingredient[0].strMeal}</h1>
        <h4>Ingredients</h4>
        <ul id="ingredients-list"></ul>
        `;
        for (let i = 1; i <= 20; i++) {
            const mealIngredientsList = ingredient[0][`strIngredient${i}`];
            const ingredientsMeasurement = ingredient[0][`strMeasure${i}`];
            const li = document.createElement('li');
            li.innerHTML = ``;
            li.innerHTML = `${ingredientsMeasurement} ${mealIngredientsList}`;
            const ul = document.getElementById('ingredients-list');
            if(mealIngredientsList){
                ul.appendChild(li);
            }

        }

}