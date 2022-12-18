import { useState, useEffect } from "react";
import { MealByID } from "./mealByID";

export function SetDessert() {
    const [dataPasta, SetPasta] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
            .then(response => response.json())
            .then((category) => {
                setLoading(false);
                SetPasta(category.meals);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });

    }, []);
    if (loading) {
        return (<p>Loading...</p>)
    }
    return (
        <>
            <div className="App">
                <MealByID id={dataPasta[Math.floor(Math.random() * dataPasta.length)].idMeal}></MealByID>
            </div>
        </>

    );
}