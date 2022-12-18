import { useState, useEffect } from "react";
import { MealByID } from "./mealByID";

export function SetStarter() {
    const [dataStarter, setStarter] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter`)
            .then(response => response.json())
            .then((category) => {
                setLoading(false);
                setStarter(category.meals);
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
                <MealByID id={dataStarter[Math.floor(Math.random() * dataStarter.length)].idMeal}></MealByID>
            </div>
        </>

    );
}
