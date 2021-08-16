const findMeal = () => {
    let input = document.getElementById('input').value;
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
    if(input === ''){
        document.getElementById('error-message').innerHTML = `<h3>You didn't search anything!!!`;
    }else{
        fetch(api)
        .then(res => res.json())
        .then(data => showMeal(data.meals)
        )
    }

}

// const showMeal = input => {
//     console.log(input);
//     input.forEach(meal => {
//         const div = document.createElement('div');
//         div.setAttribute('class', 'each-meal')
//         div.innerHTML = `<img class = "mealThumb" src = "${meal.strMealThumb}">
//         <h3>${meal.strMeal}</h3>`
        
//         document.getElementById('show-meals').appendChild(div)
//     });
// }

const showMeal = input => {
    console.log(input);
    const meals = document.getElementById('show-meals');
    if(input === null){
        meals.innerHTML = `<h3>No Meal Found!!!`;
    }else{
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