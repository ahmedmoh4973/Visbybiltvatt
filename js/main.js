import { getMeals } from "./api.js";

const button = document.getElementById("loadMeals");

const result = document.getElementById("mealResults");

button.addEventListener("click", loadMeals);

async function loadMeals() {

    const meals = await getMeals();

        for (let i = 0; i < 6; i++) {

            const meal = meals[i];
            const card = document.createElement("div");
            card.classList.add("meal-card");

            const title = document.createElement("h3");
            title.textContent = meal.strMeal;

            const image = document.createElement("img");
            image.src = meal.strMealThumb;
            image.alt = meal.strMeal;

            card.appendChild(image);
            card.appendChild(title);
            result.appendChild(card);
        }

}