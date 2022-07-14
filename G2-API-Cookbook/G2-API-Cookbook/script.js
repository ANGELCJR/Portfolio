function recipe(ingredients) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '656357cbc3msh3aaadc8a3785d97p12888djsnef7203d31eca',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=' + ingredients, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

