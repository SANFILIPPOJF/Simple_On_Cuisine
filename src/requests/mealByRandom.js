import { useState, useEffect } from "react";
import { AffichageRecette } from "../components/affichageRecette";

export function MealByRandom() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then((randomMeal) => {
                console.log(randomMeal.meals[0].strMeal);
                setLoading(false);
                setData(randomMeal.meals);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);
    if (loading){
        return (<p>Loading...</p>)
    }
    return (
        <AffichageRecette mealArray={data}></AffichageRecette>
    );
}