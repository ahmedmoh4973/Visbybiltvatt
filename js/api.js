const apiUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken";

export async function getMeals() {

    const response = await fetch(apiUrl);

    const data = await response.json();

    return data.meals;
}