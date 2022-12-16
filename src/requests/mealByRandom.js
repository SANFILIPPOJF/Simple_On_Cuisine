import { useState, useEffect } from "react";
import { AffichageRecette } from "../components/affichageRecette";

export function MealByRandom() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    let randomFetch = () => {
        setLoading(true);
        setData(null);

        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then((randomMeal) => {
                setLoading(false);
                setData(randomMeal.meals);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }
    useEffect(() => {
        randomFetch();
    }, []);
    if (loading){
        return (<p>Loading...</p>)
    }
    return (
        <>
        <AffichageRecette mealArray={data}></AffichageRecette>

        <button onClick={randomFetch}>rejouer</button>
        </>
    );
}