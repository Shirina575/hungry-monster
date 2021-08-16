const errorMessage = document.getElementById('error-message');
const meals = document.getElementById('show-meals');
const findMeal = () => {
    let input = document.getElementById('input').value;
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
    if(input === ''){
        errorMessage.innerHTML = `<h3>You didn't search anything!!!`;
    }else{
        fetch(api)
        .then(res => res.json())
        .then(data => showMeal(data.meals)
        )
    }

}
const showMeal = input => {
    console.log(input);
    if(input === null){
        errorMessage.style.display = 'none';
        meals.innerHTML = `<h3>No Meal Found!!!`;
    }else{
        errorMessage.style.display = 'none';
        meals.innerHTML = ``;
        input.forEach(meal => {
            const div = document.createElement('div');
            div.setAttribute('class', 'each-meal')
            div.innerHTML = `<img class = "mealThumb" src = "${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>`
            
            meals.appendChild(div)
        });
    }
}